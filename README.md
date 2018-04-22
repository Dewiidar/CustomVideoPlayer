# 11 - Custom Video Player - JavaScript30 Challenge

### Practising:

Creating custom video player controllers. 

### Notes :

```javascript
function togglePlayFn() {
    const method = video.paused ? 'play' : 'pause'; //video has a property called paused
    video[method]();  // calling method name of video
}
```
```javascript
function updateButton() {
    const icon = this.paused ? '►' : '❚❚' ; //setting const to equal one of the two values depending on a condition.
    //this return on video object since this function is called as a callback in addEventListener on video.
    togglePlay.textContent = icon; // same as .innerHTML
}
```
```javascript
video.addEventListener('play', updateButton); // to update the button if the video has been played or stopped by any external plugin and not by clicking on either the video viewer or the toggle button
video.addEventListener('pause', updateButton);
```
```javascript
function skip() {
    video.currentTime += parseFloat(this.dataset.skip); //dataset will get all the data- attributes attached to the current item.
    //parseFloat() will convert the value from a string to a number
}
```
```javascript
function sliderChange() {
    video[this.name] = this.value; //gets the name from the DOM element (which has been added manually by us to differentiate between different sliders) and prevent us from repeating code and write more dry code.
}
```
```javascript
function handleProgress() {
    const percent = (video.currentTime * 100) / video.duration;
    progress.style.flexBasis = `${percent}%`; //flex-basis is written like that
}
```
```javascript
function scrub(e) {
    const scrubTime = (e.offsetX / progressBackgroundDiv.offsetWidth) * video.duration; // we use offsetX to get the X value and offsetWidth to get the full width of an element
    video.currentTime = scrubTime;
}
```
```javascript
let mousedown = false; // to be used as a condition of when to trigger a function inside the callback function of the addEventListener
progressBackgroundDiv.addEventListener('click', scrub);

progressBackgroundDiv.addEventListener('mousemove', (e) => {
    mousedown ? scrub(e) : ''
});
progressBackgroundDiv.addEventListener('mousedown', () => mousedown = true);
progressBackgroundDiv.addEventListener('mouseup', () => mousedown = false);
```

## Getting Started

Clone or download the repository to your local drive.

### Prerequisites

What you need to install:

This project was created using Gulp automation tool, you can run the following command to the local repo directory to install all the dev dependencies

```
npm install
```

### Write gulp in the terminal / command line to run the live server.

## Authors

* **Mohamed Dewidar** - _practising the mentioned methods_ - [Linkedin](https://www.linkedin.com/in/mohamed-dewidar-331252153/)

## License

This project is licensed under the MIT License. (open-source)

## Acknowledgments

* Wesbos - _creator of the challenge_ - (https://github.com/wesbos/JavaScript30)
