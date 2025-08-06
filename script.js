document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");
  const btnReset = document.getElementById("btnReset");
  
  const semestres = [
    { numero: 1, ramos: [
      { nombre: "Anatomía e Histología", codigo: "NUT-111", requisitos: [] },
      { nombre: "Química", codigo: "NUT-112", requisitos: [] },
      { nombre: "Biología Celular y Molecular", codigo: "NUT-113", requisitos: [] },
      { nombre: "Matemáticas Biomédicas", codigo: "NUT-114", requisitos: [] },
      { nombre: "Introducción a la Actividad Profesional", codigo: "NUT-115", requisitos: [] },
      { nombre: "Búsqueda de Sistematización de Información Científica y uso de TICS", codigo: "NUT-116", requisitos: [] }
    ]},
    { numero: 2, ramos: [
      { nombre: "Fisiología", codigo: "NUT-121", requisitos: ["NUT-111"] },
      { nombre: "Bioquímica", codigo: "NUT-122", requisitos: ["NUT-112", "NUT-113"] },
      { nombre: "Microbiología y Parasitología", codigo: "NUT-123", requisitos: ["NUT-113"] },
      { nombre: "Bromatología y Tecnología de los Alimentos", codigo: "NUT-124", requisitos: ["NUT-112"] },
      { nombre: "Fundamentos de la Alimentación", codigo: "NUT-125", requisitos: [] },
      { nombre: "Inglés I", codigo: "IFG-100", requisitos: [] }
    ]},
    { numero: 3, ramos: [
      { nombre: "Evaluación del Estado Nutricional en el Ciclo Vital", codigo: "NUT-211", requisitos: ["NUT-121"] },
      { nombre: "Nutrición Básica", codigo: "NUT-212", requisitos: ["NUT-122"] },
      { nombre: "Técnicas Dietéticas", codigo: "NUT-213", requisitos: ["NUT-123", "NUT-124"] },
      { nombre: "Inocuidad Alimentaria", codigo: "NUT-214", requisitos: ["NUT-123"] },
      { nombre: "Salud Pública y Políticas Alimentario-Nutricionales I", codigo: "NUT-215", requisitos: ["NUT-115"] },
      { nombre: "Inglés II", codigo: "IFG-200", requisitos: ["IFG-100"] }
    ]},
    { numero: 4, ramos: [
      { nombre: "Dietética del Ciclo Vital", codigo: "NUT-221", requisitos: ["NUT-211", "NUT-212"] },
      { nombre: "Fisiopatología y Farmacología", codigo: "NUT-222", requisitos: ["NUT-211"] },
      { nombre: "Gastronomía", codigo: "NUT-223", requisitos: ["NUT-213", "NUT-214"] },
      { nombre: "Aseguramiento de la Calidad en Alimentación y Nutrición", codigo: "NUT-224", requisitos: ["NUT-213", "NUT-214"] },
      { nombre: "Salud Pública y Políticas Alimentario-Nutricionales II", codigo: "NUT-225", requisitos: ["NUT-215"] },
      { nombre: "Introducción a la Fe", codigo: "MFG-114", requisitos: [] }
    ]},
    { numero: 5, ramos: [
      { nombre: "Dietoterapia del Adulto y Adulto Mayor I", codigo: "NUT-311", requisitos: ["NUT-221", "NUT-222"] },
      { nombre: "Psicología del Comportamiento Alimentario en el Ciclo Vital", codigo: "NUT-312", requisitos: ["NUT-221"] },
      { nombre: "Bioestadística Aplicada", codigo: "NUT-313", requisitos: ["NUT-225"] },
      { nombre: "Planificación de SAN", codigo: "NUT-314", requisitos: ["NUT-223", "NUT-224"] },
      { nombre: "Programas de APS", codigo: "NUT-315", requisitos: ["NUT-225"] },
      { nombre: "Ética Cristiana", codigo: "MFG-216", requisitos: [] }
    ]},
    { numero: 6, ramos: [
      { nombre: "Dietoterapia del Adulto y Adulto Mayor II", codigo: "NUT-321", requisitos: ["NUT-311"] },
      { nombre: "Ética Profesional y Bioética", codigo: "NUT-322", requisitos: [] },
      { nombre: "Epidemiología", codigo: "NUT-323", requisitos: ["NUT-313"] },
      { nombre: "Administración y Gestión en SAN I", codigo: "NUT-324", requisitos: ["NUT-314"] },
      { nombre: "Salud Familiar", codigo: "NUT-325", requisitos: ["NUT-315"] },
      { nombre: "Marketing y Educación en Salud y Nutrición", codigo: "NUT-326", requisitos: ["NUT-311", "NUT-312"] },
      { nombre: "Certificación I", codigo: "CFG-1", requisitos: [] }
    ]},
    { numero: 7, ramos: [
      { nombre: "Dietoterapia Infantojuvenil I", codigo: "NUT-411", requisitos: ["NUT-321"] },
      { nombre: "Proyecto de Investigación I", codigo: "NUT-412", requisitos: ["NUT-311", "NUT-323", "NUT-324"] },
      { nombre: "Administración y Gestión en SAN II", codigo: "NUT-413", requisitos: ["NUT-324"] },
      { nombre: "Nutrición Comunitaria", codigo: "NUT-414", requisitos: ["NUT-325"] },
      { nombre: "Certificación II", codigo: "CFG-2", requisitos: ["CFG-1"] }
    ]},
    { numero: 8, ramos: [
      { nombre: "Dietoterapia Infantojuvenil II", codigo: "NUT-421", requisitos: ["NUT-411"] },
      { nombre: "Nutrición Deportiva", codigo: "NUT-422", requisitos: ["NUT-411"] },
      { nombre: "Proyecto de Investigación II", codigo: "NUT-423", requisitos: ["NUT-412"] },
      { nombre: "Nutrición Integrada Profesional", codigo: "NUT-424", requisitos: ["NUT-411", "NUT-413", "NUT-414"] },
      { nombre: "Certificación III", codigo: "CFG-3", requisitos: ["CFG-2"] }
    ]},
    { numero: 9, ramos: [
      { nombre: "Práctica Profesional Gestión Servicios de Alimentación", codigo: "NUT-511", requisitos: ["NUT-421", "NUT-422", "NUT-423", "NUT-424", "CFG-3"] },
      { nombre: "Práctica Profesional Nutrición Clínica", codigo: "NUT-512", requisitos: ["NUT-421", "NUT-422", "NUT-423", "NUT-424", "CFG-3"] },
      { nombre: "Electivo", codigo: "NUT-513", requisitos: ["NUT-421", "NUT-422", "NUT-423", "NUT-424", "CFG-3"] }
    ]},
    { numero: 10, ramos: [
      { nombre: "Práctica Profesional APS", codigo: "NUT-520", requisitos: ["NUT-421", "NUT-422", "NUT-423", "NUT-424", "CFG-3"] },
      { nombre: "Práctica Profesional en Establecimientos Educacionales", codigo: "NUT-521", requisitos: ["NUT-421", "NUT-422", "NUT-423", "NUT-424", "CFG-3"] },
      { nombre: "Electivo II", codigo: "NUT-522", requisitos: [] },
      { nombre: "Electivo III", codigo: "NUT-523", requisitos: [] }
    ]}
  ];

 const ramosMap = new Map();

  semestres.forEach(sem => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h3>Semestre ${sem.numero}</h3>`;

    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.innerHTML = `<strong>${ramo.nombre}</strong><br><span class="codigo">${ramo.codigo}</span>`;
      div.dataset.codigo = ramo.codigo;
      div.dataset.requisitos = JSON.stringify(ramo.requisitos);
      ramosMap.set(ramo.codigo, div);
      col.appendChild(div);

      div.addEventListener("click", () => {
        manejarClickRamo(ramo.codigo);
      });
    });

    malla.appendChild(col);
  });

  // Estado de click: 0 = normal, 1 = resaltado, 2 = tachado (ciclo)
  const estados = new Map();

  function manejarClickRamo(codigo) {
    const div = ramosMap.get(codigo);
    if (!div) return;

    const estadoActual = estados.get(codigo) || 0;

    if (estadoActual === 0) {
      // Poner resaltado
      div.classList.add("resaltado");
      div.classList.remove("tachado");
      estados.set(codigo, 1);
    } else if (estadoActual === 1) {
      // Poner tachado + tachar todos los requisitos (padres)
      div.classList.remove("resaltado");
      tacharConRequisitos(codigo);
      estados.set(codigo, 2);
    } else {
      // Volver a normal
      destacharRamo(codigo);
      estados.set(codigo, 0);
    }
  }

  // Función para tachar ramo y todos sus requisitos (padres) recursivamente
  function tacharConRequisitos(codigo) {
    const visitados = new Set();

    function tacharRec(cod) {
      if (visitados.has(cod)) return;
      visitados.add(cod);

      const div = ramosMap.get(cod);
      if (!div) return;

      div.classList.add("tachado");
      div.classList.remove("resaltado");
      estados.set(cod, 2);

      // Tachamos todos sus requisitos (padres)
      const reqs = JSON.parse(div.dataset.requisitos);
      reqs.forEach(ramoReq => {
        tacharRec(ramoReq);
      });
    }

    tacharRec(codigo);
  }

  // Función para destachar ramo y todos los que dependen si se cumplen requisitos
  function destacharRamo(codigoBase) {
    const visitados = new Set();

    function destacharRec(cod) {
      if (visitados.has(cod)) return;
      visitados.add(cod);

      const div = ramosMap.get(cod);
      if (!div) return;

      div.classList.remove("tachado");
      div.classList.remove("resaltado");
      estados.set(cod, 0);

      // Buscamos los ramos que dependen de este (hijos)
      for (const [otroCod, otroDiv] of ramosMap.entries()) {
        const reqs = JSON.parse(otroDiv.dataset.requisitos);

        // Si el ramo depende de cod y todos sus requisitos están destachados, destachamos
        if (reqs.includes(cod)) {
          const todosReqsDestachados = reqs.every(req => {
            const reqDiv = ramosMap.get(req);
            return reqDiv && !reqDiv.classList.contains("tachado");
          });

          if (todosReqsDestachados) {
            destacharRec(otroCod);
          }
        }
      }
    }

    destacharRec(codigoBase);
  }

  btnReset.addEventListener("click", () => {
    for (const div of ramosMap.values()) {
      div.classList.remove("tachado", "resaltado");
    }
    estados.clear();
  });
});
