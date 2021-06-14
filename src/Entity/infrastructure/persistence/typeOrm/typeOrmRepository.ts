import { IdValue } from "../../../../ObjectValue";
import { Repository } from "typeorm";
import { Entity } from "../../../Domain";

export class TypeOrmRepository<T extends Entity> {

    protected repository: Repository<T>;

    /**
     *
     */
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    findById(id: IdValue): Promise<T | undefined> {
        return this.repository.findOne(id.value);
    }
}