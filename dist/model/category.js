"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }
}
exports.Category = Category;
Category.discriminator = undefined;
Category.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=category.js.map