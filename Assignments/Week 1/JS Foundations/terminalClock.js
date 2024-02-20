function formatTimeComponent(component) {
  return component < 10 ? `0${component}` : component;
}
function displayClock() {
  const now = new Date();
  const hour = formatTimeComponent(now.getHours());
  const minutes = formatTimeComponent(now.getMinutes());
  const seconds = formatTimeComponent(now.getSeconds());

  console.clear();
  console.log(`${hour}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);
