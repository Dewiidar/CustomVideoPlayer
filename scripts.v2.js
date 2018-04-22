var sliders = document.querySelectorAll('.player__slider');

var togglePlay = document.querySelector('.toggle');

var video = document.querySelector('.player__video');
var progressBackgroundDiv = document.querySelector('.progress');
var progress = document.querySelector('.progress__filled');

var skipButtons = document.querySelectorAll('[data-skip]');

function togglePlayFn() {
    const method = video.paused ? 'play' : 'pause'; //video has a property called paused
    video[method]();  // calling method name of video
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚' ; //setting const to equal one of the two values depending on a condition.
    //this return on video object since this function is called as a callback in addEventListener on video.
    togglePlay.textContent = icon; // same as .innerHTML
}

video.addEventListener('click', togglePlayFn);
togglePlay.addEventListener('click', togglePlayFn);

video.addEventListener('play', updateButton); // to update the button if the video has been played or stopped by any external plugin and not by clicking on either the video viewer or the toggle button
video.addEventListener('pause', updateButton);

function skip() {
    video.currentTime += parseFloat(this.dataset.skip); //dataset will get all the data- attributes attached to the current item.
    //parseFloat() will convert the value from a string to a number
}
skipButtons.forEach(button => button.addEventListener('click', skip));

function sliderChange() {
    video[this.name] = this.value; //gets the name from the DOM element (which has been added manually by us to differentiate between different sliders) and prevent us from repeating code and write more dry code.
}

sliders.forEach(element => element.addEventListener('input', sliderChange));

function handleProgress() {
    const percent = (video.currentTime * 100) / video.duration;
    progress.style.flexBasis = `${percent}%`;
}

video.addEventListener('timeupdate', handleProgress);

function scrub(e) {
    const scrubTime = (e.offsetX / progressBackgroundDiv.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let mousedown = false; // to be used as a condition of when to trigger a function inside the callback function of the addEventListener
progressBackgroundDiv.addEventListener('click', scrub);

progressBackgroundDiv.addEventListener('mousemove', (e) => {
    mousedown ? scrub(e) : ''
});
progressBackgroundDiv.addEventListener('mousedown', () => mousedown = true);
progressBackgroundDiv.addEventListener('mouseup', () => mousedown = false);