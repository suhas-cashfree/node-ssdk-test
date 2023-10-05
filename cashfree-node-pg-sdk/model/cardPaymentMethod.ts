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
import { Card } from './card';

/**
* The card payment object is used to make payment using either plain card number, saved card instrument id or using cryptogram 
*/
export class CardPaymentMethod {
    'card': Card;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        }    ];

    static getAttributeTypeMap() {
        return CardPaymentMethod.attributeTypeMap;
    }
}

