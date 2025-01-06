const fs = require('fs');
const csv = require('csv-parser');

let rowheaders = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Assume the first column contains the row headers
    rowheaders.push(Object.values(row)[0]);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log('Row Headers:', rowheaders);
  });
