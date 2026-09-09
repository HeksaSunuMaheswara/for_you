let currentPage = 0;

const pages = document.querySelectorAll(".page");
const pageIndicator = document.getElementById("currentPage");

function showPage(index) {

    if (index < 0 || index >= pages.length) {
        return;
    }

    pages.forEach((page, i) => {

        page.classList.remove("active", "previous");

        if (i < index) {
            page.classList.add("previous");
        }

        if (i === index) {
            page.classList.add("active");
        }
    });

    currentPage = index;

    pageIndicator.textContent =
        String(index + 1).padStart(2, "0");
}


function nextPage() {

    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }

}


function prevPage() {

    if (currentPage > 0) {
        showPage(currentPage - 1);
    }

}


function goToStart() {

    showPage(0);

}


/* ================= SWIPE HP ================= */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function (event) {

    touchStartX = event.changedTouches[0].screenX;

});


document.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 70) {
        return;
    }

    if (distance < 0) {
        nextPage();
    } else {
        prevPage();
    }

});


/* ================= KEYBOARD ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        prevPage();
    }

});


showPage(0);