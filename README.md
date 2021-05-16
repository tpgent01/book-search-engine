# Book Search Engine
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## 💬 Description 
A project to take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. 


## 📓 Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Mock-Up](#mock-up)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [License](#license)
* [Badges](#badges)
* [Tests](#tests)
* [Questions](#questions)
* [Contributing](#contributing)


## 🧠User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## 🧩Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```


## 🎨Mock-Up
<br>**As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:**</br>
<br>![](assets/mock-up1.gif)</br>

<br>**The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:**</br>
<br>![](assets/mock-up2.gif)</br>

<br>**A user can view their saved books on a separate page, as shown in the following animation:**</br>
<br>![](assets/mock-up3.gif)</br>


## 🔌Installation

The user should clone the repository from GitHub and open up the project in their code editor.
<br>User will need to run node.js and perform an _npm install_ for all necessary dependencies listed below.</br>


## 💻Usage 
To run on _localhost:3001_, please run command _npm start_ to start the server and _control C_ to stop.
<br>To run program on Heroku, please [click here](https://thawing-mesa-03929.herokuapp.com/).</br>
<br>![](assets/example.gif)</br>


## ✏️Built With
<p><a href="https://www.apollographql.com/">Apollo</a></p>
<p><a href="https://graphql.org/">GraphQL</a></p>
<p><a href="https://reactjs.org/">React</a></p>


## 🔐License
```
Copyright © MIT. All rights reserved. 
Licensed under the MIT license.
```


## 🏆Badges

![GitHub top language](https://img.shields.io/github/languages/top/tpgent01/book-search-engine?color=red&style=plastic)
<br>![GitHub repo size](https://img.shields.io/github/repo-size/tpgent01/book-search-engine?color=orange&style=plastic)</br>
![GitHub language count](https://img.shields.io/github/languages/count/tpgent01/book-search-engine?color=yellow&style=plastic)
<br>![GitHub closed issues](https://img.shields.io/github/issues-closed/tpgent01/book-search-engine?color=brightgreen&style=plastic)</br>
![GitHub last commit](https://img.shields.io/github/last-commit/tpgent01/book-search-engine?color=blueviolet&style=plastic)
<br>![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tpgent01/book-search-engine?color=ff69b4&style=plastic)</br>
![GitHub watchers](https://img.shields.io/github/watchers/tpgent01/book-search-engine?style=social)
<br>![GitHub Repo stars](https://img.shields.io/github/stars/tpgent01/book-search-engine?style=social)</br>



## 📊Tests

To test this project, please see the [Installation](#installation) section.
<br>After the project is on your local, run _npm start_ to start the server and open [Insomnia Core](https://insomnia.rest/products/insomnia) to test API routes.</br>


## ❓Questions

If you have any questions about this projects, please contact me directly at tpgent01@outlook.com. 
<br>You can view more of my projects at https://github.com/tpgent01 👾</br>


## 📌Contributing

Taylor Gentry ©2021 All Rights Reserved.
