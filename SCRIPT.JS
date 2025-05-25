window.addEventListener('click', () => {
const music = document.getElementById('bgMusic');
if (music.paused) {
    music.play().catch((err) => {
    console.log("Gagal autoplay: ", err);
    });
}
});