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
exports.CatalogCustomAttributeDefinition = void 0;
var catalog_custom_attribute_definition_number_config_1 = require("./catalog-custom-attribute-definition-number-config");
var catalog_custom_attribute_definition_selection_config_1 = require("./catalog-custom-attribute-definition-selection-config");
var catalog_custom_attribute_definition_string_config_1 = require("./catalog-custom-attribute-definition-string-config");
var source_application_1 = require("./source-application");
var graphql_1 = require("@nestjs/graphql");
/**
 * Contains information defining a custom attribute. Custom attributes are intended to store additional information about a catalog object or to associate a catalog object with an entity in another system. Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.). [Read more about custom attributes](/catalog-api/add-custom-attributes)
 * @export
 * @class CatalogCustomAttributeDefinition
 */
var CatalogCustomAttributeDefinition = /** @class */ (function () {
    function CatalogCustomAttributeDefinition() {
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "type", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "description", void 0);
    __decorate([
        graphql_1.Field(function () { return source_application_1.SourceApplication; }, { nullable: true }),
        __metadata("design:type", source_application_1.SourceApplication)
    ], CatalogCustomAttributeDefinition.prototype, "source_application", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "seller_visibility", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "app_visibility", void 0);
    __decorate([
        graphql_1.Field(function () { return catalog_custom_attribute_definition_string_config_1.CatalogCustomAttributeDefinitionStringConfig; }, { nullable: true }),
        __metadata("design:type", catalog_custom_attribute_definition_string_config_1.CatalogCustomAttributeDefinitionStringConfig)
    ], CatalogCustomAttributeDefinition.prototype, "string_config", void 0);
    __decorate([
        graphql_1.Field(function () { return catalog_custom_attribute_definition_number_config_1.CatalogCustomAttributeDefinitionNumberConfig; }, { nullable: true }),
        __metadata("design:type", catalog_custom_attribute_definition_number_config_1.CatalogCustomAttributeDefinitionNumberConfig)
    ], CatalogCustomAttributeDefinition.prototype, "number_config", void 0);
    __decorate([
        graphql_1.Field(function () { return catalog_custom_attribute_definition_selection_config_1.CatalogCustomAttributeDefinitionSelectionConfig; }, { nullable: true }),
        __metadata("design:type", catalog_custom_attribute_definition_selection_config_1.CatalogCustomAttributeDefinitionSelectionConfig)
    ], CatalogCustomAttributeDefinition.prototype, "selection_config", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], CatalogCustomAttributeDefinition.prototype, "custom_attribute_usage_count", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], CatalogCustomAttributeDefinition.prototype, "key", void 0);
    CatalogCustomAttributeDefinition = __decorate([
        graphql_1.ObjectType()
    ], CatalogCustomAttributeDefinition);
    return CatalogCustomAttributeDefinition;
}());
exports.CatalogCustomAttributeDefinition = CatalogCustomAttributeDefinition;
