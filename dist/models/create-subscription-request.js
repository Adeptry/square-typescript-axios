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
exports.CreateSubscriptionRequest = void 0;
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Defines parameters in a  [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint request.
 * @export
 * @class CreateSubscriptionRequest
 */
var CreateSubscriptionRequest = /** @class */ (function () {
    function CreateSubscriptionRequest() {
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "idempotency_key", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "plan_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "customer_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "start_date", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "canceled_date", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "tax_percentage", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], CreateSubscriptionRequest.prototype, "price_override_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "card_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CreateSubscriptionRequest.prototype, "timezone", void 0);
    CreateSubscriptionRequest = __decorate([
        graphql_1.ObjectType()
    ], CreateSubscriptionRequest);
    return CreateSubscriptionRequest;
}());
exports.CreateSubscriptionRequest = CreateSubscriptionRequest;
