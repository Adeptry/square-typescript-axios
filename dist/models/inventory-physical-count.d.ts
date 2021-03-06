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
/**
 * Represents the quantity of an item variation that is physically present at a specific location, verified by a seller or a seller\'s employee. For example, a physical count might come from an employee counting the item variations on hand or from syncing with an external system.
 * @export
 * @class InventoryPhysicalCount
 */
export declare class InventoryPhysicalCount {
    /**
     * A unique ID generated by Square for the `InventoryPhysicalCount`.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryPhysicalCount` to an external system.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    reference_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    catalog_object_type?: string;
    /**
     * The current `InventoryState` for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    state?: string;
    /**
     * The Square ID of the `Location` where the related quantity of items are being tracked.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    location_id?: string;
    /**
     * The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    quantity?: string;
    /**
     *
     * @type {SourceApplication}
     * @memberof InventoryPhysicalCount
     */
    source?: SourceApplication;
    /**
     * The Square ID of the `Employee` responsible for the physical count.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    employee_id?: string;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the physical count took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the physical count.
     * @type {string}
     * @memberof InventoryPhysicalCount
     */
    created_at?: string;
}
