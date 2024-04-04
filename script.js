const users = [
    { username: 'user1', password: 'pass1', balance: 100 },
    { username: 'user2', password: 'pass2', balance: 150 }
];


let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('message').innerHTML = 'Login successful!';
        updateBalanceDisplay();
    } else {
        document.getElementById('message').innerHTML = 'Invalid username or password';
    }
}

function addMoney() {

    const moneyAmount = parseFloat(document.getElementById('money-amount').value);

    if (currentUser) {
        if(!isNaN(moneyAmount)) {
            currentUser.balance += moneyAmount; // You can adjust the amount as needed
            updateBalanceDisplay();
        } else {
            document.getElementById('message').innerHTML = 'Please enter a valid number';
        }
        
    } else {
        document.getElementById('message').innerHTML = 'Please log in first';
    }
}

function updateBalanceDisplay() {
    document.getElementById('balance').innerHTML = `Balance: ${currentUser.balance} PLN`;
}

