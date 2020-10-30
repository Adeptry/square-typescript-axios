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
exports.CreateCustomerCardResponse = void 0;
var card_1 = require("./card");
var graphql_1 = require("@nestjs/graphql");
/**
 * Defines the fields that are included in the response body of a request to the CreateCustomerCard endpoint.  One of `errors` or `card` is present in a given response (never both).
 * @export
 * @class CreateCustomerCardResponse
 */
var CreateCustomerCardResponse = /** @class */ (function () {
    function CreateCustomerCardResponse() {
    }
    __decorate([
        graphql_1.Field(function () { return card_1.Card; }, { nullable: true }),
        __metadata("design:type", card_1.Card)
    ], CreateCustomerCardResponse.prototype, "card", void 0);
    CreateCustomerCardResponse = __decorate([
        graphql_1.ObjectType()
    ], CreateCustomerCardResponse);
    return CreateCustomerCardResponse;
}());
exports.CreateCustomerCardResponse = CreateCustomerCardResponse;
