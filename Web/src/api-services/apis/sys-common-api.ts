/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultIActionResult } from '../models';
import { AdminResultListApiOutput } from '../models';
import { AdminResultObject } from '../models';
import { AdminResultSmKeyPairOutput } from '../models';
import { AdminResultStressTestOutput } from '../models';
import { StressTestInput } from '../models';
/**
 * SysCommonApi - axios parameter creator
 * @export
 */
export const SysCommonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取所有接口/动态API 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCommonApiListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCommon/apiList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 下载标记错误的临时Excel（全局）
         * @param {string} [fileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCommonDownloadErrorExcelTempPost: async (fileName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCommon/downloadErrorExcelTemp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (fileName !== undefined) {
                localVarQueryParameter['fileName'] = fileName;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 加密字符串 🔖
         * @param {string} plainText 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCommonEncryptPlainTextPlainTextPost: async (plainText: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'plainText' is not null or undefined
            if (plainText === null || plainText === undefined) {
                throw new RequiredError('plainText','Required parameter plainText was null or undefined when calling apiSysCommonEncryptPlainTextPlainTextPost.');
            }
            const localVarPath = `/api/sysCommon/encryptPlainText/{plainText}`
                .replace(`{${"plainText"}}`, encodeURIComponent(String(plainText)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取国密公钥私钥对 🏆
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCommonSmKeyPairGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCommon/smKeyPair`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 接口压测 🔖
         * @param {StressTestInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCommonStressTestPost: async (body?: StressTestInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCommon/stressTest`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysCommonApi - functional programming interface
 * @export
 */
export const SysCommonApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取所有接口/动态API 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonApiListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListApiOutput>>> {
            const localVarAxiosArgs = await SysCommonApiAxiosParamCreator(configuration).apiSysCommonApiListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 下载标记错误的临时Excel（全局）
         * @param {string} [fileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonDownloadErrorExcelTempPost(fileName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultIActionResult>>> {
            const localVarAxiosArgs = await SysCommonApiAxiosParamCreator(configuration).apiSysCommonDownloadErrorExcelTempPost(fileName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 加密字符串 🔖
         * @param {string} plainText 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonEncryptPlainTextPlainTextPost(plainText: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysCommonApiAxiosParamCreator(configuration).apiSysCommonEncryptPlainTextPlainTextPost(plainText, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取国密公钥私钥对 🏆
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonSmKeyPairGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSmKeyPairOutput>>> {
            const localVarAxiosArgs = await SysCommonApiAxiosParamCreator(configuration).apiSysCommonSmKeyPairGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 接口压测 🔖
         * @param {StressTestInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonStressTestPost(body?: StressTestInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultStressTestOutput>>> {
            const localVarAxiosArgs = await SysCommonApiAxiosParamCreator(configuration).apiSysCommonStressTestPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysCommonApi - factory interface
 * @export
 */
export const SysCommonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取所有接口/动态API 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonApiListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListApiOutput>> {
            return SysCommonApiFp(configuration).apiSysCommonApiListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 下载标记错误的临时Excel（全局）
         * @param {string} [fileName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonDownloadErrorExcelTempPost(fileName?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultIActionResult>> {
            return SysCommonApiFp(configuration).apiSysCommonDownloadErrorExcelTempPost(fileName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 加密字符串 🔖
         * @param {string} plainText 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonEncryptPlainTextPlainTextPost(plainText: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysCommonApiFp(configuration).apiSysCommonEncryptPlainTextPlainTextPost(plainText, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取国密公钥私钥对 🏆
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonSmKeyPairGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSmKeyPairOutput>> {
            return SysCommonApiFp(configuration).apiSysCommonSmKeyPairGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 接口压测 🔖
         * @param {StressTestInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCommonStressTestPost(body?: StressTestInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultStressTestOutput>> {
            return SysCommonApiFp(configuration).apiSysCommonStressTestPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysCommonApi - object-oriented interface
 * @export
 * @class SysCommonApi
 * @extends {BaseAPI}
 */
export class SysCommonApi extends BaseAPI {
    /**
     * 
     * @summary 获取所有接口/动态API 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCommonApi
     */
    public async apiSysCommonApiListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListApiOutput>> {
        return SysCommonApiFp(this.configuration).apiSysCommonApiListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 下载标记错误的临时Excel（全局）
     * @param {string} [fileName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCommonApi
     */
    public async apiSysCommonDownloadErrorExcelTempPost(fileName?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultIActionResult>> {
        return SysCommonApiFp(this.configuration).apiSysCommonDownloadErrorExcelTempPost(fileName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 加密字符串 🔖
     * @param {string} plainText 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCommonApi
     */
    public async apiSysCommonEncryptPlainTextPlainTextPost(plainText: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysCommonApiFp(this.configuration).apiSysCommonEncryptPlainTextPlainTextPost(plainText, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取国密公钥私钥对 🏆
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCommonApi
     */
    public async apiSysCommonSmKeyPairGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSmKeyPairOutput>> {
        return SysCommonApiFp(this.configuration).apiSysCommonSmKeyPairGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 接口压测 🔖
     * @param {StressTestInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCommonApi
     */
    public async apiSysCommonStressTestPost(body?: StressTestInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultStressTestOutput>> {
        return SysCommonApiFp(this.configuration).apiSysCommonStressTestPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
