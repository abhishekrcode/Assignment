<h1>Transactify</h1>
<p>This project is a MERN stack application that fetches data from a third-party API, initializes a MongoDB database with the data, and provides APIs for listing product transactions and generating statistics based on user-defined search criteria and pagination.</p>
<h2>Introduction</h2>
<p>This coding challenge project utilizes a MERN (MongoDB, Express, React, Node.js) stack to create a full-fledged web application. The application fetches data from a third-party API, stores it in a MongoDB database, and offers two main features: listing product transactions and generating statistics based on user-specified search parameters and pagination.</p>
<h3>Technologies Used</h3>
<li>React: A JavaScript library for building user interfaces.</li>
<li>TailwindCSS: A highly customizable CSS framework for designing web applications.</li>
<li>DaisyUI: A UI library that extends TailwindCSS with additional components and plugins.</li>
<li>Express.js: A web application framework for Node.js used to build the backend API.</li>
<li>Node.js: A JavaScript runtime that allows server-side development.</li>
<li>MongoDB: A NoSQL database used for storing and managing the product transaction data.</li>

steps to run on local machine :-
1.Download the code on your computer 
2.open it in vs code
3.In backend folder directory run the commant on terminal -> npm install
4.In frontend folder directory run the command on terminal -> npm install 
5.After all these steps make a file named as .env file and write PORT="" and MONGO_URI="".
6.After that to start the server run command npm start 
7.And to run frontend part write the command 0n terminal,make sure the directory is frontend -> npm run dev
8.To save API response on mongodb You have to call the API by adding some line of code ie.(goto Project\frontend\src\pages\TransactionPage.jsx at line number 53 write this line of code ->
 const callApiForSaveRes = axios.get(/api/initialize-database) 
 and save the change and run the frontend once and then response will save in the database then delete the line of code which was written at line number 53 of Project\frontend\src\pages\TransactionPage.jsx file. ) and again run the frondend and backend once to see the complete project.






