import localVarRequest from 'request';

export * from './apiError';
export * from './apiError404';
export * from './apiError409';
export * from './apiError502';
export * from './authenticationError';
export * from './badRequestError';
export * from './createOrderBackendRequest';
export * from './createOrderBackendRequestOrderMeta';
export * from './createOrderBackendRequestTerminal';
export * from './customerDetails';
export * from './idempotencyError';
export * from './orderMeta';
export * from './ordersEntity';
export * from './paymentSuccessWebhook';
export * from './paymentURLObject';
export * from './rateLimitError';
export * from './refundURLObject';
export * from './settlementURLObject';
export * from './terminalDetails';
export * from './vendorSplit';
export * from './wHcustomerDetails';
export * from './wHdata';
export * from './wHorder';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiError } from './apiError';
import { ApiError404 } from './apiError404';
import { ApiError409 } from './apiError409';
import { ApiError502 } from './apiError502';
import { AuthenticationError } from './authenticationError';
import { BadRequestError } from './badRequestError';
import { CreateOrderBackendRequest } from './createOrderBackendRequest';
import { CreateOrderBackendRequestOrderMeta } from './createOrderBackendRequestOrderMeta';
import { CreateOrderBackendRequestTerminal } from './createOrderBackendRequestTerminal';
import { CustomerDetails } from './customerDetails';
import { IdempotencyError } from './idempotencyError';
import { OrderMeta } from './orderMeta';
import { OrdersEntity } from './ordersEntity';
import { PaymentSuccessWebhook } from './paymentSuccessWebhook';
import { PaymentURLObject } from './paymentURLObject';
import { RateLimitError } from './rateLimitError';
import { RefundURLObject } from './refundURLObject';
import { SettlementURLObject } from './settlementURLObject';
import { TerminalDetails } from './terminalDetails';
import { VendorSplit } from './vendorSplit';
import { WHcustomerDetails } from './wHcustomerDetails';
import { WHdata } from './wHdata';
import { WHorder } from './wHorder';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApiError.TypeEnum": ApiError.TypeEnum,
        "ApiError404.TypeEnum": ApiError404.TypeEnum,
        "ApiError409.TypeEnum": ApiError409.TypeEnum,
        "ApiError502.TypeEnum": ApiError502.TypeEnum,
        "BadRequestError.TypeEnum": BadRequestError.TypeEnum,
        "IdempotencyError.TypeEnum": IdempotencyError.TypeEnum,
        "RateLimitError.TypeEnum": RateLimitError.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "ApiError": ApiError,
    "ApiError404": ApiError404,
    "ApiError409": ApiError409,
    "ApiError502": ApiError502,
    "AuthenticationError": AuthenticationError,
    "BadRequestError": BadRequestError,
    "CreateOrderBackendRequest": CreateOrderBackendRequest,
    "CreateOrderBackendRequestOrderMeta": CreateOrderBackendRequestOrderMeta,
    "CreateOrderBackendRequestTerminal": CreateOrderBackendRequestTerminal,
    "CustomerDetails": CustomerDetails,
    "IdempotencyError": IdempotencyError,
    "OrderMeta": OrderMeta,
    "OrdersEntity": OrdersEntity,
    "PaymentSuccessWebhook": PaymentSuccessWebhook,
    "PaymentURLObject": PaymentURLObject,
    "RateLimitError": RateLimitError,
    "RefundURLObject": RefundURLObject,
    "SettlementURLObject": SettlementURLObject,
    "TerminalDetails": TerminalDetails,
    "VendorSplit": VendorSplit,
    "WHcustomerDetails": WHcustomerDetails,
    "WHdata": WHdata,
    "WHorder": WHorder,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
