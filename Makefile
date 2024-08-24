app_shell:
	@docker exec -it nestjs_ddd bash

db:
	@docker exec nestjs_ddd yarn migration:run

db-create:
	@docker exec nestjs_ddd yarn migration:create

db-generate:
	@docker exec nestjs_ddd yarn migration:create

db-revert:
	@docker exec nestjs_ddd yarn migration:revert
