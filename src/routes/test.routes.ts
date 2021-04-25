import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', (request, response) => {
  return response.json({ message: 'true' });
});

export default testRouter;
