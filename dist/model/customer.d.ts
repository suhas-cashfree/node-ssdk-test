import { Address } from './address';
export declare class Customer {
    'id'?: number;
    'username'?: string;
    'address'?: Array<Address>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
