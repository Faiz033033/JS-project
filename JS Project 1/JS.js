function addExpense() {
	// Get input values
	const amount = document.getElementById("amount").value;
	const description = document.getElementById("description").value;
	const category = document.getElementById("category").value;

	// Create expense object
	const expense = {
		amount: amount,
		description: description,
		category: category
	};

	// Get existing expenses from local storage
	let expenses = localStorage.getItem("expenses");
	if (expenses) {
		expenses = JSON.parse(expenses);
	} else {
		expenses = [];
	}

	// Add new expense to array
	expenses.push(expense);

	// Store expenses in local storage
	axios.post("https://crudcrud.com/api/f8e060e5750f4a9395dc18887583957a/Appoinment",expense)
	      .then((response) => {
			console.log(response)
		  })
		  .catch((err) => {
			console.log(err)
		  })

	// Clear input values
	document.getElementById("amount").value = "";
	document.getElementById("description").value = "";
	document.getElementById("category").value = "Fuel";

	// Display expenses on page
	displayExpenses();
}

function displayExpenses() {
	// Get expenses from local storage
	let expenses = localStorage.getItem("expenses");
	if (expenses) {
		expenses = JSON.parse(expenses);
	} else {
		expenses = [];
	}

	// Clear expense list
	document.getElementById("expenseList").innerHTML = "";

	// Loop through expenses and add to list
	for (let i = 0; i < expenses.length; i++) {
		const expense = expenses[i];
		const li = document.createElement("li");
		const text = document.createTextNode(`Amount: ${expense.amount}, Description: ${expense.description}, Category: ${expense.category}`);
		li.appendChild(text);

		// Add edit and delete buttons
		const editButton = document.createElement("button");
		editButton.innerText = "Edit";
		editButton.onclick = function() { editExpense(i); };
		li.appendChild(editButton);

		const deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete";
		deleteButton.onclick = function() { deleteExpense(i); };
		li.appendChild(deleteButton);

		document.getElementById("expenseList").appendChild(li);
	}
}


function deleteExpense(index) {
	// Get expenses from local storage
	let expenses = localStorage.getItem("expenses");
	if (expenses) {
		expenses = JSON.parse(expenses);
	} else {
		expenses = [];
	}

	// Remove expense from array
	expenses.splice(index, 1);

	// Store updated expenses in local storage
	axios.post("https://crudcrud.com/api/f8e060e5750f4a9395dc18887583957a/Appoinment",expense)
	      .then((response) => {
			console.log(response)
		  })
		  .catch((err) => {
			console.log(err)
		  })

	// Display updated expenses on page
	displayExpenses();
}

// Display expenses on page when page loads
displayExpenses();

