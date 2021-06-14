import express, { Application, Request, Response } from "express";

export abstract class Controller {

    public router = express.Router();

    /**
     *
     */
    constructor() {
        this.initializeRoutes();
    }

    abstract initializeRoutes(): void;
}