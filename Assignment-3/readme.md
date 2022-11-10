# Middleware

###  Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response.

 It works between the request and response cycle.
 
  Middleware gets executed after the server receives the request and before the controller actions send the response. 

  ![](https://media.geeksforgeeks.org/wp-content/uploads/20211007172251/middleware.png)

  ### Advantages of using middleware:

Middleware can process request objects multiple times before the server works for that request.

Middleware can be used to add logging and authentication functionality.

Middleware improves client-side rendering performance.

Middleware is used for setting some specific HTTP headers.

Middleware helps for Optimization and better performance.

