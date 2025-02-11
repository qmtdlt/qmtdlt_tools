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
import { AdminResultListBackupOutput } from '../models';
import { AdminResultListString } from '../models';
import { AdminResultString } from '../models';
import { RestoreInput } from '../models';
/**
 * SysUpdateApi - axios parameter creator
 * @export
 */
export const SysUpdateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateClearGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/clear`;
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
         * @summary 备份列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateListPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/list`;
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
         * @summary 获取日志列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateLogsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/logs`;
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
         * @summary 还原
         * @param {RestoreInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateRestorePost: async (body?: RestoreInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/restore`;
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
        /**
         * 
         * @summary 从远端更新系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateUpdatePost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/update`;
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
         * @summary 获取WebHook接口密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateWebHookKeyGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/webHookKey`;
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
         * @summary 仓库WebHook接口
         * @param {{ [key: string]: any; }} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysUpdateWebHookPost: async (body?: { [key: string]: any; }, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysUpdate/webHook`;
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
 * SysUpdateApi - functional programming interface
 * @export
 */
export const SysUpdateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 清空日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateClearGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateClearGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 备份列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateListPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListBackupOutput>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateListPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取日志列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateLogsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListString>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateLogsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 还原
         * @param {RestoreInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateRestorePost(body?: RestoreInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateRestorePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 从远端更新系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateUpdatePost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateUpdatePost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取WebHook接口密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateWebHookKeyGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateWebHookKeyGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 仓库WebHook接口
         * @param {{ [key: string]: any; }} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateWebHookPost(body?: { [key: string]: any; }, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysUpdateApiAxiosParamCreator(configuration).apiSysUpdateWebHookPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysUpdateApi - factory interface
 * @export
 */
export const SysUpdateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 清空日志
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateClearGet(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUpdateApiFp(configuration).apiSysUpdateClearGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 备份列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateListPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListBackupOutput>> {
            return SysUpdateApiFp(configuration).apiSysUpdateListPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取日志列表
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateLogsGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListString>> {
            return SysUpdateApiFp(configuration).apiSysUpdateLogsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 还原
         * @param {RestoreInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateRestorePost(body?: RestoreInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUpdateApiFp(configuration).apiSysUpdateRestorePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 从远端更新系统
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateUpdatePost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUpdateApiFp(configuration).apiSysUpdateUpdatePost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取WebHook接口密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateWebHookKeyGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysUpdateApiFp(configuration).apiSysUpdateWebHookKeyGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 仓库WebHook接口
         * @param {{ [key: string]: any; }} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysUpdateWebHookPost(body?: { [key: string]: any; }, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysUpdateApiFp(configuration).apiSysUpdateWebHookPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysUpdateApi - object-oriented interface
 * @export
 * @class SysUpdateApi
 * @extends {BaseAPI}
 */
export class SysUpdateApi extends BaseAPI {
    /**
     * 
     * @summary 清空日志
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateClearGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateClearGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 备份列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateListPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListBackupOutput>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateListPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取日志列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateLogsGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListString>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateLogsGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 还原
     * @param {RestoreInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateRestorePost(body?: RestoreInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateRestorePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 从远端更新系统
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateUpdatePost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateUpdatePost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取WebHook接口密钥
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateWebHookKeyGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateWebHookKeyGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 仓库WebHook接口
     * @param {{ [key: string]: any; }} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysUpdateApi
     */
    public async apiSysUpdateWebHookPost(body?: { [key: string]: any; }, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysUpdateApiFp(this.configuration).apiSysUpdateWebHookPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
