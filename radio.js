const musicPlayer = document.getElementById('music-player');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [ :'musicas/aurora1.mp3', 'musicas/aurora2.mp3', 'musicas/ca1.mp3','musicas/ca2.mp3', 'musicas/luisa1.mp3', 'musicas/surreal(2).mp3',:'musicas/lowroar1.mp3', 'musicas/lowroar2.mp3', 'musicas/chopin1.mp3', 'musicas/lasiene2.mp3' ]; 
let currentSongIndex = 0;

function playPause() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        musicPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    musicPlayer.src = `radiomp3/${songs[currentSongIndex]}`;
    musicPlayer.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    musicPlayer.src = `radiomp3/${songs[currentSongIndex]}`;
    musicPlayer.play();
}

playButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
