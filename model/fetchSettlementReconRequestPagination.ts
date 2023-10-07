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
* To fetch the next set of settlements, pass the cursor received in the response to the next API call.   To receive the data for the first time, pass the cursor as null.   Limit would be number of settlements that you want to receive.
*/
export class FetchSettlementReconRequestPagination {
    /**
    * The number of settlements you want to fetch. Maximum limit is 1000, default value is 10.
    */
    'limit': number;
    /**
    * Specifies from where the next set of settlement details should be fetched.
    */
    'cursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FetchSettlementReconRequestPagination.attributeTypeMap;
    }
}

