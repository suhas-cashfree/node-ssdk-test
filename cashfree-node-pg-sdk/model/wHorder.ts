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
* order entity in webhook
*/
export class WHorder {
    'orderId'?: string;
    'orderAmount'?: number;
    'orderCurrency'?: string;
    /**
    * Custom Tags in thr form of {\"key\":\"value\"} which can be passed for an order. A maximum of 10 tags can be added
    */
    'orderTags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "orderAmount",
            "baseName": "order_amount",
            "type": "number"
        },
        {
            "name": "orderCurrency",
            "baseName": "order_currency",
            "type": "string"
        },
        {
            "name": "orderTags",
            "baseName": "order_tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return WHorder.attributeTypeMap;
    }
}

