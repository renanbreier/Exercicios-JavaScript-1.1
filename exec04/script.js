function generateCard() {
    var table = document.getElementById('bingo-card');
    table.innerHTML = '';

    var letters = ['B', 'I', 'N', 'G', 'O'];
    var numbers = [];
    while (numbers.length < 24) {
      var randomNumber = Math.floor(Math.random() * 75) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    var index = 0;
    var headerRow = document.createElement('tr');
    var i;
    for (i = 0; i < 5; i++) {
      var headerCell = document.createElement('th');
      headerCell.textContent = letters[i];
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    var i, j;
    for (i = 0; i < 5; i++) {
      var row = document.createElement('tr');
      for (j = 0; j < 5; j++) {
        var cell = document.createElement('td');

        if (i === 2 && j === 2) {
          cell.textContent = 'Free';
          cell.classList.add('free');
        } else {
          cell.textContent = numbers[index];
          index++;
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

window.onload = init;
