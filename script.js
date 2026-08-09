const startDate =
  new Date(
    "2026-05-10T00:00:00"
  );


const daysElement =
  document.getElementById(
    "days"
  );

const hoursElement =
  document.getElementById(
    "hours"
  );

const minutesElement =
  document.getElementById(
    "minutes"
  );

const secondsElement =
  document.getElementById(
    "seconds"
  );

const daysTogetherElement =
  document.getElementById(
    "daysTogether"
  );


function updateCounter() {

  const now =
    new Date();

  const difference =
    now - startDate;


  if (difference < 0) {
    return;
  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds /
      86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) / 3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) / 60
    );


  const seconds =
    totalSeconds %
    60;


  daysElement.textContent =
    days;

  hoursElement.textContent =
    String(
      hours
    ).padStart(
      2,
      "0"
    );

  minutesElement.textContent =
    String(
      minutes
    ).padStart(
      2,
      "0"
    );

  secondsElement.textContent =
    String(
      seconds
    ).padStart(
      2,
      "0"
    );

  daysTogetherElement.textContent =
    days;

}


updateCounter();


setInterval(
  updateCounter,
  1000
);



/* =========================
   MUSIC PLAYER
========================= */

const audio =
  document.getElementById(
    "audio"
  );

const playButton =
  document.getElementById(
    "playButton"
  );

const musicToggle =
  document.getElementById(
    "musicToggle"
  );

const progress =
  document.getElementById(
    "progress"
  );

const currentTimeElement =
  document.getElementById(
    "currentTime"
  );

const durationElement =
  document.getElementById(
    "duration"
  );


function toggleMusic() {

  if (audio.paused) {

    audio.play();

    playButton.textContent =
      "❚❚";

    musicToggle.textContent =
      "♫";

  } else {

    audio.pause();

    playButton.textContent =
      "▶";

    musicToggle.textContent =
      "♪";

  }

}


playButton.addEventListener(
  "click",
  toggleMusic
);


musicToggle.addEventListener(
  "click",
  toggleMusic
);



/* MUSIC PROGRESS */

audio.addEventListener(
  "loadedmetadata",
  function () {

    durationElement.textContent =
      formatTime(
        audio.duration
      );

  }
);


audio.addEventListener(
  "timeupdate",
  function () {

    if (!audio.duration) {
      return;
    }


    const percentage =
      (
        audio.currentTime /
        audio.duration
      ) * 100;


    progress.value =
      percentage;


    currentTimeElement.textContent =
      formatTime(
        audio.currentTime
      );

  }
);


progress.addEventListener(
  "input",
  function () {

    if (!audio.duration) {
      return;
    }


    const newTime =
      (
        progress.value /
        100
      ) *
      audio.duration;


    audio.currentTime =
      newTime;

  }
);



function formatTime(
  seconds
) {

  if (
    !seconds ||
    isNaN(seconds)
  ) {
    return "0:00";
  }


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remainingSeconds =
    Math.floor(
      seconds % 60
    );


  return (
    minutes +
    ":" +
    String(
      remainingSeconds
    ).padStart(
      2,
      "0"
    )
  );

}



/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
  document.getElementById(
    "floatingHearts"
  );


function createHeart() {

  const heart =
    document.createElement(
      "div"
    );


  heart.classList.add(
    "floating-heart"
  );


  const hearts = [
    "♥",
    "♡",
    "❤"
  ];


  heart.textContent =
    hearts[
      Math.floor(
        Math.random() *
        hearts.length
      )
    ];


  heart.style.left =
    Math.random() *
    100 +
    "vw";


  heart.style.fontSize =
    (
      15 +
      Math.random() *
      32
    ) +
    "px";


  heart.style.animationDuration =
    (
      8 +
      Math.random() *
      8
    ) +
    "s";


  heartsContainer.appendChild(
    heart
  );


  setTimeout(
    function () {
      heart.remove();
    },
    16000
  );

}


setInterval(
  createHeart,
  1000
);