export * from './eligibilityAPIsApi';
import { EligibilityAPIsApi } from './eligibilityAPIsApi';
export * from './offersApi';
import { OffersApi } from './offersApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './pGReconciliationApi';
import { PGReconciliationApi } from './pGReconciliationApi';
export * from './paymentLinksApi';
import { PaymentLinksApi } from './paymentLinksApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './refundsApi';
import { RefundsApi } from './refundsApi';
export * from './settlementReconciliationApi';
import { SettlementReconciliationApi } from './settlementReconciliationApi';
export * from './settlementsApi';
import { SettlementsApi } from './settlementsApi';
export * from './softPOSApi';
import { SoftPOSApi } from './softPOSApi';
export * from './tokenVaultApi';
import { TokenVaultApi } from './tokenVaultApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [EligibilityAPIsApi, OffersApi, OrdersApi, PGReconciliationApi, PaymentLinksApi, PaymentsApi, RefundsApi, SettlementReconciliationApi, SettlementsApi, SoftPOSApi, TokenVaultApi];
