import { DeepPartial, Repository } from "typeorm";
import { IdValue } from "./../../../../object-value";
import { EditRepository, Entity, QueryFilter, ReadRepository } from "./../../../domain";

export class TypeOrmRepository<T extends Entity> implements ReadRepository, EditRepository {

    protected repository: Repository<T>;

    /**
     *
     */
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    /**
     * 
     * @returns 
     */
    findAll(filter?: QueryFilter): Promise<T[]> {
        return this.repository.find();
    }

    /**
     * 
     * @returns 
     */
    findAllByClient(id: IdValue, filter?: QueryFilter): Promise<T[]> {
        const qb = this.repository.createQueryBuilder("qb");
        return qb.where("qb.clientId = :id", { id: id.value }).getMany();
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    findById(id: IdValue): Promise<T | undefined> {
        return this.repository.findOne(id.value);
    }

    /**
     * 
     * @param item 
     * @returns 
     */
    create(item: DeepPartial<T>): Promise<T> {
        if (item.id) {
            throw new Error("Invalid parameters.");
        }
        return this.persist(item);
    }

    /**
     * 
     * @param item 
     * @returns 
     */
    async update(item: DeepPartial<T>): Promise<T> {
        if (!item.id) {
            throw new Error("Invalid parameters.");
        }
        const updateItem: T | undefined = await this.repository.preload(item);
        if (!updateItem) {
            throw new Error("Invalid parameters.");
        }
        return this.persist(updateItem as DeepPartial<T>);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async delete(id: IdValue): Promise<T> {
        if (!id?.value) {
            throw new Error("Invalid parameters.");
        }
        const item: T | undefined = await this.repository.findOne(id.value);
        return this.repository.remove(item as T);
    }

    /**
     * 
     * @param item 
     * @returns 
     */
    persist(item: DeepPartial<T>): Promise<T> {
        return this.repository.save(item);
    }
}