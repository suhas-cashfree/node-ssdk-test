import localVarRequest from 'request';

export * from './apiError';
export * from './apiError404';
export * from './apiError409';
export * from './apiError502';
export * from './app';
export * from './appPaymentMethod';
export * from './authenticationError';
export * from './authorizationInPaymentsEntity';
export * from './authorizationRequest';
export * from './badRequestError';
export * from './card';
export * from './cardEMI';
export * from './cardEMIPaymentMethod';
export * from './cardOffer';
export * from './cardPaymentMethod';
export * from './cardlessEMI';
export * from './cardlessEMIEntity';
export * from './cardlessEMIPaymentMethod';
export * from './cardlessEMIQueries';
export * from './cashbackDetails';
export * from './createLinkRequest';
export * from './createOfferBackendRequest';
export * from './createOrderBackendRequest';
export * from './createOrderBackendRequestOrderMeta';
export * from './createOrderBackendRequestTerminal';
export * from './createRefundRequest';
export * from './createTerminalRequest';
export * from './cryptogram';
export * from './customerDetails';
export * from './customerDetailsCardlessEMI';
export * from './discountDetails';
export * from './eMIOffer';
export * from './eMIPlansArray';
export * from './eligibilityCardlessEMIRequest';
export * from './eligibilityOffersRequest';
export * from './eligibilityPaymentMethodsRequest';
export * from './eligibleCardlessEMIEntity';
export * from './eligibleOffersEntity';
export * from './eligiblePaylater';
export * from './eligiblePaymentMethodsEntity';
export * from './eligiblePaymentMethodsEntityEntityDetails';
export * from './errorDetailsInPaymentsEntity';
export * from './fetchAllSavedInstruments';
export * from './fetchPGRecon';
export * from './fetchPGReconDataInner';
export * from './fetchPGReconRequest';
export * from './fetchPGReconRequestFilters';
export * from './fetchPGReconRequestPagination';
export * from './fetchSettlementRecon';
export * from './fetchSettlementReconDataInner';
export * from './fetchSettlementReconRequest';
export * from './fetchSettlementReconRequestFilters';
export * from './fetchSettlementReconRequestPagination';
export * from './idempotencyError';
export * from './linkCancelledResponse';
export * from './linkCustomerDetailsEntity';
export * from './linkMetaEntity';
export * from './linkNotifyEntity';
export * from './linkResponse';
export * from './netBankingPaymentMethod';
export * from './netbanking';
export * from './oTPRequest';
export * from './oTPResponseEntity';
export * from './offerAll';
export * from './offerCard';
export * from './offerDetails';
export * from './offerEMI';
export * from './offerEntity';
export * from './offerFilters';
export * from './offerMeta';
export * from './offerNB';
export * from './offerNBNetbanking';
export * from './offerPaylater';
export * from './offerQueries';
export * from './offerTnc';
export * from './offerType';
export * from './offerUPI';
export * from './offerValidations';
export * from './offerValidationsPaymentMethod';
export * from './offerWallet';
export * from './orderMeta';
export * from './orderPayData';
export * from './orderPayRequest';
export * from './orderPayRequestPaymentMethod';
export * from './orderPayResponse';
export * from './ordersEntity';
export * from './paylater';
export * from './paylaterEntity';
export * from './paylaterOffer';
export * from './paylaterPaymentMethod';
export * from './paymentMethodAppInPaymentsEntity';
export * from './paymentMethodCardInPaymentsEntity';
export * from './paymentMethodCardlessEMIInPaymentsEntity';
export * from './paymentMethodInPaymentsEntity';
export * from './paymentMethodInPaymentsEntityPaymentMethod';
export * from './paymentMethodNetBankingInPaymentsEntity';
export * from './paymentMethodPaylaterInPaymentsEntity';
export * from './paymentMethodUPIInPaymentsEntity';
export * from './paymentMethodsFilters';
export * from './paymentMethodsQueries';
export * from './paymentModeDetails';
export * from './paymentSuccessWebhook';
export * from './paymentURLObject';
export * from './paymentsEntity';
export * from './rateLimitError';
export * from './refundSpeed';
export * from './refundURLObject';
export * from './refundsEntity';
export * from './savedInstrumentMeta';
export * from './settlementURLObject';
export * from './settlementsEntity';
export * from './terminalDetails';
export * from './terminalResponse';
export * from './uPIAuthorizeDetails';
export * from './uPIPaymentMethod';
export * from './upi';
export * from './vendorSplit';
export * from './wHcustomerDetails';
export * from './wHdata';
export * from './wHorder';
export * from './walletOffer';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiError } from './apiError';
import { ApiError404 } from './apiError404';
import { ApiError409 } from './apiError409';
import { ApiError502 } from './apiError502';
import { App } from './app';
import { AppPaymentMethod } from './appPaymentMethod';
import { AuthenticationError } from './authenticationError';
import { AuthorizationInPaymentsEntity } from './authorizationInPaymentsEntity';
import { AuthorizationRequest } from './authorizationRequest';
import { BadRequestError } from './badRequestError';
import { Card } from './card';
import { CardEMI } from './cardEMI';
import { CardEMIPaymentMethod } from './cardEMIPaymentMethod';
import { CardOffer } from './cardOffer';
import { CardPaymentMethod } from './cardPaymentMethod';
import { CardlessEMI } from './cardlessEMI';
import { CardlessEMIEntity } from './cardlessEMIEntity';
import { CardlessEMIPaymentMethod } from './cardlessEMIPaymentMethod';
import { CardlessEMIQueries } from './cardlessEMIQueries';
import { CashbackDetails } from './cashbackDetails';
import { CreateLinkRequest } from './createLinkRequest';
import { CreateOfferBackendRequest } from './createOfferBackendRequest';
import { CreateOrderBackendRequest } from './createOrderBackendRequest';
import { CreateOrderBackendRequestOrderMeta } from './createOrderBackendRequestOrderMeta';
import { CreateOrderBackendRequestTerminal } from './createOrderBackendRequestTerminal';
import { CreateRefundRequest } from './createRefundRequest';
import { CreateTerminalRequest } from './createTerminalRequest';
import { Cryptogram } from './cryptogram';
import { CustomerDetails } from './customerDetails';
import { CustomerDetailsCardlessEMI } from './customerDetailsCardlessEMI';
import { DiscountDetails } from './discountDetails';
import { EMIOffer } from './eMIOffer';
import { EMIPlansArray } from './eMIPlansArray';
import { EligibilityCardlessEMIRequest } from './eligibilityCardlessEMIRequest';
import { EligibilityOffersRequest } from './eligibilityOffersRequest';
import { EligibilityPaymentMethodsRequest } from './eligibilityPaymentMethodsRequest';
import { EligibleCardlessEMIEntity } from './eligibleCardlessEMIEntity';
import { EligibleOffersEntity } from './eligibleOffersEntity';
import { EligiblePaylater } from './eligiblePaylater';
import { EligiblePaymentMethodsEntity } from './eligiblePaymentMethodsEntity';
import { EligiblePaymentMethodsEntityEntityDetails } from './eligiblePaymentMethodsEntityEntityDetails';
import { ErrorDetailsInPaymentsEntity } from './errorDetailsInPaymentsEntity';
import { FetchAllSavedInstruments } from './fetchAllSavedInstruments';
import { FetchPGRecon } from './fetchPGRecon';
import { FetchPGReconDataInner } from './fetchPGReconDataInner';
import { FetchPGReconRequest } from './fetchPGReconRequest';
import { FetchPGReconRequestFilters } from './fetchPGReconRequestFilters';
import { FetchPGReconRequestPagination } from './fetchPGReconRequestPagination';
import { FetchSettlementRecon } from './fetchSettlementRecon';
import { FetchSettlementReconDataInner } from './fetchSettlementReconDataInner';
import { FetchSettlementReconRequest } from './fetchSettlementReconRequest';
import { FetchSettlementReconRequestFilters } from './fetchSettlementReconRequestFilters';
import { FetchSettlementReconRequestPagination } from './fetchSettlementReconRequestPagination';
import { IdempotencyError } from './idempotencyError';
import { LinkCancelledResponse } from './linkCancelledResponse';
import { LinkCustomerDetailsEntity } from './linkCustomerDetailsEntity';
import { LinkMetaEntity } from './linkMetaEntity';
import { LinkNotifyEntity } from './linkNotifyEntity';
import { LinkResponse } from './linkResponse';
import { NetBankingPaymentMethod } from './netBankingPaymentMethod';
import { Netbanking } from './netbanking';
import { OTPRequest } from './oTPRequest';
import { OTPResponseEntity } from './oTPResponseEntity';
import { OfferAll } from './offerAll';
import { OfferCard } from './offerCard';
import { OfferDetails } from './offerDetails';
import { OfferEMI } from './offerEMI';
import { OfferEntity } from './offerEntity';
import { OfferFilters } from './offerFilters';
import { OfferMeta } from './offerMeta';
import { OfferNB } from './offerNB';
import { OfferNBNetbanking } from './offerNBNetbanking';
import { OfferPaylater } from './offerPaylater';
import { OfferQueries } from './offerQueries';
import { OfferTnc } from './offerTnc';
import { OfferType } from './offerType';
import { OfferUPI } from './offerUPI';
import { OfferValidations } from './offerValidations';
import { OfferValidationsPaymentMethod } from './offerValidationsPaymentMethod';
import { OfferWallet } from './offerWallet';
import { OrderMeta } from './orderMeta';
import { OrderPayData } from './orderPayData';
import { OrderPayRequest } from './orderPayRequest';
import { OrderPayRequestPaymentMethod } from './orderPayRequestPaymentMethod';
import { OrderPayResponse } from './orderPayResponse';
import { OrdersEntity } from './ordersEntity';
import { Paylater } from './paylater';
import { PaylaterEntity } from './paylaterEntity';
import { PaylaterOffer } from './paylaterOffer';
import { PaylaterPaymentMethod } from './paylaterPaymentMethod';
import { PaymentMethodAppInPaymentsEntity } from './paymentMethodAppInPaymentsEntity';
import { PaymentMethodCardInPaymentsEntity } from './paymentMethodCardInPaymentsEntity';
import { PaymentMethodCardlessEMIInPaymentsEntity } from './paymentMethodCardlessEMIInPaymentsEntity';
import { PaymentMethodInPaymentsEntity } from './paymentMethodInPaymentsEntity';
import { PaymentMethodInPaymentsEntityPaymentMethod } from './paymentMethodInPaymentsEntityPaymentMethod';
import { PaymentMethodNetBankingInPaymentsEntity } from './paymentMethodNetBankingInPaymentsEntity';
import { PaymentMethodPaylaterInPaymentsEntity } from './paymentMethodPaylaterInPaymentsEntity';
import { PaymentMethodUPIInPaymentsEntity } from './paymentMethodUPIInPaymentsEntity';
import { PaymentMethodsFilters } from './paymentMethodsFilters';
import { PaymentMethodsQueries } from './paymentMethodsQueries';
import { PaymentModeDetails } from './paymentModeDetails';
import { PaymentSuccessWebhook } from './paymentSuccessWebhook';
import { PaymentURLObject } from './paymentURLObject';
import { PaymentsEntity } from './paymentsEntity';
import { RateLimitError } from './rateLimitError';
import { RefundSpeed } from './refundSpeed';
import { RefundURLObject } from './refundURLObject';
import { RefundsEntity } from './refundsEntity';
import { SavedInstrumentMeta } from './savedInstrumentMeta';
import { SettlementURLObject } from './settlementURLObject';
import { SettlementsEntity } from './settlementsEntity';
import { TerminalDetails } from './terminalDetails';
import { TerminalResponse } from './terminalResponse';
import { UPIAuthorizeDetails } from './uPIAuthorizeDetails';
import { UPIPaymentMethod } from './uPIPaymentMethod';
import { Upi } from './upi';
import { VendorSplit } from './vendorSplit';
import { WHcustomerDetails } from './wHcustomerDetails';
import { WHdata } from './wHdata';
import { WHorder } from './wHorder';
import { WalletOffer } from './walletOffer';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApiError.TypeEnum": ApiError.TypeEnum,
        "ApiError404.TypeEnum": ApiError404.TypeEnum,
        "ApiError409.TypeEnum": ApiError409.TypeEnum,
        "ApiError502.TypeEnum": ApiError502.TypeEnum,
        "App.ProviderEnum": App.ProviderEnum,
        "AuthorizationInPaymentsEntity.ActionEnum": AuthorizationInPaymentsEntity.ActionEnum,
        "AuthorizationInPaymentsEntity.StatusEnum": AuthorizationInPaymentsEntity.StatusEnum,
        "AuthorizationRequest.ActionEnum": AuthorizationRequest.ActionEnum,
        "BadRequestError.TypeEnum": BadRequestError.TypeEnum,
        "Card.ChannelEnum": Card.ChannelEnum,
        "Card.CardBankNameEnum": Card.CardBankNameEnum,
        "CardEMI.CardBankNameEnum": CardEMI.CardBankNameEnum,
        "CardlessEMI.ProviderEnum": CardlessEMI.ProviderEnum,
        "CashbackDetails.CashbackTypeEnum": CashbackDetails.CashbackTypeEnum,
        "CreateRefundRequest.RefundSpeedEnum": CreateRefundRequest.RefundSpeedEnum,
        "DiscountDetails.DiscountTypeEnum": DiscountDetails.DiscountTypeEnum,
        "FetchAllSavedInstruments.InstrumentTypeEnum": FetchAllSavedInstruments.InstrumentTypeEnum,
        "FetchAllSavedInstruments.InstrumentStatusEnum": FetchAllSavedInstruments.InstrumentStatusEnum,
        "IdempotencyError.TypeEnum": IdempotencyError.TypeEnum,
        "OTPRequest.ActionEnum": OTPRequest.ActionEnum,
        "OTPResponseEntity.ActionEnum": OTPResponseEntity.ActionEnum,
        "OTPResponseEntity.AuthenticateStatusEnum": OTPResponseEntity.AuthenticateStatusEnum,
        "OfferDetails.OfferTypeEnum": OfferDetails.OfferTypeEnum,
        "OfferTnc.OfferTncTypeEnum": OfferTnc.OfferTncTypeEnum,
        "OfferType": OfferType,
        "OrderPayResponse.PaymentMethodEnum": OrderPayResponse.PaymentMethodEnum,
        "OrderPayResponse.ChannelEnum": OrderPayResponse.ChannelEnum,
        "OrderPayResponse.ActionEnum": OrderPayResponse.ActionEnum,
        "Paylater.ProviderEnum": Paylater.ProviderEnum,
        "PaymentsEntity.PaymentStatusEnum": PaymentsEntity.PaymentStatusEnum,
        "RateLimitError.TypeEnum": RateLimitError.TypeEnum,
        "RefundsEntity.EntityEnum": RefundsEntity.EntityEnum,
        "RefundsEntity.RefundStatusEnum": RefundsEntity.RefundStatusEnum,
        "RefundsEntity.RefundTypeEnum": RefundsEntity.RefundTypeEnum,
        "RefundsEntity.RefundModeEnum": RefundsEntity.RefundModeEnum,
        "Upi.ChannelEnum": Upi.ChannelEnum,
}

