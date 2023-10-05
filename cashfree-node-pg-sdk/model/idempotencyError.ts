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

import { RequestFile } from './models';

/**
* Error when idempotency fails. Different request body with the same idempotent key
*/
export class IdempotencyError {
    'message'?: string;
    'code'?: string;
    /**
    * idempotency_error
    */
    'type'?: IdempotencyError.TypeEnum;

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
            "type": "IdempotencyError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IdempotencyError.attributeTypeMap;
    }
}

export namespace IdempotencyError {
    export enum TypeEnum {
        IdempotencyError = <any> 'idempotency_error'
    }
}
