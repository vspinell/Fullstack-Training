Handling other api requests: DELETE, PUT, POST

### 204

Respose code for delete
**DELETE** does not return anything

---

This snippet below allows our server to parse the json body.
The json-parser takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.

```javascript
app.get("/", (request, response) => {
  app.use(express.json());
});
```

Use the following to check the header of the request

```javascript
console.log(request.headers);
```

This snippets sets the important field to false if the left hand expression evaluates to false

```javascript
important: Boolean(body.important) || false;
```

### Rest clients

- Postman
- Rest CLIENT (VS Code extension, [guide](https://github.com/Huachao/vscode-restclient/blob/master/README.md#usage))
- [WebStorm HTTP Client](https://www.jetbrains.com/help/webstorm/http-client-in-product-code-editor.html)
