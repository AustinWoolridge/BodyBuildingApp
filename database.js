// Function to insert data into MongoDB
async function insertData() {
    try {
        const muscleDataDiv = document.getElementById("muscleData");
        const spans = muscleDataDiv.querySelectorAll('span');
        const data = {};

        // Collect data from spans
        spans.forEach(span => {
            const muscleName = span.parentNode.textContent.split(':')[0].trim();
            const muscleValue = span.textContent.trim();

            //ONY ADD IF muscleVALUE is not "0" START
            if (muscleValue !== '0') {
                data[muscleName] = muscleValue;
            }
            //ONY ADD IF muscleVALUE is not "0" END
        });

        //ADDING TIME STAMP - START
        data.timestamp = new Date().toISOString();
        //ADDING TIME STAMP - END

        const response = await axios.post('http://localhost:3000/insert', data);
        console.log(response.data);
    } catch (error) {
        console.error('Error inserting data:', error);
    }


}

// Function to fetch data from MongoDB
async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/fetch');
        const data = response.data;

        // Clear previous data
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = '';

        // LATEST INPUT WILL APEAR ON TOP INSTEAD OF AT BOTTOM
        for (let i = data.length - 1; i >= 0; i--) {
            const item = data[i];

            //ADDING TIME STAMP - START
            const timestamp = new Date(item.timestamp);
            const formattedDate = timestamp.toLocaleDateString();
            const formattedTime = timestamp.toLocaleTimeString();
            //ADDING TIME STAMP - END
            // Create a new <div> element to hold the data
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('data-item');

            // Construct HTML content for each data item
            let htmlContent = `<h3>Workout on ${formattedDate} ${formattedTime}</h3><ul>`;
            for (const key in item) {
                if (key !== '_id' && key !== 'timestamp') { // Exclude _id field
                    htmlContent += `<li><strong>${key}:</strong> ${item[key]}</li>`;
                }
            }
            htmlContent += '</ul>';

            // Set the HTML content of the <div> element
            itemDiv.innerHTML = htmlContent;

            // Append the <div> element to the container
            dataContainer.appendChild(itemDiv);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
