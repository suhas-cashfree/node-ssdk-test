/**
 * Cashfree Payment Gateway APIs
 * Cashfree\'s Payment Gateway APIs provide developers with a streamlined pathway to integrate advanced payment processing capabilities into their applications, platforms and websites.
 *
 * The version of the OpenAPI document: 1.0.4
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
import { Cryptogram } from '../model/cryptogram';
import { FetchAllSavedInstruments } from '../model/fetchAllSavedInstruments';
import { IdempotencyError } from '../model/idempotencyError';
import { RateLimitError } from '../model/rateLimitError';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://sandbox.cashfree.com/pg';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TokenVaultApiApiKeys {
    XClientID,
    XClientSecret,
    XClientSignatureHeader,
    XPartnerAPIKey,
    XPartnerMerchantID,
}

export class TokenVaultApi {
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

    public setApiKey(key: TokenVaultApiApiKeys, value: string) {
        (this.authentications as any)[TokenVaultApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * To delete a saved instrument for a customer id and instrument id
     * @summary Delete Saved Instrument
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param customerId Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60;
     * @param instrumentId The instrument_id which needs to be deleted
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async deleteSpecificSavedInstrument (xApiVersion: string, customerId: string, instrumentId: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FetchAllSavedInstruments;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
            return new Promise<{ response: http.IncomingMessage; body: FetchAllSavedInstruments;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FetchAllSavedInstruments");
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
     * To get all saved instruments for a customer id
     * @summary Fetch All Saved Instruments
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param customerId Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60;
     * @param instrumentType type to instrument to query
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async fetchAllSavedInstruments (xApiVersion: string, customerId: string, instrumentType: 'card', xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<FetchAllSavedInstruments>;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling fetchAllSavedInstruments.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchAllSavedInstruments.');
        }

        // verify required parameter 'instrumentType' is not null or undefined
        if (instrumentType === null || instrumentType === undefined) {
            throw new Error('Required parameter instrumentType was null or undefined when calling fetchAllSavedInstruments.');
        }

        if (instrumentType !== undefined) {
            localVarQueryParameters['instrument_type'] = ObjectSerializer.serialize(instrumentType, "'card'");
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
            return new Promise<{ response: http.IncomingMessage; body: Array<FetchAllSavedInstruments>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<FetchAllSavedInstruments>");
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
     * To get the card network token, token expiry and cryptogram for a saved instrument using instrument id
     * @summary Fetch cryptogram for saved instrument
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param customerId Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60;
     * @param instrumentId The instrument_id of the saved instrument which needs to be queried
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async fetchCryptogram (xApiVersion: string, customerId: string, instrumentId: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Cryptogram;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}/cryptogram'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling fetchCryptogram.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchCryptogram.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling fetchCryptogram.');
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
            return new Promise<{ response: http.IncomingMessage; body: Cryptogram;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Cryptogram");
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
     * To get specific saved instrument for a customer id and instrument id
     * @summary Fetch Single Saved Instrument
     * @param xApiVersion API version to be used. Format is in YYYY-MM-DD
     * @param customerId Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60;
     * @param instrumentId The instrument_id of the saved instrument which needs to be queried
     * @param xRequestId Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree
     */
    public async fetchSpecificSavedInstrument (xApiVersion: string, customerId: string, instrumentId: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FetchAllSavedInstruments;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
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
            throw new Error('Required parameter xApiVersion was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling fetchSpecificSavedInstrument.');
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
            return new Promise<{ response: http.IncomingMessage; body: FetchAllSavedInstruments;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FetchAllSavedInstruments");
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
