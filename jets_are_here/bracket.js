document.addEventListener("DOMContentLoaded", function () {
    const blurbs = [
        "okcBlurb", "houBlurb", "lalBlurb", "gswBlurb", "cavsBlurb", "celtsBlurb", "nykBlurb", "milBlurb",
        "winBlurb", "dalBlurb", "vegBlurb", "oilBlurb", "wasBlurb", "carBlurb", "flaBlurb", "torBlurb"
    ];

    let currentVisibleBlurb = null;

    // Initially hide all blurbs (by removing the .show class)
    blurbs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("show");
    });

    function showBlurb(blurbId) {
        blurbs.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.toggle("show", id === blurbId);
        });
        currentVisibleBlurb = document.getElementById(blurbId);
    }

    // Mapping dropdowns/lobs to blurbs
    const clickMappings = {
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
        "lob7": "torBlurb"
    };

    Object.entries(clickMappings).forEach(([triggerId, blurbId]) => {
        const trigger = document.getElementById(triggerId);
        if (trigger) {
            trigger.addEventListener("click", function (e) {
                e.stopPropagation(); // Prevent closing blurbs immediately
                showBlurb(blurbId);
            });
        }
    });

    // Prevent clicks inside blurbs from closing them
    blurbs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", e => {
                e.stopPropagation();
            });
        }
    });

    // Clicking outside closes any open blurb
    document.addEventListener("click", () => {
        if (currentVisibleBlurb) {
            currentVisibleBlurb.classList.remove("show");
            currentVisibleBlurb = null;
        }
    });
});
