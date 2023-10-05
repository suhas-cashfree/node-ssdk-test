/**
 * Cashfree Payment Gateway APIs
 * Cashfree\'s Payment Gateway APIs provide developers with a streamlined pathway to integrate advanced payment processing capabilities into their applications, platforms and websites.
 *
 * The version of the OpenAPI document: 2022-01-01
 * Contact: developers@cashfree.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApiError } from '../model/apiError';
import { ApiError404 } from '../model/apiError404';
import { ApiError409 } from '../model/apiError409';
import { AuthenticationError } from '../model/authenticationError';
import { BadRequestError } from '../model/badRequestError';
import { CreateOrderBackendRequest } from '../model/createOrderBackendRequest';
import { IdempotencyError } from '../model/idempotencyError';
import { OrdersEntity } from '../model/ordersEntity';
import { RateLimitError } from '../model/rateLimitError';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://sandbox.cashfree.com/pg';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OrdersApiApiKeys {
    XClientID,
    XClientSecret,
    XClientSignatureHeader,
    XPartnerAPIKey,
    XPartnerMerchantID,
}

export class OrdersApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'XClientID': new ApiKeyAuth('header', 'x-client-id'),
        'XClientSecret': new ApiKeyAuth('header', 'x-client-secret'),
        'XClientSignatureHeader': new ApiKeyAuth('header', 'x-client-signature'),
        'XPartnerAPIKey': new ApiKeyAuth('header', 'x-partner-apikey'),
        'XPartnerMerchantID': new ApiKeyAuth('header', 'x-partner-merchantid'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: OrdersApiApiKeys, value: string) {
        (this.authentications as any)[OrdersApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * ### Order An order is an entity which has a amount and currency associated with it. It is something for which you want to collect payment for. Use this API to create orders with Cashfree from your backend to get a `payment_sessions_id`.  You can use the `payment_sessions_id` to create a transaction for the order. 
     * @summary Create Order
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     * @param xIdempotencyKey Idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeded or failed. Subsequent requests with the same key return the same result, including 500 errors.  Currently supported on all POST calls that uses x-client-id &amp; x-client-secret. To use enable, pass x-idempotency-key in the request header. The value of this header must be unique to each operation you are trying to do. One example can be to use the same order_id that you pass while creating orders 
     * @param createOrderBackendRequest Request body to create an order at cashfree
     */
    public async createOrder (xApiVersion: string, xRequestId?: string, xIdempotencyKey?: string, createOrderBackendRequest?: CreateOrderBackendRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: OrdersEntity;  }> {
        const localVarPath = this.basePath + '/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xApiVersion' is not null or undefined
        if (xApiVersion === null || xApiVersion === undefined) {
            throw new Error('Required parameter xApiVersion was null or undefined when calling createOrder.');
        }

        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createOrderBackendRequest, "CreateOrderBackendRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.XPartnerAPIKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.XPartnerAPIKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.XClientSecret.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.XClientSecret.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.XPartnerMerchantID.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.XPartnerMerchantID.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.XClientID.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.XClientID.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.XClientSignatureHeader.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.XClientSignatureHeader.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: OrdersEntity;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "OrdersEntity");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
