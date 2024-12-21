const express = require('express');
const app = express();
app.use(express.json()); // This line is crucial for the fix
app.post('/data', (req, res) => {
  const data = req.body;  
  if (Object.keys(data).length === 0) {
    return res.status(400).send('No data received');
  }
  // Perform some operation with the data
  console.log(data);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});