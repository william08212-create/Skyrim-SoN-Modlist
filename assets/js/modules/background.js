(function() {
    const canvas = document.getElementById('background');
    let ctx, w, h;
    let angles = [0, 0, 0, 0, 0];  // 五层圆环角度
    let time = 0;
    
    // 符文池（足够丰富）
    const runePool = [
        'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ',
        'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ',
        'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ', 'ᛝ', 'ᛡ', 'ᛠ'
    ];
    
    // 圆环配置：半径比例、符文数量、字体尺寸系数、转速、透明度基数、旋转方向
    const rings = [
        { radFac: 0.98, count: 32, fontFac: 0.075, speed: 0.0012, alphaBase: 0.75, reverse: false },
        { radFac: 0.84, count: 28, fontFac: 0.068, speed: 0.0018, alphaBase: 0.68, reverse: true },
        { radFac: 0.71, count: 24, fontFac: 0.062, speed: 0.0024, alphaBase: 0.62, reverse: false },
        { radFac: 0.58, count: 20, fontFac: 0.056, speed: 0.0030, alphaBase: 0.56, reverse: true },
        { radFac: 0.45, count: 16, fontFac: 0.050, speed: 0.0036, alphaBase: 0.50, reverse: false }
    ];
    
    // 粒子系统（数量略减，透明度丰富）
    let stars = [];
    const STAR_COUNT = 600;   // 比之前少，但仍丰富
    let floatingDust = [];     // 额外飘浮微粒，预先生成提升性能
    
    function resizeCanvas() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        // 重置粒子位置
        for (let i = 0; i < stars.length; i++) {
            stars[i].x = Math.random() * w;
            stars[i].y = Math.random() * h;
        }
        // 重置浮尘位置
        for (let i = 0; i < floatingDust.length; i++) {
            floatingDust[i].rad = 0.6 + Math.random() * 0.4; // 动态半径范围
            floatingDust[i].angleSpeed = 0.2 + Math.random() * 0.3;
            floatingDust[i].offset = Math.random() * Math.PI * 2;
        }
    }
    
    function initStars() {
        for (let i = 0; i < STAR_COUNT; i++) {
            const isGold = Math.random() > 0.7; // 约30%金色，70%白色
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                radius: 0.8 + Math.random() * 1.5,
                alpha: 0.1 + Math.random() * 0.6,   // 透明度范围0.1~0.7，层次丰富
                speedX: (Math.random() - 0.5) * 0.05,
                speedY: (Math.random() - 0.5) * 0.04,
                color: isGold ? `rgba(220, 180, 80, ${0.2 + Math.random() * 0.5})` : `rgba(255, 255, 240, ${0.1 + Math.random() * 0.4})`
            });
        }
    }
    
    function initFloatingDust() {
        const DUST_COUNT = 120;
        for (let i = 0; i < DUST_COUNT; i++) {
            floatingDust.push({
                rad: 0.6 + Math.random() * 0.4,
                angleSpeed: 0.2 + Math.random() * 0.4,
                offset: Math.random() * Math.PI * 2
            });
        }
    }
    
    // 绘制单个符文（发光增强，尺寸略大）
    function drawRune(ctx, char, x, y, size, angle, glowIntensity, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.font = `${size}px "Noto Sans Runic", "Segoe UI Symbol", "Noto Serif SC", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // 主发光（金色）
        ctx.shadowBlur = glowIntensity * 16;   // 增强发光范围
        ctx.shadowColor = `rgba(220, 180, 80, ${glowIntensity * 0.9})`;
        ctx.fillStyle = `rgba(230, 190, 90, ${alpha})`;
        ctx.fillText(char, 0, 0);
        // 二次绘制内芯亮白，增强光感
        ctx.shadowBlur = glowIntensity * 10;
        ctx.fillStyle = `rgba(255, 245, 210, ${alpha * 0.7})`;
        ctx.fillText(char, 0, 0);
        ctx.restore();
    }
    
    // 绘制单层圆环（优化：预存符文列表，避免每帧重复取模）
    function drawRing(ctx, cx, cy, radius, runeCount, fontSizeFactor, globalAngle, alphaBase, reverse, pulse, ringIndex) {
        const step = (Math.PI * 2) / runeCount;
        // 根据圆环索引预选一段符文，保证每环不同但计算简单
        const startIdx = ringIndex * 3;
        for (let i = 0; i < runeCount; i++) {
            const angle = (reverse ? -globalAngle : globalAngle) + i * step;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            const char = runePool[(startIdx + i) % runePool.length];
            const glow = pulse * 0.9 + Math.sin(angle * 2 + time) * 0.25;
            const alpha = alphaBase + Math.sin(angle * 1.5 + time) * 0.12;
            const fontSize = radius * fontSizeFactor;
            drawRune(ctx, char, x, y, fontSize, angle + Math.PI / 2, glow, alpha);
        }
    }
    
    // 背景星尘绘制（透明度丰富）
    function drawStars(ctx) {
        for (let s of stars) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.shadowBlur = 1.5;
            ctx.shadowColor = "rgba(220,180,80,0.3)";
            ctx.fill();
            s.x += s.speedX;
            s.y += s.speedY;
            if (s.x < -15) s.x = w + 15;
            if (s.x > w + 15) s.x = -15;
            if (s.y < -15) s.y = h + 15;
            if (s.y > h + 15) s.y = -15;
        }
        ctx.shadowBlur = 0;
    }
    
    // 漂浮微粒（围绕圆环动态移动，性能优化：使用预生成参数）
    function drawFloatingDust(ctx, cx, cy, maxRadius) {
        for (let i = 0; i < floatingDust.length; i++) {
            const d = floatingDust[i];
            const rad = maxRadius * (0.5 + Math.sin(time * 0.5 + d.offset) * 0.3);
            const a = time * d.angleSpeed + d.offset;
            const x = cx + Math.cos(a) * rad;
            const y = cy + Math.sin(a) * rad;
            ctx.beginPath();
            ctx.arc(x, y, 0.9, 0, Math.PI * 2);
            const alpha = 0.2 + Math.sin(time * 2 + d.offset) * 0.15;
            ctx.fillStyle = `rgba(220, 180, 80, ${alpha})`;
            ctx.fill();
        }
    }
    
    // 极淡外圈光晕
    function drawOuterGlow(ctx, cx, cy, maxRadius, pulse) {
        const grad = ctx.createRadialGradient(cx, cy, maxRadius * 0.6, cx, cy, maxRadius * 1.2);
        grad.addColorStop(0, `rgba(180, 140, 60, ${0.05 + pulse * 0.025})`);
        grad.addColorStop(1, `rgba(0,0,0,0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }
    
    function draw() {
        if (!ctx) return;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, w, h);
        
        const cx = w / 2;
        const cy = h / 2;
        const maxRadius = Math.min(w, h) * 0.38;
        const pulse = 0.6 + Math.sin(time * 0.8) * 0.2;
        
        drawStars(ctx);
        drawOuterGlow(ctx, cx, cy, maxRadius, pulse);
        
        // 绘制五层圆环（优化：传递环索引用于符文选择）
        for (let i = 0; i < rings.length; i++) {
            const r = rings[i];
            const radius = maxRadius * r.radFac;
            drawRing(ctx, cx, cy, radius, r.count, r.fontFac, angles[i], r.alphaBase, r.reverse, pulse, i);
            angles[i] += r.reverse ? -r.speed : r.speed;
        }
        
        drawFloatingDust(ctx, cx, cy, maxRadius);
        
        time += 0.016;
        requestAnimationFrame(draw);
    }
    
    function init() {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        initStars();
        initFloatingDust();
        draw();
        window.addEventListener('resize', () => {
            resizeCanvas();
            for (let i = 0; i < stars.length; i++) {
                stars[i].x = Math.random() * w;
                stars[i].y = Math.random() * h;
            }
        });
    }
    
    init();
})();