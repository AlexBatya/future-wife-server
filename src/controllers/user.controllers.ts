import { Request, Response, NextFunction } from 'express';

class UserControllers{
	public async test(req: Request, res: Response){
		res.json('Всё тип топ')
	}
}

export default new UserControllers;
