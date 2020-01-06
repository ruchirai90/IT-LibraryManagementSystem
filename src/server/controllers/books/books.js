'use strict';

//Controller - Node APIS to add, update and get book details
const request = require('request');
const fs = require('fs');

let addBook = (_req, _res, _next) => {
    fs.readFile('localDB.json', function readFileSync(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            obj.bookList.push(_req.body); //add some data
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('localDB.json', json, () => {
                if (err) {
                    return console.log(err);
                }
                else {
                    _res.status(200).send("File Updated Successfully");
                }

            });
        }
    });
}


let updateBook = (_req, _res, _next) => {
    fs.readFile('localDB.json', function readFileSync(err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data) {
                let parsedData = JSON.parse(data);

                let index = parsedData.bookList.findIndex((item, i) => {
                    if (item.index === _req.body.index) {
                        console.log(i);
                        return i;
                    }

                })

                parsedData.bookList[index] = _req.body;
                fs.writeFile('localDB.json', JSON.stringify(parsedData), () => {
                    if (err) {
                        return console.log(err);
                    }
                    else {
                        _res.status(200).send(_req.body);
                    }
                });

            }

        }
    });
}


let getBook = (_req, _res, _next) => {
    fs.readFile('localDB.json', function readFileSync(err, data) {
        if (err) {
            console.log(err);
        } else {

            _res.status(200).send(data);
        }
    });
}

module.exports = {
    addBook: addBook,
    getBook: getBook,
    updateBook: updateBook
}