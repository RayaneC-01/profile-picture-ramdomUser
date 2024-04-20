document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const locationElement = document.getElementById("location");

    nameElement.addEventListener("click", function () {
        const newName = prompt("Enter new name:");
        if (newName !== null && newName.trim() !== "") {
            nameElement.textContent = newName;
        }
    });

    emailElement.addEventListener("click", function () {
        const newEmail = prompt("Enter new email:");
        if (newEmail !== null && newEmail.trim() !== "") {
            emailElement.textContent = newEmail;
        }
    });

    locationElement.addEventListener("click", function () {
        const newLocation = prompt("Enter new location:");
        if (newLocation !== null && newLocation.trim() !== "") {
            locationElement.textContent = newLocation;
        }
    });
});
