# sidemark-back
## Contribute
### Installing and Script

```
npm install --save https://github.com/mapbox/node-sqlite3/tarball/master
```

```
npm install
```

```
npm run lint
```

### Development
The start script start server on port 42506 that can be change in the file /.env root project directory.

```
npm start
```

### Unit tests

To run the test, a database.db file must be initialized by the script: `LikemarkTable.sql`

The database must be create in the `/src` folder. So, run those commands to create the database:

```
cd src
sqlite3 database.db < sql/LikemarkTable.sql
```
and run this command to start unit test:

```
npm run test
```

## API documentation
### GET
Get a single likemark by id.
```
/likemark/get/:id
```

Get the first level of children of an likemark by id.
```
/likemark/getFirstChildren/:id
```

Get a single likemark by id with his first level of children.
```
/likemark/getWithFirstChildren/:id
```

List all likemarks in the database.
```
/likemark/list
```

### POST
Create a single likemark.
```
/likemark/post
```

### PATCH
Update a likemark by id.
```
/likemark/update/:id
```

### DELETE
Delete a likemark by id.
```
/likemark/delete/:id
```



