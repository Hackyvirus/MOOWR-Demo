document.getElementById('addColumnBtn').addEventListener('click', function () {
    const table = document.getElementById('capitalGoodsTable');
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        const newCell = rows[i].insertCell(rows[i].cells.length - 1); // Insert before the last cell
        if (i === 0) {
            // Add header for new column
            newCell.innerHTML = '<th>New Column</th>';
        } else {
            // Add input and radio button for new rows
            newCell.innerHTML = '<input type="text" disabled>';
        }
    }
});

function enableInputs(checkbox, rowIndex) {
    const rowInputs = document.querySelectorAll(`tbody tr:nth-child(${rowIndex + 1}) input[type="text"]`);

    // Toggle the enable/disable state based on the checkbox selection
    rowInputs.forEach(input => input.disabled = !checkbox.checked);
}
