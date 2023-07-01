const fs = require('fs');

// const inputText = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(inputText)

// const outPutText = `This is what we know about Avacado: ${inputText} \n ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', outPutText);
// console.log('File Written!')

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            const finalText = `${data2} \n ${data3}`;
            fs.writeFile('./txt/final.txt', finalText, 'utf-8', err => {
                console.log('Uploading file...')
            })
        })
    })
})

console.log("Will read this!")