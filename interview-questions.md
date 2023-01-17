# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: In ruby, calling super allows you to access all the parameters and objects that are held in the parent class and pass them to the child class. 

Researched answer: In ruby there are two types of classes, a child and a parent class. The parent class will house parameters and objects that the child class can inherit and use within its block of code. This allows you to not have to rewrite all the information you want to access again within this child class. For example, if you have a class named Pet and within the pet class you want to access the parameters like @species @fur_color instead of redefining them you can borrow the Pet's initialize method and create a Dog class where you can inherit those parameters.

2. What is a gem?

Your answer: A gem is a library of commonly used/needed code snippets that are pre-made to help fascilitate the process. A gem we install regulary is the testing framework Rspec. 

Researched answer: Ruby has a built in package manager (Rails) that houses libraries which are a collections of code that adds extra functionality. These libraries are also referred to as gems which are pieces of ruby code that is uploaded to Ruby Gem server that can be imported to your work. Commonly used gems include the Rspec testing framework for Ruby but there are also gems that perform actions such as the gem Stripe which makes it easy to accept payments online dynamically.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a collection of information often displayed as a table similar to a Microsoft Excel spreadsheet. There are other types of databases that i am unfortunately not to familiar with but my researched answer will have more information on them. 

Researched answer: A relational database is a type of SQL (Structured Query List) that displays its information using tables with columns labeled with the type of information it contains. This fixed structure makes it useful for information that just needs to be logged and not altered much. Although, you can update/add information in the tables via the schema file. For example a relational database can be used to display the names, class, and year attended of the students in the cohort. Relational databases will also contain primary keys for each entry in the table.

4. What are primary keys? Why are they important?

Your answer: Primary keys are identifiers labeled "id" given to every row of a table. These are important because they make it easy to identify which line or specific class we are looking at even if they may have the similar details.

Researched answer: The model layer of the MVC architecture utilizes the Active Record pattern to fascilitate create and accessability of the objects whose data is stored in the database. Active record will add a column to your table represented by an integer that is the primary key for that row of information. If you were to log two rows separately that had exactly the same information, the id would still be different allowing you to differentiate between the two rows. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are Post, Get, Put/Patch and Delete. Their CRUD actions are Create, Read, Update, and Delete which refer to the basic operations of requests and responses.

Researched answer: The Hypertext Transfer Protocol (HTTP) follows a client server model meaning it sends out request for information and then receive responses. There are many HTTP verbs but the most commonly used are Post, Get, Put/Patch, and Delete. These actions are the request part of this transfer and each one has a corresponding CRUD action. CRUD stands for Create, Request, Update, and Delete. Post is create action, Get is a request, Put/Patch updates, and Delete is a delete action. Post requests are made to modify the state of the data by creating new resources whereas Get is a simple request for the information. Put/Patch will update the existing data as well but will update an existing resource rather than creating a new one. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST (Representational State Transfer) is a pattern used when structuring routes between the server and the client. RESTful routes are the attempts to bring the operations that can be applied to an object into HTTP requests

2. Model validations: Model validations are used to ensure that only valid data is stored into your database.

3. Params: Params provide control over what information is being allowed into the databse they can also dictate what attributes can be created/updated by setting restrictions on the controller methods.

4. ERB: ERB is an extension that stands for Embedded Ruby. This is a file structure that allows us to code in HTML and drop ruby code into the view file.

5. API: API stands for Application Programming Interface, it is essentially an application that transmits data in the form of JSON (Javascript Object Notation).
