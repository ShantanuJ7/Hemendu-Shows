document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seat.available');
    let selectedSeats = [];

    // Handle seat selection
    seats.forEach(seat => {
        seat.addEventListener('click', function () {
            const seatId = this.getAttribute('data-seat');
            if (selectedSeats.includes(seatId)) {
                // Deselect if already selected
                this.classList.remove('selected');
                selectedSeats = selectedSeats.filter(s => s !== seatId);
            } else {
                // Select the seat
                this.classList.add('selected');
                selectedSeats.push(seatId);
            }
        });
    });

    // Handle payment form submission
    document.getElementById('payment-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect user data
        const email = document.getElementById('email').value;
        const cardInfo = document.getElementById('card-info').value;

        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
            return;
        }

        if (!email || !cardInfo) {
            alert('Please enter your payment details.');
            return;
        }

        // Simulate payment (This should be replaced with actual payment gateway integration)
        console.log(`Booking confirmed for ${selectedSeats.join(', ')}. Payment details: ${email}, ${cardInfo}`);

        // Show confirmation message
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('payment').style.display = 'none'; // Hide payment form
    });
});
