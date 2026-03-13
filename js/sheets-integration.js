/**
 * sheets-integration.js
 * Envía los resultados usando un <form> oculto → evita CORS totalmente.
 *
 * Formulario: "Asistencia Evaluaciones y resultados"
 * entry.2107955067 → Apellidos completos y nombres
 * entry.1999475006 → Correo más usado por el estudiante
 * entry.74283970   → Programa del estudiante
 * entry.122404303  → Cedula o TID
 * entry.330649717  → Resultado de la prueba
 */

(function () {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/" +
    "1FAIpQLSd-SLBcyxk5GVRp91OTQ0_c10OhSoRzCaxtQmUpz9E4pWkk4A/formResponse";

  /**
   * Envía los datos al formulario usando un <form> oculto dentro de un <iframe>.
   * Este método es 100 % compatible con Google Forms sin problemas de CORS.
   * @param {Object} data  { cedula, nombre, apellido, email, programa, nota, total }
   */
  window.submitQuizResults = function (data) {
    const nombreCompleto = (data.apellido + " " + data.nombre).trim();
    const resultado      = data.nota + "/" + data.total;

    // Crear iframe oculto que recibirá la respuesta de Google
    const iframe = document.createElement("iframe");
    iframe.name  = "gforms_frame_" + Date.now();
    iframe.style.cssText = "display:none;width:0;height:0;border:0;position:absolute;left:-9999px";
    document.body.appendChild(iframe);

    // Crear formulario oculto apuntando al iframe
    const form    = document.createElement("form");
    form.method   = "POST";
    form.action   = FORM_URL;
    form.target   = iframe.name;
    form.style.display = "none";

    const fields = {
      "entry.2107955067": nombreCompleto,
      "entry.1999475006": data.email,
      "entry.74283970":   data.programa,
      "entry.122404303":  data.cedula,
      "entry.330649717":  resultado,
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input  = document.createElement("input");
      input.type   = "hidden";
      input.name   = name;
      input.value  = value || "";
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    console.log("[sheets] ✓ Enviado a Google Forms:", {
      nombre:    nombreCompleto,
      cedula:    data.cedula,
      email:     data.email,
      programa:  data.programa,
      resultado: resultado,
    });

    // Limpiar DOM después de 5 s
    setTimeout(() => {
      form.parentNode  && document.body.removeChild(form);
      iframe.parentNode && document.body.removeChild(iframe);
    }, 5000);
  };

  console.log("[sheets] Integración con Google Sheets lista (método: form oculto).");
})();
