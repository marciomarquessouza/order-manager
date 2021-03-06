import { ServerError, UnauthorizedError } from '../errors';
import { HttpResponse } from './http.protocols';

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error,
});

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: new UnauthorizedError(),
});

export const forbiden = (): HttpResponse => ({
    statusCode: 403,
    body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack),
});

export const ok = (data?: any): HttpResponse => ({
    statusCode: 200,
    body: data || null,
});

export const created = (data?: any): HttpResponse => ({
    statusCode: 201,
    body: data || null,
});

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null,
});
