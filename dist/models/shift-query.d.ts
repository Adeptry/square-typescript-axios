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
import { ShiftFilter } from './shift-filter';
import { ShiftSort } from './shift-sort';
/**
 * The parameters of a `Shift` search query. Includes filter and sort options.
 * @export
 * @class ShiftQuery
 */
export declare class ShiftQuery {
    /**
     *
     * @type {ShiftFilter}
     * @memberof ShiftQuery
     */
    filter?: ShiftFilter;
    /**
     *
     * @type {ShiftSort}
     * @memberof ShiftQuery
     */
    sort?: ShiftSort;
}
