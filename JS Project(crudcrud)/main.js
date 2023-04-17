// Save appointment to server
function saveAppointment() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  // Create an object
  const appointment = {
    name,
    age,
    email
  };

  // Send POST request to server
  axios.post("https://crudcrud.com/api/122902386e2043738db116110312a864/appointmentdetail", appointment)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

// Get all appointments from server
function getAppointment() {
  axios.get("https://crudcrud.com/api/122902386e2043738db116110312a864/appointmentdetail")
    .then(response => {
      console.log(response.data);
      const appointments = response.data;
      const table = document.createElement('table');
      table.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      `;
      appointments.forEach(appointment => {
        const row = table.insertRow();
        row.innerHTML = `
          <td>${appointment.name}</td>
          <td>${appointment.age}</td>
          <td>${appointment.email}</td>
        `;
      });
      document.body.appendChild(table);
    })
    .catch(error => {
      console.log(error);
    });
}
