import { IdValue } from "../../ObjectValue/IdValue";
import { Entity } from "./entity";

export interface EditRepository {

    /**
     * 
     */
    create(item: Entity): void;

    /**
    * 
    */
    update(item: Entity): void;

    /**
     * 
     * @param id 
     */
    delete(id: IdValue): void;

    /**
     * 
     */
    persist(item: Entity): void;
}