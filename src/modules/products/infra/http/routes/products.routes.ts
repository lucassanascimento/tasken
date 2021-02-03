import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get('/', productsController.findAll);

productRouter.get('/find-by-id/:id', productsController.findById);

productRouter.get('/get-by-amount/:id', productsController.getAmount);

productRouter.get('/min', productsController.findByLowerAmount);

productRouter.get('/max', productsController.findByLargeAmount);

productRouter.get('/end', productsController.findByProductOutOfStock);

productRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      manufacturer: Joi.string().required(),
      amount: Joi.number().required(),
      value: Joi.number().required(),
    },
  }),
  productsController.create,
);

productRouter.get('/', productsController.delete);

productRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.delete,
);

productRouter.post(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      manufacturer: Joi.string().required(),
      amount: Joi.number().required(),
      value: Joi.number().required(),
    },
  }),
  productsController.update,
);
export default productRouter;
