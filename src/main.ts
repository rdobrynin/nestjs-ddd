import { NestFactory } from '@nestjs/core';
import * as process from 'process';

import { AppModule } from './app.module';
import { constraintErrors } from './databases/filters/constraint-errors';
import { QueryFailedFilter } from './databases/filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new QueryFailedFilter(constraintErrors));
  await app.listen(process.env.APP_PORT || 3002);
}

bootstrap();
