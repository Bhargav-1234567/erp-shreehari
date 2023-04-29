const database = require('../js/database');


window.onload = function () {

  // Populate the table
  populateTable();

  // Add the add button click event
  document.getElementById('addPart').addEventListener('click', () => {

    // Retrieve the input fields
    var partNo = document.getElementById('partNo');
    var PartName = document.getElementById('partName');
    var dieSize = document.getElementById('dieSize');
    var cutWeight = document.getElementById('cutWeight');
    var forgingWeight = document.getElementById('forgingWeight');
    var material = document.getElementById('material');
    var forgingDate = document.getElementById('forgingDate')

    // Save the person in the database
    database.addPart(partNo.value, PartName.value, dieSize.value, cutWeight.value, forgingWeight.value, material.value, forgingDate.value);

    // Reset the input fields
    partNo.value = '';
    PartName.value = '';
    dieSize.value = '';
    cutWeight.value = '';
    forgingWeight.value = '';
    material.value = '';
    forgingDate.value = ''


    // Repopulate the table
    populateTable();
  });
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getParts(function (parts) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < parts.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + parts[i].partNo + '</td>';
      tableBody += '  <td>' + parts[i].partName + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePart(\'' + parts[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('partList').innerHTML = tableBody;
  });
}

// Deletes a person
function deletePart(id) {

  // Delete the person from the database
  database.deletePart(id);

  // Repopulate the table
  populateTable();
}
