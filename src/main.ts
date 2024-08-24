import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import * as process from 'process';

import { AppModule } from './app.module';
import { constraintErrors } from './databases/filters/constraint-errors';
import { QueryFailedFilter } from './databases/filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new QueryFailedFilter(constraintErrors));
  await app.listen(process.env.PORT || 3002);
}

bootstrap().then(() => console.info('Server is running on port 3002'));
