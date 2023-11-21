const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ token: 'dummyToken', username: user.username }); // Simulated token for successful login
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/user', (req, res) => {
  
  if (users.id===1) {
  res.json({ id: '1', username: 'user1' });
  } // Simulated user data for authenticated user
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
