db = db.getSiblingDB('mydb');

db.createUser({
  user: 'root',
  pwd: 'example',
  roles: [{ role: 'readWrite', db: 'mydb' }]
});

db.createCollection('users');
db.users.insertMany([
  { name: 'John Doe', email: 'john@example.com', password: '123456' },
  { name: 'Jane Doe', email: 'jane@example.com', password: 'abcdef' }
]);