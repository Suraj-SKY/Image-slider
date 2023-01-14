const nextElement = document.querySelector('.next');
const prevElement = document.querySelector('.prev');
const imageContainerElement = document.querySelector('.image-container');
const imgsElement = document.querySelectorAll('img');
// it gives the total number of img tags

let currentImg = 1; /* currently 1st image is selected 
and it will increase or decrease on click of next or 
prev button */

let timeOut;

nextElement.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
});

prevElement.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImg > imgsElement.length) { // when click on next after last image
        currentImg = 1;
    }
    else if (currentImg < 1) { // when click on prev before first image
        currentImg = imgsElement.length;
    }

    // imageContainerElement.style.transform = `translateX(${-currentImg * 100}%)`;
    imageContainerElement.style.transform = `translateX(${-(currentImg - 1) * 500}px)`;

    timeOut = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}