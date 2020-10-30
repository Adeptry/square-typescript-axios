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
exports.SearchOrdersFilter = void 0;
var search_orders_customer_filter_1 = require("./search-orders-customer-filter");
var search_orders_date_time_filter_1 = require("./search-orders-date-time-filter");
var search_orders_fulfillment_filter_1 = require("./search-orders-fulfillment-filter");
var search_orders_source_filter_1 = require("./search-orders-source-filter");
var search_orders_state_filter_1 = require("./search-orders-state-filter");
var graphql_1 = require("@nestjs/graphql");
/**
 * Filtering criteria to use for a SearchOrders request. Multiple filters will be ANDed together.
 * @export
 * @class SearchOrdersFilter
 */
var SearchOrdersFilter = /** @class */ (function () {
    function SearchOrdersFilter() {
    }
    __decorate([
        graphql_1.Field(function () { return search_orders_state_filter_1.SearchOrdersStateFilter; }, { nullable: true }),
        __metadata("design:type", search_orders_state_filter_1.SearchOrdersStateFilter)
    ], SearchOrdersFilter.prototype, "state_filter", void 0);
    __decorate([
        graphql_1.Field(function () { return search_orders_date_time_filter_1.SearchOrdersDateTimeFilter; }, { nullable: true }),
        __metadata("design:type", search_orders_date_time_filter_1.SearchOrdersDateTimeFilter)
    ], SearchOrdersFilter.prototype, "date_time_filter", void 0);
    __decorate([
        graphql_1.Field(function () { return search_orders_fulfillment_filter_1.SearchOrdersFulfillmentFilter; }, { nullable: true }),
        __metadata("design:type", search_orders_fulfillment_filter_1.SearchOrdersFulfillmentFilter)
    ], SearchOrdersFilter.prototype, "fulfillment_filter", void 0);
    __decorate([
        graphql_1.Field(function () { return search_orders_source_filter_1.SearchOrdersSourceFilter; }, { nullable: true }),
        __metadata("design:type", search_orders_source_filter_1.SearchOrdersSourceFilter)
    ], SearchOrdersFilter.prototype, "source_filter", void 0);
    __decorate([
        graphql_1.Field(function () { return search_orders_customer_filter_1.SearchOrdersCustomerFilter; }, { nullable: true }),
        __metadata("design:type", search_orders_customer_filter_1.SearchOrdersCustomerFilter)
    ], SearchOrdersFilter.prototype, "customer_filter", void 0);
    SearchOrdersFilter = __decorate([
        graphql_1.ObjectType()
    ], SearchOrdersFilter);
    return SearchOrdersFilter;
}());
exports.SearchOrdersFilter = SearchOrdersFilter;