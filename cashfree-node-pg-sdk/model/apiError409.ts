/**
 * Cashfree Payment Gateway APIs
 * Cashfree\'s Payment Gateway APIs provide developers with a streamlined pathway to integrate advanced payment processing capabilities into their applications, platforms and websites.
 *
 * The version of the OpenAPI document: 2022-09-01
 * Contact: developers@cashfree.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* duplicate request
*/
export class ApiError409 {
    'message'?: string;
    'code'?: string;
    /**
    * invalid_request_error
    */
    'type'?: ApiError409.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiError409.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ApiError409.attributeTypeMap;
    }
}

export namespace ApiError409 {
    export enum TypeEnum {
        InvalidRequestError = <any> 'invalid_request_error'
    }
}
