document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");

  const semestres = [
    { numero: 1, ramos: [
      { nombre: "Anatomía e Histología", codigo: "NUT-111", requisitos: [] },
      { nombre: "Química", codigo: "NUT-112", requisitos: [] },
      { nombre: "Biología Celular y Molecular", codigo: "NUT-113", requisitos: [] },
      { nombre: "Matemáticas Biomédicas", codigo: "NUT-114", requisitos: [] },
      { nombre: "Introducción a la Actividad Profesional", codigo: "NUT-115", requisitos: [] },
      { nombre: "Búsqueda de Sistematización de Información Científica y uso de TICS", codigo: "NUT-116", requisitos: [] }
    ] },
    { numero: 2, ramos: [
      { nombre: "Fisiología", codigo: "NUT-121", requisitos: ["NUT-111"] },
      { nombre: "Bioquímica", codigo: "NUT-122", requisitos: ["NUT-112", "NUT-113"] },
      { nombre: "Microbiología y Parasitología", codigo: "NUT-123", requisitos: ["NUT-113"] },
      { nombre: "Bromatología y Tecnología de los Alimentos", codigo: "NUT-124", requisitos: ["NUT-112"] },
      { nombre: "Fundamentos de la Alimentación", codigo: "NUT-125", requisitos: [] },
      { nombre: "Inglés I", codigo: "IFG-100", requisitos: [] }
    ] },
    // Agrega los demás semestres aquí siguiendo el mismo patrón...
  ];

  const ramosMap = new Map();

  semestres.forEach(sem => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h3>Semestre ${sem.numero}</h3>`;
    
    sem.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.nombre}`;
      div.dataset.codigo = ramo.codigo;
      div.dataset.requisitos = JSON.stringify(ramo.requisitos);
      ramosMap.set(ramo.codigo, div);
      col.appendChild(div);

      div.addEventListener("dblclick", () => {
        tacharRamoYDependientes(ramo.codigo);
      });
    });

    malla.appendChild(col);
  });

  function tacharRamoYDependientes(codigo) {
    const visitados = new Set();

    function tachar(cod) {
      if (visitados.has(cod)) return;
      visitados.add(cod);

      const div = ramosMap.get(cod);
      if (div) div.classList.add("tachado");

      for (const [otroCod, otroDiv] of ramosMap.entries()) {
        const reqs = JSON.parse(otroDiv.dataset.requisitos);
        if (reqs.includes(cod)) {
          tachar(otroCod);
        }
      }
    }

    tachar(codigo);
  }
});
