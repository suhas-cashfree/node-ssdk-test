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
* Single EMI object
*/
export class EMIPlansArray {
    'tenure'?: number;
    'interestRate'?: number;
    'currency'?: string;
    'emi'?: number;
    'totalInterest'?: number;
    'totalAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tenure",
            "baseName": "tenure",
            "type": "number"
        },
        {
            "name": "interestRate",
            "baseName": "interest_rate",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "emi",
            "baseName": "emi",
            "type": "number"
        },
        {
            "name": "totalInterest",
            "baseName": "total_interest",
            "type": "number"
        },
        {
            "name": "totalAmount",
            "baseName": "total_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EMIPlansArray.attributeTypeMap;
    }
}

