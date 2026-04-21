/**
 * 导航高亮模块
 */

import { $$ } from '../utils/dom.js';

class NavigationManager {
    constructor() {
        this.sections = null;
        this.navLinks = null;
        this.init();
    }

    /**
     * 初始化导航
     */
    init() {
        this.sections = $$('.chapter-card');
        this.navLinks = $$('.nav-link');
        
        if (this.sections.length === 0 || this.navLinks.length === 0) return;
        
        window.addEventListener('scroll', () => this.handleScroll());
    }

    /**
     * 处理滚动事件
     */
    handleScroll() {
        let current = '';
        const scrollPosition = window.pageYOffset;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollPosition >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

export const navigationManager = new NavigationManager();