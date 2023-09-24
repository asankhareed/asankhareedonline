var formData = {
        name: "Hafiz",
        lastName: "Last Name",
        // Other form fields
      };
      
      fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
      })
      .catch(error => {
        console.error('Error:', error);
      });
      