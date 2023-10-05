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
* Cashback detail boject
*/
export class CashbackDetails {
    /**
    * Type of discount
    */
    'cashbackType': CashbackDetails.CashbackTypeEnum;
    /**
    * Value of Discount.
    */
    'cashbackValue': string;
    /**
    * Maximum Value of Cashback allowed.
    */
    'maxCashbackAmount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cashbackType",
            "baseName": "cashback_type",
            "type": "CashbackDetails.CashbackTypeEnum"
        },
        {
            "name": "cashbackValue",
            "baseName": "cashback_value",
            "type": "string"
        },
        {
            "name": "maxCashbackAmount",
            "baseName": "max_cashback_amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CashbackDetails.attributeTypeMap;
    }
}

export namespace CashbackDetails {
    export enum CashbackTypeEnum {
        Flat = <any> 'flat',
        Percentage = <any> 'percentage'
    }
}
