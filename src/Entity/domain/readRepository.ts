import { IdValue } from "../../ObjectValue/IdValue";
import { Entity } from "./entity";

export interface ReadRepository {

    /**
     * 
     */
    findAll(): Promise<Entity[]>;

    /**
     * 
     * @param id 
     */
    findById(id: IdValue): Promise<Entity>;
}