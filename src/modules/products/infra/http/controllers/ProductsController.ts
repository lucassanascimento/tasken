import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateProductService from '../../../services/CreateProductService';
import ListProductService from '../../../services/ListProductService';
import DeleteProductService from '../../../services/DeleteProductService';
import FindByIdProductService from '../../../services/FindByIdProductService';
import UpdateProductService from '../../../services/UpdateProductService';
import GetAmountProductService from '../../../services/GetAmountProductService';
import LowerAmountProductInStockService from '../../../services/GetProductWithLessStockService';
import LargeAmountProductInStockService from '../../../services/GetProductWithHigherStockService';
import GetProductOutOfStockService from '../../../services/GetProductOutOfStockService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, manufacturer, amount, value } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      manufacturer,
      amount,
      value,
    });

    return response.json(classToClass(product));
  }

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = container.resolve(ListProductService);

    const products = await findAllController.execute();
    return response.json(products);
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    const findAllController = container.resolve(FindByIdProductService);
    const { id } = request.params;

    const products = await findAllController.execute(id);
    return response.json(classToClass(products));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteController = container.resolve(DeleteProductService);

    await deleteController.execute(id);
    return response
      .status(200)
      .json({ message: 'Produto removido com sucesso!' });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, manufacturer, amount, value } = request.body;
    const { id } = request.params;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      id,
      name,
      manufacturer,
      amount,
      value,
    });

    return response.json(classToClass(product));
  }

  public async getAmount(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const createProduct = container.resolve(GetAmountProductService);

    const amount = await createProduct.execute(id);

    return response.json({ quantidade: amount });
  }

  public async findByLowerAmount(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = container.resolve(
      LowerAmountProductInStockService,
    );

    const product = await findAllController.execute();
    return response.json(product);
  }

  public async findByLargeAmount(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = container.resolve(
      LargeAmountProductInStockService,
    );

    const product = await findAllController.execute();
    return response.json(product);
  }

  public async findByProductOutOfStock(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = container.resolve(GetProductOutOfStockService);

    const product = await findAllController.execute();
    return response.json(classToClass(product));
  }
}
