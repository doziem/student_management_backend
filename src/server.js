const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.get('/', (request, response) => {
  response.type('text').send('Student management backend is running.\n');
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
