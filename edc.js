document.addEventListener("DOMContentLoaded", () => {
    const idInput = document.getElementById("idInput");
    const nameInput = document.getElementById("nameInput");
    const oldConsumption = document.getElementById("oldConsumption");
    const newConsumption = document.getElementById("newConsumption");
    const trashFeeDropdown = document.getElementById("trashFees");
    const calculateButton = document.getElementById("calculateButton");
    const clearButton = document.getElementById("clearButton");
    const resultDisplay = document.getElementById("result");

    function calculateElectricityBill(units) {
        if (units <= 50) {
            return units * 500;
        } else if (units <= 100) {
            return units *1000;
        } else if (units <= 150) {
            return units * 1500;
        } else if (units <= 200) {
            return units * 2000;
        } else {
            return units * 2500;
        }
    }

    calculateButton.addEventListener("click", () => {
        const oldVal = parseInt(oldConsumption.value, 10);
        const newVal = parseInt(newConsumption.value, 10);
        const trashFee = parseInt(trashFeeDropdown.value, 10);

        if (isNaN(oldVal) || isNaN(newVal) || oldVal >= newVal) {
            alert("Error (New Usage must be greater than Old Usage).");
            return;
        }

        const unitsUsed = newVal - oldVal;
        const electricityBill = calculateElectricityBill(unitsUsed);
        const total = electricityBill + trashFee;

        resultDisplay.textContent = `ចំនួនសរុប: ${total} Riel (Electricity: ${electricityBill} Riel, Price Trash: ${trashFee} Riel)`;
    });

    clearButton.addEventListener("click", () => {
        resultDisplay.textContent = "";
        idInput.value = "";
        nameInput.value = "";
        oldConsumption.value = "";
        newConsumption.value = "";
        trashFeeDropdown.value = "10000";
    });
});
