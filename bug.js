const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Missing 404 handling for non-existent user
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));