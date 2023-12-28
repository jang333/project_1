// 메인배너 S

//기본셋팅
document.addEventListener('DOMContentLoaded', function(){
    let current = 1;
    const slides = document.querySelectorAll('.slide');
    setInterval(slideTime,5000)

    //next
    function nextSlide() {
        let target = document.querySelector(`.slide${current}`);
        target.classList.remove("active");
        current = current < slides.length ? current + 1 : 1;
        target = document.querySelector(`.slide${current}`);
        target.classList.add("active");
        console.log(current)
    }

    function slideTime(){
        setTimeout(nextSlide, 3000);
    }
});



// 메인배너 E