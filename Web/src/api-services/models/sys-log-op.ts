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

import { LogLevel } from './log-level';
 /**
 * 系统操作日志表
 *
 * @export
 * @interface SysLogOp
 */
export interface SysLogOp {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysLogOp
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysLogOp
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysLogOp
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysLogOp
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysLogOp
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    tenantId?: number | null;

    /**
     * 模块名称
     *
     * @type {string}
     * @memberof SysLogOp
     */
    controllerName?: string | null;

    /**
     * 方法名称
     *
     * @type {string}
     * @memberof SysLogOp
     */
    actionName?: string | null;

    /**
     * 显示名称
     *
     * @type {string}
     * @memberof SysLogOp
     */
    displayTitle?: string | null;

    /**
     * 执行状态
     *
     * @type {string}
     * @memberof SysLogOp
     */
    status?: string | null;

    /**
     * IP地址
     *
     * @type {string}
     * @memberof SysLogOp
     */
    remoteIp?: string | null;

    /**
     * 登录地点
     *
     * @type {string}
     * @memberof SysLogOp
     */
    location?: string | null;

    /**
     * 经度
     *
     * @type {number}
     * @memberof SysLogOp
     */
    longitude?: number | null;

    /**
     * 维度
     *
     * @type {number}
     * @memberof SysLogOp
     */
    latitude?: number | null;

    /**
     * 浏览器
     *
     * @type {string}
     * @memberof SysLogOp
     */
    browser?: string | null;

    /**
     * 操作系统
     *
     * @type {string}
     * @memberof SysLogOp
     */
    os?: string | null;

    /**
     * 操作用时
     *
     * @type {number}
     * @memberof SysLogOp
     */
    elapsed?: number | null;

    /**
     * 日志时间
     *
     * @type {Date}
     * @memberof SysLogOp
     */
    logDateTime?: Date | null;

    /**
     * @type {LogLevel}
     * @memberof SysLogOp
     */
    logLevel?: LogLevel;

    /**
     * 账号
     *
     * @type {string}
     * @memberof SysLogOp
     */
    account?: string | null;

    /**
     * 真实姓名
     *
     * @type {string}
     * @memberof SysLogOp
     */
    realName?: string | null;

    /**
     * 请求方式
     *
     * @type {string}
     * @memberof SysLogOp
     */
    httpMethod?: string | null;

    /**
     * 请求地址
     *
     * @type {string}
     * @memberof SysLogOp
     */
    requestUrl?: string | null;

    /**
     * 请求参数
     *
     * @type {string}
     * @memberof SysLogOp
     */
    requestParam?: string | null;

    /**
     * 返回结果
     *
     * @type {string}
     * @memberof SysLogOp
     */
    returnResult?: string | null;

    /**
     * 事件Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    eventId?: number | null;

    /**
     * 线程Id
     *
     * @type {number}
     * @memberof SysLogOp
     */
    threadId?: number | null;

    /**
     * 请求跟踪Id
     *
     * @type {string}
     * @memberof SysLogOp
     */
    traceId?: string | null;

    /**
     * 异常信息
     *
     * @type {string}
     * @memberof SysLogOp
     */
    exception?: string | null;

    /**
     * 日志消息Json
     *
     * @type {string}
     * @memberof SysLogOp
     */
    message?: string | null;
}
