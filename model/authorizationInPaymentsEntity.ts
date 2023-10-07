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

import { RequestFile } from './models';

/**
* If preauth enabled for account you will get this body
*/
export class AuthorizationInPaymentsEntity {
    /**
    * One of CAPTURE or VOID
    */
    'action'?: AuthorizationInPaymentsEntity.ActionEnum;
    /**
    * One of SUCCESS or PENDING
    */
    'status'?: AuthorizationInPaymentsEntity.StatusEnum;
    /**
    * The captured amount for this authorization request
    */
    'capturedAmount'?: number;
    /**
    * Start time of this authorization hold (only for UPI)
    */
    'startTime'?: string;
    /**
    * End time of this authorization hold (only for UPI)
    */
    'endTime'?: string;
    /**
    * Approve by time as passed in the authorization request (only for UPI)
    */
    'approveBy'?: string;
    /**
    * CAPTURE or VOID reference number based on action 
    */
    'actionReference'?: string;
    /**
    * Time of action (CAPTURE or VOID)
    */
    'actionTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "AuthorizationInPaymentsEntity.ActionEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthorizationInPaymentsEntity.StatusEnum"
        },
        {
            "name": "capturedAmount",
            "baseName": "captured_amount",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "string"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "string"
        },
        {
            "name": "approveBy",
            "baseName": "approve_by",
            "type": "string"
        },
        {
            "name": "actionReference",
            "baseName": "action_reference",
            "type": "string"
        },
        {
            "name": "actionTime",
            "baseName": "action_time",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationInPaymentsEntity.attributeTypeMap;
    }
}

export namespace AuthorizationInPaymentsEntity {
    export enum ActionEnum {
        Capture = <any> 'CAPTURE',
        Void = <any> 'VOID'
    }
    export enum StatusEnum {
        Success = <any> 'SUCCESS',
        Pending = <any> 'PENDING'
    }
}
