import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/models/requests/product-dto.model";
import { ListResponseDto } from "src/models/responses/list-response.dto";
import { ProductResModel } from "src/models/responses/product-res.model";
import { Observable } from "rxjs";
import { ProductClient } from "src/clients/product.client";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductClient) {}

  saveProduct(product: ProductDto): Observable<ProductResModel> {
    return this.productRepository.saveProduct(product);
  }

  getProducts(): Observable<ListResponseDto<ProductResModel>> {
    return this.productRepository.getProducts();
  }
}
