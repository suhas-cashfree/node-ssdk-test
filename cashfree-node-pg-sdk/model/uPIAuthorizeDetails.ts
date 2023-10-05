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
* object when you are using preauth in UPI in order pay
*/
export class UPIAuthorizeDetails {
    /**
    * Time by which this authorization should be approved by the customer.
    */
    'approveBy'?: string;
    /**
    * This is the time when the UPI one time mandate will start
    */
    'startTime'?: string;
    /**
    * This is the time when the UPI mandate will be over. If the mandate has not been executed by this time, the funds will be returned back to the customer after this time.
    */
    'endTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "approveBy",
            "baseName": "approve_by",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return UPIAuthorizeDetails.attributeTypeMap;
    }
}

