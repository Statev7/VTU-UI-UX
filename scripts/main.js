function playAudio(id){
    const audio = document.getElementById(id);
    audio.play();
}

function stopAudio(id){
    const audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
}