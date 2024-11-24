import { Body, Controller, Post, Get } from "@nestjs/common";
import { Observable } from "rxjs";
import { ProductDto } from "src/models/requests/product-dto.model";
import { ListResponseDto } from "src/models/responses/list-response.dto";
import { ProductResModel } from "src/models/responses/product-res.model";
import { ProductService } from "src/services/product.service";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  saveProduct(@Body() product: ProductDto): Observable<ProductResModel> {
    return this.productService.saveProduct(product);
  }

  @Get()
  getProducts(): Observable<ListResponseDto<ProductResModel>> {
    return this.productService.getProducts();
  }
}
