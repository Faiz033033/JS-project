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
  
    // Send a POST 
    axios.post('https://crudcrud.com/api/9c834735a96a4af8bb9ea52cd9f7034b/appointment', appointment)
      .then(response => {
        // Alert
        alert("Your appointment has been saved!");
      })
      .catch(error => {
        // Alert 
        alert("There was an error saving your appointment. Please try again later.");
        console.error(error);
      });
  }
  