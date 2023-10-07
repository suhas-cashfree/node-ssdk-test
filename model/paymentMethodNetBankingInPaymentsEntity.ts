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

/**
* netbanking payment method object for pay
*/
export class PaymentMethodNetBankingInPaymentsEntity {
    'channel': string;
    'netbankingBankCode': number;
    'netbankingBankName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "netbankingBankCode",
            "baseName": "netbanking_bank_code",
            "type": "number"
        },
        {
            "name": "netbankingBankName",
            "baseName": "netbanking_bank_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodNetBankingInPaymentsEntity.attributeTypeMap;
    }
}

