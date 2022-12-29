export class UnauthorizedError extends Error {
  constructor() {
    super('Your session is expired. Please re-login again.');
    this.name = 'UnauthorizedError';
  }
}
