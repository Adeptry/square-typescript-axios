"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryState = void 0;
/**
 * Indicates the state of a tracked item quantity in the lifecycle of goods.
 * @export
 * @enum {string}
 */
var InventoryState;
(function (InventoryState) {
    InventoryState["CUSTOM"] = "CUSTOM";
    InventoryState["INSTOCK"] = "IN_STOCK";
    InventoryState["SOLD"] = "SOLD";
    InventoryState["RETURNEDBYCUSTOMER"] = "RETURNED_BY_CUSTOMER";
    InventoryState["RESERVEDFORSALE"] = "RESERVED_FOR_SALE";
    InventoryState["SOLDONLINE"] = "SOLD_ONLINE";
    InventoryState["ORDEREDFROMVENDOR"] = "ORDERED_FROM_VENDOR";
    InventoryState["RECEIVEDFROMVENDOR"] = "RECEIVED_FROM_VENDOR";
    InventoryState["INTRANSITTO"] = "IN_TRANSIT_TO";
    InventoryState["NONE"] = "NONE";
    InventoryState["WASTE"] = "WASTE";
    InventoryState["UNLINKEDRETURN"] = "UNLINKED_RETURN";
})(InventoryState = exports.InventoryState || (exports.InventoryState = {}));
