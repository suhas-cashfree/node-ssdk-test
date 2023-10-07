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
import { Paylater } from './paylater';

/**
* paylater payment method
*/
export class PaylaterPaymentMethod {
    'paylater'?: Paylater;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paylater",
            "baseName": "paylater",
            "type": "Paylater"
        }    ];

    static getAttributeTypeMap() {
        return PaylaterPaymentMethod.attributeTypeMap;
    }
}

