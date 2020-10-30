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
exports.RetrieveInventoryChangesRequest = void 0;
var graphql_1 = require("@nestjs/graphql");
/**
 *
 * @export
 * @class RetrieveInventoryChangesRequest
 */
var RetrieveInventoryChangesRequest = /** @class */ (function () {
    function RetrieveInventoryChangesRequest() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], RetrieveInventoryChangesRequest.prototype, "location_ids", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], RetrieveInventoryChangesRequest.prototype, "cursor", void 0);
    RetrieveInventoryChangesRequest = __decorate([
        graphql_1.ObjectType()
    ], RetrieveInventoryChangesRequest);
    return RetrieveInventoryChangesRequest;
}());
exports.RetrieveInventoryChangesRequest = RetrieveInventoryChangesRequest;
