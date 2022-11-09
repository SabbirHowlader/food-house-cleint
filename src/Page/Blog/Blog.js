import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/6 mx-auto text-left py-10'>
            <h5 className='font-bold mb-4'>1. What is the difference between sql and nosql?</h5>
            <p>Ans: SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.</p>
            <br />
            <h5 className='font-bold mb-4'>2. What is JWT, How dose it work?</h5>
            <p>Ans: JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a publicprivate key. JWTs are digitally signed using either a secret (HMAC) or a publicprivate key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.</p>
            <br />
            <h5 className='font-bold mb-4'>3. What is the difference between javascript and NodeJS?</h5>
            <p>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. Node. js is sometimes misunderstood by developers as a backend framework that is exclusively used to construct servers. This is not the case; Node. js can be used on the frontend as well as the backend.</p>
            <br />
            <h5 className='font-bold mb-4'>4. How does NodeJS handle multiple requests at the same time?</h5>
            <p>Ans: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without</p>
        </div>
    );
};

export default Blog;