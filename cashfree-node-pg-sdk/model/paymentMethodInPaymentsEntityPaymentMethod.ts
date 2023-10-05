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
import { PaymentMethodAppInPaymentsEntity } from './paymentMethodAppInPaymentsEntity';
import { PaymentMethodCardInPaymentsEntity } from './paymentMethodCardInPaymentsEntity';
import { PaymentMethodCardlessEMIInPaymentsEntity } from './paymentMethodCardlessEMIInPaymentsEntity';
import { PaymentMethodNetBankingInPaymentsEntity } from './paymentMethodNetBankingInPaymentsEntity';
import { PaymentMethodPaylaterInPaymentsEntity } from './paymentMethodPaylaterInPaymentsEntity';
import { PaymentMethodUPIInPaymentsEntity } from './paymentMethodUPIInPaymentsEntity';

export class PaymentMethodInPaymentsEntityPaymentMethod {
    'channel': string;
    'cardNumber'?: string;
    'cardNetwork'?: string;
    'cardType'?: string;
    'cardCountry'?: string;
    'cardBankName'?: string;
    'cardNetworkReferenceId'?: string;
    'netbankingBankCode': number;
    'netbankingBankName': string;
    'upiId'?: string;
    'provider'?: string;
    'phone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "cardNumber",
            "baseName": "card_number",
            "type": "string"
        },
        {
            "name": "cardNetwork",
            "baseName": "card_network",
            "type": "string"
        },
        {
            "name": "cardType",
            "baseName": "card_type",
            "type": "string"
        },
        {
            "name": "cardCountry",
            "baseName": "card_country",
            "type": "string"
        },
        {
            "name": "cardBankName",
            "baseName": "card_bank_name",
            "type": "string"
        },
        {
            "name": "cardNetworkReferenceId",
            "baseName": "card_network_reference_id",
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
        },
        {
            "name": "upiId",
            "baseName": "upi_id",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodInPaymentsEntityPaymentMethod.attributeTypeMap;
    }
}

