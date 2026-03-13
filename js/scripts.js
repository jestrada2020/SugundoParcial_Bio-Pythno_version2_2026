// scripts.js — Lógica del Segundo Parcial de Shiny for Python
// Estilo: tema oscuro con selección por clic (igual que quiz-app-fina_v2l)

// ─── Estado ──────────────────────────────────────────────────────────────────
var currentUser = null;
var selections   = {};   // selections["q1"][1] = "shiny", etc.
var results      = {};
var verified     = {};
var TOTAL_QS     = 30;

var CATEGORIAS = [
  { id: "arrays",      name: "Arrays, Listas y Estructuras de Datos",   color: "#3B82F6", qs: [1,2,3,4,5,6,7,10] },
  { id: "condicional", name: "Condicionales y Operaciones Complejas",   color: "#8B5CF6", qs: [11,12,13,14,16,18,20] },
  { id: "tuplas",      name: "Tuplas, Diccionarios y Formato Avanzado", color: "#10B981", qs: [21,22,24,25,29,30] },
  { id: "matrices",    name: "Arrays Multidimensionales y Vectores",    color: "#F59E0B", qs: [32,35,37,38,39] },
  { id: "ciencias",    name: "Aplicaciones Científicas",                color: "#EF4444", qs: [42,43] },
  { id: "cadenas",     name: "Manipulación de Cadenas y Lógica",        color: "#06B6D4", qs: [47,49] },
];

// ─── Login ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.currentTarget);
    currentUser = {
      cedula:    fd.get("cedula").trim(),
      nombre:    fd.get("nombre").trim(),
      apellidos: fd.get("apellidos").trim(),
      programa:  fd.get("programa").trim(),
      email:     fd.get("email").trim(),
    };
    document.getElementById("screen-login").style.display = "none";
    document.getElementById("screen-quiz").style.display  = "block";
    document.getElementById("header-user").textContent =
      currentUser.nombre + " " + currentUser.apellidos;
    buildQuestions();
    updateProgress();
    buildSidebar();
  });
});

// ─── Construcción de preguntas ────────────────────────────────────────────────
function buildQuestions() {
  var container = document.getElementById("questions-container");
  var html = "";

  CATEGORIAS.forEach(function (cat) {
    html += '<h3 class="section-header">' + escHtml(cat.name) + "</h3>";

    cat.qs.forEach(function (qNum) {
      var pts     = pointValues["q" + qNum];
      var ptLabel = pts === 1 ? "1 Punto" : pts + " Puntos";
      var qInfo   = QUESTION_INFO["q" + qNum];
      var codeHtml = buildCodeHtml(qInfo.code, qNum);
      var blanksHtml = buildBlanksSection(qNum);

      html +=
        '<div class="question-card" id="q' + qNum + '">' +
          '<div class="q-meta">' +
            '<span class="q-num">Pregunta ' + qNum + '</span>' +
            '<span class="q-cat">' + escHtml(cat.name.split(" ")[0]) + "</span>" +
            '<span class="q-pts">' + ptLabel + "</span>" +
            '<span class="q-topic">' + escHtml(qInfo.topic) + "</span>" +
          "</div>" +
          '<div class="q-desc">' + escHtml(qInfo.desc) + "</div>" +
          '<div class="code-block"><pre>' + codeHtml + "</pre></div>" +
          blanksHtml +
          '<button class="verify-btn" onclick="checkAnswer(' + qNum + ')">Verificar Respuesta</button>' +
          '<div id="q' + qNum + '-feedback" class="feedback" style="display:none"></div>' +
        "</div>";
    });
  });

  container.innerHTML = html;
}

// ─── Código con spans de blank ────────────────────────────────────────────────
function buildCodeHtml(code, qNum) {
  var answers  = correctAnswers["q" + qNum] || [];
  var counters = {};
  var html = escHtml(code);

  html = html.replace(/\[(\d+)\]/g, function (_, n) {
    var idx      = parseInt(n) - 1;
    var expected = answers[idx];
    counters[n]  = (counters[n] || 0) + 1;
    var uid = "q" + qNum + "-blank-" + n + "-" + counters[n];

    // Blank auto-aceptado (respuesta vacía): se muestra sin recuadro
    if (expected === "") {
      return '<span class="blank auto-ok" id="' + uid + '" data-blank="' + n + '"></span>';
    }
    // Blank normal: muestra [N] en ámbar hasta que el usuario seleccione
    return '<span class="blank empty" id="' + uid + '" data-blank="' + n + '">[' + n + ']</span>';
  });
  return html;
}

