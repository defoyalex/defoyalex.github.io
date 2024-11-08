document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    fetch("https://script.google.com/macros/s/AKfycbzuBV9sxzNhKZsEtM2s52I3E_cHNYAO5FwcsxXkl5xfVDBNNaipDpq5D3h0JqfA8PMTNw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, attending })
    })
    .then(response => {
        document.getElementById('rsvpResponse').innerText = "RSVP saved successfully!";
    })
    .catch(error => {
        document.getElementById('rsvpResponse').innerText = "Error saving RSVP.";
        console.error('Error:', error);
    });
});

