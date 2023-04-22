import express from 'express';

const fruitRouter = express.Router();

fruitRouter.get('/', (req, res) =>
 res.send("Hi oshan")
);

export { fruitRouter };