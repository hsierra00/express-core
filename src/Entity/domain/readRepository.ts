import { IdValue } from "./../../object-value";
import { Entity, QueryFilter } from "./";

export interface ReadRepository {

    /**
     * 
     */
    findAll(filter?: QueryFilter): Promise<Entity[]>;

    /**
     * 
     */
    findAllByClient(id: IdValue, filter?: QueryFilter): Promise<Entity[]>;

    /**
     * 
     * @param id 
     */
    findById(id: IdValue): Promise<Entity | undefined>;
}