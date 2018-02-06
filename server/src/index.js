import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../../dist/public')));
app.listen(PORT, ()=> {
  console.log(`Vertis is up and listening on PORT:${PORT}`);
});