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
import { ApiError502 } from '../model/apiError502';
import { AuthenticationError } from '../model/authenticationError';
import { BadRequestError } from '../model/badRequestError';
import { CreateLinkRequest } from '../model/createLinkRequest';
import { IdempotencyError } from '../model/idempotencyError';
import { LinkCancelledResponse } from '../model/linkCancelledResponse';
import { LinkResponse } from '../model/linkResponse';
import { OrdersEntity } from '../model/ordersEntity';
import { RateLimitError } from '../model/rateLimitError';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://sandbox.cashfree.com/pg';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PaymentLinksApiApiKeys {
    XClientID,
    XClientSecret,
    XClientSignatureHeader,
    XPartnerAPIKey,
    XPartnerMerchantID,
}

export class PaymentLinksApi {
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

    public setApiKey(key: PaymentLinksApiApiKeys, value: string) {
        (this.authentications as any)[PaymentLinksApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Use this API to cancel a payment link. No further payments can be done against a cancelled link. Only a link in ACTIVE status can be cancelled.
     * @summary Cancel Payment Link
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param linkId The payment link ID for which you want to view the details.
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     * @param xIdempotencyKey Idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeded or failed. Subsequent requests with the same key return the same result, including 500 errors.  Currently supported on all POST calls that uses x-client-id &amp; x-client-secret. To use enable, pass x-idempotency-key in the request header. The value of this header must be unique to each operation you are trying to do. One example can be to use the same order_id that you pass while creating orders  
     */
    public async cancelPaymentLink (xApiVersion: string, linkId: string, xRequestId?: string, xIdempotencyKey?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LinkCancelledResponse;  }> {
        const localVarPath = this.basePath + '/links/{link_id}/cancel'
            .replace('{' + 'link_id' + '}', encodeURIComponent(String(linkId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling cancelPaymentLink.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling cancelPaymentLink.');
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
            return new Promise<{ response: http.IncomingMessage; body: LinkCancelledResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LinkCancelledResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API to create a new payment link. The created payment link url will be available in the API response parameter link_url.
     * @summary Create Payment Link
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     * @param xIdempotencyKey Idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeded or failed. Subsequent requests with the same key return the same result, including 500 errors.  Currently supported on all POST calls that uses x-client-id &amp; x-client-secret. To use enable, pass x-idempotency-key in the request header. The value of this header must be unique to each operation you are trying to do. One example can be to use the same order_id that you pass while creating orders  
     * @param createLinkRequest Request body to create a payment link at cashfree
     */
    public async createPaymentLink (xApiVersion: string, xRequestId?: string, xIdempotencyKey?: string, createLinkRequest?: CreateLinkRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LinkResponse;  }> {
        const localVarPath = this.basePath + '/links';
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling createPaymentLink.');
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
            body: ObjectSerializer.serialize(createLinkRequest, "CreateLinkRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: LinkResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LinkResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API to view all details and status of a payment link.
     * @summary Fetch Payment Link Details
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param linkId The payment link ID for which you want to view the details.
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async getPaymentLinkDetails (xApiVersion: string, linkId: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LinkResponse;  }> {
        const localVarPath = this.basePath + '/links/{link_id}'
            .replace('{' + 'link_id' + '}', encodeURIComponent(String(linkId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling getPaymentLinkDetails.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getPaymentLinkDetails.');
        }

        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
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
            return new Promise<{ response: http.IncomingMessage; body: LinkResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LinkResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API to view all order details for a payment link.
     * @summary Get Orders for a Payment Link
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param linkId The payment link ID for which you want to view the details.
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async getPaymentLinkOrders (xApiVersion: string, linkId: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<OrdersEntity>;  }> {
        const localVarPath = this.basePath + '/links/{link_id}/orders'
            .replace('{' + 'link_id' + '}', encodeURIComponent(String(linkId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling getPaymentLinkOrders.');
        }

        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getPaymentLinkOrders.');
        }

        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
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
            return new Promise<{ response: http.IncomingMessage; body: Array<OrdersEntity>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<OrdersEntity>");
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
