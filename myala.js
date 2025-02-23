// Function to display the current time
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });
    timeElement.textContent = formattedTime;

    // Check alarms
    checkAlarms();
}

// Array to store the alarms
const alarms = [];

// Function to add a new alarm
function addAlarm(alarmName, alarmDate, alarmTime) {
    const alarmDateTime = new Date(`${alarmDate}T${alarmTime}`);
    if (alarmDateTime > new Date()) {
        alarms.push({ name: alarmName, time: alarmDateTime });
        renderAlarms();
        alert("Alarm set successfully!");
    } else {
        alert("Cannot set an alarm for the past. Please choose a future date and time.");
    }
}

// Function to render the list of alarms
function renderAlarms() {
    const alarmsElement = document.getElementById("alarms");
    alarmsElement.innerHTML = "";

    alarms.forEach((alarm, index) => {
        const alarmElement = document.createElement("div");
        alarmElement.className = "alarm";

        const alarmInfo = document.createElement("span");
        alarmInfo.textContent = `${alarm.name} - ${alarm.time.toLocaleString()}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-alarm";
        deleteButton.onclick = () => deleteAlarm(index);

        alarmElement.appendChild(alarmInfo);
        alarmElement.appendChild(deleteButton);
        alarmsElement.appendChild(alarmElement);
    });
}

// Function to delete an alarm
function deleteAlarm(index) {
    alarms.splice(index, 1);
    renderAlarms();
}

// Function to check if any alarm is due
function checkAlarms() {
    const now = new Date();

    alarms.forEach((alarm, index) => {
        if (alarm.time <= now) {
            alert(`Alarm "${alarm.name}" is ringing!`);
            deleteAlarm(index); // Remove the alarm after it rings
        }
    });
}

// Event listener for setting an alarm
document.getElementById("setAlarm").addEventListener("click", () => {
    const alarmName = document.getElementById("alarmName").value;
    const alarmDate = document.getElementById("alarmDate").value;
    const alarmTime = document.getElementById("alarmTime").value;

    if (alarmName && alarmDate && alarmTime) {
        addAlarm(alarmName, alarmDate, alarmTime);
    } else {
        alert("Please fill in all fields to set an alarm.");
    }
});

// Update the clock every second
setInterval(updateTime, 1000);

// Initial call to set the current time
updateTime();
