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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ListMerchantsResponse } from '../models';
// @ts-ignore
import { RetrieveMerchantResponse } from '../models';
/**
 * MerchantsApi - axios parameter creator
 * @export
 */
export const MerchantsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMerchants: async (cursor?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://connect.squareupsandbox.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMerchant: async (merchantId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantId' is not null or undefined
            if (merchantId === null || merchantId === undefined) {
                throw new RequiredError('merchantId','Required parameter merchantId was null or undefined when calling retrieveMerchant.');
            }
            const localVarPath = `/v2/merchants/{merchant_id}`
                .replace(`{${"merchant_id"}}`, encodeURIComponent(String(merchantId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://connect.squareupsandbox.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MerchantsApi - functional programming interface
 * @export
 */
export const MerchantsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMerchants(cursor?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMerchantsResponse>> {
            const localVarAxiosArgs = await MerchantsApiAxiosParamCreator(configuration).listMerchants(cursor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveMerchant(merchantId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveMerchantResponse>> {
            const localVarAxiosArgs = await MerchantsApiAxiosParamCreator(configuration).retrieveMerchant(merchantId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MerchantsApi - factory interface
 * @export
 */
export const MerchantsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMerchants(cursor?: number, options?: any): AxiosPromise<ListMerchantsResponse> {
            return MerchantsApiFp(configuration).listMerchants(cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMerchant(merchantId: string, options?: any): AxiosPromise<RetrieveMerchantResponse> {
            return MerchantsApiFp(configuration).retrieveMerchant(merchantId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MerchantsApi - object-oriented interface
 * @export
 * @class MerchantsApi
 * @extends {BaseAPI}
 */
export class MerchantsApi extends BaseAPI {
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public listMerchants(cursor?: number, options?: any) {
        return MerchantsApiFp(this.configuration).listMerchants(cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public retrieveMerchant(merchantId: string, options?: any) {
        return MerchantsApiFp(this.configuration).retrieveMerchant(merchantId, options).then((request) => request(this.axios, this.basePath));
    }
}
