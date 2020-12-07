const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use('/', proxy({
  target: 'http://178.128.217.110:8400/',
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
