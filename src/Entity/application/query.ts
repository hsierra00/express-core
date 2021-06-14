import { IdValue } from "../../ObjectValue";
import { Entity, ReadRepository } from "../Domain";

export class Query {
    private repository: ReadRepository;

    /**
     *
     */
    constructor(repository: ReadRepository) {
        if (repository === null || repository === undefined) {
            throw new Error("Invalid arguments");
        }
        this.repository = repository;
    }

    public findAll(): Promise<Entity[]> {
        return this.repository.findAll();
    }

    public findById(id: IdValue): Promise<Entity> {
        if (id === null || id === undefined || id.value === null) {
            throw new Error("Invalid arguments");
        }
        return this.repository.findById(id);
    }
}