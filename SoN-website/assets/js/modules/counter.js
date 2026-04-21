/**
 * 数字递增动画 - 滚动到可视区域时触发
 * 为带有 class="count-number" 和 data-target 属性的元素添加计数动画
 */
(function() {
    // 获取所有需要计数的元素
    const counters = document.querySelectorAll('.count-number');
    if (!counters.length) return;

    // 数字动画函数
    function animateNumber(element, target) {
        let current = 0;
        const step = Math.ceil(target / 60); // 约60帧完成
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.innerText = target;
                clearInterval(timer);
            } else {
                element.innerText = current;
            }
        }, 30); // 20ms 一帧，总耗时约 1.2 秒
    }

    // 使用 Intersection Observer 监听元素进入视口
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                if (target && !counter.dataset.animated) {
                    animateNumber(counter, target);
                    counter.dataset.animated = 'true'; // 标记已动画，避免重复
                }
                // 动画完成后停止观察该元素
                obs.unobserve(counter);
            }
        });
    }, { threshold: 0.25 }); // 元素露出 30% 时触发

    // 开始观察每个计数器
    counters.forEach(counter => observer.observe(counter));
})();