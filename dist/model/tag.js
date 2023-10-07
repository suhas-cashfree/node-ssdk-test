"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
class Tag {
    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }
}
exports.Tag = Tag;
Tag.discriminator = undefined;
Tag.attributeTypeMap = [
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
//# sourceMappingURL=tag.js.map