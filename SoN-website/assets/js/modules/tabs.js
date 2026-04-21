/**
 * 标签页切换模块
 */

import { $$, on } from '../utils/dom.js';

class TabsManager {
    constructor() {
        this.init();
    }

    /**
     * 初始化标签页
     */
    init() {
        const tabBtns = $$('.tab-btn');
        const tabPanes = $$('.tab-pane');
        
        if (tabBtns.length === 0) return;
        
        tabBtns.forEach(btn => {
            on(btn, 'click', () => {
                const target = btn.dataset.tab;
                const targetPane = document.getElementById(target);
                
                if (!targetPane) return;
                
                // 切换按钮状态
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // 切换内容面板
                tabPanes.forEach(pane => pane.classList.remove('active'));
                targetPane.classList.add('active');
            });
        });
    }
}

export const tabsManager = new TabsManager();