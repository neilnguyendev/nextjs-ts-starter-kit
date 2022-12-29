export class HttpError extends Error {
  constructor(message: string | undefined = undefined) {
    super(message || 'Something went wrong when sending request');
    this.name = 'HttpError';
  }
}
