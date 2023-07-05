const fs = require('fs');
const os = require('os');
const { person, students } = require('./dummy/dummydata')
console.log(person)

console.log(__dirname);
console.log(__filename);

fs.readFile('./dummy/texts.txt', (err, result) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(result.toString())
  }
});

fs.writeFile('./dummy/sample.txt', "this text was added", (err) => {

})

// checks if file exists and deletes it if it exists if it doesnot exist creates a file and adds text to it

if (fs.existsSync('./dummy/texts.txt')) {
  fs.unlink('./dummy/texts.txt', (err) => {

  });
} else {
  fs.writeFile('./dummy/texts.txt', "this line wass added", (err) => {

  })
}

// make directory
fs.mkdir('./data', (err) => {

})

// delete a directory if it already exists

if (fs.existsSync('./data')) {
  fs.rmdir('./data', (err) => {

  })
}