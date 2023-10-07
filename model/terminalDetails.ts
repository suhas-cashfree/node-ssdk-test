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
* Use this if you are creating an order for cashfree\'s softPOS
*/
export class TerminalDetails {
    /**
    * Phone no assigned to the terminal
    */
    'terminalPhoneNo': string;
    /**
    * The internal id that you use to map the terminal in your internal system
    */
    'terminalId': string;
    /**
    * To identify the type of terminal product in use, in this case it is SPOS
    */
    'terminalType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "terminalPhoneNo",
            "baseName": "terminal_phone_no",
            "type": "string"
        },
        {
            "name": "terminalId",
            "baseName": "terminal_id",
            "type": "string"
        },
        {
            "name": "terminalType",
            "baseName": "terminal_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalDetails.attributeTypeMap;
    }
}

