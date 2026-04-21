/**
 * 折叠面板模块
 */

import { $$, on } from '../utils/dom.js';

class AccordionManager {
    constructor() {
        this.init();
    }

    /**
     * 初始化折叠面板
     */
    init() {
        const accordionHeaders = $$('.accordion-header');
        
        accordionHeaders.forEach(header => {
            on(header, 'click', () => {
                const item = header.parentElement;
                const content = item.querySelector('.accordion-content');
                
                if (!item || !content) return;
                
                const isOpen = item.classList.contains('open');
                
                if (isOpen) {
                    item.classList.remove('open');
                    content.style.display = 'none';
                } else {
                    item.classList.add('open');
                    content.style.display = 'block';
                }
            });
        });
    }
}

export const accordionManager = new AccordionManager();