// HAMBURGER MENU
const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("nav");

if (hamBtn && nav) {
    hamBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        hamBtn.classList.toggle("show");
    });
}

// LAST MODIFIED DATE
const lastDateEl = document.getElementById("lastDateModified");

if (lastDateEl) {
    lastDateEl.textContent = `Last Modified: ${document.lastModified}`;
}

// COURSES DATA
const courses = [
    { code: "WDD130", credits: 2, completed: true },
    { code: "WDD131", credits: 2, completed: true },
    { code: "WDD231", credits: 2, completed: false },
    { code: "CSE110", credits: 2, completed: false },
    { code: "CSE111", credits: 2, completed: false },
    { code: "CSE210", credits: 2, completed: false }
];

const container = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(courseList) {

    if (!container) return;

    container.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");
        card.textContent = course.code;
        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);

    });

    const total = courseList.reduce((sum, course) => sum + course.credits, 0);

    if (totalCredits) {
        totalCredits.textContent = total;
    }
}

// BUTTON EVENTS
const allBtn = document.getElementById("allBtn");
const wddBtn = document.getElementById("wddBtn");
const cseBtn = document.getElementById("cseBtn");

if (allBtn) {
    allBtn.addEventListener("click", () => {
        displayCourses(courses);
    });
}

if (wddBtn) {
    wddBtn.addEventListener("click", () => {
        const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
        displayCourses(wddCourses);
    });
}

if (cseBtn) {
    cseBtn.addEventListener("click", () => {
        const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
        displayCourses(cseCourses);
    });
}

// INITIAL DISPLAY
displayCourses(courses);