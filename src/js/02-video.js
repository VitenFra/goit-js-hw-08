import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeData = localStorage.getItem('videoplayerCurrentTime');

if (timeData) {
  player.setCurrentTime(timeData);
}

player.on('timeupdate',throttle(savedTime, 1000));
function savedTime (data) {
  localStorage.setItem('videoplayerCurrentTime', data.seconds);  
}