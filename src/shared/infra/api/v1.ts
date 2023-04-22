import express from 'express';
import { fruitRouter } from '../../../modules/fruit/infra/http/routes/fruit.route';

const v1Router = express.Router();

v1Router.use('/fruit', fruitRouter);

export { v1Router };
