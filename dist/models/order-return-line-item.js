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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturnLineItem = void 0;
var money_1 = require("./money");
var order_line_item_applied_discount_1 = require("./order-line-item-applied-discount");
var order_line_item_applied_tax_1 = require("./order-line-item-applied-tax");
var order_quantity_unit_1 = require("./order-quantity-unit");
var order_return_line_item_modifier_1 = require("./order-return-line-item-modifier");
var graphql_1 = require("@nestjs/graphql");
/**
 * The line item being returned in an Order.
 * @export
 * @class OrderReturnLineItem
 */
var OrderReturnLineItem = /** @class */ (function () {
    function OrderReturnLineItem() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "source_line_item_uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "name", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "quantity", void 0);
    __decorate([
        graphql_1.Field(function () { return order_quantity_unit_1.OrderQuantityUnit; }, { nullable: true }),
        __metadata("design:type", order_quantity_unit_1.OrderQuantityUnit)
    ], OrderReturnLineItem.prototype, "quantity_unit", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "note", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "catalog_object_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnLineItem.prototype, "variation_name", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_return_line_item_modifier_1.OrderReturnLineItemModifier]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], OrderReturnLineItem.prototype, "return_modifiers", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_applied_tax_1.OrderLineItemAppliedTax]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], OrderReturnLineItem.prototype, "applied_taxes", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_applied_discount_1.OrderLineItemAppliedDiscount]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], OrderReturnLineItem.prototype, "applied_discounts", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "base_price_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "variation_total_price_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "gross_return_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "total_tax_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "total_discount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnLineItem.prototype, "total_money", void 0);
    OrderReturnLineItem = __decorate([
        graphql_1.ObjectType()
    ], OrderReturnLineItem);
    return OrderReturnLineItem;
}());
exports.OrderReturnLineItem = OrderReturnLineItem;
