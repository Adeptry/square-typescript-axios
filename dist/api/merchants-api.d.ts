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
import { ListMerchantsResponse } from '../models';
import { RetrieveMerchantResponse } from '../models';
/**
 * MerchantsApi - axios parameter creator
 * @export
 */
export declare const MerchantsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMerchants: (cursor?: number, options?: any) => Promise<RequestArgs>;
    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveMerchant: (merchantId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * MerchantsApi - functional programming interface
 * @export
 */
export declare const MerchantsApiFp: (configuration?: Configuration) => {
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMerchants(cursor?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMerchantsResponse>>;
    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveMerchant(merchantId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveMerchantResponse>>;
};
/**
 * MerchantsApi - factory interface
 * @export
 */
export declare const MerchantsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMerchants(cursor?: number, options?: any): AxiosPromise<ListMerchantsResponse>;
    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveMerchant(merchantId: string, options?: any): AxiosPromise<RetrieveMerchantResponse>;
};
/**
 * MerchantsApi - object-oriented interface
 * @export
 * @class MerchantsApi
 * @extends {BaseAPI}
 */
export declare class MerchantsApi extends BaseAPI {
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    listMerchants(cursor?: number, options?: any): Promise<import("axios").AxiosResponse<ListMerchantsResponse>>;
    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    retrieveMerchant(merchantId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveMerchantResponse>>;
}
