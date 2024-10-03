// window.addEventListener('load', () => {
//     setTimeout(() => {
//         document.getElementById('loading-screen').style.display = 'none';
//     }, 1000); // 5000 milliseconds = 5 seconds
// });

function triggerAnimation() {
    const box = document.getElementById("box");
    const animationType = document.getElementById("animation-type").value;

    box.classList.remove("fade-in", "fade-out", "slide-in", "slide-out", "bounce", "zoom-in", "zoom-out", 
                         "rotate", "pulse", "shake", "flip", "wiggle", "expand", "collapse");

    if (animationType) {
        box.classList.add(animationType);
    }
}

function resetAnimation() {
    const box = document.getElementById("box");

    box.className = "box";
    box.style.opacity = "1";
    box.style.transform = "none";
}
