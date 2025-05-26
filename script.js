window.addEventListener('click', () => {
const music = document.getElementById('bgMusic');
if (music.paused) {
    music.play().catch((err) => {
    console.log("Gagal autoplay: ", err);
    });
}
});

document.getElementById("startButton").addEventListener("click", function () {
    const audio = document.getElementById("music");
    const video = document.getElementById("weddingVideo");

    audio.play();
    video.play();
    document.getElementById("startOverlay").style.display = "none";
});
