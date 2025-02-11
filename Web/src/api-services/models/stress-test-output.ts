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

 /**
 * 接口压测输出参数
 *
 * @export
 * @interface StressTestOutput
 */
export interface StressTestOutput {

    /**
     * 总请求次数
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    totalRequests?: number;

    /**
     * 总用时（秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    totalTimeInSeconds?: number;

    /**
     * 成功请求次数
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    successfulRequests?: number;

    /**
     * 失败请求次数
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    failedRequests?: number;

    /**
     * 每秒查询率（QPS）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    queriesPerSecond?: number;

    /**
     * 最小响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    minResponseTime?: number;

    /**
     * 最大响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    maxResponseTime?: number;

    /**
     * 平均响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    averageResponseTime?: number;

    /**
     * P10 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile10ResponseTime?: number;

    /**
     * P25 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile25ResponseTime?: number;

    /**
     * P50 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile50ResponseTime?: number;

    /**
     * P75 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile75ResponseTime?: number;

    /**
     * P90 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile90ResponseTime?: number;

    /**
     * P99 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile99ResponseTime?: number;

    /**
     * P999 响应时间（毫秒）
     *
     * @type {number}
     * @memberof StressTestOutput
     */
    percentile999ResponseTime?: number;
}
