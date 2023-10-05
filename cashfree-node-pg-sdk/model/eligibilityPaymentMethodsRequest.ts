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
import { PaymentMethodsFilters } from './paymentMethodsFilters';
import { PaymentMethodsQueries } from './paymentMethodsQueries';

/**
* eligibilty request to find eligible payment method
*/
export class EligibilityPaymentMethodsRequest {
    'queries': PaymentMethodsQueries;
    'filters'?: PaymentMethodsFilters;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queries",
            "baseName": "queries",
            "type": "PaymentMethodsQueries"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "PaymentMethodsFilters"
        }    ];

    static getAttributeTypeMap() {
        return EligibilityPaymentMethodsRequest.attributeTypeMap;
    }
}

