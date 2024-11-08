document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    const response = attending === 'yes' 
        ? `Thank you, ${name}! We’re excited to see you!`
        : `Sorry you can’t make it, ${name}. You’ll be missed!`;

    document.getElementById('rsvpResponse').innerText = response;
});