// ─── Sección de opciones por blank ───────────────────────────────────────────
function buildBlanksSection(qNum) {
  var qInfo   = QUESTION_INFO["q" + qNum];
  var letters = ["A", "B", "C", "D"];
  var html    = '<div class="blanks-section"><p class="blanks-hint">Selecciona la opción correcta para cada espacio:</p>';
  var hasAny  = false;

  qInfo.options.forEach(function (opts, idx) {
    if (!opts || opts.length === 0) return;   // blank auto-aceptado, sin botones
    hasAny = true;
    var blankNum = idx + 1;
    html += '<div class="blank-row" data-blank="' + blankNum + '">';
    html += '<span class="blank-label">Espacio [' + blankNum + ']:</span>';
    html += '<div class="opts">';
    opts.forEach(function (opt, i) {
      html +=
        '<button class="opt-btn"' +
        ' data-val="' + escHtml(opt) + '"' +
        ' onclick="selectOption(' + qNum + ', ' + blankNum + ', this)">' +
        '<span class="opt-letter">' + letters[i] + '</span>' +
        '<code>' + escHtml(opt) + '</code>' +
        '</button>';
    });
    html += '</div></div>';
  });

  if (!hasAny) html += '<p class="blanks-hint" style="color:#6EE7B7">✓ Esta pregunta se verifica automáticamente.</p>';
  html += '</div>';
  return html;
}

// ─── Seleccionar opción ───────────────────────────────────────────────────────
function selectOption(qNum, blankNum, btn) {
  var qId   = "q" + qNum;
  var value = btn.getAttribute("data-val");

  if (!selections[qId]) selections[qId] = {};
  selections[qId][blankNum] = value;

  // Actualizar todos los spans del mismo blank en el bloque de código
  document.querySelectorAll("#" + qId + " .blank[data-blank='" + blankNum + "']").forEach(function (span) {
    span.textContent = value;
    span.className = "blank filled";
  });

  // Resaltar botón activo dentro del grupo
  btn.closest(".opts").querySelectorAll(".opt-btn").forEach(function (b) {
    b.classList.remove("active", "correct-sel", "wrong-sel", "show-correct");
  });
  btn.classList.add("active");
}

// ─── Verificar respuesta ──────────────────────────────────────────────────────
function checkAnswer(qNum) {
  var qId      = "q" + qNum;
  var answers  = correctAnswers[qId];
  var total    = answers.length;
  var correct  = 0;
  var qSel     = selections[qId] || {};
  var feedbackDiv = document.getElementById(qId + "-feedback");

  for (var i = 1; i <= total; i++) {
    var expected = answers[i - 1];

    // Blank auto-aceptado
    if (expected === "") {
      correct++;
      continue;
    }

    var userVal   = qSel[i] || null;
    var isCorrect = userVal !== null && normalize(userVal) === normalize(expected);

    // Actualizar spans del código
    document.querySelectorAll("#" + qId + " .blank[data-blank='" + i + "']").forEach(function (span) {
      span.className = "blank " + (isCorrect ? "correct" : "incorrect");
      if (!isCorrect && !userVal) span.textContent = "[" + i + "]";
    });

    // Actualizar botones de la fila correspondiente
    var row = document.querySelector("#" + qId + " .blank-row[data-blank='" + i + "']");
    if (row) {
      row.querySelectorAll(".opt-btn").forEach(function (b) {
        b.classList.remove("active", "correct-sel", "wrong-sel", "show-correct");
        var bVal = b.getAttribute("data-val");
        if (normalize(bVal) === normalize(expected)) {
          b.classList.add(isCorrect ? "correct-sel" : "show-correct");
        } else if (bVal === userVal && !isCorrect) {
          b.classList.add("wrong-sel");
        }
      });
    }

    if (isCorrect) correct++;
  }

  var pts   = pointValues[qId];
  var score = (correct / total) * pts;
  results[qId]  = score;
  verified[qId] = true;

  feedbackDiv.style.display = "block";
  if (correct === total) {
    feedbackDiv.className = "feedback feedback-ok";
    feedbackDiv.textContent = "¡Correcto! (+" + pts + " puntos)";
  } else if (correct > 0) {
    feedbackDiv.className = "feedback feedback-partial";
    feedbackDiv.textContent =
      "Parcialmente correcto: " + correct + "/" + total +
      " espacios. (+" + score.toFixed(1) + " puntos)";
  } else {
    feedbackDiv.className = "feedback feedback-error";
    feedbackDiv.textContent = "Incorrecto. Revisa las opciones. (+0 puntos)";
  }

  updateProgress();
  updateSidebar();
}

