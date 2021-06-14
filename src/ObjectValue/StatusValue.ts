export class StatusValue {

    private status: any;

    /**
     *
     */
    constructor(status: any) {
        this.status = status;
    }

    /**
     * Get the value of StatusValue
     */
    public get value() {
        return this.status;
    }
}