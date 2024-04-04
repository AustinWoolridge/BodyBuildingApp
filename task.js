function get_median_of_first_week_expenses(expenses, firstSundays) {
    const result = {};
    debugger;
    for (let year in expenses) {
        const firstSundayDay = firstSundays[year];

        for(let myexpense in expenses[year]){

            if ( parseInt(myexpense) <=parseInt(firstSundayDay)) {
                const foodExpenses = expenses[year][myexpense]["food"] || [];
                const fuelExpenses = expenses[year][myexpense]["fuel"] || [];
                const allExpenses = [...foodExpenses, ...fuelExpenses];

                // Check if there are any expenses for the first Sunday
                if (allExpenses.length > 0) {
                    result[`${year}-${myexpense}`] = calculateMedian(allExpenses);
                }
            }
        }
        }

    return result;
}

function calculateMedian(array) {
    array.sort((a, b) => a - b);

    const mid = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[mid - 1] + array[mid]) / 2;
    } else {
        return array[mid];
    }
}

const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
};

const firstSundays = {
    "2023-01": "01",
    "2023-02": "05",
    "2023-03": "05",
    "2023-04": "02",
    "2023-05": "07",
    "2023-06": "04",
    "2023-07": "02",
    "2023-08": "06",
    "2023-09": "03",
    "2023-10": "01",
    "2023-11": "05",
    "2023-12": "03"
};

console.log(get_median_of_first_week_expenses(expenses, firstSundays));
