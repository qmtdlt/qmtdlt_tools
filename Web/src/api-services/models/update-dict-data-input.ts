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

import { StatusEnum } from './status-enum';
 /**
 * 
 *
 * @export
 * @interface UpdateDictDataInput
 */
export interface UpdateDictDataInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateDictDataInput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateDictDataInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateDictDataInput
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    tenantId?: number | null;

    /**
     * 字典类型Id
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    dictTypeId?: number;

    /**
     * 显示文本
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    label: string;

    /**
     * 值
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    value: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    code?: string | null;

    /**
     * 显示样式-标签颜色
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    tagType?: string | null;

    /**
     * 显示样式-Style(控制显示样式)
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    styleSetting?: string | null;

    /**
     * 显示样式-Class(控制显示样式)
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    classSetting?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    remark?: string | null;

    /**
     * 拓展数据(保存业务功能的配置项)
     *
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    extData?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof UpdateDictDataInput
     */
    status?: StatusEnum;
}
