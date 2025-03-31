document.addEventListener("DOMContentLoaded", function(){
    const allElements = ["dropdown", "drop2", "drop3", "drop4", "drop5", "drop6", "drop7", "lobDown", "lob1", "lob2", "lob3", "lob4", "lob5", "lob6", "lob7"];

    // Hide all content boxes initially
    allElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });


    function showElement(elementId) {
        allElements.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = (id === elementId) ? "block" : "none";
        });
    }
    // Add event listeners to dropdowns/lobdowns
    document.getElementById("dropdown").addEventListener("click", () => showElement("okc"));
    document.getElementById("drop2").addEventListener("click", () => showElement("hou"));
    document.getElementById("drop3").addEventListener("click", () => showElement("lal"));
    document.getElementById("drop1").addEventListener("click", () => showElement("gsw"));
    document.getElementById("drop4").addEventListener("click", () => showElement("cavs"));
    document.getElementById("drop5").addEventListener("click", () => showElement("celts"));
    document.getElementById("drop6").addEventListener("click", () => showElement("nyk"));
    document.getElementById("drop7").addEventListener("click", () => showElement("mil"));
    document.getElementById("lobDown").addEventListener("click", () => showElement("win"));
    document.getElementById("lob1").addEventListener("click", () => showElement("dal"));
    document.getElementById("lob2").addEventListener("click", () => showElement("veg"));
    document.getElementById("lob3").addEventListener("click", () => showElement("oil"));
    document.getElementById("lob4").addEventListener("click", () => showElement("was"));
    document.getElementById("lob5").addEventListener("click", () => showElement("car"));
    document.getElementById("lob6").addEventListener("click", () => showElement("fla"));
    document.getElementById("lob7").addEventListener("click", () => showElement("tor"));
});