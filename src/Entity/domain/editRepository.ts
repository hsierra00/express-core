import { IdValue } from "./../../object-value";

export interface EditRepository {

    /**
     * 
     */
    create(item: any): Promise<any>;

    /**
    * 
    */
    update(item: any): Promise<any>;

    /**
     * 
     * @param id 
     */
    delete(id: IdValue): Promise<any>;

    /**
     * 
     */
    persist(item: any): Promise<any>;
}