import { NestFactory } from '@nestjs/core';
import * as process from 'process';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT || 3002);
}

bootstrap();
