
const backgroundMusic = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('musicButton');

playButton.addEventListener('click', () => {
    backgroundMusic.play();
});

musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = "Pause Music";
    } else {
        backgroundMusic.pause();
        musicButton.textContent = "Play Music";
    }
});
