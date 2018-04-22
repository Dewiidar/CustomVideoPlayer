var sliders = document.querySelectorAll('.player__slider');

var buttons = document.querySelectorAll('.player__button');

var video = document.querySelector('.player__video');
var progress = document.querySelector('.progress__filled');
var progressBackgroundDiv = document.querySelector('.progress');

var volume = sliders[0];
var playbackRate = sliders[1];

var togglePlay = buttons[0];
var skip10secs = buttons[1];
var skip25secs = buttons[2];

var videoPlaying = false;
video.addEventListener('play', function (e) {
    videoPlaying = true;
});
video.addEventListener('pause', function (e) {
    videoPlaying = false;
});

function play() {
    video.play();
    togglePlay.textContent = '||';
}
function pause() {
    video.pause();
    togglePlay.textContent = '►';
}
function playPause() {
    if (videoPlaying) {
        pause();
    } else {
        play();
    }
}
togglePlay.addEventListener('click', playPause);
video.addEventListener('click', playPause);

volume.addEventListener('change', function () {
    video.volume = volume.value;
});
playbackRate.addEventListener('change', function () {
    video.playbackRate = playbackRate.value;
});

skip10secs.addEventListener('click', function () {
    video.currentTime -= 10;
});

skip25secs.addEventListener('click', function () {
    video.currentTime += 25;
});

progress.addEventListener('click', progressBar);

function progressBar() {
    var percentage = (video.currentTime * 100) / video.duration;
    progress.style.flexBasis = `${percentage}%`;
}

video.addEventListener('timeupdate', progressBar);

progressBackgroundDiv.addEventListener('click', function (e) {
    console.log(e.clientX);
    console.log(progressBackgroundDiv.style);
});