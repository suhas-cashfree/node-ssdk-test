"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}
exports.Customer = Customer;
Customer.discriminator = undefined;
Customer.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "Array<Address>"
    }
];
//# sourceMappingURL=customer.js.map