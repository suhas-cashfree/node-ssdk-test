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
import { SavedInstrumentMeta } from './savedInstrumentMeta';

/**
* all saved card instrument object
*/
export class FetchAllSavedInstruments {
    /**
    * customer_id for which the instrument was saved
    */
    'customerId'?: string;
    /**
    * cf_payment_id of the successful transaction done while saving instrument
    */
    'afaReference'?: string;
    /**
    * saved instrument id
    */
    'instrumentId'?: string;
    /**
    * Type of the saved instrument
    */
    'instrumentType'?: FetchAllSavedInstruments.InstrumentTypeEnum;
    /**
    * Unique id for the saved instrument
    */
    'instrumentUid'?: string;
    /**
    * masked card number displayed to the customer
    */
    'instrumentDisplay'?: string;
    /**
    * Status of the saved instrument.
    */
    'instrumentStatus'?: FetchAllSavedInstruments.InstrumentStatusEnum;
    /**
    * Timestamp at which instrument was saved.
    */
    'createdAt'?: string;
    'instrumentMeta'?: SavedInstrumentMeta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerId",
            "baseName": "customer_id",
            "type": "string"
        },
        {
            "name": "afaReference",
            "baseName": "afa_reference",
            "type": "string"
        },
        {
            "name": "instrumentId",
            "baseName": "instrument_id",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrument_type",
            "type": "FetchAllSavedInstruments.InstrumentTypeEnum"
        },
        {
            "name": "instrumentUid",
            "baseName": "instrument_uid",
            "type": "string"
        },
        {
            "name": "instrumentDisplay",
            "baseName": "instrument_display",
            "type": "string"
        },
        {
            "name": "instrumentStatus",
            "baseName": "instrument_status",
            "type": "FetchAllSavedInstruments.InstrumentStatusEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "instrumentMeta",
            "baseName": "instrument_meta",
            "type": "SavedInstrumentMeta"
        }    ];

    static getAttributeTypeMap() {
        return FetchAllSavedInstruments.attributeTypeMap;
    }
}

export namespace FetchAllSavedInstruments {
    export enum InstrumentTypeEnum {
        Card = <any> 'card'
    }
    export enum InstrumentStatusEnum {
        Active = <any> 'ACTIVE',
        Inactive = <any> 'INACTIVE'
    }
}