let typeMap: {[index: string]: any} = {
    "ApiError": ApiError,
    "ApiError404": ApiError404,
    "ApiError409": ApiError409,
    "ApiError502": ApiError502,
    "App": App,
    "AppPaymentMethod": AppPaymentMethod,
    "AuthenticationError": AuthenticationError,
    "AuthorizationInPaymentsEntity": AuthorizationInPaymentsEntity,
    "AuthorizationRequest": AuthorizationRequest,
    "BadRequestError": BadRequestError,
    "Card": Card,
    "CardEMI": CardEMI,
    "CardEMIPaymentMethod": CardEMIPaymentMethod,
    "CardOffer": CardOffer,
    "CardPaymentMethod": CardPaymentMethod,
    "CardlessEMI": CardlessEMI,
    "CardlessEMIEntity": CardlessEMIEntity,
    "CardlessEMIPaymentMethod": CardlessEMIPaymentMethod,
    "CardlessEMIQueries": CardlessEMIQueries,
    "CashbackDetails": CashbackDetails,
    "CreateLinkRequest": CreateLinkRequest,
    "CreateOfferBackendRequest": CreateOfferBackendRequest,
    "CreateOrderBackendRequest": CreateOrderBackendRequest,
    "CreateOrderBackendRequestOrderMeta": CreateOrderBackendRequestOrderMeta,
    "CreateOrderBackendRequestTerminal": CreateOrderBackendRequestTerminal,
    "CreateRefundRequest": CreateRefundRequest,
    "CreateTerminalRequest": CreateTerminalRequest,
    "Cryptogram": Cryptogram,
    "CustomerDetails": CustomerDetails,
    "CustomerDetailsCardlessEMI": CustomerDetailsCardlessEMI,
    "DiscountDetails": DiscountDetails,
    "EMIOffer": EMIOffer,
    "EMIPlansArray": EMIPlansArray,
    "EligibilityCardlessEMIRequest": EligibilityCardlessEMIRequest,
    "EligibilityOffersRequest": EligibilityOffersRequest,
    "EligibilityPaymentMethodsRequest": EligibilityPaymentMethodsRequest,
    "EligibleCardlessEMIEntity": EligibleCardlessEMIEntity,
    "EligibleOffersEntity": EligibleOffersEntity,
    "EligiblePaylater": EligiblePaylater,
    "EligiblePaymentMethodsEntity": EligiblePaymentMethodsEntity,
    "EligiblePaymentMethodsEntityEntityDetails": EligiblePaymentMethodsEntityEntityDetails,
    "ErrorDetailsInPaymentsEntity": ErrorDetailsInPaymentsEntity,
    "FetchAllSavedInstruments": FetchAllSavedInstruments,
    "FetchPGRecon": FetchPGRecon,
    "FetchPGReconDataInner": FetchPGReconDataInner,
    "FetchPGReconRequest": FetchPGReconRequest,
    "FetchPGReconRequestFilters": FetchPGReconRequestFilters,
    "FetchPGReconRequestPagination": FetchPGReconRequestPagination,
    "FetchSettlementRecon": FetchSettlementRecon,
    "FetchSettlementReconDataInner": FetchSettlementReconDataInner,
    "FetchSettlementReconRequest": FetchSettlementReconRequest,
    "FetchSettlementReconRequestFilters": FetchSettlementReconRequestFilters,
    "FetchSettlementReconRequestPagination": FetchSettlementReconRequestPagination,
    "IdempotencyError": IdempotencyError,
    "LinkCancelledResponse": LinkCancelledResponse,
    "LinkCustomerDetailsEntity": LinkCustomerDetailsEntity,
    "LinkMetaEntity": LinkMetaEntity,
    "LinkNotifyEntity": LinkNotifyEntity,
    "LinkResponse": LinkResponse,
    "NetBankingPaymentMethod": NetBankingPaymentMethod,
    "Netbanking": Netbanking,
    "OTPRequest": OTPRequest,
    "OTPResponseEntity": OTPResponseEntity,
    "OfferAll": OfferAll,
    "OfferCard": OfferCard,
    "OfferDetails": OfferDetails,
    "OfferEMI": OfferEMI,
    "OfferEntity": OfferEntity,
    "OfferFilters": OfferFilters,
    "OfferMeta": OfferMeta,
    "OfferNB": OfferNB,
    "OfferNBNetbanking": OfferNBNetbanking,
    "OfferPaylater": OfferPaylater,
    "OfferQueries": OfferQueries,
    "OfferTnc": OfferTnc,
    "OfferUPI": OfferUPI,
    "OfferValidations": OfferValidations,
    "OfferValidationsPaymentMethod": OfferValidationsPaymentMethod,
    "OfferWallet": OfferWallet,
    "OrderMeta": OrderMeta,
    "OrderPayData": OrderPayData,
    "OrderPayRequest": OrderPayRequest,
    "OrderPayRequestPaymentMethod": OrderPayRequestPaymentMethod,
    "OrderPayResponse": OrderPayResponse,
    "OrdersEntity": OrdersEntity,
    "Paylater": Paylater,
    "PaylaterEntity": PaylaterEntity,
    "PaylaterOffer": PaylaterOffer,
    "PaylaterPaymentMethod": PaylaterPaymentMethod,
    "PaymentMethodAppInPaymentsEntity": PaymentMethodAppInPaymentsEntity,
    "PaymentMethodCardInPaymentsEntity": PaymentMethodCardInPaymentsEntity,
    "PaymentMethodCardlessEMIInPaymentsEntity": PaymentMethodCardlessEMIInPaymentsEntity,
    "PaymentMethodInPaymentsEntity": PaymentMethodInPaymentsEntity,
    "PaymentMethodInPaymentsEntityPaymentMethod": PaymentMethodInPaymentsEntityPaymentMethod,
    "PaymentMethodNetBankingInPaymentsEntity": PaymentMethodNetBankingInPaymentsEntity,
    "PaymentMethodPaylaterInPaymentsEntity": PaymentMethodPaylaterInPaymentsEntity,
    "PaymentMethodUPIInPaymentsEntity": PaymentMethodUPIInPaymentsEntity,
    "PaymentMethodsFilters": PaymentMethodsFilters,
    "PaymentMethodsQueries": PaymentMethodsQueries,
    "PaymentModeDetails": PaymentModeDetails,
    "PaymentSuccessWebhook": PaymentSuccessWebhook,
    "PaymentURLObject": PaymentURLObject,
    "PaymentsEntity": PaymentsEntity,
    "RateLimitError": RateLimitError,
    "RefundSpeed": RefundSpeed,
    "RefundURLObject": RefundURLObject,
    "RefundsEntity": RefundsEntity,
    "SavedInstrumentMeta": SavedInstrumentMeta,
    "SettlementURLObject": SettlementURLObject,
    "SettlementsEntity": SettlementsEntity,
    "TerminalDetails": TerminalDetails,
    "TerminalResponse": TerminalResponse,
    "UPIAuthorizeDetails": UPIAuthorizeDetails,
    "UPIPaymentMethod": UPIPaymentMethod,
    "Upi": Upi,
    "VendorSplit": VendorSplit,
    "WHcustomerDetails": WHcustomerDetails,
    "WHdata": WHdata,
    "WHorder": WHorder,
    "WalletOffer": WalletOffer,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
