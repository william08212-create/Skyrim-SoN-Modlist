// ====================================================
// 诺德之子整合包主交互脚本
// 功能：模态框控制、密码验证、导航高亮、平滑滚动、简易防盗
// 说明：语言切换功能已移除，仅保留界面交互逻辑
// ====================================================

(function() {
    // -------------------- 获取页面中常用的 DOM 元素 --------------------
    const donateBtn = document.getElementById('donateBtn');               // 捐赠浮动按钮
    const donateModal = document.getElementById('donateModal');           // 捐赠模态框
    const closeDonate = document.getElementById('closeDonateModal');     // 捐赠模态框关闭按钮

    const downloadModal = document.getElementById('downloadModal');       // 下载通道模态框
    const closeDownload = document.getElementById('closeDownloadModal'); // 下载模态框关闭按钮

    const langBtn = document.getElementById('langBtn');                   // 语言选择浮动按钮
    const langModal = document.getElementById('langModal');               // 语言选择模态框
    const closeLang = document.getElementById('closeLangModal');         // 语言模态框关闭按钮

    const forumBtn = document.getElementById('forumBtn');                 // 社群浮动按钮
    const communityModal = document.getElementById('communityModal');     // 社群模态框
    const closeCommunity = document.getElementById('closeCommunityModal'); // 社群模态框关闭按钮

    const passwordModal = document.getElementById('passwordModal');       // 密码输入模态框
    const closePassword = document.getElementById('closePasswordModal'); // 密码模态框关闭按钮
    const submitPwd = document.getElementById('submitPasswordBtn');      // 密码确认按钮
    const pwdInput = document.getElementById('passwordInput');           // 密码输入框

    // -------------------- 密码验证逻辑（动态生成当天密码） --------------------
    // 生成当天密码：SoNYYYYMMDD 每个字符 ASCII 码 +1，再转二进制拼接
    function getTodayPassword() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份补零
        const day = String(now.getDate()).padStart(2, '0');        // 日期补零
        const rawPwd = `SoN${year}${month}${day}`;                 // 原始密码字符串
        const OFFSET = 1;                                           // 偏移量

        // 第一步：每个字符 ASCII 码加 1
        let shiftedPwd = '';
        for (let i = 0; i < rawPwd.length; i++) {
            const newCharCode = rawPwd.charCodeAt(i) + OFFSET;
            shiftedPwd += String.fromCharCode(newCharCode);
        }

        // 第二步：将偏移后的每个字符转换成 8 位二进制并拼接
        let binaryPwd = '';
        for (let i = 0; i < shiftedPwd.length; i++) {
            const charCode = shiftedPwd.charCodeAt(i);
            const binary = charCode.toString(2).padStart(8, '0');
            binaryPwd += binary;
        }
        return binaryPwd; // 返回最终二进制密码
    }

    // -------------------- 下载按钮点击处理（两个：浮动按钮和内联按钮） --------------------
    const downloadBtns = [
        document.getElementById('downloadBtn'),       // 浮动下载按钮
        document.getElementById('inlineDownloadBtn')  // 章节内的下载按钮
    ];

    downloadBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();      // 阻止默认行为（如链接跳转）
                e.stopPropagation();      // 防止事件冒泡
                // 优先显示密码模态框，如果密码框不存在则直接显示下载模态框
                if (passwordModal) {
                    passwordModal.classList.add('show');
                } else {
                    if (downloadModal) downloadModal.classList.add('show');
                }
            });
        }
    });

    // -------------------- 密码提交处理 --------------------
    if (submitPwd && pwdInput && passwordModal) {
        submitPwd.addEventListener('click', () => {
            const pwd = pwdInput.value.trim();          // 获取输入并去除首尾空格
            if (pwd === getTodayPassword()) {            // 验证密码是否与当天生成的密码一致
                passwordModal.classList.remove('show');  // 隐藏密码模态框
                pwdInput.value = '';                     // 清空输入框
                if (downloadModal) downloadModal.classList.add('show'); // 显示下载模态框
            } else {
                alert('密码错误');                        // 密码错误提示
                pwdInput.value = '';                      // 清空输入框
            }
        });
    }

    // -------------------- 关闭密码模态框并清空输入 --------------------
    if (closePassword && passwordModal && pwdInput) {
        closePassword.addEventListener('click', () => {
            passwordModal.classList.remove('show');      // 隐藏密码模态框
            pwdInput.value = '';                          // 清空输入框
        });
    }

    // -------------------- 捐赠模态框控制 --------------------
    if (donateBtn && donateModal && closeDonate) {
        donateBtn.addEventListener('click', () => donateModal.classList.add('show'));   // 点击捐赠按钮显示模态框
        closeDonate.addEventListener('click', () => donateModal.classList.remove('show')); // 点击关闭按钮隐藏模态框
    }

    // -------------------- 社群模态框控制 --------------------
    if (forumBtn && communityModal && closeCommunity) {
        forumBtn.addEventListener('click', () => communityModal.classList.add('show'));   // 点击社群按钮显示模态框
        closeCommunity.addEventListener('click', () => communityModal.classList.remove('show')); // 点击关闭按钮隐藏
    }

    // -------------------- 语言选择模态框控制（仅保留打开/关闭，语言切换逻辑已移除）--------------------
    if (langBtn && langModal && closeLang) {
        langBtn.addEventListener('click', () => langModal.classList.add('show'));   // 点击语言按钮显示模态框
        closeLang.addEventListener('click', () => langModal.classList.remove('show')); // 点击关闭按钮隐藏
    }

    // -------------------- 下载模态框关闭按钮 --------------------
    if (closeDownload && downloadModal) {
        closeDownload.addEventListener('click', () => downloadModal.classList.remove('show')); // 关闭下载模态框
    }

    // -------------------- 内联支持按钮（页面中部“成为支持者”）--------------------
    const inlineDonateBtn = document.getElementById('inlineDonateBtn');
    if (inlineDonateBtn) {
        inlineDonateBtn.addEventListener('click', () => donateModal.classList.add('show')); // 点击打开捐赠模态框
    }

    // -------------------- 页脚支持链接 --------------------
    const footerDonateLink = document.getElementById('footerDonateLink');
    if (footerDonateLink) {
        footerDonateLink.addEventListener('click', (e) => {
            e.preventDefault();                          // 阻止链接跳转
            donateModal.classList.add('show');           // 打开捐赠模态框
        });
    }

    // -------------------- 语言选项点击处理（已移除翻译功能，仅关闭模态框）--------------------
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            langModal.classList.remove('show');           // 点击任一语言选项后关闭模态框（无其他操作）
        });
    });

    // -------------------- 点击模态框外部遮罩关闭所有模态框 --------------------
    window.addEventListener('click', (e) => {
        // 如果点击的目标是遮罩层本身（而非内部卡片），则关闭对应模态框
        if (donateModal && e.target === donateModal) donateModal.classList.remove('show');
        if (downloadModal && e.target === downloadModal) downloadModal.classList.remove('show');
        if (langModal && e.target === langModal) langModal.classList.remove('show');
        if (communityModal && e.target === communityModal) communityModal.classList.remove('show');
        if (passwordModal && e.target === passwordModal) {
            passwordModal.classList.remove('show');
            if (pwdInput) pwdInput.value = '';            // 关闭时同时清空密码输入框
        }
    });

    // -------------------- 导航高亮与平滑滚动 --------------------
    const sections = document.querySelectorAll('.chapter-card');          // 获取所有章节卡片
    const navLinks = {                                                      // 导航链接映射
        chapter1: document.getElementById('nav-chapter1'),
        chapter2: document.getElementById('nav-chapter2'),
        chapter3: document.getElementById('nav-chapter3'),
        chapter4: document.getElementById('nav-chapter4'),
        chapter5: document.getElementById('nav-chapter5'),
        chapter6: document.getElementById('nav-chapter6'),
        chapter7: document.getElementById('nav-chapter7'),
    };

    // 设置当前激活的导航项
    function setActiveLink(id) {
        Object.values(navLinks).forEach(link => {
            if (link) link.classList.remove('active');     // 移除所有 active 类
        });
        if (navLinks[id]) navLinks[id].classList.add('active'); // 为当前章节对应的导航项添加 active 类
    }

    // 使用 IntersectionObserver 监听章节可见性，自动高亮导航
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {                     // 如果章节进入视口
                const id = entry.target.getAttribute('id'); // 获取章节 id
                if (id === 'chapter1') setActiveLink('chapter1');
                else if (id === 'chapter2') setActiveLink('chapter2');
                else if (id === 'chapter3') setActiveLink('chapter3');
                else if (id === 'chapter4') setActiveLink('chapter4');
                else if (id === 'chapter5') setActiveLink('chapter5');
                else if (id === 'chapter6') setActiveLink('chapter6');
                else if (id === 'chapter7') setActiveLink('chapter7');
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -0px 0px' }); // 阈值20%，上边距-80px（考虑固定导航栏）

    sections.forEach(section => observer.observe(section));  // 开始观察每个章节

    // 导航链接点击平滑滚动到对应章节
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();                               // 阻止默认锚点跳转
            const targetId = link.getAttribute('href').substring(1); // 获取目标 id（去掉 #）
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.fixed-nav').offsetHeight; // 获取导航栏高度
                const targetTop = targetSection.offsetTop - navHeight;               // 计算滚动位置（减去导航栏）
                window.scrollTo({ top: targetTop, behavior: 'smooth' });             // 平滑滚动
            }
        });
    });

    // -------------------- 简单防盗（阻止 F12 / Ctrl+Shift+I / Ctrl+U / 右键菜单）--------------------
    document.addEventListener('keydown', function(e) {
        // 阻止 F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // 阻止 Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // 阻止 Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // 阻止 Ctrl+U（查看源码）
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    });

    // 阻止右键菜单弹出
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

})();