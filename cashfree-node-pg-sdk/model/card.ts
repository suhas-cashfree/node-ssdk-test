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
* Card Payment method
*/
export class Card {
    /**
    * The channel for card payments can be \"link\" or \"post\". Post is used for seamless OTP payments where merchant captures OTP on their own page.
    */
    'channel'?: Card.ChannelEnum;
    /**
    * Customer card number for plain card transactions. Token pan number for tokenized card transactions.
    */
    'cardNumber'?: string;
    /**
    * Customer name mentioned on the card.
    */
    'cardHolderName'?: string;
    /**
    * Card expiry month for plain card transactions. Token expiry month for tokenized card transactions.
    */
    'cardExpiryMm'?: string;
    /**
    * Card expiry year for plain card transactions. Token expiry year for tokenized card transactions.
    */
    'cardExpiryYy'?: string;
    /**
    * CVV mentioned on the card.
    */
    'cardCvv'?: string;
    /**
    * instrument id of saved card. Required only to make payment using saved instrument.
    */
    'instrumentId'?: string;
    /**
    * cryptogram received from card network. Required only for tokenized card transactions.
    */
    'cryptogram'?: string;
    /**
    * TRID issued by card networks. Required only for tokenized card transactions.
    */
    'tokenRequestorId'?: string;
    /**
    * last 4 digits of original card number. Required only for tokenized card transactions.
    */
    'cardDisplay'?: string;
    /**
    * Card alias as returned by Cashfree Vault API.
    */
    'cardAlias'?: string;
    /**
    * One of [\"Kotak\", \"ICICI\", \"RBL\", \"BOB\", \"Standard Chartered\"]. Card bank name, required for EMI payments. This is the bank user has selected for EMI
    */
    'cardBankName'?: Card.CardBankNameEnum;
    /**
    * EMI tenure selected by the user
    */
    'emiTenure'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "Card.ChannelEnum"
        },
        {
            "name": "cardNumber",
            "baseName": "card_number",
            "type": "string"
        },
        {
            "name": "cardHolderName",
            "baseName": "card_holder_name",
            "type": "string"
        },
        {
            "name": "cardExpiryMm",
            "baseName": "card_expiry_mm",
            "type": "string"
        },
        {
            "name": "cardExpiryYy",
            "baseName": "card_expiry_yy",
            "type": "string"
        },
        {
            "name": "cardCvv",
            "baseName": "card_cvv",
            "type": "string"
        },
        {
            "name": "instrumentId",
            "baseName": "instrument_id",
            "type": "string"
        },
        {
            "name": "cryptogram",
            "baseName": "cryptogram",
            "type": "string"
        },
        {
            "name": "tokenRequestorId",
            "baseName": "token_requestor_id",
            "type": "string"
        },
        {
            "name": "cardDisplay",
            "baseName": "card_display",
            "type": "string"
        },
        {
            "name": "cardAlias",
            "baseName": "card_alias",
            "type": "string"
        },
        {
            "name": "cardBankName",
            "baseName": "card_bank_name",
            "type": "Card.CardBankNameEnum"
        },
        {
            "name": "emiTenure",
            "baseName": "emi_tenure",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

export namespace Card {
    export enum ChannelEnum {
        Link = <any> 'link',
        Post = <any> 'post'
    }
    export enum CardBankNameEnum {
        Kotak = <any> 'Kotak',
        Icici = <any> 'ICICI',
        Rbl = <any> 'RBL',
        Bob = <any> 'BOB',
        StandardChartered = <any> 'Standard Chartered'
    }
}
