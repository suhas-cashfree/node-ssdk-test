"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}
exports.Address = Address;
Address.discriminator = undefined;
Address.attributeTypeMap = [
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "string"
    }
];
//# sourceMappingURL=address.js.map