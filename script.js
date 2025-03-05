document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playButton = document.createElement("button");
    playButton.innerText = "▶ Play";
    playButton.classList.add("play-btn");
    
    const playerDiv = document.querySelector(".player");
    playerDiv.appendChild(playButton);
    
    let isPlaying = false;
    
    playButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playButton.innerText = "▶ Play";
        } else {
            audio.play();
            playButton.innerText = "⏸ Pause";
        }
        isPlaying = !isPlaying;
    });

    // Change the play button text when the song ends
    audio.addEventListener("ended", () => {
        playButton.innerText = "▶ Play";
        isPlaying = false;
    });
});
