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


import { SourceApplication } from './source-application';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents the transfer of a quantity of product inventory at a particular time from one location to another.
 * @export
 * @class InventoryTransfer
 */
@ObjectType()
export class InventoryTransfer {
    /**
     * A unique ID generated by Square for the `InventoryTransfer`.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryTransfer` to an external system.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * The `InventoryState` for the quantity of items being transferred. See [InventoryState](#type-inventorystate) for possible values
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    state?: string;
    /**
     * The Square ID of the `Location` where the related quantity of items were tracked before the transfer.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    from_location_id?: string;
    /**
     * The Square ID of the `Location` where the related quantity of items were tracked after the transfer.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    to_location_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked.Tracking is only supported for the `ITEM_VARIATION` type.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    catalog_object_type?: string;
    /**
     * The number of items affected by the transfer as a decimal string. Can support up to 5 digits after the decimal point.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    quantity?: string;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the transfer took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the transfer request.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * 
     * @type {SourceApplication}
     * @memberof InventoryTransfer
     */
    
    @Field(() => SourceApplication, { nullable: true })
    source?: SourceApplication;
    /**
     * The Square ID of the `Employee` responsible for the inventory transfer.
     * @type {string}
     * @memberof InventoryTransfer
     */
    
    @Field({ nullable: true })
    employee_id?: string;
}


