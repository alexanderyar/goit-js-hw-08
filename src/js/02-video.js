// import throttle from 'lodash.throttle';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const throttledTimeCaptureFunction = _.throttle(timeCaptureFunction, 3000);


// const onTimeupdate = function () {
//     // data is an object containing properties specific to that event
// };
player.on('timeupdate', throttledTimeCaptureFunction);



function timeCaptureFunction (e)  {
    console.log(e.seconds);
    

  localStorage.setItem('videoplayer-current-time', e.seconds); 
    // console.log(localStorage.getItem)
}




player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
