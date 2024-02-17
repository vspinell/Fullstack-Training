## Middlewares

### What are middlewares and how do they work

- Middleware is a function that receives three parameters: `(request, response, next)`
- You can use several middlewares at the same time.
- When you have more than one, they're executed one by one in the order that they were taken into use in express.
- Middleware is taken into use like this:

```javascript
app.use(requestLogger);
```

- Middleware functions have to be taken into use before routes if we want them to be executed before the route event handlers are called.
- There are also situations where we want to define middleware functions after routes. In practice, this means that we are defining middleware functions that are only called if no route handles the HTTP request.
