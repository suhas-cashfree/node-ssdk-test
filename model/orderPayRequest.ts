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
import { OrderPayRequestPaymentMethod } from './orderPayRequestPaymentMethod';

/**
* Complete object for the pay api that uses payment method objects
*/
export class OrderPayRequest {
    'paymentSessionId': string;
    'paymentMethod': OrderPayRequestPaymentMethod;
    'saveInstrument'?: boolean;
    /**
    * This is required if any offers needs to be applied to the order.
    */
    'offerId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentSessionId",
            "baseName": "payment_session_id",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "OrderPayRequestPaymentMethod"
        },
        {
            "name": "saveInstrument",
            "baseName": "save_instrument",
            "type": "boolean"
        },
        {
            "name": "offerId",
            "baseName": "offer_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderPayRequest.attributeTypeMap;
    }
}

