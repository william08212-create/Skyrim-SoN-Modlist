/**
 * 诺德之子整合包 - 主入口文件
 * 按顺序初始化所有模块
 */

import { modalManager } from './modules/modal.js';
import { tabsManager } from './modules/tabs.js';
import { accordionManager } from './modules/accordion.js';
import { navigationManager } from './modules/navigation.js';
import { initCarousel } from './modules/carousel.js';
import './modules/counter.js';
import './modules/background.js'

// 初始化所有模块
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 诺德之子整合包初始化中...');
    
    // 初始化模态框
    modalManager;
    
    // 初始化标签页
    tabsManager;
    
    // 初始化折叠面板
    accordionManager;
    
    // 初始化导航高亮
    navigationManager;
    
    // 初始化3D轮播
    initCarousel();
    
    console.log('✅ 所有模块初始化完成');
});