import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`, //${process.env.NODE_ENV}
            isGlobal: true,
        }),
        UserModule,
        AuthModule,
        ProductsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
