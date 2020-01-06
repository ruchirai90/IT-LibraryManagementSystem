## Technology Stack Details

Library Management system allows user to add, view and update book detaila in libary.

This app contains an opinionated set of components for modern web development, including:

* [React]
* [Redux]
* [Nodejs]

## Application features - 

* [View Book list]
* [Add Book Details]
* [Edit Book Details]
* [Search Book details- works on all the table columns]


#### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 10+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install
```

To run your application locally:
```bash
npm run dev
```

npm run dev will start client and server both concurrently.

Your application will be running at `http://localhost:3000`.


##### Backend

Node js is used as backend which has API end points.

#### Storage
Book details are stored in localFile names localDB.json
It should have intial structure as-
{"bookList":[]}

