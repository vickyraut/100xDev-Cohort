console.log("Counter of 30 seconds");
let time = 30;

function setCountdown() {
  console.log(time);
  if (time == 0) {
    clearInterval(interval);
    console.log("Coundown Completed");
  }

  time--;
}

const interval = setInterval(setCountdown, 1000);
