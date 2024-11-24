import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./commons/modules/configuration.module";
import { HealthCheckModule } from "./commons/modules/health-check.module";
import { ProductModule } from "./commons/modules/product.module";
import { HttpLocalModule } from "./commons/modules/http-local.module";

@Module({
  imports: [ConfigurationModule, HealthCheckModule, ProductModule, HttpLocalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
