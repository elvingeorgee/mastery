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