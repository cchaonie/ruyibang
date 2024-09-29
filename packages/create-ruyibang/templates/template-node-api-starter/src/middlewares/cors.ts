import { CorsOptions } from 'cors';
import { Request } from 'express';

const HeaderKeys = {
  Origin: 'Origin',
};

type Callback = (err: Error | null, options?: CorsOptions) => void;

const allowedHeaders = Object.values(HeaderKeys).join(',');

function isAllowedOrigin(origin: string) {
  return /^https?:\/\/localhost/.test(origin);
}

export default (req: Request, callback: Callback) => {
  const origin = req.header(HeaderKeys.Origin) || '';
  const isAllowed = isAllowedOrigin(origin);

  callback(null, {
    allowedHeaders,
    maxAge: 86400,
    origin: isAllowed,
  });
};
