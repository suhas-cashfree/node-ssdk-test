import { Category } from './category';
import { Tag } from './tag';
export declare class Pet {
    'id'?: number;
    'name': string;
    'category'?: Category;
    'photoUrls': Array<string>;
    'tags'?: Array<Tag>;
    'status'?: Pet.StatusEnum;
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
export declare namespace Pet {
    enum StatusEnum {
        Available,
        Pending,
        Sold
    }
}
