import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get('/', productsController.findAll);

productRouter.get('/busca-por-id/:id', productsController.findById);

productRouter.get('/busca-quantidade/:id', productsController.getAmount);

productRouter.get(
  '/menor-quantidade-em-estoque',
  productsController.findByLowerAmount,
);

productRouter.get(
  '/maior-quantidade-em-estoque',
  productsController.findByLargeAmount,
);

productRouter.get('/sem-estoque', productsController.findByProductOutOfStock);

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

productRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.delete,
);

productRouter.put(
  '/atualiza/:id',
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
