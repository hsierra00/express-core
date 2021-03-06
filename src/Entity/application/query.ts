import { IdValue } from "./../../object-value";
import { Entity, QueryFilter, ReadRepository } from "./../domain";

export class Query {
    protected repository: ReadRepository;

    /**
     *
     */
    constructor(repository: ReadRepository) {
        if (repository === null || repository === undefined) {
            throw new Error("Invalid arguments");
        }
        this.repository = repository;
    }

    public findAll(filter?: QueryFilter): Promise<Entity[]> {
        return this.repository.findAll();
    }

    public findById(id: IdValue): Promise<Entity | undefined> {
        if (id === null || id === undefined || id.value === null) {
            throw new Error("Invalid arguments");
        }
        return this.repository.findById(id);
    }

    findAllByClient(id: IdValue, filter?: QueryFilter): Promise<Entity[]> {
        if (id === null || id === undefined || id.value === null) {
            throw new Error("Invalid arguments");
        }
        return this.repository.findAllByClient(id);
    }
}