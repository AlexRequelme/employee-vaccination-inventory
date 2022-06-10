import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import Morgan from 'morgan';
import RateLimit from 'express-rate-limit';
import routes from './routes.js';
import { notFoundHandler } from './middlewares/not-found-handle.middleware.js';
import { createConnection } from './database.js';

const app = Express();
const port = process.env.PORT || 5000;
const limiter = RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(Cors());
app.use(Helmet());
app.use(limiter);
app.use(Morgan('tiny'));
app.use(Express.json());
app.use('/api', routes);
app.use(notFoundHandler);

createConnection();
app.listen(port, () => console.log(`listening on port ${port}`));
