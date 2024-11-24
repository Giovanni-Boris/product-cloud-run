import { Module } from "@nestjs/common";
import { ProductService } from "src/services/product.service";
import { ProductController } from "src/controllers/product.controller";
import { HttpLocalModule } from "./http-local.module";
import { ProductClient } from "src/clients/product.client";

@Module({
  imports: [HttpLocalModule],
  providers: [ProductService, ProductClient],
  controllers: [ProductController],
})
export class ProductModule {}
