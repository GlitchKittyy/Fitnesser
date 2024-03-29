var selectedWorkouts = [];
let randomiser = false;

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('workoutForm');
    var checkboxes = form.elements['workout'];

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', updateWorkouts);
    }

    var developer1Checkbox = form.elements['developer1'];
    developer1Checkbox.addEventListener('change', toggleRandomiser);

    updateWorkouts();

    var generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', showGenerator);
});

function toggleRandomiser() {
    randomiser = !randomiser;
}

function showGenerator() {
    var generatorElement = document.getElementById('generator');
    var choiceElement = document.getElementById('choice');
    var checklistElement = document.getElementById('checklist');
    choiceElement.classList.add('fade-out');

    setTimeout(function () {
        choiceElement.style.display = "none";
    }, 500);

    generatorElement.style.display = "none";

    setTimeout(function () {
        checklistElement.classList.add('fade-in');
        checklistElement.style.display = "grid";
    }, 500);

    var form = document.getElementById('workoutForm');
    var checkboxes = form.elements['workout'];

    selectedWorkouts = Array.from(checkboxes).map(function (checkbox) {
        return checkbox.value;
    });

    var customRestDaysSection = document.getElementById('customRestDaysSection');
    if (document.getElementById('developerRestDays').checked) {
        customRestDaysSection.style.display = 'grid';
        var customRestDaysCheckboxes = document.getElementsByName('restDay');
        customRestDays = Array.from(customRestDaysCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        fillRemainingDaysWithCustomRest();
    } else {
        customRestDaysSection.style.display = 'none';
        fillRemainingDaysWithRest();
    }

    displaySavedWorkouts();
}



function updateWorkouts() {
    var checkedCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount > maxCheckboxes) {
        checkboxLimitMessage.textContent = 'Max is 7';
        this.checked = false;
    } else {
        checkboxLimitMessage.textContent = '';
    }

    selectedWorkouts = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedWorkouts.push(checkboxes[i].value);
        }
    }

    if (!randomiser) {
        fillRemainingDaysWithRest();
    }

    displaySavedWorkouts();
}

function fillRemainingDaysWithRest() {
    var remainingDays = 7 - selectedWorkouts.length;

    if (!randomiser) {
        for (var i = 0; i < remainingDays; i++) {
            selectedWorkouts.push('Rustdag');
        }
    } else {
        var randomWorkouts = selectedWorkouts.slice();
        while (randomWorkouts.length < 7) {
            randomWorkouts = randomWorkouts.concat(randomWorkouts.slice(0, remainingDays));
        }
        selectedWorkouts = randomWorkouts.slice(0, 7);
    }
}





function displaySavedWorkouts() {
    var savedWorkoutsList = document.getElementById('savedWorkoutsList');
    savedWorkoutsList.innerHTML = "";
    for (var i = 0; i < selectedWorkouts.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerText = selectedWorkouts[i];
        savedWorkoutsList.appendChild(listItem);
    }

    document.getElementById('savedWorkouts').style.display = "grid";
}

function generateSchedule() {
    var scheduleElement = document.getElementById('workout');
    shuffleArray(selectedWorkouts);

    var days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

    var schedule = "Training Schema:\n\n";
    for (var i = 0; i < selectedWorkouts.length; i++) {
        schedule += days[i] + ": " + selectedWorkouts[i] + "\n";
    }

    scheduleElement.innerText = schedule;
    var generatorElement = document.getElementById('generator');
    var downloadElement = document.getElementById('download');
    generatorElement.style.display = "grid";
    downloadElement.style.display = "grid";
    generatorElement.classList.add('fade-in');
    document.getElementById("generator").scrollIntoView({ behavior: "smooth" });

}

function shuffleArray(array) {
    if (!randomiser){
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    else{

    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function capture() {
    var generatorElement = document.getElementById('generator');

    domtoimage.toJpeg(generatorElement)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            rngnumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
            link.download = 'schemafitnesser' + rngnumber;
            link.click();
        })
        .catch(function (error) {
            console.error('Error capturing image:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('workoutForm');
    var checkboxes = form.elements['workout'];
    var maxCheckboxes = 7;
    var checkboxLimitMessage = document.createElement('p');
    checkboxLimitMessage.className = 'checkbox-limit-message';
    form.appendChild(checkboxLimitMessage);

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', updateWorkouts);
    }

    function updateWorkouts() {
        var checkedCount = 0;

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedCount++;
            }
        }

        if (checkedCount > maxCheckboxes) {
            checkboxLimitMessage.textContent = 'Maximaal 7 secties kunnen worden aangevinkt.';
            this.checked = false;
        } else {
            checkboxLimitMessage.textContent = '';
        }

        selectedWorkouts = [];

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedWorkouts.push(checkboxes[i].value);
            }
        }

        if(!randomiser){
            fillRemainingDaysWithRest();
        }
        displaySavedWorkouts();
    }


});
