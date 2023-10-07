export * from './petApi';
import { PetApi } from './petApi';
export * from './storeApi';
import { StoreApi } from './storeApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof PetApi | typeof StoreApi | typeof UserApi)[];
