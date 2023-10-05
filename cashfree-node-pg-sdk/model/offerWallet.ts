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
import { WalletOffer } from './walletOffer';

/**
* Offer object for wallet payment method
*/
export class OfferWallet {
    'app'?: WalletOffer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "app",
            "baseName": "app",
            "type": "WalletOffer"
        }    ];

    static getAttributeTypeMap() {
        return OfferWallet.attributeTypeMap;
    }
}

