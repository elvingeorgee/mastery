document.addEventListener("DOMContentLoaded", function () {

    // All blurbs in the page
    const blurbs = [
        "okcBlurb", "houBlurb", "lalBlurb", "gswBlurb", "cavsBlurb", "celtsBlurb", "nykBlurb", "milBlurb",
        "winBlurb", "dalBlurb", "vegBlurb", "oilBlurb", "wasBlurb", "carBlurb", "flaBlurb", "torBlurb",
        "middleBlurb1", "middleBlurb2", "middleBlurb3", "middleBlurb4"
    ];

    let currentVisibleBlurb = null;

    // Hide all blurbs at start
    blurbs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("show");
    });

    // Define clickable elements and which blurb they show
    const clickMappings = {
        // Outer logos
        "dropdown": "okcBlurb",
        "drop2": "houBlurb",
        "drop3": "lalBlurb",
        "drop1": "gswBlurb",
        "drop4": "cavsBlurb",
        "drop5": "celtsBlurb",
        "drop6": "nykBlurb",
        "drop7": "milBlurb",
        "lobDown": "winBlurb",
        "lob1": "dalBlurb",
        "lob2": "vegBlurb",
        "lob3": "oilBlurb",
        "lob4": "wasBlurb",
        "lob5": "carBlurb",
        "lob6": "flaBlurb",
        "lob7": "torBlurb",

        "okcNext": "middleBlurb1",
        "minNext": "middleBlurb2",
        "bosNext": "middleBlurb3",
        "cavsNext": "middleBlurb4",
        "indNext": "middleBlurb1", // <-- new
        "nykNext": "middleBlurb2", // <-- new
        "denNext": "middleBlurb3", // <-- new
        "gswNext": "middleBlurb4"  // <-- new
    };

    // Function to show blurb
    function showBlurb(blurbId) {
        blurbs.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.toggle("show", id === blurbId);
        });
        currentVisibleBlurb = document.getElementById(blurbId);
    }

    // Bind click events
    Object.entries(clickMappings).forEach(([triggerId, blurbId]) => {
        const trigger = document.getElementById(triggerId);
        if (trigger) {
            trigger.addEventListener("click", function (e) {
                e.stopPropagation(); // Prevent closing right away
                showBlurb(blurbId);
            });
        }
    });

    // Prevent blurbs from closing when clicking inside them
    blurbs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", e => {
                e.stopPropagation();
            });
        }
    });

    // Clicking anywhere else closes the blurb
    document.addEventListener("click", () => {
        if (currentVisibleBlurb) {
            currentVisibleBlurb.classList.remove("show");
            currentVisibleBlurb = null;
        }
    });
});