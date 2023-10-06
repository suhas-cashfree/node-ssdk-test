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

export class FetchPGReconRequestFilters {
    /**
    * Specify the start date from when you want the settlement reconciliation details.
    */
    'startDate': string;
    /**
    * Specify the end date till when you want the settlement reconciliation details.
    */
    'endDate': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FetchPGReconRequestFilters.attributeTypeMap;
    }
}

