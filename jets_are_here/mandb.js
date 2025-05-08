document.querySelectorAll('.boxy').forEach(boxy => {
    boxy.addEventListener('click', () => {
        const group = boxy.closest('.topbox').getAttribute('data-group');
        const targetId = boxy.getAttribute('data-target');

        document.querySelectorAll(`.topbox[data-group="${group}"] .bomba-table`).forEach(table => {
            table.classList.remove('active');
        });

        document.getElementById(targetId).classList.add('active');
    });
});

// Function to calculate total and update color
function updateProteinTotals() {
    document.querySelectorAll('.protein-box').forEach(box => {
        let total = 0;

        // Find all inputs inside this box
        box.querySelectorAll('.protein-input').forEach(input => {
            total += Number(input.value);
        });

        // Update total box
        const totalBox = box.querySelector('.protein-total');
        totalBox.textContent = total + "g";

        // Remove old color classes
        totalBox.classList.remove('green', 'yellow', 'red');

        // Apply new color based on total
        if (total >= 160) {
            totalBox.classList.add('green');
        } else if (total >= 130) {
            totalBox.classList.add('yellow');
        } else {
            totalBox.classList.add('red');
        }
    });
}

// When the page loads
updateProteinTotals();

// When user changes any input
document.querySelectorAll('.protein-input').forEach(input => {
    input.addEventListener('input', updateProteinTotals);
});

// Observe when softball field comes into view
const softballField = document.querySelector('.softball-field');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            softballField.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

observer.observe(softballField);