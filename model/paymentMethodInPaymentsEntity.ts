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
import { PaymentMethodInPaymentsEntityPaymentMethod } from './paymentMethodInPaymentsEntityPaymentMethod';

/**
* payment methods all
*/
export class PaymentMethodInPaymentsEntity {
    'paymentMethod'?: PaymentMethodInPaymentsEntityPaymentMethod;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "PaymentMethodInPaymentsEntityPaymentMethod"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodInPaymentsEntity.attributeTypeMap;
    }
}

