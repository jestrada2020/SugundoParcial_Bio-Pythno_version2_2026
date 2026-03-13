// question-data.js — Datos de preguntas: Segundo Parcial Shiny for Python
// topic, desc, code y options por blank ([] = respuesta vacía auto-aceptada)

var QUESTION_INFO = {
  q1: {
    topic: "Arrays NumPy - Shiny Express",
    desc:  "Completa el código para crear una aplicación Shiny Express que trabaje con un array NumPy.",
    code:
      "from [1].express import input, render, ui\n" +
      "import [2] as np\n" +
      "\n" +
      "array_datos = np.[3]([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\n" +
      "\n" +
      'ui.input_slider("indice", "Seleccione índice:", 0, [4], 0)',
    options: [
      ["flask", "shiny", "numpy", "dash"],
      ["pandas", "numpy", "scipy", "math"],
      ["zeros", "ones", "array", "arange"],
      ["10", "0", "9", "5"]
    ]
  },

  q2: {
    topic: "Aplicación Completa - Análisis de Arrays",
    desc:  "Completa una aplicación Shiny completa que analice elementos de un array NumPy.",
    code:
      "from shiny import [1], ui, render\n" +
      "import [2] as np\n" +
      "\n" +
      "def analizar_elemento(indice, array):\n" +
      "    if indice < [3](array):\n" +
      '        return f"Elemento: {array[indice]}"\n' +
      "    else:\n" +
      '        return "Índice fuera de rango"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Analizador de Arrays"),\n' +
      '    ui.input_slider("indice", "Seleccione índice:", 0, 9, 0),\n' +
      '    ui.output_text("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    array_datos = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])\n" +
      "\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      "        return [4](input.indice(), array_datos)\n" +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["Server", "App", "UI", "Widget"],
      ["pandas", "numpy", "math", "scipy"],
      ["size", "len", "count", "max"],
      ["calcular_elemento", "analizar_elemento", "obtener_elemento", "procesar_elemento"]
    ]
  },

  q3: {
    topic: "Listas - Shiny Clásico",
    desc:  "Completa el código para trabajar con listas en Shiny clásico.",
    code:
      "from shiny import App, [1], render\n" +
      "\n" +
      'lista_frutas = [2]["manzana", "banana", "naranja", "uva", "pera"]\n' +
      "\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.input_selectize("fruta", "Seleccione fruta:", choices=[3]),\n' +
      '    ui.[4]("info_fruta")\n' +
      ")",
    options: [
      ["render", "ui", "input", "output"],
      ["(", "{", "[", "list"],
      ["frutas", "opciones", "lista_frutas", "items"],
      ["output_ui", "output_plot", "output_text", "input_text"]
    ]
  },

  q4: {
    topic: "Aplicación Completa - Clasificador de Números",
    desc:  "Completa una aplicación que clasifica números según múltiples condiciones.",
    code:
      "from shiny import App, [1], render\n" +
      "import numpy as np\n" +
      "\n" +
      "def clasificar_numero(x):\n" +
      "    [2] x > 50:\n" +
      '        return "Grande"\n' +
      "    elif x > 0:\n" +
      '        return "Pequeño Positivo"\n' +
      "    elif x == 0:\n" +
      '        return "Cero"\n' +
      "    else:\n" +
      '        return "Negativo"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.[3](\n" +
      '    ui.h2("Clasificador de Números"),\n' +
      '    ui.input_slider("numero", "Número:", -100, 100, 0),\n' +
      '    ui.output_text("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      '        return f"El número es: {[4](input.numero())}"\n' +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["render", "input", "ui", "output"],
      ["while", "for", "if", "elif"],
      ["page_fixed", "page_fluid", "page_sidebar", "page_container"],
      ["evaluar_numero", "obtener_numero", "calcular_numero", "clasificar_numero"]
    ]
  },

  q5: {
    topic: "Tuplas - Shiny Express",
    desc:  "Completa el código para manejar tuplas de coordenadas en Shiny Express.",
    code:
      "coordenadas = [1]((10, 20), (30, 40), (50, 60), (70, 80))\n" +
      "\n" +
      'ui.input_numeric("punto", "Seleccione punto (0-3):", [2]=0, min=0, max=3)\n' +
      "\n" +
      "@render.[3]\n" +
      "def mostrar_coordenada():\n" +
      "    punto_idx = [4](input.punto())\n" +
      '    return f"Coordenada: {coordenadas[punto_idx]}"',
    options: [
      ["list", "tuple", "dict", "set"],
      ["default", "value", "init", "val"],
      ["ui", "plot", "text", "table"],
      ["str", "float", "int", "bool"]
    ]
  },

  q6: {
    topic: "Aplicación Completa - Analizador de Listas",
    desc:  "Completa una aplicación que analiza elementos de una lista con condicionales múltiples.",
    code:
      "from [1] import App, ui, render\n" +
      "import numpy as np\n" +
      "\n" +
      "def evaluar_temperatura(temp):\n" +
      "    if temp [2] 30:\n" +
      "        if temp > 20:\n" +
      '            return "Calor agradable"\n' +
      "        else:\n" +
      '            return "Temperatura normal"\n' +
      "    [3] temp > 35:\n" +
      '        return "Muy caliente"\n' +
      "    else:\n" +
      '        return "Calor moderado"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Evaluador de Temperatura"),\n' +
      '    ui.input_slider("temp", "Temperatura °C:", 0, 50, 25),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      '        return f"Evaluación: {evaluar_temperatura(input.temp())}"\n' +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["flask", "numpy", "shiny", "dash"],
      ["<=", "<", ">", ">="],
      ["else", "elif", "if", "while"],
      ["output_plot", "output_ui", "output_table", "output_text"]
    ]
  },

  q7: {
    topic: "Operaciones con Vectores y Listas",
    desc:  "Completa las operaciones combinadas entre vectores NumPy y listas Python.",
    code:
      "vector_a = np.[1]([2, 4, 6, 8, 10])\n" +
      "vector_b = np.array([1, 3, 5, 7, 9])\n" +
      "lista_resultado = [2]()\n" +
      "\n" +
      "@render.text\n" +
      "def operar_vectores():\n" +
      "    suma_vectores = vector_a [3] vector_b\n" +
      "    lista_resultado.extend(suma_vectores.[4]())\n" +
      '    return f"Suma: {suma_vectores}, Lista: {lista_resultado[:5]}"',
    options: [
      ["array", "zeros", "ones", "arange"],
      ["dict", "list", "tuple", "set"],
      ["+", "-", "*", "/"],
      ["aslist", "tolist", "to_list", "convert"]
    ]
  },

  q10: {
    topic: "Aplicación Completa - Gestor de Estudiantes con Tuplas",
    desc:  "Completa una aplicación que maneja datos de estudiantes usando diccionarios con tuplas.",
    code:
      "from shiny import App, ui, render\n" +
      "\n" +
      "# Diccionario con tuplas (edad, promedio)\n" +
      "datos_estudiantes = [1]{\n" +
      '    "Ana": (20, 85.5),\n' +
      '    "Luis": (22, 92.0),\n' +
      '    "Maria": (19, 88.7)\n' +
      "}\n" +
      "\n" +
      "def obtener_info_estudiante(nombre):\n" +
      "    [2] nombre in datos_estudiantes:\n" +
      "        edad, promedio = datos_estudiantes[nombre]\n" +
      '        return f"Edad: {edad} años, Promedio: {promedio}"\n' +
      "    else:\n" +
      '        return "Estudiante no encontrado"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Gestor de Estudiantes"),\n' +
      '    ui.input_selectize("estudiante", "Seleccione estudiante:",\n' +
      "                      choices=[3](datos_estudiantes.keys())),\n" +
      '    ui.output_text("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      "        return [4](input.estudiante())\n" +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["dict", "list", "tuple", "set"],
      ["for", "while", "if", "elif"],
      ["tuple", "list", "dict", "set"],
      ["buscar_estudiante", "mostrar_estudiante", "obtener_info_estudiante", "calcular_estudiante"]
    ]
  },

  q11: {
    topic: "Filtrado de Arrays con Condicionales Múltiples",
    desc:  "Completa el código para filtrar un array según múltiples condiciones.",
    code:
      "temperaturas = np.array([15, 22, 8, 35, 18, 40, 12, 28, 5, 33])\n" +
      "\n" +
      "@render.text\n" +
      "def filtrar_temperaturas():\n" +
      "    temp_calidas = temperaturas[temperaturas [1] 25]\n" +
      "    temp_frias = temperaturas[temperaturas [2] 15]\n" +
      "    temp_moderadas = temperaturas[(temperaturas >= 15) [3] (temperaturas <= 25)]\n" +
      '    return f"Cálidas: {[4](temp_calidas)}, Frías: {len(temp_frias)}, Moderadas: {len(temp_moderadas)}"',
    options: [
      ["<", ">", ">=", "=="],
      ["<=", ">", "<", "!="],
      ["|", "or", "&", "and"],
      ["sum", "count", "len", "size"]
    ]
  },

  q12: {
    topic: "Aplicación Completa - Calculadora de Promedios",
    desc:  "Completa una aplicación que calcula promedios con condicionales de aprobación.",
    code:
      "from shiny import [1], ui, render\n" +
      "\n" +
      "def calcular_promedio_estado(nota1, nota2, nota3):\n" +
      "    notas = [nota1, nota2, nota3]\n" +
      "    promedio = [2](notas) / len(notas)\n" +
      "\n" +
      "    if promedio >= 70:\n" +
      '        estado = "Aprobado"\n' +
      "    else:\n" +
      '        estado = "Reprobado"\n' +
      "\n" +
      '    return f"Promedio: {promedio:.1f} - {estado}"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Calculadora de Promedios"),\n' +
      '    ui.input_numeric("nota1", "Nota 1:", [3]=80, min=0, max=100),\n' +
      '    ui.input_numeric("nota2", "Nota 2:", value=75, min=0, max=100),\n' +
      '    ui.input_numeric("nota3", "Nota 3:", value=85, min=0, max=100),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      "        return calcular_promedio_estado(input.nota1(), input.nota2(), input.nota3())\n" +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["UI", "Server", "App", "Widget"],
      ["max", "sum", "total", "count"],
      ["value", "default", "init", "val"],
      ["output_ui", "output_text", "output_plot", "input_text"]
    ]
  },

  q13: {
    topic: "Estructuras Anidadas: Listas de Tuplas",
    desc:  "Completa el manejo de estructuras anidadas con listas que contienen tuplas.",
    code:
      'productos = [1][("Laptop", 999.99, 5), ("Mouse", 25.50, 20), ("Teclado", 75.00, 15)]\n' +
      "\n" +
      'ui.input_selectize("producto_idx", "Seleccione producto:", choices=[2]{"0": "Laptop", "1": "Mouse", "2": "Teclado"})\n' +
      "\n" +
      "@render.text\n" +
      "def mostrar_producto():\n" +
      "    idx = [3](input.producto_idx())\n" +
      "    nombre, precio, stock = [4][idx]\n" +
      '    return f"Producto: {nombre}, Precio: ${precio}, Stock: {stock}"',
    options: [
      ["(", "[", "{", "list"],
      ["options", "choices", "items", "values"],
      ["str", "int", "float", "bool"],
      ["items", "datos", "productos", "lista"]
    ]
  },

  q14: {
    topic: "Aplicación Completa - Evaluador de Edades",
    desc:  "Completa una aplicación que evalúa rangos de edad con condicionales múltiples.",
    code:
      "from shiny import App, [1], render\n" +
      "\n" +
      "def evaluar_edad(edad):\n" +
      "    [2] edad < 13:\n" +
      '        return "Niño"\n' +
      "    elif edad < 18:\n" +
      '        return "Adolescente"\n' +
      "    elif edad < 65:\n" +
      '        return "Adulto"\n' +
      "    [3]:\n" +
      '        return "Adulto Mayor"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Evaluador de Rangos de Edad"),\n' +
      '    ui.input_slider("edad", "Edad:", 0, 100, 25),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      '        return f"Categoría: {evaluar_edad(input.edad())}"\n' +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["render", "ui", "input", "output"],
      ["elif", "if", "while", "for"],
      ["elif", "else", "except", "finally"],
      ["output_ui", "output_plot", "output_text", "input_text"]
    ]
  },

  q16: {
    topic: "Diccionarios Anidados con Listas de Valores",
    desc:  "Completa el manejo de diccionarios que contienen listas como valores.",
    code:
      "calificaciones = [1]{\n" +
      '    "Matemáticas": [85, 92, 78, 95],\n' +
      '    "Ciencias": [88, 76, 90, 82],\n' +
      '    "Historia": [92, 85, 88, 94]\n' +
      "}\n" +
      "\n" +
      "@render.text\n" +
      "def estadisticas_materia():\n" +
      "    materia = input.materia()\n" +
      "    [2] materia in calificaciones:\n" +
      "        notas = calificaciones[materia]\n" +
      "        promedio = [3](notas) / len(notas)\n" +
      "        nota_max = [4](notas)\n" +
      '        return f"{materia}: Promedio {promedio:.1f}, Máxima {nota_max}"\n' +
      '    return "Materia no encontrada"',
    options: [
      ["list", "tuple", "dict", "set"],
      ["while", "if", "for", "elif"],
      ["sum", "total", "add", "count"],
      ["min", "sum", "max", "avg"]
    ]
  },

  q18: {
    topic: "Aplicación Completa - Verificador de Números Pares",
    desc:  "Completa una aplicación que verifica si un número es par o impar con condicionales.",
    code:
      "from [1] import App, ui, render\n" +
      "\n" +
      "def verificar_paridad(numero):\n" +
      "    [2] numero % 2 == 0:\n" +
      '        return f"{numero} es un número par"\n' +
      "    [3]:\n" +
      '        return f"{numero} es un número impar"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Verificador de Paridad"),\n' +
      '    ui.input_slider("numero", "Seleccione número:", 1, 50, 10),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      "        return verificar_paridad(input.numero())\n" +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["flask", "shiny", "dash", "numpy"],
      ["elif", "for", "if", "while"],
      ["elif", "except", "else", "finally"],
      ["output_ui", "output_table", "output_text", "output_plot"]
    ]
  },

  q20: {
    topic: "Aplicación Completa - Calculadora con Operaciones Lógicas",
    desc:  "Completa una aplicación que evalúa condiciones múltiples con operadores lógicos.",
    code:
      "from shiny import App, ui, [1]\n" +
      "\n" +
      "def evaluar_condiciones(num1, num2):\n" +
      "    es_suma_grande = (num1 + num2) > 50\n" +
      "    ambos_positivos = num1 > 0 [2] num2 > 0\n" +
      "\n" +
      "    [3] es_suma_grande and ambos_positivos:\n" +
      '        return "Condición Óptima"\n' +
      "    elif es_suma_grande or ambos_positivos:\n" +
      '        return "Condición Parcial"\n' +
      "    else:\n" +
      '        return "Condición No Cumplida"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Evaluador de Condiciones"),\n' +
      '    ui.input_numeric("num1", "Número 1:", value=20, min=-50, max=50),\n' +
      '    ui.input_numeric("num2", "Número 2:", value=30, min=-50, max=50),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      "        return evaluar_condiciones(input.num1(), input.num2())\n" +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["output", "input", "render", "ui"],
      ["or", "and", "not", "&"],
      ["elif", "while", "for", "if"],
      ["output_plot", "output_text", "output_ui", "input_text"]
    ]
  },

  q21: {
    topic: "Análisis de Arrays con F-strings y Formato",
    desc:  "Completa el análisis estadístico de un array NumPy con formato de salida personalizado.",
    code:
      "datos_experimento = np.array([12.5, 23.8, 15.2, 34.7, 8.9, 45.1, 19.3, 28.6])\n" +
      "\n" +
      "@render.text\n" +
      "def estadisticas_datos():\n" +
      "    promedio = np.[1](datos_experimento)\n" +
      "    desviacion = np.[2](datos_experimento)\n" +
      "    maximo = np.[3](datos_experimento)\n" +
      "\n" +
      "    [4] promedio > 20:\n" +
      '        categoria = "Alto"\n' +
      "    elif promedio > 15:\n" +
      '        categoria = "Medio"\n' +
      "    else:\n" +
      '        categoria = "Bajo"\n' +
      "\n" +
      '    return f"Promedio: {promedio:.2f}, Desv: {desviacion:.2f}, Máx: {maximo:.1f}, Cat: {categoria}"',
    options: [
      ["mean", "median", "average", "sum"],
      ["var", "std", "norm", "deviation"],
      ["min", "sum", "max", "mean"],
      ["while", "for", "elif", "if"]
    ]
  },

  q22: {
    topic: "Manipulación de Listas con Formato Condicional",
    desc:  "Completa la transformación de precios usando operaciones directas con listas y condicionales.",
    code:
      "precios_originales = [1].array([25.50, 67.89, 12.34, 89.99, 45.67, 23.45])\n" +
      "\n" +
      "@render.text\n" +
      "def procesar_precios():\n" +
      "    descuento = float(input.descuento()) / 100\n" +
      "    precios_con_descuento = precios_originales [2] (1 - descuento)\n" +
      "\n" +
      "    # Procesamos el primer precio como ejemplo\n" +
      "    primer_precio = precios_con_descuento[3]\n" +
      "    [4] primer_precio > 50:\n" +
      '        etiqueta = "CARO"\n' +
      "    else:\n" +
      '        etiqueta = "NORMAL"\n' +
      "\n" +
      '    return f"Primer precio: ${primer_precio:.2f} ({etiqueta}), Total elementos: {len(precios_con_descuento)}"',
    options: [
      ["pd", "np", "plt", "math"],
      ["*", "/", "+", "-"],
      ["[1]", "[-1]", "[2]", "[0]"],
      ["elif", "if", "while", "for"]
    ]
  },

  q24: {
    topic: "Aplicación Completa - Analizador de Notas",
    desc:  "Completa una aplicación que analiza notas y determina el estado de aprobación.",
    code:
      "from shiny import [1], ui, render\n" +
      "\n" +
      "def evaluar_nota(nota):\n" +
      "    [2] nota >= 90:\n" +
      '        return "Excelente"\n' +
      "    elif nota >= 80:\n" +
      '        return "Muy Bueno"\n' +
      "    elif nota >= 70:\n" +
      '        return "Bueno - Aprobado"\n' +
      "    elif nota >= 60:\n" +
      '        return "Regular - Aprobado"\n' +
      "    [3]:\n" +
      '        return "Reprobado"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Analizador de Notas"),\n' +
      '    ui.input_slider("nota", "Ingrese nota:", 0, 100, 75),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      '        return f"Nota: {input.nota()} - {evaluar_nota(input.nota())}"\n' +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["App", "Server", "UI", "Widget"],
      ["elif", "while", "if", "for"],
      ["elif", "else", "except", "finally"],
      ["output_ui", "output_plot", "output_text", "input_text"]
    ]
  },

  q25: {
    topic: "Arrays Condicionales con Operaciones Matemáticas",
    desc:  "Completa las operaciones matemáticas avanzadas en arrays con condiciones y formato.",
    code:
      "velocidades = np.array([45.5, 67.8, 23.2, 89.1, 34.6, 76.3, 12.8, 95.4])\n" +
      "distancias = np.array([120, 340, 85, 450, 180, 290, 67, 520])\n" +
      "\n" +
      "@render.text\n" +
      "def calcular_tiempos():\n" +
      "    tiempos = distancias [1] velocidades\n" +
      "    tiempo_promedio = np.[2](tiempos)\n" +
      "\n" +
      "    viajes_largos = tiempos[tiempos [3] tiempo_promedio]\n" +
      "    cantidad_largos = [4](viajes_largos)\n" +
      "\n" +
      '    return f"Tiempo promedio: {tiempo_promedio:.1f}h, Viajes largos: {cantidad_largos}, Máx tiempo: {np.max(tiempos):.1f}h"',
    options: [
      ["+", "/", "*", "-"],
      ["mean", "sum", "max", "min"],
      [">", "<", ">=", "=="],
      ["sum", "count", "size", "len"]
    ]
  },

  q29: {
    topic: "Aplicación Completa - Clasificador de Temperaturas",
    desc:  "Completa una aplicación que clasifica temperaturas con múltiples rangos y condiciones.",
    code:
      "from shiny import App, [1], render\n" +
      "\n" +
      "def clasificar_temperatura(temp):\n" +
      "    [2] temp >= 35:\n" +
      '        return "Muy Caliente - Peligro"\n' +
      "    elif temp >= 25:\n" +
      '        return "Caliente"\n' +
      "    elif temp >= 15:\n" +
      '        return "Templado"\n' +
      "    [3] temp >= 5:\n" +
      '        return "Frío"\n' +
      "    else:\n" +
      '        return "Muy Frío"\n' +
      "\n" +
      "# UI\n" +
      "app_ui = ui.page_fluid(\n" +
      '    ui.h2("Clasificador de Temperaturas"),\n' +
      '    ui.input_slider("temp", "Temperatura °C:", -10, 45, 20),\n' +
      '    ui.[4]("resultado")\n' +
      ")\n" +
      "\n" +
      "# Servidor\n" +
      "def server(input, output, session):\n" +
      "    @output\n" +
      "    @render.text\n" +
      "    def resultado():\n" +
      '        return f"Temperatura: {input.temp()}°C - {clasificar_temperatura(input.temp())}"\n' +
      "\n" +
      "# Crear aplicación\n" +
      "app = App(app_ui, server)",
    options: [
      ["render", "input", "output", "ui"],
      ["elif", "while", "if", "for"],
      ["elif", "else", "if", "while"],
      ["output_plot", "output_ui", "output_table", "output_text"]
    ]
  },

  q30: {
    topic: "Combinación de Arrays, Listas y Formato Avanzado",
    desc:  "Completa la integración de arrays NumPy, listas Python y formato de salida complejo.",
    code:
      "array_base = np.array([10, 20, 30, 40, 50])\n" +
      "lista_adicional = [60, 70, 80, 90, 100]\n" +
      "\n" +
      "@render.text\n" +
      "def combinar_estructuras():\n" +
      "    array_convertido = array_base.[1]()\n" +
      "    lista_completa = array_convertido [2] lista_adicional\n" +
      "\n" +
      "    suma_total = [3](lista_completa)\n" +
      "    promedio = suma_total / len(lista_completa)\n" +
      "\n" +
      '    return f"Lista: {lista_completa[:5]}..., Suma: {suma_total:[4]:,}, Promedio: {promedio:.1f}"',
    options: [
      ["list", "aslist", "tolist", "to_list"],
      ["-", "+", "*", "/"],
      ["max", "sum", "total", "count"],
      []
    ]
  },

  q32: {
    topic: "Arrays Bidimensionales con Operaciones Complejas",
    desc:  "Completa las operaciones avanzadas con matrices NumPy y condicionales múltiples.",
    code:
      "datos = np.array([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144])\n" +
      "matriz = datos.[1](3, 4)\n" +
      "\n" +
      "@render.text\n" +
      "def analizar_matriz():\n" +
      "    fila_idx = int(input.fila())\n" +
      "    col_idx = int(input.columna())\n" +
      "\n" +
      "    elemento = matriz[[2], col_idx]\n" +
      "    fila_completa = matriz[fila_idx, [3]]\n" +
      "\n" +
      "    [4] elemento > 50 and np.sum(fila_completa) > 200:\n" +
      '        resultado = "Elemento grande en fila de suma alta"\n' +
      "    elif elemento > 25 or fila_idx == 0:\n" +
      '        resultado = "Elemento medio o primera fila"\n' +
      "    else:\n" +
      '        resultado = "Elemento pequeño"\n' +
      "\n" +
      '    return f"Elemento [{fila_idx},{col_idx}]: {elemento}, Suma fila: {np.sum(fila_completa)}, {resultado}"',
    options: [
      ["resize", "flatten", "reshape", "ravel"],
      ["col_idx", "0", "fila_idx", "row"],
      ["0", ":", "*", "None"],
      ["elif", "while", "if", "for"]
    ]
  },

  q35: {
    topic: "Cálculo de Hipotenusa",
    desc:  "Define una función para calcular la hipotenusa de un triángulo rectángulo.",
    code:
      "import math\n" +
      "\n" +
      "def calcular_hipotenusa(cateto1, cateto2):\n" +
      "    return math.[1](cateto1[2]2 + cateto2[3]2)\n" +
      "\n" +
      "cateto_a = 3\n" +
      "cateto_b = 4\n" +
      "hipotenusa = calcular_hipotenusa(cateto_a, cateto_b)\n" +
      'mensaje = f"La hipotenusa es: {hipotenusa:[4].2f}."',
    options: [
      ["pow", "sqrt", "root", "cbrt"],
      ["*", "**", "^", "//"],
      ["*", "^", "**", "//"],
      []
    ]
  },

  q37: {
    topic: "Cálculo de Promedio Ponderado",
    desc:  "Define una función para calcular el promedio ponderado de dos notas.",
    code:
      "def promedio_ponderado(nota1, peso1, nota2, peso2):\n" +
      "    return (nota1 * peso1 + nota2 * peso2) [1] (peso1 + peso2)\n" +
      "\n" +
      "examen1 = 80\n" +
      "peso_examen1 = 0.4\n" +
      "examen2 = 95\n" +
      "peso_examen2 = 0.6\n" +
      "promedio = promedio_ponderado(examen1, peso_examen1, examen2, peso_examen2)\n" +
      'mensaje = f"El promedio ponderado es: {promedio:[2].1f}."',
    options: [
      ["*", "+", "/", "-"],
      []
    ]
  },

  q38: {
    topic: "Formato de Número con Relleno de Ceros",
    desc:  "Formatea un número entero para que tenga un ancho fijo, rellenando con ceros a la izquierda.",
    code:
      "id_producto = 7\n" +
      'mensaje = f"ID del producto: {id_producto:[1]05}"',
    options: [
      ["1", "0", " ", "#"]
    ]
  },

  q39: {
    topic: "Conversión de Minutos a Horas y Minutos",
    desc:  "Define una función que convierta minutos totales a horas y minutos.",
    code:
      "def convertir_minutos(minutos_totales):\n" +
      "    horas = minutos_totales [1] 60\n" +
      "    minutos = minutos_totales [2] 60\n" +
      "    return horas, minutos\n" +
      "\n" +
      "tiempo_en_minutos = 150\n" +
      "h, m = convertir_minutos(tiempo_en_minutos)\n" +
      'mensaje = f"Tiempo: {h} horas y {m} minutos."',
    options: [
      ["/", "//", "%", "**"],
      ["/", "//", "%", "*"]
    ]
  },

  q42: {
    topic: "Conversión de Grados a Radianes",
    desc:  "Define una función para convertir grados a radianes y muestra el resultado con una f-string.",
    code:
      "import math\n" +
      "\n" +
      "def grados_a_radianes(grados):\n" +
      "    return grados [1] (math.[2] / 180)\n" +
      "\n" +
      "ang_grados = 90\n" +
      "ang_radianes = grados_a_radianes(ang_grados)\n" +
      'mensaje = f"{ang_grados}° son {ang_radianes:[3].3f} radianes."',
    options: [
      ["+", "-", "*", "/"],
      ["e", "tau", "pi", "inf"],
      []
    ]
  },

  q43: {
    topic: "Cálculo de Energía Cinética",
    desc:  "Define una función para calcular la energía cinética y muestra el resultado con una f-string.",
    code:
      "def energia_cinetica(masa, velocidad):\n" +
      "    return 0.5 [1] masa [2] (velocidad [3] 2)\n" +
      "\n" +
      "masa_kg = 10\n" +
      "velocidad_ms = 5\n" +
      "energia = energia_cinetica(masa_kg, velocidad_ms)\n" +
      'mensaje = f"La energía cinética es: {energia:[4].2f} Joules."',
    options: [
      ["+", "*", "-", "/"],
      ["-", "/", "+", "*"],
      ["*", "^", "**", "//"],
      []
    ]
  },

  q47: {
    topic: "Análisis de Cadenas de Texto",
    desc:  "Completa la función que analiza una cadena de texto verificando caracteres y propiedades.",
    code:
      "def analizar_cadena(cadena):\n" +
      "    # Verificamos caracteres específicos sin usar ciclos\n" +
      "    primera_letra = cadena[1]\n" +
      "    ultima_letra = cadena[-1]\n" +
      "    longitud = [2](cadena)\n" +
      "\n" +
      "    # Verificamos si contiene vocal específica\n" +
      '    tiene_a = "a" [3] cadena.lower()\n' +
      "    es_mayuscula = primera_letra.[4]()\n" +
      "\n" +
      '    return f"Texto: {cadena}, Longitud: {longitud}, Tiene \'a\': {tiene_a}, Empieza mayúscula: {es_mayuscula}"\n' +
      "\n" +
      'texto_analizar = "Murcielago"\n' +
      "resultado = analizar_cadena(texto_analizar)\n" +
      "mensaje = resultado",
    options: [
      ["[-1]", "[1]", "[2]", "[0]"],
      ["size", "count", "sum", "len"],
      ["not in", "is", "in", "=="],
      ["islower", "isalpha", "istitle", "isupper"]
    ]
  },

  q49: {
    topic: "Operador Lógico NOT",
    desc:  "Completa la expresión booleana para negar una condición.",
    code:
      "es_activo = False\n" +
      "resultado_not = [1] es_activo\n" +
      "\n" +
      'mensaje = f"El resultado de NOT es: {resultado_not}."',
    options: [
      ["or", "and", "not", "is"]
    ]
  }
};
