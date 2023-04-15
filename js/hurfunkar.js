// hurfunkardet sidan

const questions = document.querySelectorAll(".question");

questions.forEach(function showParagraph(question) {
    question.addEventListener("click", () => {
        question.classList.toggle("show");
    });
});
