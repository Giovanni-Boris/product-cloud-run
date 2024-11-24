import { Injectable, Logger } from "@nestjs/common";
import { HttpWrapperCommon } from "../commons/wrappers/http-wrapper.common";
import { Observable } from "rxjs";
import { config } from "../commons/configs/config";
import { ListResponseDto } from "src/models/responses/list-response.dto";
import { ProductResModel } from "src/models/responses/product-res.model";
import { ProductDto } from "src/models/requests/product-dto.model";

@Injectable()
export class ProductClient {
  private readonly schemaDefault = config.SCHEMA_DEFAULT;
  private readonly host = config.API.PRODUCT.HOST;
  private readonly port = `:${config.API.PRODUCT.PORT}`;
  private readonly basePath = config.API.PRODUCT.BASE_PATH;

  constructor(private readonly httpService: HttpWrapperCommon) {}

  getProducts(): Observable<ListResponseDto<ProductResModel>> {
    const url = new URL(`${this.schemaDefault}${this.host}${this.port}${this.basePath}`);
    return this.httpService.request({
      url: url.toString(),
      method: "GET",
    });
  }

  saveProduct(product: ProductDto): Observable<ProductResModel> {
    const url = new URL(`${this.schemaDefault}${this.host}${this.port}${this.basePath}`);
    return this.httpService.request({
      url: url.toString(),
      method: "POST",
      data: {
        ...product
      }
    });
  }
}
