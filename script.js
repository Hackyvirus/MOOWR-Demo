let indexArr = 0;

document.getElementById('addColumnBtn').addEventListener('click', function () {
  const table = document.getElementById('capitalGoodsTable');
  const rows = table.rows;

  // Array of column names
  const array = [
    'Assessable value',
    'BCD amount',
    'SWS',
    'AIDC Rate',
    'AIDC Amount',
    'ADD Rate',
    'ADD Amount',
    'IGST Rate',
    'IGST Amount',
    'Intended period of use (in years)',
    'Machine scenario after use',
  ];

  // Function to add a new column
  function addColumn(index) {
    // Check if the index is valid
    if (index < 0 || index >= array.length) {
      console.error('Invalid index value');
      return;
    }

    const columnIndex = rows[0].cells.length - 1; // Insert before the last column

    // Add a new column header
    const headerCell = document.createElement('th');
    headerCell.innerHTML = array[index];
    headerCell.setAttribute('contenteditable', 'true');
    rows[0].insertBefore(headerCell, rows[0].cells[columnIndex]);

    // Add input fields to each row for the new column
    for (let i = 1; i < rows.length; i++) {
      const newCell = document.createElement('td');
      newCell.innerHTML = '<input type="text" disabled/>';
      rows[i].insertBefore(newCell, rows[i].cells[columnIndex]);
    }
  }

  // Add a column with the column name from the array at the current index
  addColumn(indexArr);

  // Increment indexArr for the next call
  indexArr++;
});

// Function to remove a specific column
function removeColumn(index) {
  const table = document.getElementById('capitalGoodsTable');
  const rows = table.rows;
  const totalColumns = rows[0].cells.length;

  // Ensure the last column (usually the '+') is not deleted
  if (index >= totalColumns - 1) {
    alert("Cannot remove the last column!");
    return;
  }

  // Delete the specified column
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(index);
  }
}

// Enable or disable input fields based on checkbox selection
function enableInputs(checkbox, rowIndex) {
  const rowInputs = document.querySelectorAll(`tbody tr:nth-child(${rowIndex + 1}) input[type="text"]`);

  // Toggle the enable/disable state based on checkbox
  rowInputs.forEach(input => input.disabled = !checkbox.checked);
}
