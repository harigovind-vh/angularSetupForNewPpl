import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error) {
    // Log the error anyway
    console.error(error);
  }
}
