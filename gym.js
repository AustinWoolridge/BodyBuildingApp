function updateMuscleGroups() {

    var machineSelect = document.getElementById("machineSelect");
    var selectedMachine = machineSelect.value;
    // Define muscle groups and their corresponding elements
    var muscleGroups = {
        //CHEST
        upperchest: document.getElementById("upperchest"),
        midchest: document.getElementById("midchest"),
        downchest: document.getElementById("downchest"),
        //SHOULDER
        frontshoulders: document.getElementById("frontshoulders"),
        midshoulders: document.getElementById("midshoulders"),
        backshoulders: document.getElementById("backshoulders"),
        //BICEPS
        shortheadbiceps: document.getElementById("shortheadbiceps"),
        longheadbiceps: document.getElementById("longheadbiceps"),
        brachialisbiceps: document.getElementById("brachialisbiceps"),
        //TRICEPS
        longheadtriceps: document.getElementById("longheadtriceps"),
        medialtriceps: document.getElementById("medialtriceps"),
        lateralheadtriceps: document.getElementById("lateralheadtriceps"),
        //FOREARM
        upperforearm: document.getElementById("upperforearm"),
        downforearm: document.getElementById("downforearm"),
        //BACK
        lats: document.getElementById("lats"),
        traps: document.getElementById("traps"),
        //LEG
        glutes: document.getElementById("glutes"),
        hamstrings: document.getElementById("hamstrings"),
        calves: document.getElementById("calves"),
        quadriceps: document.getElementById("quadriceps")
    };

    // Update muscle groups based on the selected machine
    switch (selectedMachine) {
        //CHEST Movements
        case "chestpressMachine":
            incrementMuscleGroups({ upperchest: 1, frontshoulders: 0.5, medialtriceps: 0.5 });
            break;
        case "inclineBenchPress":
            incrementMuscleGroups({ upperchest: 1, frontshoulders: 0.5, longheadtriceps: 0.5 });
            break;
        case "benchPress":
            incrementMuscleGroups({ midchest: 1, frontshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        case "chestDips":
            incrementMuscleGroups({ downchest: 1, frontshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        case "hammerStrengthChestPress":
            incrementMuscleGroups({ midchest: 1, frontshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        case "pullover":
            incrementMuscleGroups({ midchest: 1, backshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        case "frontInclineDumbbellRaise":
            incrementMuscleGroups({ upperchest: 1, frontshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        case "flyMachine":
            incrementMuscleGroups({ midchest: 1, midshoulders: 0.5, lateralheadtriceps: 0.5 });
            break;
        //BACK Movements
        case "bentOverRow":
            incrementMuscleGroups({ lats: 1, midshoulders: 0.5, brachialisbiceps: 0.5 });
            break;
        case "tBarRow":
            incrementMuscleGroups({ lats: 1, traps: 1, backshoulders: 0.5, brachialisbiceps: 0.5 });
            break;
        case "45-degreeBentOverRow":
            incrementMuscleGroups({ lats: 1, traps: 1, backshoulders: 0.5, brachialisbiceps: 0.5 });
            break;
        case "90-degreeBentOverRow":
            incrementMuscleGroups({ lats: 1, traps: 0.5, backshoulders: 0.5, brachialisbiceps: 0.5 });
            break;
        case "shrug":
            incrementMuscleGroups({ traps: 0.5, downforearm: 0.5 });
            break;
        case "closeGripPullUps":
            incrementMuscleGroups({ lats: 0.5, backshoulders: 0.5, shortheadbiceps: 1, longheadbiceps: 1 });
            break;
        case "wideGripPullUps":
            incrementMuscleGroups({ lats: 1, backshoulders: 0.5, brachialisbiceps: 0.5, longheadbiceps: 0.5 });
            break;
        case "lowRow":
            incrementMuscleGroups({
                lats: 1, longheadbiceps: 0.5, brachialisbiceps: 0.5,
                backshoulders: 0.5
            });
            break;
        case "seatedRow":
            incrementMuscleGroups({
                traps: 1, longheadbiceps: 0.5, brachialisbiceps: 0.5,
                backshoulders: 0.5
            });
            break;
        case "wideGripLatPulldown":
            incrementMuscleGroups({ lats: 1, backshoulders: 0.5, brachialisbiceps: 0.5, longheadbiceps: 0.5 });
            break;
        case "closeGripLatPulldown":
            incrementMuscleGroups({ lats: 0.5, backshoulders: 0.5, shortheadbiceps: 1, longheadbiceps: 1 });
            break;
        //LEG Movements
        case "squat":
            incrementMuscleGroups({
                quadriceps: 1, hamstrings: 0.5, glutes: 1
            });
            break;
        case "legExtension":
            incrementMuscleGroups({
                quadriceps: 1
            });
            break;
        case "calfRaises":
            incrementMuscleGroups({
                calves: 1
            });
            break;
        case "legPress":
            incrementMuscleGroups({
                quadriceps: 1, hamstrings: 0.5, glutes: 0.5
            });
            break;
        case "legCurl":
            incrementMuscleGroups({
                hamstrings: 1, calves: 0.5
            });
            break;
        case "sumoDeadlift":
            incrementMuscleGroups({
                quadriceps: 1, hamstrings: 0.5, glutes: 1
            });
            break;
        //SHOULDERS
        case "facePull":
            incrementMuscleGroups({
                backshoulders: 1, traps: 0.5, shortheadbiceps: 0.5, longheadbiceps: 0.5
            });
            break;
        case "barbellFacePull":
            incrementMuscleGroups({
                backshoulders: 1, traps: 0.5, shortheadbiceps: 0.5, longheadbiceps: 0.5
            });
            break;
        case "lateralRaise":
            incrementMuscleGroups({
                midshoulders: 1, frontshoulders: 0.5
            });
            break;
        case "frontRaise":
            incrementMuscleGroups({
                frontshoulders: 1, midshoulders: 0.5, shortheadbiceps: 0.5, longheadbiceps: 0.5,
                upperchest: 0.5
            });
            break;
        case "shoulderPress":
            incrementMuscleGroups({
                midshoulders: 1, frontshoulders: 0.5, medialtriceps: 0.5, longheadtriceps: 0.5
            });
            break;
        // Add more cases for other machines
    }



    function incrementMuscleGroups(groups) {
        var updatedMuscleGroups = "";
        for (group in groups) {
            if (groups.hasOwnProperty(group)) { //NOT REALLY NEED THIS LINE OF CODE.
                var element = muscleGroups[group];
                var currentValue = parseFloat(element.textContent);
                element.textContent = currentValue + groups[group];

                // Construct the string representation without symbols "" and {}
                updatedMuscleGroups += group + ": " + groups[group] + " ";
            }


        }
        // Display only the latest updated values in an alert message
        var alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = "Updated Muscle Groups:\n" + updatedMuscleGroups;

        alertMessage.classList.remove('d-none');
    }



}