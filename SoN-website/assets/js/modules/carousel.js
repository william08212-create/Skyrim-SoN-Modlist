/**
 * 3D图片轮播模块（支持自动旋转）
 */
import { images, CAROUSEL_CONFIG } from '../config.js';

class Carousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.cards = [];
        this.isDragging = false;
        this.startX = 0;
        this.startAngle = 0;
        this.pendingUpdate = false;
        
        // 计算安全半径
        this.safeRadius = this.calculateSafeRadius(
            CAROUSEL_CONFIG.CARD_WIDTH,
            images.length
        );
        
        this.config = {
            radius: Math.max(this.safeRadius, CAROUSEL_CONFIG.MIN_RADIUS),
            total: images.length,
            currentAngle: 0,
            dragSpeed: CAROUSEL_CONFIG.DRAG_SPEED
        };
        
        this.init();
    }

    calculateSafeRadius(cardWidth, imageCount) {
        const angleBetweenCards = (Math.PI * 2) / imageCount;
        const requiredChordLength = cardWidth + CAROUSEL_CONFIG.EXTRA_GAP;
        const radius = requiredChordLength / (2 * Math.sin(angleBetweenCards / 2));
        return Math.ceil(radius);
    }

    init() {
        this.container.innerHTML = '';
        this.cards = [];
        
        for (let i = 0; i < this.config.total; i++) {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            
            const img = document.createElement('img');
            img.src = images[i].src;
            img.alt = images[i].title;
            img.loading = 'lazy';
            
            const title = document.createElement('div');
            title.className = 'card-title';
            title.textContent = images[i].title;
            
            card.appendChild(img);
            card.appendChild(title);
            card.dataset.index = i;
            
            this.container.appendChild(card);
            this.cards.push(card);
        }
        
        this.updatePositions(); // 无参调用，使用内部 currentAngle
        this.bindEvents();
        this.bindCardClick();
        this.handleResize();
        
        window.addEventListener('resize', () => this.handleResize());
        
        console.log(`✅ 轮播初始化完成 | 半径: ${this.config.radius}px`);
    }

    /**
     * 更新所有卡片位置（支持无参调用，自动使用当前角度）
     */
    updatePositions(rotationY = this.config.currentAngle) {
        const angleStep = (Math.PI * 2) / this.cards.length;
        const radius = this.config.radius;
        
        this.cards.forEach((card, idx) => {
            const angle = idx * angleStep + rotationY;
            
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            const scale = 0.7 + (Math.cos(angle) + 1) * 0.2;
            const opacity = 0.45 + (Math.cos(angle) + 1) * 0.3;
            const isFront = Math.cos(angle) > 0.85;
            
            card.style.transform = `
                translateX(${x}px) 
                translateZ(${z}px)
                rotateY(${angle * (180 / Math.PI)}deg)
                scale(${scale})
            `;
            card.style.opacity = Math.min(1, Math.max(0.4, opacity));
            card.style.zIndex = Math.floor((Math.cos(angle) + 1) * 50);
            
            if (isFront) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    scheduleUpdate() {
        if (this.pendingUpdate) return;
        this.pendingUpdate = true;
        requestAnimationFrame(() => {
            this.updatePositions();
            this.pendingUpdate = false;
        });
    }

    bindEvents() {
        // 获取父容器（更精确地找到 .carousel-container）
        const container = this.container.closest('.carousel-container') || this.container.parentElement;
        if (!container) return;
        
        const onMouseDown = (e) => {
            this.isDragging = true;
            this.startX = e.clientX;
            this.startAngle = this.config.currentAngle;
            container.style.cursor = 'grabbing';
            e.preventDefault();
        };
        
        const onMouseMove = (e) => {
            if (!this.isDragging) return;
            const deltaX = e.clientX - this.startX;
            const angleDelta = deltaX * 0.006 * this.config.dragSpeed;
            this.config.currentAngle = this.startAngle + angleDelta;
            this.scheduleUpdate();
        };
        
        const onMouseUp = () => {
            this.isDragging = false;
            container.style.cursor = 'grab';
        };
        
        container.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        
        // 触摸屏
        container.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            this.startX = e.touches[0].clientX;
            this.startAngle = this.config.currentAngle;
            e.preventDefault();
        });
        window.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            const deltaX = e.touches[0].clientX - this.startX;
            const angleDelta = deltaX * 0.006 * this.config.dragSpeed;
            this.config.currentAngle = this.startAngle + angleDelta;
            this.scheduleUpdate();
        });
        window.addEventListener('touchend', () => {
            this.isDragging = false;
        });
    }

    bindCardClick() {
        this.container.addEventListener('click', (e) => {
            const card = e.target.closest('.carousel-card');
            if (card) {
                const idx = parseInt(card.dataset.index);
                console.log(`📷 点击了: ${images[idx].title}`);
                // 可自定义回调
            }
        });
    }

    handleResize() {
        const width = window.innerWidth;
        let newRadius = this.safeRadius;
        if (width < 640) {
            newRadius = Math.max(this.safeRadius * 0.7, 380);
        } else if (width < 1024) {
            newRadius = Math.max(this.safeRadius * 0.85, 460);
        } else {
            newRadius = this.safeRadius;
        }
        this.config.radius = Math.max(newRadius, CAROUSEL_CONFIG.MIN_RADIUS);
        this.updatePositions();
    }

    /**
     * 启动自动旋转
     * @param {number} speed 每帧旋转弧度（默认 0.0002 ≈ 0.012 弧度/秒）
     */
    startAutoRotate(speed = 0.0005) {
        if (this.autoRunning) return;
        this.autoSpeed = speed;
        this.autoRunning = true;
        const step = () => {
            if (!this.autoRunning) return;
            if (!this.isDragging) {
                this.config.currentAngle += this.autoSpeed;
                this.updatePositions();
            }
            this.rafId = requestAnimationFrame(step);
        };
        this.rafId = requestAnimationFrame(step);
    }

    /**
     * 停止自动旋转
     */
    stopAutoRotate() {
        this.autoRunning = false;
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
    }
}

// ========== 单例模式：直接创建并启动自动旋转 ==========
const myCarousel = new Carousel('carousel');
myCarousel.startAutoRotate(0.0005);  // 启动自动旋转（速度可调）

// 鼠标悬停时暂停，移出后恢复
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => myCarousel.stopAutoRotate());
    carouselContainer.addEventListener('mouseleave', () => myCarousel.startAutoRotate(0.0005));
}

// 导出初始化函数
export function initCarousel() {
    return myCarousel;
}