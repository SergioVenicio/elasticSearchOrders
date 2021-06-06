import debug from 'debug';

import ILogger from './ILogger';

class Logger implements ILogger {
  logger: debug.Debugger;

  errorDebug: debug.Debugger;

  constructor(namespace = 'app') {
    this.logger = debug(namespace);
    this.errorDebug = debug(`${namespace}:error`);
  }

  async info(message: string): Promise<void> {
    this.logger(`[INFO] ${message}`);
  }

  async error(message: string): Promise<void> {
    this.logger(`[ERROR] ${message}`);
  }
}

export default Logger;