// ─── Progreso ─────────────────────────────────────────────────────────────────
function updateProgress() {
  var done = Object.keys(verified).length;
  var pct  = Math.round((done / TOTAL_QS) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent = "Verificadas: " + done + " / " + TOTAL_QS;
  document.getElementById("sidebar-done").textContent   = done + " / " + TOTAL_QS;
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function buildSidebar() {
  var html = "";
  CATEGORIAS.forEach(function (cat) {
    html +=
      '<div class="sec-item">' +
        '<span class="sec-dot" style="background:' + cat.color + '"></span>' +
        '<span class="sec-name">' + escHtml(cat.name.split("(")[0].trim()) + "</span>" +
        '<span class="sec-count" id="sec-' + cat.id + '">0/' + cat.qs.length + "</span>" +
      "</div>";
  });
  document.getElementById("sidebar-sections").innerHTML = html;
}

function updateSidebar() {
  CATEGORIAS.forEach(function (cat) {
    var done = cat.qs.filter(function (n) { return verified["q" + n]; }).length;
    var el = document.getElementById("sec-" + cat.id);
    if (el) el.textContent = done + "/" + cat.qs.length;
  });
}

// ─── Nota Final ───────────────────────────────────────────────────────────────
function calculateFinalGrade() {
  var allQs = [];
  CATEGORIAS.forEach(function (cat) { cat.qs.forEach(function (n) { allQs.push(n); }); });
  allQs.forEach(function (n) { if (!verified["q" + n]) checkAnswer(n); });

  var totalScore = 0;
  var totalMax   = 0;
  var detailHTML = "";

  allQs.forEach(function (n) {
    var qid = "q" + n;
    var s   = results[qid]     || 0;
    var max = pointValues[qid] || 0;
    totalScore += s;
    totalMax   += max;
    detailHTML +=
      '<div class="rrow">' +
        "<span>Pregunta " + n + "</span>" +
        "<strong>" + s.toFixed(1) + " / " + max + " pt</strong>" +
      "</div>";
  });

  document.getElementById("results-details").innerHTML = detailHTML;

  var pct = totalMax > 0 ? (totalScore / totalMax) * 100 : 0;
  var msg;
  if      (pct >= 90) msg = "¡Excelente trabajo!";
  else if (pct >= 80) msg = "¡Muy bien!";
  else if (pct >= 70) msg = "Buen trabajo";
  else if (pct >= 60) msg = "Aprobado, ¡sigue practicando!";
  else                 msg = "Necesitas repasar más los conceptos";

  var u = currentUser;
  document.getElementById("score-display").innerHTML =
    "<strong>" + escHtml(u.nombre + " " + u.apellidos) + "</strong><br>" +
    '<span class="score-big">' + totalScore.toFixed(1) + "</span>" +
    '<span class="score-pct">' + pct.toFixed(1) + "%</span><br>" +
    '<span class="grade-msg">' + msg + "</span><br>" +
    "<small>Puntaje: " + totalScore.toFixed(1) + " / " + totalMax + " puntos</small>";

  if (typeof window.submitQuizResults === "function") {
    window.submitQuizResults({
      cedula:   u.cedula,
      nombre:   u.nombre,
      apellido: u.apellidos,
      email:    u.email,
      programa: u.programa,
      nota:     totalScore.toFixed(1),
      total:    totalMax,
    });
    document.getElementById("form-notification").textContent =
      "✓ Resultados enviados al formulario de registro.";
  }

  var resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "block";
  resultsDiv.scrollIntoView({ behavior: "smooth" });
}

// ─── Reiniciar ────────────────────────────────────────────────────────────────
function restartQuiz() {
  currentUser = null;
  selections  = {};
  results     = {};
  verified    = {};
  document.getElementById("screen-quiz").style.display  = "none";
  document.getElementById("screen-login").style.display = "flex";
  document.getElementById("login-form").reset();
  document.getElementById("results").style.display = "none";
}

// ─── Utilidades ───────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalize(str) {
  return String(str).toLowerCase().replace(/['"]/g, "").trim();
}
