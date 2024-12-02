// Lista de estudiantes

const estudiantes = [
    {nombre: "Johan", nota: 9.0},
    {nombre: "Danny", nota: 9.5},
    {nombre: "Carlos", nota: 9.0},
    {nombre: "Michelle", nota: 3.8},
    {nombre: "Andres", nota: 5.9}
    ];
    
    // Filtrar aprobados

    const aprobados = estudiantes
    
    .filter(estudiante => estudiante.nota >= 6)
    .map(estudiante => estudiante.nombre);
    console.log("Estudiantes aprobados:", aprobados);