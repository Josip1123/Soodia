// hurfunkardet sidan

const questions = document.querySelectorAll(".question");
const plusAndMinusSymbol = document.querySelectorAll(".testikulis");

questions.forEach(function showParagraph(question) {
    question.addEventListener("click", () => {
        question.classList.toggle("show");
    });
});

