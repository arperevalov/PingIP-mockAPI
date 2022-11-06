import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const data = {};
    const exceptionResponse = await exception.getResponse()
    if (typeof exceptionResponse === 'object' && exceptionResponse['message']) {
        const messages = exceptionResponse['message'];       
        for (let i=0; i < messages.length; i++) {
            data[i] = messages[i]
        }
    }


    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        errors: {
            ...data
        }
      });
  }
}