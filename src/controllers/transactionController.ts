import express from 'express';
import { Transaction } from '../entities/Transaction';
import { Client } from '../entities/Client';
class TrasnsactionController {
    async createTransaction(req:express.Request, res:express.Response) {
        const {clientId} = req.params;
        const {type, amount} = req.body;

    }
};

export default new TrasnsactionController;