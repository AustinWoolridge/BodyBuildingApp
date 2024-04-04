function updateGif() {
    var select = document.getElementById("machineSelect");
    var gifContainer = document.getElementById("gifContainer");
    var selectedOption = select.options[select.selectedIndex];
    var gifName = "MachineGifs/" + selectedOption.value + ".gif"; // Assumes the GIFs are named based on the option values

    // Clear previous GIF if any
    gifContainer.innerHTML = "";

    // Create new <img> element for the selected GIF
    var gifImage = document.createElement("img");
    gifImage.src = gifName;
    gifImage.alt = selectedOption.text + " GIF";
    gifContainer.appendChild(gifImage);
}

// Call updateGif() when the selection changes
document.getElementById("machineSelect").addEventListener("change", updateGif);

// Initial call to display the GIF corresponding to the default selected option
updateGif();