document.addEventListener("DOMContentLoaded", () => {
  createOptions("first-question-options", 7);
  createTextOptions("second-question-options", [
    "Not Till Failure",
    "Till Failure",
    "Beyond Failure",
  ]);
  //createTextOptions("third-question-options", ["Build muscle", "Lose weight"]);
  // Hey get away from the code, You shouldn't be sniffing around in here
});

let firstAnswer = 0;
let secondAnswer = 0;
let thirdAnswer = 0;

const trainingSchedules = {
  1: {
    "Not Till Failure": [
      "Day 1: Full Body (Chest 10-12, Back 10-12, Legs 10-12, Shoulders 10-12, Arms 10-12)",
    ],
    "Till Failure": [
      "Day 1: Full Body (Chest 8-10, Back 8-10, Legs 8-10, Shoulders 8-10, Arms 8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Full Body (Chest 6-8, Back 6-8, Legs 6-8, Shoulders 6-8, Arms 6-8)",
    ],
  },
  2: {
    "Not Till Failure": [
      "Day 1: Upper Body (Chest 10-12, Back 10-12, Shoulders 10-12, Arms 10-12)",
      "Day 2: Lower Body (Legs 10-12)",
    ],
    "Till Failure": [
      "Day 1: Upper Body (Chest 8-10, Back 8-10, Shoulders 8-10, Arms 8-10)",
      "Day 2: Lower Body (Legs 8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Upper Body (Chest 6-8, Back 6-8, Shoulders 6-8, Arms 6-8)",
      "Day 2: Lower Body (Legs 6-8)",
    ],
  },
  3: {
    "Not Till Failure": [
      "Day 1: Push (Chest 10-12, Shoulders 10-12, Triceps 10-12)",
      "Day 2: Pull (Back 10-12, Biceps 10-12)",
      "Day 3: Legs (10-12)",
    ],
    "Till Failure": [
      "Day 1: Push (Chest 8-10, Shoulders 8-10, Triceps 8-10)",
      "Day 2: Pull (Back 8-10, Biceps 8-10)",
      "Day 3: Legs (8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Push (Chest 6-8, Shoulders 6-8, Triceps 6-8)",
      "Day 2: Pull (Back 6-8, Biceps 6-8)",
      "Day 3: Legs (6-8)",
    ],
  },
  4: {
    "Not Till Failure": [
      "Day 1: Chest & Back (Chest 10-12, Back 10-12)",
      "Day 2: Legs (10-12)",
      "Day 3: Shoulders & Arms (Shoulders 10-12, Arms 10-12)",
      "Day 4: Full Body (Chest 10-12, Back 10-12, Legs 10-12, Shoulders 10-12, Arms 10-12)",
    ],
    "Till Failure": [
      "Day 1: Chest & Back (Chest 8-10, Back 8-10)",
      "Day 2: Legs (8-10)",
      "Day 3: Shoulders & Arms (Shoulders 8-10, Arms 8-10)",
      "Day 4: Full Body (Chest 8-10, Back 8-10, Legs 8-10, Shoulders 8-10, Arms 8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Chest & Back (Chest 6-8, Back 6-8)",
      "Day 2: Legs (6-8)",
      "Day 3: Shoulders & Arms (Shoulders 6-8, Arms 6-8)",
      "Day 4: Full Body (Chest 6-8, Back 6-8, Legs 6-8, Shoulders 6-8, Arms 6-8)",
    ],
  },
  5: {
    "Not Till Failure": [
      "Day 1: Chest & Triceps (Chest 10-12, Triceps 10-12)",
      "Day 2: Back & Biceps (Back 10-12, Biceps 10-12)",
      "Day 3: Legs (10-12)",
      "Day 4: Shoulders & Arms (Shoulders 10-12, Biceps 10-12, Triceps 10-12)",
      "Day 5: Full Body (Chest 8-10, Back 8-10, Legs 8-10, Shoulders 8-10, Arms 8-10)",
    ],
    "Till Failure": [
      "Day 1: Chest & Triceps (Chest 8-10, Triceps 8-10)",
      "Day 2: Back & Biceps (Back 8-10, Biceps 8-10)",
      "Day 3: Legs (8-10)",
      "Day 4: Shoulders & Arms (Shoulders 8-10, Biceps 8-10, Triceps 8-10)",
      "Day 5: Full Body (Chest 6-8, Back 6-8, Legs 6-8, Shoulders 6-8, Arms 6-8)",
    ],
    "Beyond Failure": [
      "Day 1: Chest & Triceps (Chest 6-8, Triceps 6-8)",
      "Day 2: Back & Biceps (Back 6-8, Biceps 6-8)",
      "Day 3: Legs (6-8)",
      "Day 4: Shoulders & Arms (Shoulders 6-8, Biceps 6-8, Triceps 6-8)",
      "Day 5: Full Body (Chest 4-6, Back 4-6, Legs 4-6, Shoulders 4-6, Arms 4-6)",
    ],
  },
  6: {
    "Not Till Failure": [
      "Day 1: Push (Chest 10-12, Shoulders 10-12, Triceps 10-12)",
      "Day 2: Pull (Back 10-12, Biceps 10-12)",
      "Day 3: Legs (10-12)",
      "Day 4: Push (Chest 10-12, Shoulders 10-12, Triceps 10-12)",
      "Day 5: Pull (Back 10-12, Biceps 10-12)",
      "Day 6: Legs (10-12)",
    ],
    "Till Failure": [
      "Day 1: Push (Chest 8-10, Shoulders 8-10, Triceps 8-10)",
      "Day 2: Pull (Back 8-10, Biceps 8-10)",
      "Day 3: Legs (8-10)",
      "Day 4: Push (Chest 8-10, Shoulders 8-10, Triceps 8-10)",
      "Day 5: Pull (Back 8-10, Biceps 8-10)",
      "Day 6: Legs (8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Push (Chest 6-8, Shoulders 6-8, Triceps 6-8)",
      "Day 2: Pull (Back 6-8, Biceps 6-8)",
      "Day 3: Legs (6-8)",
      "Day 4: Push (Chest 6-8, Shoulders 6-8, Triceps 6-8)",
      "Day 5: Pull (Back 6-8, Biceps 6-8)",
      "Day 6: Legs (6-8)",
    ],
  },
  7: {
    "Not Till Failure": [
      "Day 1: Chest (10-12)",
      "Day 2: Back (10-12)",
      "Day 3: Legs (10-12)",
      "Day 4: Shoulders (10-12)",
      "Day 5: Arms (10-12)",
      "Day 6: Core (10-12)",
      "Day 7: Full Body (Chest 10-12, Back 10-12, Legs 10-12, Shoulders 10-12, Arms 10-12)",
    ],
    "Till Failure": [
      "Day 1: Chest (8-10)",
      "Day 2: Back (8-10)",
      "Day 3: Legs (8-10)",
      "Day 4: Shoulders (8-10)",
      "Day 5: Arms (8-10)",
      "Day 6: Core (8-10)",
      "Day 7: Full Body (Chest 8-10, Back 8-10, Legs 8-10, Shoulders 8-10, Arms 8-10)",
    ],
    "Beyond Failure": [
      "Day 1: Chest (6-8)",
      "Day 2: Back (6-8)",
      "Day 3: Legs (6-8)",
      "Day 4: Shoulders (6-8)",
      "Day 5: Arms (6-8)",
      "Day 6: Core (6-8)",
      "Day 7: Full Body (Chest 6-8, Back 6-8, Legs 6-8, Shoulders 6-8, Arms 6-8)",
    ],
  },
};

