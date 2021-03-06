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
import { CreateDeviceCodeRequest } from '../models';
// @ts-ignore
import { CreateDeviceCodeResponse } from '../models';
// @ts-ignore
import { GetDeviceCodeResponse } from '../models';
// @ts-ignore
import { ListDeviceCodesResponse } from '../models';
/**
 * DevicesApi - axios parameter creator
 * @export
 */
export const DevicesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
         * @summary CreateDeviceCode
         * @param {CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeviceCode: async (body: CreateDeviceCodeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createDeviceCode.');
            }
            const localVarPath = `/v2/devices/codes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://connect.squareupsandbox.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["DEVICE_CREDENTIAL_MANAGEMENT"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves DeviceCode with the associated ID.
         * @summary GetDeviceCode
         * @param {string} id The unique identifier for the device code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceCode: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDeviceCode.');
            }
            const localVarPath = `/v2/devices/codes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
                    ? await configuration.accessToken("oauth2", ["DEVICE_CREDENTIAL_MANAGEMENT"])
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
        /**
         * Lists all DeviceCodes associated with the merchant.
         * @summary ListDeviceCodes
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
         * @param {string} [locationId] If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
         * @param {string} [productType] If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
         * @param {string} [status] If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status &#x60;PAIRED&#x60; and &#x60;UNPAIRED&#x60; if empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDeviceCodes: async (cursor?: string, locationId?: string, productType?: string, status?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/devices/codes`;
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
                    ? await configuration.accessToken("oauth2", ["DEVICE_CREDENTIAL_MANAGEMENT"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['location_id'] = locationId;
            }

            if (productType !== undefined) {
                localVarQueryParameter['product_type'] = productType;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
 * DevicesApi - functional programming interface
 * @export
 */
export const DevicesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
         * @summary CreateDeviceCode
         * @param {CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDeviceCode(body: CreateDeviceCodeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateDeviceCodeResponse>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).createDeviceCode(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves DeviceCode with the associated ID.
         * @summary GetDeviceCode
         * @param {string} id The unique identifier for the device code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeviceCode(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDeviceCodeResponse>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).getDeviceCode(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all DeviceCodes associated with the merchant.
         * @summary ListDeviceCodes
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
         * @param {string} [locationId] If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
         * @param {string} [productType] If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
         * @param {string} [status] If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status &#x60;PAIRED&#x60; and &#x60;UNPAIRED&#x60; if empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDeviceCodes(cursor?: string, locationId?: string, productType?: string, status?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListDeviceCodesResponse>> {
            const localVarAxiosArgs = await DevicesApiAxiosParamCreator(configuration).listDeviceCodes(cursor, locationId, productType, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DevicesApi - factory interface
 * @export
 */
export const DevicesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
         * @summary CreateDeviceCode
         * @param {CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDeviceCode(body: CreateDeviceCodeRequest, options?: any): AxiosPromise<CreateDeviceCodeResponse> {
            return DevicesApiFp(configuration).createDeviceCode(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves DeviceCode with the associated ID.
         * @summary GetDeviceCode
         * @param {string} id The unique identifier for the device code.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeviceCode(id: string, options?: any): AxiosPromise<GetDeviceCodeResponse> {
            return DevicesApiFp(configuration).getDeviceCode(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all DeviceCodes associated with the merchant.
         * @summary ListDeviceCodes
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
         * @param {string} [locationId] If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
         * @param {string} [productType] If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
         * @param {string} [status] If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status &#x60;PAIRED&#x60; and &#x60;UNPAIRED&#x60; if empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDeviceCodes(cursor?: string, locationId?: string, productType?: string, status?: string, options?: any): AxiosPromise<ListDeviceCodesResponse> {
            return DevicesApiFp(configuration).listDeviceCodes(cursor, locationId, productType, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DevicesApi - object-oriented interface
 * @export
 * @class DevicesApi
 * @extends {BaseAPI}
 */
export class DevicesApi extends BaseAPI {
    /**
     * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
     * @summary CreateDeviceCode
     * @param {CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public createDeviceCode(body: CreateDeviceCodeRequest, options?: any) {
        return DevicesApiFp(this.configuration).createDeviceCode(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves DeviceCode with the associated ID.
     * @summary GetDeviceCode
     * @param {string} id The unique identifier for the device code.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public getDeviceCode(id: string, options?: any) {
        return DevicesApiFp(this.configuration).getDeviceCode(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all DeviceCodes associated with the merchant.
     * @summary ListDeviceCodes
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
     * @param {string} [locationId] If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
     * @param {string} [productType] If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
     * @param {string} [status] If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status &#x60;PAIRED&#x60; and &#x60;UNPAIRED&#x60; if empty.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicesApi
     */
    public listDeviceCodes(cursor?: string, locationId?: string, productType?: string, status?: string, options?: any) {
        return DevicesApiFp(this.configuration).listDeviceCodes(cursor, locationId, productType, status, options).then((request) => request(this.axios, this.basePath));
    }
}
