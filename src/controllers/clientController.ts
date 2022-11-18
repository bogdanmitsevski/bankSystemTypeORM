import express from 'express';
import { Client } from '../entities/Client';
class ClientController {
    async createClient (req:express.Request, res:express.Response) {
        const {firstName, lastName, email, cardNumber, balance, middleName} = req.body;
            const newClient = await Client.create({
            first_name:firstName,
            last_name:lastName,
            email:email,
            card_number:cardNumber,
            balance:balance,
            middle_name:middleName
            });

            await newClient.save();
            res.json(newClient);
        }
    };


export default new ClientController;