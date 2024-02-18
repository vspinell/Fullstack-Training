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

### Error Middleware

After catching an error:

```javascript
app.get('/api/notes/:id', (request, response, next) => {
	...
	}).catch(error => next(error))
```

The error that is passed forward is given to the next function as a parameter. If next was called without a parameter, then the execution would simply move onto the next route or middleware. If the next function is called with a parameter, then the execution will continue to the error handler middleware.

We can hand over its management to an error middleware which has to be placed _at the very end, after all other middlewares and routes_

```javascript
app.use(errorHandler);
```
