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

export class CreateOrderBackendRequestOrderMeta {
    /**
    * The URL to which user will be redirected to after the payment on bank OTP page. Maximum length: 250. The return_url must contain placeholder {order_id}. When redirecting the customer back to the return url from the bank’s OTP page, Cashfree will replace this placeholder with the actual value for that order.
    */
    'returnUrl'?: string | null;
    /**
    * Notification URL for server-server communication. Useful when user\'s connection drops while re-directing. NotifyUrl should be an https URL. Maximum length: 250.
    */
    'notifyUrl'?: string | null;
    /**
    * Allowed payment modes for this order. Pass comma-separated values among following options - \"cc\", \"dc\", \"ccc\", \"ppc\",\"nb\",\"upi\",\"paypal\",\"app\",\"paylater\",\"cardlessemi\",\"dcemi\",\"ccemi\",\"banktransfer\". Leave it blank to show all available payment methods
    */
    'paymentMethods'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "returnUrl",
            "baseName": "return_url",
            "type": "string"
        },
        {
            "name": "notifyUrl",
            "baseName": "notify_url",
            "type": "string"
        },
        {
            "name": "paymentMethods",
            "baseName": "payment_methods",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderBackendRequestOrderMeta.attributeTypeMap;
    }
}

