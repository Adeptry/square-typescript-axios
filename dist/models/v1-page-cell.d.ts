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
/**
 * V1PageCell
 * @export
 * @interface V1PageCell
 */
export interface V1PageCell {
    /**
     * The unique identifier of the page the cell is included on.
     * @type {string}
     * @memberof V1PageCell
     */
    page_id?: string;
    /**
     * The row of the cell. Always an integer between 0 and 4, inclusive.
     * @type {number}
     * @memberof V1PageCell
     */
    row?: number;
    /**
     * The column of the cell. Always an integer between 0 and 4, inclusive.
     * @type {number}
     * @memberof V1PageCell
     */
    column?: number;
    /**
     * The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER). See [V1PageCellObjectType](#type-v1pagecellobjecttype) for possible values
     * @type {string}
     * @memberof V1PageCell
     */
    object_type?: string;
    /**
     * The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER.
     * @type {string}
     * @memberof V1PageCell
     */
    object_id?: string;
    /**
     * For a cell with an object_type of PLACEHOLDER, this value indicates the cell\'s special behavior. See [V1PageCellPlaceholderType](#type-v1pagecellplaceholdertype) for possible values
     * @type {string}
     * @memberof V1PageCell
     */
    placeholder_type?: string;
}