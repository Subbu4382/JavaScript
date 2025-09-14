 let clockInterval, countdownInterval, stopwatchInterval;
    let countdownValue = 0;
    let stopwatchSeconds = 0;

    function showMode(mode) {
      document.querySelectorAll(".mode").forEach(div => div.style.display = "none");
      document.getElementById(mode).style.display = "block";
    }

    function startClock() {
      clockInterval = setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString();
        document.getElementById("clockDisplay").textContent = time;
      }, 1000);
    }
    startClock();


    function startCountdown() {
      stopCountdown();
      countdownValue = parseInt(document.getElementById("countdownInput").value) || 0;
      document.getElementById("countdownDisplay").textContent = countdownValue;

      countdownInterval = setInterval(() => {
        if (countdownValue > 0) {
          countdownValue--;
          document.getElementById("countdownDisplay").textContent = countdownValue;
        } else {
          clearInterval(countdownInterval);
          document.body.innerHTML = "<h1 style='color:red; font-size:50px; text-align:center;'> Time's Up!</h1>";
        }
      }, 1000);
    }
    function stopCountdown() {
      clearInterval(countdownInterval);
    }
    function resetCountdown() {
      stopCountdown();
      countdownValue = 0;
      document.getElementById("countdownDisplay").textContent = 0;
    }

    function startStopwatch() {
      stopStopwatch();
      stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        let hrs = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, "0");
        let mins = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, "0");
        let secs = String(stopwatchSeconds % 60).padStart(2, "0");
        document.getElementById("stopwatchDisplay").textContent = `${hrs}:${mins}:${secs}`;
      }, 1000);
    }
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
    }
    function resetStopwatch() {
      stopStopwatch();
      stopwatchSeconds = 0;
      document.getElementById("stopwatchDisplay").textContent = "00:00:00";
    }