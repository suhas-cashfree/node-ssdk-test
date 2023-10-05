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
import { CreateOrderBackendRequestOrderMeta } from './createOrderBackendRequestOrderMeta';
import { CreateOrderBackendRequestTerminal } from './createOrderBackendRequestTerminal';
import { CustomerDetails } from './customerDetails';
import { VendorSplit } from './vendorSplit';

/**
* Request body to create an order at cashfree
*/
export class CreateOrderBackendRequest {
    /**
    * Order identifier present in your system. Alphanumeric, \'_\' and \'-\' only
    */
    'orderId'?: string | null;
    /**
    * Bill amount for the order. Provide upto two decimals. 10.15 means Rs 10 and 15 paisa
    */
    'orderAmount': number;
    /**
    * Currency for the order. INR if left empty. Contact care@cashfree.com to enable new currencies.
    */
    'orderCurrency': string;
    'customerDetails': CustomerDetails;
    'terminal'?: CreateOrderBackendRequestTerminal | null;
    'orderMeta'?: CreateOrderBackendRequestOrderMeta | null;
    /**
    * Time after which the order expires. Customers will not be able to make the payment beyond the time specified here. We store timestamps in IST, but you can provide them in a valid ISO 8601 time format. Example 2021-07-02T10:20:12+05:30 for IST, 2021-07-02T10:20:12Z for UTC
    */
    'orderExpiryTime'?: string;
    /**
    * Order note for reference.
    */
    'orderNote'?: string | null;
    /**
    * Custom Tags in thr form of {\"key\":\"value\"} which can be passed for an order. A maximum of 10 tags can be added
    */
    'orderTags'?: { [key: string]: string; } | null;
    /**
    * If you have Easy split enabled in your Cashfree account then you can use this option to split the order amount.
    */
    'orderSplits'?: Array<VendorSplit> | null;

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
            "name": "customerDetails",
            "baseName": "customer_details",
            "type": "CustomerDetails"
        },
        {
            "name": "terminal",
            "baseName": "terminal",
            "type": "CreateOrderBackendRequestTerminal"
        },
        {
            "name": "orderMeta",
            "baseName": "order_meta",
            "type": "CreateOrderBackendRequestOrderMeta"
        },
        {
            "name": "orderExpiryTime",
            "baseName": "order_expiry_time",
            "type": "string"
        },
        {
            "name": "orderNote",
            "baseName": "order_note",
            "type": "string"
        },
        {
            "name": "orderTags",
            "baseName": "order_tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "orderSplits",
            "baseName": "order_splits",
            "type": "Array<VendorSplit>"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderBackendRequest.attributeTypeMap;
    }
}

