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
* Paylater payment method
*/
export class Paylater {
    /**
    * The channel for cardless EMI is always `link`
    */
    'channel'?: string;
    /**
    * One of [\"kotak\", \"flexipay\", \"zestmoney\", \"lazypay\", \"olapostpaid\",\"simpl\", \"freechargepaylater\"]. Please note that Flexipay is offered by HDFC bank
    */
    'provider'?: Paylater.ProviderEnum;
    /**
    * Customers phone number for this payment instrument. If the customer is not eligible you will receive a 400 error with type as \'invalid_request_error\' and code as \'invalid_request_error\'
    */
    'phone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "Paylater.ProviderEnum"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Paylater.attributeTypeMap;
    }
}

export namespace Paylater {
    export enum ProviderEnum {
        Kotak = <any> 'kotak',
        Flexipay = <any> 'flexipay',
        Zestmoney = <any> 'zestmoney',
        Lazypay = <any> 'lazypay',
        Olapostpaid = <any> 'olapostpaid',
        Simpl = <any> 'simpl',
        Freechargepaylater = <any> 'freechargepaylater'
    }
}
