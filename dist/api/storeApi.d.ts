import http from 'http';
import { Order } from '../model/order';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth, OAuth } from '../model/models';
export declare enum StoreApiApiKeys {
    api_key = 0
}
export declare class StoreApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        petstore_auth: OAuth;
        api_key: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: StoreApiApiKeys, value: string): void;
    set accessToken(token: string);
    addInterceptor(interceptor: Interceptor): void;
    deleteOrder(order_id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getInventory(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: {
            [key: string]: number;
        };
    }>;
    getOrderById(order_id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order;
    }>;
    placeOrder(order?: Order, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order;
    }>;
}
