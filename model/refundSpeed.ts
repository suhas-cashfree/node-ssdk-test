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
* How fast refund has to be proecessed
*/
export class RefundSpeed {
    /**
    * Requested speed of refund.
    */
    'requested'?: string;
    /**
    * Accepted speed of refund.
    */
    'accepted'?: string;
    /**
    * Processed speed of refund.
    */
    'processed'?: string;
    /**
    * Error message, if any for refund_speed request
    */
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requested",
            "baseName": "requested",
            "type": "string"
        },
        {
            "name": "accepted",
            "baseName": "accepted",
            "type": "string"
        },
        {
            "name": "processed",
            "baseName": "processed",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RefundSpeed.attributeTypeMap;
    }
}

