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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { BatchChangeInventoryRequest } from '../models';
import { BatchChangeInventoryResponse } from '../models';
import { BatchRetrieveInventoryChangesRequest } from '../models';
import { BatchRetrieveInventoryChangesResponse } from '../models';
import { BatchRetrieveInventoryCountsRequest } from '../models';
import { BatchRetrieveInventoryCountsResponse } from '../models';
import { RetrieveInventoryAdjustmentResponse } from '../models';
import { RetrieveInventoryChangesResponse } from '../models';
import { RetrieveInventoryCountResponse } from '../models';
import { RetrieveInventoryPhysicalCountResponse } from '../models';
/**
 * InventoryApi - axios parameter creator
 * @export
 */
export declare const InventoryApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
     * @summary BatchChangeInventory
     * @param {BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchChangeInventory: (body: BatchChangeInventoryRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     * @summary BatchRetrieveInventoryChanges
     * @param {BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryChanges: (body: BatchRetrieveInventoryChangesRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).  When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \"sync\" operation, for example in response to receiving a Webhook notification.
     * @summary BatchRetrieveInventoryCounts
     * @param {BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryCounts: (body: BatchRetrieveInventoryCountsRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided `adjustment_id`.
     * @summary RetrieveInventoryAdjustment
     * @param {string} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryAdjustment: (adjustmentId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `occurred_at` timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint can be  used to display recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryChanges
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryChanges: (catalogObjectId: string, locationIds?: string, cursor?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryCount
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryCount: (catalogObjectId: string, locationIds?: string, cursor?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided `physical_count_id`.
     * @summary RetrieveInventoryPhysicalCount
     * @param {string} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryPhysicalCount: (physicalCountId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * InventoryApi - functional programming interface
 * @export
 */
export declare const InventoryApiFp: (configuration?: Configuration) => {
    /**
     * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
     * @summary BatchChangeInventory
     * @param {BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchChangeInventory(body: BatchChangeInventoryRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchChangeInventoryResponse>>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     * @summary BatchRetrieveInventoryChanges
     * @param {BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryChanges(body: BatchRetrieveInventoryChangesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchRetrieveInventoryChangesResponse>>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).  When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \"sync\" operation, for example in response to receiving a Webhook notification.
     * @summary BatchRetrieveInventoryCounts
     * @param {BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryCounts(body: BatchRetrieveInventoryCountsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchRetrieveInventoryCountsResponse>>;
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided `adjustment_id`.
     * @summary RetrieveInventoryAdjustment
     * @param {string} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryAdjustment(adjustmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveInventoryAdjustmentResponse>>;
    /**
     * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `occurred_at` timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint can be  used to display recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryChanges
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryChanges(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveInventoryChangesResponse>>;
    /**
     * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryCount
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryCount(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveInventoryCountResponse>>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided `physical_count_id`.
     * @summary RetrieveInventoryPhysicalCount
     * @param {string} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryPhysicalCount(physicalCountId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveInventoryPhysicalCountResponse>>;
};
/**
 * InventoryApi - factory interface
 * @export
 */
export declare const InventoryApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
     * @summary BatchChangeInventory
     * @param {BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchChangeInventory(body: BatchChangeInventoryRequest, options?: any): AxiosPromise<BatchChangeInventoryResponse>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     * @summary BatchRetrieveInventoryChanges
     * @param {BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryChanges(body: BatchRetrieveInventoryChangesRequest, options?: any): AxiosPromise<BatchRetrieveInventoryChangesResponse>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).  When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \"sync\" operation, for example in response to receiving a Webhook notification.
     * @summary BatchRetrieveInventoryCounts
     * @param {BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchRetrieveInventoryCounts(body: BatchRetrieveInventoryCountsRequest, options?: any): AxiosPromise<BatchRetrieveInventoryCountsResponse>;
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided `adjustment_id`.
     * @summary RetrieveInventoryAdjustment
     * @param {string} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryAdjustment(adjustmentId: string, options?: any): AxiosPromise<RetrieveInventoryAdjustmentResponse>;
    /**
     * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `occurred_at` timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint can be  used to display recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryChanges
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryChanges(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): AxiosPromise<RetrieveInventoryChangesResponse>;
    /**
     * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryCount
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryCount(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): AxiosPromise<RetrieveInventoryCountResponse>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided `physical_count_id`.
     * @summary RetrieveInventoryPhysicalCount
     * @param {string} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveInventoryPhysicalCount(physicalCountId: string, options?: any): AxiosPromise<RetrieveInventoryPhysicalCountResponse>;
};
/**
 * InventoryApi - object-oriented interface
 * @export
 * @class InventoryApi
 * @extends {BaseAPI}
 */
export declare class InventoryApi extends BaseAPI {
    /**
     * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
     * @summary BatchChangeInventory
     * @param {BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    batchChangeInventory(body: BatchChangeInventoryRequest, options?: any): Promise<import("axios").AxiosResponse<BatchChangeInventoryResponse>>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     * @summary BatchRetrieveInventoryChanges
     * @param {BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    batchRetrieveInventoryChanges(body: BatchRetrieveInventoryChangesRequest, options?: any): Promise<import("axios").AxiosResponse<BatchRetrieveInventoryChangesResponse>>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).  When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \"sync\" operation, for example in response to receiving a Webhook notification.
     * @summary BatchRetrieveInventoryCounts
     * @param {BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    batchRetrieveInventoryCounts(body: BatchRetrieveInventoryCountsRequest, options?: any): Promise<import("axios").AxiosResponse<BatchRetrieveInventoryCountsResponse>>;
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided `adjustment_id`.
     * @summary RetrieveInventoryAdjustment
     * @param {string} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    retrieveInventoryAdjustment(adjustmentId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveInventoryAdjustmentResponse>>;
    /**
     * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their `occurred_at` timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint can be  used to display recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryChanges
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    retrieveInventoryChanges(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveInventoryChangesResponse>>;
    /**
     * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
     * @summary RetrieveInventoryCount
     * @param {string} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
     * @param {string} [locationIds] The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    retrieveInventoryCount(catalogObjectId: string, locationIds?: string, cursor?: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveInventoryCountResponse>>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided `physical_count_id`.
     * @summary RetrieveInventoryPhysicalCount
     * @param {string} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApi
     */
    retrieveInventoryPhysicalCount(physicalCountId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveInventoryPhysicalCountResponse>>;
}