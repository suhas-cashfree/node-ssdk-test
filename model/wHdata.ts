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
import { PaymentsEntity } from './paymentsEntity';
import { WHcustomerDetails } from './wHcustomerDetails';
import { WHorder } from './wHorder';

/**
* webhook object
*/
export class WHdata {
    'order'?: WHorder;
    'payment'?: PaymentsEntity;
    'customerDetails'?: WHcustomerDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "WHorder"
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "PaymentsEntity"
        },
        {
            "name": "customerDetails",
            "baseName": "customer_details",
            "type": "WHcustomerDetails"
        }    ];

    static getAttributeTypeMap() {
        return WHdata.attributeTypeMap;
    }
}

