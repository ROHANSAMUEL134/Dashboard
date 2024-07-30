document.addEventListener("DOMContentLoaded", () => {
    const themeToggler = document.getElementById("theme");
    const tinyBall = document.getElementById("tiny-ball");
    themeToggler.addEventListener("click", () => {
        if(tinyBall.style.float=='left'){
            tinyBall.style.float = 'right';
        } else {
            tinyBall.style.float = 'left';
        }
    });    
});