function createOptions(containerId, numOptions) {
  const container = document.getElementById(containerId);

  for (let i = 1; i <= numOptions; i++) {
    const option = document.createElement("span");
    option.className = "dot";
    option.textContent = i;
    option.onclick = () => selectOption(containerId, i);
    container.appendChild(option);
  }
}

function createTextOptions(containerId, options) {
  const container = document.getElementById(containerId);

  options.forEach((text, index) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = () => selectTextOption(containerId, index + 1);
    container.appendChild(button);
  });
}

function selectOption(containerId, value) {
  if (containerId === "first-question-options") {
    firstAnswer = value;
  }

  const options = document.getElementById(containerId).children;
  Array.from(options).forEach((opt) => opt.classList.remove("selected"));
  options[value - 1].classList.add("selected");
}

function selectTextOption(containerId, value) {
  if (containerId === "second-question-options") {
    secondAnswer = value;
  } else if (containerId === "third-question-options") {
    thirdAnswer = value;
  }

  const buttons = document.querySelectorAll(`#${containerId} button`);
  buttons.forEach((btn) => btn.classList.remove("selected"));
  buttons[value - 1].classList.add("selected");
}

function generateResults() {
  if (firstAnswer === 0 || secondAnswer === 0) {
    alert("Please answer all questions.");
    return;
  }

  const intensityMap = {
    1: "Not Till Failure",
    2: "Till Failure",
    3: "Beyond Failure",
  };
  const intensity = intensityMap[secondAnswer];
  const schedule = trainingSchedules[firstAnswer]?.[intensity] || [
    "Please select a valid training frequency and intensity.",
  ];

  const resultContainer = document.getElementById("result");

  const formattedSchedule = schedule
    .map((day, index) => {
      const dayDetails = day.split(" (");
      const dayName = dayDetails[0];
      const exercises = dayDetails[1]?.replace(")", "").split(", ");

      return `
        <div class="results">
          <div class="day-result">
            <h2>${dayName}</h2>
            <ul>
              ${exercises.map((exercise) => `<li>${exercise}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    })
    .join("");

  resultContainer.innerHTML = formattedSchedule;
  document.getElementById("export-button").style.display = "flex";
  resultContainer.scrollIntoView({ behavior: "smooth" });
}

function exportToPng() {
  const resultContainer = document.getElementById("result");
  const dayResults = document.getElementsByClassName("day-result");

  for (let i = 0; i < dayResults.length; i++) {
    dayResults[i].classList.add("screenshot");
  }

  html2canvas(resultContainer, {
    scale: 2,
  }).then((canvas) => {
    const link = document.createElement("a");
    let randomNUM = Math.floor(Math.random() * (999 - 100) + 100);
    link.download = randomNUM + "_Fitnesser.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    for (let i = 0; i < dayResults.length; i++) {
      dayResults[i].classList.remove("screenshot");
    }
  });
}
