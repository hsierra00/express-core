import { IdValue } from "../../ObjectValue/IdValue";
import { Entity, QueryFilter } from "..";

export interface ReadRepository {

    /**
     * 
     */
    findAll(): Promise<Entity[]>;

    /**
     * 
     */
    findAllFilter(filter: QueryFilter): Promise<Entity[]>;

    /**
     * 
     */
    findAllByClient(id: IdValue): Promise<Entity[]>;

    /**
     * 
     */
    findAllFilterByClient(id: IdValue, filter: QueryFilter): Promise<Entity[]>;

    /**
     * 
     * @param id 
     */
    findById(id: IdValue): Promise<Entity>;
}