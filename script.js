document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    fetch("https://script.google.com/macros/s/AKfycbxF5jR9gwKAuydkvifXvWnLi352LljZ7TyvP6htFViE04fn4OnN2HWAFcXyUKjeQtRa5A/exec", {
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

