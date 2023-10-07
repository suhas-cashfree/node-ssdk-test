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
import { LinkCustomerDetailsEntity } from './linkCustomerDetailsEntity';
import { LinkMetaEntity } from './linkMetaEntity';
import { LinkNotifyEntity } from './linkNotifyEntity';

/**
* Request paramenters for link creation
*/
export class CreateLinkRequest {
    /**
    * Unique Identifier (provided by merchant) for the Link. Alphanumeric and only - and _ allowed (50 character limit). Use this for other link-related APIs.
    */
    'linkId': string;
    /**
    * Amount to be collected using this link. Provide upto two decimals for paise.
    */
    'linkAmount': number;
    /**
    * Currency for the payment link. Default is INR. Contact care@cashfree.com to enable new currencies.
    */
    'linkCurrency': string;
    /**
    * A brief description for which payment must be collected. This is shown to the customer.
    */
    'linkPurpose': string;
    'customerDetails': LinkCustomerDetailsEntity;
    /**
    * If \"true\", customer can make partial payments for the link.
    */
    'linkPartialPayments'?: boolean;
    /**
    * Minimum amount in first installment that needs to be paid by the customer if partial payments are enabled. This should be less than the link_amount.
    */
    'linkMinimumPartialAmount'?: number;
    /**
    * Time after which the link expires. Customers will not be able to make the payment beyond the time specified here. You can provide them in a valid ISO 8601 time format. Default is 30 days.
    */
    'linkExpiryTime'?: string;
    'linkNotify'?: LinkNotifyEntity;
    /**
    * If \"true\", reminders will be sent to customers for collecting payments.
    */
    'linkAutoReminders'?: boolean;
    /**
    * Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs
    */
    'linkNotes'?: { [key: string]: string; };
    'linkMeta'?: LinkMetaEntity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "linkId",
            "baseName": "link_id",
            "type": "string"
        },
        {
            "name": "linkAmount",
            "baseName": "link_amount",
            "type": "number"
        },
        {
            "name": "linkCurrency",
            "baseName": "link_currency",
            "type": "string"
        },
        {
            "name": "linkPurpose",
            "baseName": "link_purpose",
            "type": "string"
        },
        {
            "name": "customerDetails",
            "baseName": "customer_details",
            "type": "LinkCustomerDetailsEntity"
        },
        {
            "name": "linkPartialPayments",
            "baseName": "link_partial_payments",
            "type": "boolean"
        },
        {
            "name": "linkMinimumPartialAmount",
            "baseName": "link_minimum_partial_amount",
            "type": "number"
        },
        {
            "name": "linkExpiryTime",
            "baseName": "link_expiry_time",
            "type": "string"
        },
        {
            "name": "linkNotify",
            "baseName": "link_notify",
            "type": "LinkNotifyEntity"
        },
        {
            "name": "linkAutoReminders",
            "baseName": "link_auto_reminders",
            "type": "boolean"
        },
        {
            "name": "linkNotes",
            "baseName": "link_notes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "linkMeta",
            "baseName": "link_meta",
            "type": "LinkMetaEntity"
        }    ];

    static getAttributeTypeMap() {
        return CreateLinkRequest.attributeTypeMap;
    }
}

