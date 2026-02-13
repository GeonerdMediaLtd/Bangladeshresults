document.addEventListener("DOMContentLoaded", () => {

    let current = 0;
    const scenes = document.querySelectorAll('.scene');
    const delay = 4000; // 4 seconds

    function rotate() {
        scenes[current].classList.remove('active');
        current = (current + 1) % scenes.length;
        scenes[current].classList.add('active');
    }

    // Start after 4 seconds (so BNP stays visible first)
    setTimeout(() => {
        rotate();
        setInterval(rotate, delay);
    }, delay);

});
