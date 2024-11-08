document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    // Log the data to ensure it's correctly formatted
    console.log("Data being sent:", { name, attending });

    fetch("https://script.google.com/macros/s/AKfycby1vZm4ORc0EYXEcqga0Za-hPRDKYhI8DBkZr-CRahv6AQK4mJK8xIovwUyuPPqEDKj_w/exec", {
        method: "POST",
        redirect: "follow",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, attending })
    })
    .then(response => {
        console.log("Response from Google Apps Script:", response);
        document.getElementById('rsvpResponse').innerText = "Bravo petit bb!";
    })
    .catch(error => {
        document.getElementById('rsvpResponse').innerText = "Oh non, il y a eu un problème :(";
        console.error('Error:', error);
    });
});


