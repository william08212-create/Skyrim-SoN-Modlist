/**
 * DOM 工具函数
 */

/**
 * 安全获取 DOM 元素
 * @param {string} selector - 选择器
 * @param {Element} context - 上下文元素
 * @returns {Element|null}
 */
export const $ = (selector, context = document) => context.querySelector(selector);

/**
 * 安全获取多个 DOM 元素
 * @param {string} selector - 选择器
 * @param {Element} context - 上下文元素
 * @returns {NodeList}
 */
export const $$ = (selector, context = document) => context.querySelectorAll(selector);

/**
 * 添加事件监听器（带空值检查）
 * @param {Element|null} element - 目标元素
 * @param {string} event - 事件类型
 * @param {Function} handler - 事件处理函数
 */
export const on = (element, event, handler) => {
    if (element) {
        element.addEventListener(event, handler);
    }
};

/**
 * 切换元素的类
 * @param {Element} element - 目标元素
 * @param {string} className - 类名
 * @param {boolean} force - 强制添加或移除
 */
export const toggleClass = (element, className, force) => {
    if (element) {
        element.classList.toggle(className, force);
    }
};

/**
 * 获取元素属性
 * @param {Element} element - 目标元素
 * @param {string} attr - 属性名
 * @returns {string|null}
 */
export const getAttr = (element, attr) => element?.getAttribute(attr) || null;