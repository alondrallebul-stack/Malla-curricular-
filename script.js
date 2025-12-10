// Cargar ramos aprobados desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        const id = course.dataset.id;

        // Si estaba aprobado previamente
        if (localStorage.getItem(id) === "aprobado") {
            course.classList.add("approved");
        }

        // Evento al hacer clic
        course.addEventListener("click", () => {
            course.classList.toggle("approved");

            if (course.classList.contains("approved")) {
                localStorage.setItem(id, "aprobado");
            } else {
                localStorage.removeItem(id);
            }
        });
    });
});
