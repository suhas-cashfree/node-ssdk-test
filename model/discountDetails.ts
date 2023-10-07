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
* detils of the discount object of offer
*/
export class DiscountDetails {
    /**
    * Type of discount
    */
    'discountType': DiscountDetails.DiscountTypeEnum;
    /**
    * Value of Discount.
    */
    'discountValue': string;
    /**
    * Maximum Value of Discount allowed.
    */
    'maxDiscountAmount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "discountType",
            "baseName": "discount_type",
            "type": "DiscountDetails.DiscountTypeEnum"
        },
        {
            "name": "discountValue",
            "baseName": "discount_value",
            "type": "string"
        },
        {
            "name": "maxDiscountAmount",
            "baseName": "max_discount_amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiscountDetails.attributeTypeMap;
    }
}

export namespace DiscountDetails {
    export enum DiscountTypeEnum {
        Flat = <any> 'flat',
        Percentage = <any> 'percentage'
    }
}
