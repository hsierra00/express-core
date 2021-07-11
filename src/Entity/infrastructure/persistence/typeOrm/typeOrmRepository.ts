import { IdValue } from "../../../../ObjectValue";
import { DeepPartial, Repository } from "typeorm";
import { Entity, QueryFilter } from "../../../Domain";

export class TypeOrmRepository<T extends Entity> {

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
    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    /**
     * the real method must be implemented in repositories child class.
     * @returns 
     */
    findAllFilter(filter: QueryFilter): Promise<T[]> {
        return this.findAll();
    }

    /**
     * 
     * @returns 
     */
    findAllByClient(id: IdValue): Promise<T[]> {
        const qb = this.repository.createQueryBuilder("qb");
        return qb.where("qb.clientId = :id", { id: id.value }).getMany();
    }

    /**
     * the real method must be implemented in repositories child class.
     * @returns 
     */
    findAllFilterByClient(id: IdValue, filter: QueryFilter): Promise<T[]> {
        return this.findAllByClient(id);
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