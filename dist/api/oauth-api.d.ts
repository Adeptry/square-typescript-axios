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
import { ObtainTokenRequest } from '../models';
import { ObtainTokenResponse } from '../models';
import { RenewTokenRequest } from '../models';
import { RenewTokenResponse } from '../models';
import { RevokeTokenRequest } from '../models';
import { RevokeTokenResponse } from '../models';
/**
 * OAuthApi - axios parameter creator
 * @export
 */
export declare const OAuthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
     * @summary ObtainToken
     * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainToken: (body: ObtainTokenRequest, options?: any) => Promise<RequestArgs>;
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RenewToken
     * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
     * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renewToken: (clientId: string, body: RenewTokenRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RevokeToken
     * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeToken: (body: RevokeTokenRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * OAuthApi - functional programming interface
 * @export
 */
export declare const OAuthApiFp: (configuration?: Configuration) => {
    /**
     * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
     * @summary ObtainToken
     * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainToken(body: ObtainTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObtainTokenResponse>>;
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RenewToken
     * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
     * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renewToken(clientId: string, body: RenewTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RenewTokenResponse>>;
    /**
     * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RevokeToken
     * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeToken(body: RevokeTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RevokeTokenResponse>>;
};
/**
 * OAuthApi - factory interface
 * @export
 */
export declare const OAuthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
     * @summary ObtainToken
     * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    obtainToken(body: ObtainTokenRequest, options?: any): AxiosPromise<ObtainTokenResponse>;
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RenewToken
     * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
     * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renewToken(clientId: string, body: RenewTokenRequest, options?: any): AxiosPromise<RenewTokenResponse>;
    /**
     * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RevokeToken
     * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    revokeToken(body: RevokeTokenRequest, options?: any): AxiosPromise<RevokeTokenResponse>;
};
/**
 * OAuthApi - object-oriented interface
 * @export
 * @class OAuthApi
 * @extends {BaseAPI}
 */
export declare class OAuthApi extends BaseAPI {
    /**
     * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
     * @summary ObtainToken
     * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    obtainToken(body: ObtainTokenRequest, options?: any): Promise<import("axios").AxiosResponse<ObtainTokenResponse>>;
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RenewToken
     * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
     * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    renewToken(clientId: string, body: RenewTokenRequest, options?: any): Promise<import("axios").AxiosResponse<RenewTokenResponse>>;
    /**
     * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RevokeToken
     * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    revokeToken(body: RevokeTokenRequest, options?: any): Promise<import("axios").AxiosResponse<RevokeTokenResponse>>;
}
