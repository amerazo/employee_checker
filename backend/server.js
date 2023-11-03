import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

// http://localhost:4000/test
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });