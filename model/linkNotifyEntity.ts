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
* Payment link Notify Object for SMS and Email
*/
export class LinkNotifyEntity {
    /**
    * If \"true\", Cashfree will send sms on customer_phone
    */
    'sendSms'?: boolean;
    /**
    * If \"true\", Cashfree will send email on customer_email
    */
    'sendEmail'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sendSms",
            "baseName": "send_sms",
            "type": "boolean"
        },
        {
            "name": "sendEmail",
            "baseName": "send_email",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LinkNotifyEntity.attributeTypeMap;
    }
}

