"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}
exports.Order = Order;
Order.discriminator = undefined;
Order.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "petId",
        "baseName": "petId",
        "type": "number"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "shipDate",
        "baseName": "shipDate",
        "type": "Date"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Order.StatusEnum"
    },
    {
        "name": "complete",
        "baseName": "complete",
        "type": "boolean"
    }
];
(function (Order) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Placed"] = 'placed'] = "Placed";
        StatusEnum[StatusEnum["Approved"] = 'approved'] = "Approved";
        StatusEnum[StatusEnum["Delivered"] = 'delivered'] = "Delivered";
    })(StatusEnum = Order.StatusEnum || (Order.StatusEnum = {}));
})(Order = exports.Order || (exports.Order = {}));
//# sourceMappingURL=order.js.map