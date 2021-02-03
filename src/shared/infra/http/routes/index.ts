import { Router } from 'express';
import products from '../../../../modules/products/infra/http/routes/products.routes';

const routes = Router();

routes.use('/products', products);

export default routes;
