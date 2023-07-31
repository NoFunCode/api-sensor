import { NextFunction, Request, Response } from "express";
import { Data } from "./data.model"
import { AppDataSource } from "../../db";

const dataRepository = AppDataSource.getRepository(Data)

export async function addData(req: Request, res: Response, next: NextFunction) {
    try {
        const newData = new Data()
        newData.timestamp = req.body.timestamp
        newData.water_temperature = req.body.water_temperature
        newData.outdoor_temperature = req.body.outdoor_temperature
        return await dataRepository.save(newData)
    } catch (error) {

    }
}