import { RequestHandler, Response, Request } from 'express';
import encoderService from './encoder.service';

const encode: RequestHandler = (req: Request, res: Response) => {
  const { text } = req.body;
  const encoded = encoderService.encode(text);

  res.send({ encoded });
};

export default {
  encode,
};
