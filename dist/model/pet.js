"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
class Pet {
    static getAttributeTypeMap() {
        return Pet.attributeTypeMap;
    }
}
exports.Pet = Pet;
Pet.discriminator = undefined;
Pet.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "Category"
    },
    {
        "name": "photoUrls",
        "baseName": "photoUrls",
        "type": "Array<string>"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<Tag>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Pet.StatusEnum"
    }
];
(function (Pet) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Available"] = 'available'] = "Available";
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Sold"] = 'sold'] = "Sold";
    })(StatusEnum = Pet.StatusEnum || (Pet.StatusEnum = {}));
})(Pet = exports.Pet || (exports.Pet = {}));
//# sourceMappingURL=pet.js.map