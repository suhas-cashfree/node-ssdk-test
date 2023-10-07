"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static getAttributeTypeMap() {
        return ApiResponse.attributeTypeMap;
    }
}
exports.ApiResponse = ApiResponse;
ApiResponse.discriminator = undefined;
ApiResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=apiResponse.js.map