import express from 'express';

class BankerController {
    async getData(req:express.Request, res:express.Response) {
        res.json('Hello,banker')
    }
};



export default new BankerController;