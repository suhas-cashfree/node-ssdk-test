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
import { OfferEntity } from './offerEntity';

/**
* Eligible offer object
*/
export class EligibleOffersEntity {
    'eligibility'?: boolean;
    'entityType'?: string;
    'entityValue'?: string;
    'entityDetails'?: OfferEntity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eligibility",
            "baseName": "eligibility",
            "type": "boolean"
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string"
        },
        {
            "name": "entityValue",
            "baseName": "entity_value",
            "type": "string"
        },
        {
            "name": "entityDetails",
            "baseName": "entity_details",
            "type": "OfferEntity"
        }    ];

    static getAttributeTypeMap() {
        return EligibleOffersEntity.attributeTypeMap;
    }
}

