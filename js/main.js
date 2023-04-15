// slideshow banner

let pictures = [
    'url("styles/img/shutterstock_1124727410.jpg")',
    'url("styles/img/shutterstock_696840955.jpg")',
    'url("styles/img/krlstad.jpg")',
];
let bannerBacgroundPicture = document.querySelector(".banner-grid");
let i = 0;
let interval = 4000;

function slideShow() {
    bannerBacgroundPicture.style.backgroundImage =
        pictures[i % pictures.length];
    i++;
}

setInterval(slideShow, interval);

window.onload = slideShow();

// Intersection Observer -> Counter

const mainCounters = document.querySelector(".counters");

const options = {};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let FIRST_COUNTER_FINAL_NUMBER = 20000;
            let SECOND_COUNTER_FINAL_NUMBER = 385;
            let THIRD_COUNTER_FINAL_NUMBER = 120;
            const TOTAL_DURATION = 2500; //ms
            const INTERVAL_DELAY = 25; //ms

            let firstIncrement = Math.round(
                FIRST_COUNTER_FINAL_NUMBER / (TOTAL_DURATION / INTERVAL_DELAY)
            );
            let secondIncrement = Math.round(
                SECOND_COUNTER_FINAL_NUMBER / (TOTAL_DURATION / INTERVAL_DELAY)
            );
            let thirdIncrement = Math.round(
                THIRD_COUNTER_FINAL_NUMBER / (TOTAL_DURATION / INTERVAL_DELAY)
            );

            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let firstInterval = setInterval(
                firstCounterCounting,
                INTERVAL_DELAY
            );
            let secondInterval = setInterval(
                secondCounterCounting,
                INTERVAL_DELAY
            );
            let thirdInterval = setInterval(
                thirdCounterCounting,
                INTERVAL_DELAY
            );

            function firstCounterCounting() {
                count1 += firstIncrement;
                document.querySelector(
                    ".counter-number1"
                ).innerHTML = `${count1} +`;

                if (count1 >= FIRST_COUNTER_FINAL_NUMBER) {
                    clearInterval(firstInterval);
                }
            }
            function secondCounterCounting() {
                count2 += secondIncrement;
                document.querySelector(".counter-number2").innerHTML =
                `${count2} +`;

                if (count2 >= SECOND_COUNTER_FINAL_NUMBER) {
                    clearInterval(secondInterval);
                }
            }
            function thirdCounterCounting() {
                count3 += thirdIncrement;
                document.querySelector(".counter-number3").innerHTML =
                `${count3} +`;

                if (count3 >= THIRD_COUNTER_FINAL_NUMBER) {
                    clearInterval(thirdInterval);
                }
            }


            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(mainCounters);







