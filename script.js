document.addEventListener("DOMContentLoaded", () => {

    let current = 0;
    const scenes = document.querySelectorAll('.scene');

    function rotate() {
        scenes[current].classList.remove('active');
        current = (current + 1) % scenes.length;
        scenes[current].classList.add('active');
    }

    setInterval(rotate, 6000);

});
