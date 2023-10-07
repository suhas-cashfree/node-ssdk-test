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
* App payment method
*/
export class App {
    /**
    * Specify the channel through which the payment must be processed.
    */
    'channel': string;
    /**
    * Specify the provider through which the payment must be processed.
    */
    'provider': App.ProviderEnum;
    /**
    * Customer phone number associated with a wallet for payment.
    */
    'phone': string;

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
            "type": "App.ProviderEnum"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return App.attributeTypeMap;
    }
}

export namespace App {
    export enum ProviderEnum {
        Gpay = <any> 'gpay',
        Phonepe = <any> 'phonepe',
        Ola = <any> 'ola',
        Paytm = <any> 'paytm',
        Amazon = <any> 'amazon',
        Airtel = <any> 'airtel',
        Freecharge = <any> 'freecharge',
        Mobikwik = <any> 'mobikwik',
        Jio = <any> 'jio'
    }
}
