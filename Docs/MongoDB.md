## Using MongoDB

Mongo database services [MongoDB Atlas](https://www.mongodb.com/atlas/database)

First, we define the schema of a note that is stored in the noteSchema variable. The schema tells Mongoose how the note objects are to be stored in the database.

```javascript
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);
```

Create a note

```javascript
const note = new Note({
  content: "HTML is Easy",
  important: false,
});
```

**IMPORTANT**
Continue by inspecting the [note.js](../Backend/models/note.js) and the [MongoDB training](../Backend/mongo.js) files to find out more.

### Modify Mongoose return object

One way to format the objects returned by Mongoose is to modify the toJSON method of the schema, which is used on all instances of the models produced with that schema.

```javascript
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
```

### Storing the url with sensitive datas

There aree 2 methods

1. Pass the url as environmental variables

```bash
MONGODB_URI=address_here npm run dev
```

Do it through dotenv

```bash
npm install dotenv
```

Import it in the code

```javascript
const PORT = process.env.PORT;
```

It's important that dotenv gets imported before the note model is imported. This ensures that the environment variables from the .env file are available globally before the code from the other modules is imported.

> **Please Note:** the env variables are defined in the `.env` file

### Validation

There are usually constraints that we want to apply to the data that is stored in our application's database. Our application shouldn't accept notes that have a missing or empty content property. The validity of the note is checked in the route handler

You can also define [custom validators](https://mongoosejs.com/docs/validation.html#custom-validators)

### Mongoose methods

All of these methods returns a Promise

```javascript
find({ filter_key: "filter_value" });
```

Returns a Promise of a list of Mongoose objects

```typescript
findById(request.params.id);
```

Returns the Mongoose object by its id if found `undefined` otherwise

```javascript
findByIdAndDelete(request.params.id);
```

Deletes a maching id object

```typescript
findByIdAndUpdate(id: string, note: JsonObj, OPTIONS)
```

Changes a matching id object with another

OPTIONS:

- new: true: It returns the updated notes instead of the previous one
- runValidators: true: Runs validators over the new note
- context: "query": ???

### Checks introduced with the database

We can define some validation criteria while defining or schema:

```javascript
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
});
```

1. **CastError**: the error is caused by an invalid object id for Mongo
2. **ValidationError** In case the mongoose validation fails
