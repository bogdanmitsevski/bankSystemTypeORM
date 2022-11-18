import express from 'express';
import { Banker } from '../entities/Banker';

class BankerController {
    async createBanker(req:express.Request, res:express.Response) {
        const {firstName, lastName, email, cardNumber, employeeNumber, middleName} = req.body;

        const newBanker = await Banker.create({
            first_name:firstName,
            last_name:lastName,
            email:email,
            card_number:cardNumber,
            employee_number:employeeNumber,
            middle_name:middleName
        });

        await newBanker.save();
        res.json(newBanker);
    }
};



export default new BankerController;