We defined two routes to the application

### First

It defines an event handler that is used to handle HTTP GET requests made to the application's / root:

```javascript
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
```

Method **response.send**:
Since the parameter is a string, express automatically sets the value of the Content-Type header to be text/html.

### Second

```javascript
app.get("/api/notes", (request, response) => {
  response.json(notes);
});
```

Method **response.json**:
Calling the method will send the notes array that was passed to it as a JSON formatted string. Express automatically sets the Content-Type header with the appropriate value of application/json.

The event handler function accepts two parameters. The first request parameter contains all of the information of the HTTP request, and the second response parameter is used to define how the request is responded to.
