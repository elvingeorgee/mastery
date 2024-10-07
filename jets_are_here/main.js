const dreamTable = document.getElementById("dreams").querySelector("tbody");
const dateInput = document.getElementById("Date");  // Ensure "Date" is correct
const snoozeInput = document.getElementById("snooze");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    const dateValue = dateInput.value.trim(); // Use 'dateValue' instead of 'dataValue'
    const snoozeValue = snoozeInput.value.trim();

    if (dateValue && snoozeValue) {
        const newRow = dreamTable.insertRow();
        const dateCell = newRow.insertCell(0);
        const snoozeCell = newRow.insertCell(1);

        dateCell.textContent = dateValue;
        snoozeCell.textContent = snoozeValue;

        // Clear inputs after submission
        dateInput.value = "";
        snoozeInput.value = "";
    } else {
        alert("Please fill in both fields");
    }
});
