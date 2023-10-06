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
import { FetchSettlementReconDataInner } from './fetchSettlementReconDataInner';

/**
* Recon object for settlement
*/
export class FetchSettlementRecon {
    /**
    * Specifies from where the next set of settlement details should be fetched.
    */
    'cursor'?: string;
    /**
    * Number of settlements you want to fetch in the next iteration.
    */
    'limit'?: number;
    'data'?: Array<FetchSettlementReconDataInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<FetchSettlementReconDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return FetchSettlementRecon.attributeTypeMap;
    }
}

