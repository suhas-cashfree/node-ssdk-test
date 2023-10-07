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
import { CustomerDetails } from './customerDetails';
import { OrderMeta } from './orderMeta';
import { PaymentURLObject } from './paymentURLObject';
import { RefundURLObject } from './refundURLObject';
import { SettlementURLObject } from './settlementURLObject';

/**
* The complete order entity
*/
export class OrdersEntity {
    /**
    * unique id generated by cashfree for your order
    */
    'cfOrderId'?: number;
    /**
    * order_id sent during the api request
    */
    'orderId'?: string;
    /**
    * Type of the entity.
    */
    'entity'?: string;
    /**
    * Currency of the order. Example INR
    */
    'orderCurrency'?: string;
    'orderAmount'?: number;
    /**
    * Possible values are  - `ACTIVE`: Order does not have a sucessful transaction yet - `PAID`: Order is PAID with one successful transaction - `EXPIRED`: Order was not PAID and not it has expired. No transaction can be initiated for an EXPIRED order. 
    */
    'orderStatus'?: string;
    'paymentSessionId'?: string;
    'orderExpiryTime'?: Date;
    /**
    * Additional note for order
    */
    'orderNote'?: string | null;
    /**
    * When the order was created at cashfree\'s server
    */
    'createdAt'?: Date;
    'customerDetails'?: CustomerDetails;
    'orderMeta'?: OrderMeta;
    'payments'?: PaymentURLObject;
    'settlements'?: SettlementURLObject;
    'refunds'?: RefundURLObject;
    /**
    * Custom Tags in thr form of {\"key\":\"value\"} which can be passed for an order. A maximum of 10 tags can be added
    */
    'orderTags'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cfOrderId",
            "baseName": "cf_order_id",
            "type": "number"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "orderCurrency",
            "baseName": "order_currency",
            "type": "string"
        },
        {
            "name": "orderAmount",
            "baseName": "order_amount",
            "type": "number"
        },
        {
            "name": "orderStatus",
            "baseName": "order_status",
            "type": "string"
        },
        {
            "name": "paymentSessionId",
            "baseName": "payment_session_id",
            "type": "string"
        },
        {
            "name": "orderExpiryTime",
            "baseName": "order_expiry_time",
            "type": "Date"
        },
        {
            "name": "orderNote",
            "baseName": "order_note",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "customerDetails",
            "baseName": "customer_details",
            "type": "CustomerDetails"
        },
        {
            "name": "orderMeta",
            "baseName": "order_meta",
            "type": "OrderMeta"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "PaymentURLObject"
        },
        {
            "name": "settlements",
            "baseName": "settlements",
            "type": "SettlementURLObject"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "RefundURLObject"
        },
        {
            "name": "orderTags",
            "baseName": "order_tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return OrdersEntity.attributeTypeMap;
    }
}

