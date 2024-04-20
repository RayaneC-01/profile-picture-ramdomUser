// Attend que le document HTML soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Récupère les éléments HTML correspondant au nom, à l'e-mail et à l'emplacement
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const locationElement = document.getElementById("location");

    // Ajoute un écouteur d'événements pour le clic sur l'élément "name"
    nameElement.addEventListener("click", function () {
        // Affiche une boîte de dialogue pour saisir un nouveau nom
        const newName = prompt("Enter new name:");
        // Vérifie si un nouveau nom a été saisi et s'il n'est pas vide
        if (newName !== null && newName.trim() !== "") {
            // Met à jour le contenu de l'élément "name" avec le nouveau nom
            nameElement.textContent = newName;
        }
    });

    // Ajoute un écouteur d'événements pour le clic sur l'élément "email"
    emailElement.addEventListener("click", function () {
        // Affiche une boîte de dialogue pour saisir un nouvel e-mail
        const newEmail = prompt("Enter new email:");
        // Vérifie si un nouvel e-mail a été saisi et s'il n'est pas vide
        if (newEmail !== null && newEmail.trim() !== "") {
            // Met à jour le contenu de l'élément "email" avec le nouvel e-mail
            emailElement.textContent = newEmail;
        }
    });

    // Ajoute un écouteur d'événements pour le clic sur l'élément "location"
    locationElement.addEventListener("click", function () {
        // Affiche une boîte de dialogue pour saisir une nouvelle localisation
        const newLocation = prompt("Enter new location:");
        // Vérifie si une nouvelle localisation a été saisie et si elle n'est pas vide
        if (newLocation !== null && newLocation.trim() !== "") {
            // Met à jour le contenu de l'élément "location" avec la nouvelle localisation
            locationElement.textContent = newLocation;
        }
    });
});
