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

document.addEventListener("DOMContentLoaded", () => {
    const field = document.querySelector(".softball-field");
    const prac = document.querySelector(".prac-column");

    // Delay to simulate visibility trigger or scroll event
    setTimeout(() => {
        field.classList.add("visible");
        prac.classList.add("visible");
    }, 300); // You can adjust or tie this to scroll/interaction
});

document.addEventListener("DOMContentLoaded", function () {
    const prac1 = document.querySelector(".prac1");
    const prac2 = document.querySelector(".prac2");
    const prac3 = document.querySelector(".prac3");
    const prac5  = document.querySelector(".prac5");


    const hitMarkers1 = document.querySelectorAll(".hit-marker");
    const hitMarkers2 = document.querySelectorAll(".hit-marker1");
    const hitMarkers3 = document.querySelectorAll(".hit-marker2");
    const hitMarkers4 = document.querySelectorAll(".hit-marker3");



    function hideAllMarkers() {
        hitMarkers1.forEach(marker => marker.style.display = "none");
        hitMarkers2.forEach(marker => marker.style.display = "none");
        hitMarkers3.forEach(marker => marker.style.display = "none");
        hitMarkers4.forEach(marker => marker.style.display = "none");


    }

    prac1.addEventListener("click", function () {
        hideAllMarkers();
        hitMarkers1.forEach(marker => marker.style.display = "block");
    });

    prac2.addEventListener("click", function () {
        hideAllMarkers();
        hitMarkers2.forEach(marker => marker.style.display = "block");
    });

    prac3.addEventListener("click", function () {
        hideAllMarkers();
        hitMarkers3.forEach(marker => marker.style.display = "block");
    });

    prac5.addEventListener("click", function () {
        hideAllMarkers();
        hitMarkers4.forEach(marker => marker.style.display = "block");
    });

    // Initially hide all hit markers
    hideAllMarkers();
});

document.addEventListener("DOMContentLoaded", function () {
    const pokerImg = document.querySelector(".dragonair-img");
    const blockWrapper = document.querySelector(".block-wrapper");
    const blocks = document.querySelectorAll(".block1, .block2, .block3, .block4");

    pokerImg.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent any link behavior

        // Show the block wrapper and all blocks
        blockWrapper.style.display = "flex";
        blocks.forEach(block => block.style.display = "inline-block");
    });

    // Prevent clicks on blocks from doing anything
    blocks.forEach(block => {
        block.addEventListener("click", (e) => {
            e.preventDefault(); // Optional safeguard
            // Do nothing
        });
    });
});