import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center fs-1 my-3 border-bottom border-success pb-1'>Conceptual Question & Answer</h2>
            <div>
                <article>
                    <p className='fs-4'>
                        <span className='fw-bold'>Question 1:</span>
                        Difference between javascript and nodejs.
                    </p>
                    <p className='fs-5'>
                        <span className='d-block fw-bold'>Ans:</span>
                        <span className='d-block border-bottom ms-5'>JavaScript</span>
                        JavaScript is a programming language to write scripts for the website. It is used in frontend development on the client-side. It can only be run in the browsers.
                        <span className='d-block border-bottom ms-5'>NodeJs</span>
                        NodeJS is a JavaScript runtime environment. It is used in server-side development on the server side.
                        With the help of NodeJS we can run JavaScript outside the browser.
                    </p>
                </article>
                <article>
                    <p className='fs-4'>
                        <span className='fw-bold'>Question 2:</span>
                        When should you use nodejs and when should you use mongodb.
                    </p>
                    <p className='fs-5'>
                        <span className='d-block fw-bold'>Ans:</span>
                        <span className='d-block border-bottom ms-5'>When should use NodeJs</span>
                        If we want to create a high scalable network application, then NodeJs is the best option as it is an asynchronous event-driven JavaScript runtime. It can manage multiple connections simultaneously one by one. NodeJs is single threaded, non-blocking and also I/O intensive.
                        <span className='d-block border-bottom ms-5'>When should use mongoDb</span>
                        MongoDb is a NoSql document oriented database system. It stores data as JSON-like format. MongoDb provide some flexibility in storing data or managing data.
                    </p>
                </article>
                <article>
                    <p className='fs-4'>
                        <span className='fw-bold'>Question 3:</span>
                        Differences between SQL and NoSQL databases.
                    </p>
                    <p className='fs-5'>
                        <span className='d-block fw-bold'>Ans:</span>
                        <span className='d-block border-bottom ms-5'>SQL</span>
                        SQL(Structured Query Language) is a Relational Database Management System. Sql database is vertically scalable and have fixed schema. Sql databases are suited for complex queries.
                        <span className='d-block border-bottom ms-5'>NoSQL</span>
                        NoSQL is a Non-Relational Database Management System. NoSql database is horizontally scalable and have dynamic schema. These databases are not for hierarchical data storage, it is for Complex queries.
                    </p>
                </article>
                <article>
                    <p className='fs-4'>
                        <span className='fw-bold'>Question 4:</span>
                        What is the purpose of jwt and how does it work.
                    </p>
                    <p className='fs-5'>
                        <span className='d-block fw-bold'>Ans:</span>
                        <span className='d-block border-bottom ms-5'>Purpose of JWT</span>
                        The main purpose of JSON web token is for securely transmitting information between Client and Server as a JSON Object. It is used for authorization. This will allow the user to access resources that are permitted with the token.
                        <span className='d-block border-bottom ms-5'>How JWT works</span>
                        When the user logs in using his credentials, a JWT token will be returned. When the user wants to access a protected route or resource, the user agent will send the JWT token. The servers protected routes will check for a valid JWT. If it is present then the user will allowed to use protected resources, else the user won't be allowed to do so.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;