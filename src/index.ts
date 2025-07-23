import express from 'express';
import { exampleRouter } from './routes/example';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/example', exampleRouter);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 