import { app } from './app';
import Logger from './logger';

const PORT = process.env.PORT || 3366;

const logger = new Logger('app');
app.listen(PORT, () => {
  logger.info(`Server running on :${PORT}`);
});