(function() {
    // 语言包 (修复changelog_html使用正确的details结构)
    const i18n = {
        zh: {
            float_download: "下载整合",
            float_donate: "支持作者",
            float_lang: "选择语言",
            nav_brand: "导航",
            nav_chapter1: "整合概念",
            nav_chapter2: "整合特色",
            nav_chapter3: "性能需求",
            nav_chapter4: "更新日志",
            hero_surtitle: "SKYRIM · SON OF NORD",
            hero_title: "诺德之子",
            hero_subtitle: "立志打造属于中国人自已的 Lorerim",
            ch1_title: "诺德之子 · 整合概念",
            ch1_desc1: "诺德之子整合，是一个注重真实向、高沉浸式的《上古卷轴5》整合包，致力于还原泰姆瑞尔大陆的政治、文化与宗教世界观。您将体验到：",
            ch1_item1: "顶尖的城市与重要地点美化，作者从950+ N网模组中精选的高质量新任务及原版任务拓展；",
            ch1_item2: "自组装的基于社区着色器的PBR全覆盖纹理，画面质感跃升；",
            ch1_item3: "收录N网最优秀的9个智能随从 + 10余个原版随从拓展，陪伴更真实；",
            ch1_item4: "真实欧美风人物美化（兼顾部分东方审美），NPC日程与互动更智能；",
            ch1_item5: "可选实验室插件，满足多元需求；",
            ch1_item6: "旨在打造一个完美的天际大陆，亦可作为您的打底包。",
            ch1_footer: "最重要的是：安装极简，操作容易。所有输出文件（DynDoLod、TexGen、Bodyslide、xEdit、Loot 等）均已备齐，您无需再与繁琐的工具纠缠！",
            ch1_placeholder: "—— 概念详情持续更新 ——",
            ch2_title: "诺德之子 · 整合特色",
            feature1_title: "最好的全城市拓展与美化",
            feature1_quote: "“额……这也叫城市吗？”",
            feature1_desc: "每一个城镇都经过了拓展与美化，大小至少拓展至原来的两倍至三倍。作者自制兼容补丁，禁用3000+对象降低性能需求。",
            feature2_title: "PBR全覆盖",
            feature2_quote: "“我花了200个G对比N网所有的PBR材质”",
            feature2_desc: "整合社区顶尖PBR材质，实现真实光影反射，每一寸地表、建筑都质感十足。",
            ch2_placeholder: "—— 整合特色持续完善中 ——",
            ch3_title: "性能需求与配置建议",
            ch3_desc: "为保证流畅体验，请参考以下配置。推荐配置可稳定60帧。",
            min_spec: "最低配置",
            rec_spec: "推荐配置 (60帧)",
            cpu: "CPU",
            ram: "内存",
            gpu: "显卡",
            vram: "显存",
            storage: "硬盘",
            os: "系统",
            spec_footnote: "显存需求视材质精度而定，建议留有余量。整合包已优化，开箱即用。",
            ch3_placeholder: "—— 性能调优指南后续更新 ——",
            update_title:"诺德之子 · 更新日志",           
            donors_title: "鸣谢捐赠者",
            donors_desc: "感谢以下玩家对整合包的支持，你们的每一份心意都是作者继续打磨的动力。",
            donors_thanks: "愿凯娜之风吹散你们的烦恼！",
            donate_title: "感谢您的支持",
            donate_message1: "每一份心意都是作者继续打磨整合包的动力",
            donate_message2: "愿塔洛斯指引你",
            download_title: "选择下载通道",
            download_message: "根据你的网络环境选择合适的网盘",
            download_notice:"* 具体下载流程请参阅页面的“诺德之子|下载流程”部分或下载压缩包中的“上古卷轴5诺德之子整合安装教程”",
            lang_title: "选择语言",
            support_button: "成为支持者",
            copyright: "© 2026 诺德之子整合包 · 版本 2.0.0 · 开源精神"
        },
        en: {
            float_download: "Download",
            float_donate: "Support",
            float_lang: "Language",
            nav_brand: "Nav",
            nav_chapter1: "Concept",
            nav_chapter2: "Features",
            nav_chapter3: "Requirements",
            nav_chapter4:"Update Log",
            hero_surtitle: "SKYRIM · SON OF NORD",
            hero_title: "Son of Nord",
            hero_subtitle: "Aim to create a whole new Skyrim",
            ch1_title: "Son of Nord · Concept",
            ch1_desc1: "Son of Nord is a realistic, immersive Skyrim mod pack, dedicated to restoring the political, cultural, and religious world of Tamriel. You will experience:",
            ch1_item1: "Top-tier city and location overhauls, curated from 950+ Nexus mods, including high-quality new quests and vanilla quest expansions;",
            ch1_item2: "Self-assembled PBR full coverage textures based on community shaders, enhancing visual quality;",
            ch1_item3: "9 best smart followers from Nexus + 10+ vanilla follower expansions for more realistic companionship;",
            ch1_item4: "Realistic Western-style character beauty (with some Eastern aesthetics), smarter NPC schedules and interactions;",
            ch1_item5: "Optional framework for diverse needs;",
            ch1_item6: "Aim to create a perfect Skyrim, also usable as a base pack.",
            ch1_footer: "Most importantly: extremely simple installation. All output files (DynDoLod, TexGen, Bodyslide, xEdit, Loot, etc.) are pre-generated. No need to fiddle with tedious tools!",
            ch1_placeholder: "—— Concept details updating ——",
            ch2_title: "Son of Nord · Features",
            feature1_title: "Best City Overhauls",
            feature1_quote: "“Uh... is this even a city?”",
            feature1_desc: "Every town has been expanded and beautified, at least 2-3 times larger. Custom compatibility patches, disabling 3000+ objects to reduce performance demands.",
            feature2_title: "PBR Full Coverage",
            feature2_quote: "“I spent 200GB comparing all PBR textures on Nexus”",
            feature2_desc: "Integrates top community PBR textures for realistic light reflection, every inch of ground and architecture feels substantial.",
            ch2_placeholder: "—— Features details updating ——",
            ch3_title: "Son of Nord · Requirements",
            ch3_desc: "For smooth experience, refer to specs below. Recommended for stable 60fps.",
            min_spec: "Minimum",
            rec_spec: "Recommended (60fps)",
            cpu: "CPU",
            ram: "RAM",
            gpu: "GPU",
            vram: "VRAM",
            storage: "Storage",
            os: "OS",
            spec_footnote: "VRAM depends on texture quality; leave buffer. Pack optimized, ready to play.",
            ch3_placeholder: "—— Performance guide coming soon ——",
            update_title:"Son of Nord · Update Log",
            donors_title: "Son of Nord · Donors",
            donors_desc: "Thanks to all supporters, your encouragement keeps me going.",
            donors_thanks: "May Kynareth's breeze ease your worries!",
            donate_title: "Thank You",
            donate_message1: "Every support is motivation to improve the pack",
            donate_message2: "May Talos guide you",
            download_title: "Choose Download",
            download_message: "Select the appropriate mirror based on your network",
            download_notice:"* Please refer to the download guide section for installation instructions.",
            lang_title: "Choose Language",
            support_button: "Become a supporter",
            copyright: "© 2026 Son of Nord Pack · Ver 2.0.0 · Open source"
        }
    };
    // 语言包内嵌HTML (更新日志 和 下载流程) 使用正确的details结构
    i18n.zh.changelog_html = `
        <details class="changelog-item">
            <summary><span>📌 版本 2.0.0 (2025-02-20)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>新增PBR全覆盖材质，重制雪漫城纹理</li>
                    <li>添加3个新随从：伊索尔德、法恩达尔美化</li>
                    <li>修复龙裔DLC任务线脚本延迟</li>
                    <li>性能优化：降低显存占用约300MB</li>
                </ul>
            </div>
        </details>
        <details class="changelog-item">
            <summary><span>📌 版本 1.5.0 (2025-01-05)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>大修独孤城，增加港口区</li>
                    <li>整合社区着色器v1.2，光影升级</li>
                    <li>修复部分NPC黑脸问题</li>
                </ul>
            </div>
        </details>
        <details class="changelog-item">
            <summary><span>📌 版本 1.0.0 (2024-12-01)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>首个公开版本，包含基础城市美化与核心模组</li>
                    <li>集成DynDOLOD 3.0，远景流畅</li>
                </ul>
            </div>
        </details>
    `;
    i18n.zh.downloadprocess_html = `
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.9rem; color: #f5d999; border-left: 5px solid #b88a3d; padding-left: 1.8rem; margin: 2.5rem 0 1.8rem 0;" data-i18n="download_process_title">📥 下载流程</h3>
        <ol style="font-size: 1.35rem; color: #ddd2c0; margin-left: 2rem;">
            <li>点击右下角“下载整合”按钮，选择网盘通道（百度/天翼/磁力）。</li>
            <li>下载压缩包后，解压至非中文路径（如 D:\\Skyrim\\SoN）。</li>
            <li>运行 “SkyrimSELauncher.exe” 或通过 ModOrganizer 启动（整合包已配置完毕）。</li>
            <li>首次进入游戏请等待着色器编译（约5-10分钟）。</li>
        </ol>
        <p style="color: #bcae99; margin-top: 1.5rem;">⭐ 详细视频教程请访问 B站/YouTube 搜索“诺德之子安装”</p>
    `;
    i18n.en.changelog_html = `
        <details class="changelog-item">
            <summary><span>📌 Version 2.0.0 (2025-02-20)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>Added full PBR textures, overhauled Whiterun visuals</li>
                    <li>3 new followers: Ysolda, Faendal replacer</li>
                    <li>Fixed script lag in Dragonborn DLC</li>
                    <li>Performance: VRAM usage -300MB</li>
                </ul>
            </div>
        </details>
        <details class="changelog-item">
            <summary><span>📌 Version 1.5.0 (2025-01-05)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>Solitude expanded with harbor district</li>
                    <li>Community Shaders v1.2 integrated</li>
                    <li>Fixed black-face issues for some NPCs</li>
                </ul>
            </div>
        </details>
        <details class="changelog-item">
            <summary><span>📌 Version 1.0.0 (2024-12-01)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>First public release: core overhauls and city beautification</li>
                    <li>DynDOLOD 3.0 pre-generated</li>
                </ul>
            </div>
        </details>
    `;
    i18n.en.downloadprocess_html = `
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.9rem; color: #f5d999; border-left: 5px solid #b88a3d; padding-left: 1.8rem; margin: 2.5rem 0 1.8rem 0;" data-i18n="download_process_title">📥 Download Guide</h3>
        <ol style="font-size: 1.35rem; color: #ddd2c0; margin-left: 2rem;">
            <li>Click the "Download" float button, choose a mirror (Baidu/Tianyi/Magnet).</li>
            <li>Extract the archive to a non-Chinese path (e.g. D:\\Skyrim\\SoN).</li>
            <li>Run "SkyrimSELauncher.exe" or launch via ModOrganizer (pre-configured).</li>
            <li>Wait for shader compilation on first launch (approx. 5-10 min).</li>
        </ol>
        <p style="color: #bcae99; margin-top: 1.5rem;">⭐ Video tutorials available on YouTube.</p>
    `;
    let currentLang = 'zh';
    function setLanguage(lang) {
        if (!i18n[lang]) return;
        currentLang = lang;
        // 设置所有 data-i18n 元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = i18n[lang][key];
                } else {
                    el.innerText = i18n[lang][key];
                }
            }
        });
        // 动态更新更新日志和下载流程
        const changelogContainer = document.getElementById('changelogContainer');
        if (changelogContainer) {
            changelogContainer.innerHTML = i18n[lang].changelog_html || '';
        }
        const downloadContainer = document.getElementById('downloadProcessContainer');
        if (downloadContainer) {
            downloadContainer.innerHTML = i18n[lang].downloadprocess_html || '';
        }
        localStorage.setItem('preferredLang', lang);
    }
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && i18n[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('zh'); // 默认中文
    }
    // 模态框控制
    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const closeDonate = document.getElementById('closeDonateModal');
    donateBtn.addEventListener('click', () => donateModal.classList.add('show'));
    closeDonate.addEventListener('click', () => donateModal.classList.remove('show'));
    const inlineDonateBtn = document.getElementById('inlineDonateBtn');
    if (inlineDonateBtn) {
        inlineDonateBtn.addEventListener('click', () => donateModal.classList.add('show'));
    }
    const footerDonateLink = document.getElementById('footerDonateLink');
    if (footerDonateLink) {
        footerDonateLink.addEventListener('click', (e) => {
            e.preventDefault();
            donateModal.classList.add('show');
        });
    }
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadModal = document.getElementById('downloadModal');
    const closeDownload = document.getElementById('closeDownloadModal');
    downloadBtn.addEventListener('click', () => downloadModal.classList.add('show'));
    closeDownload.addEventListener('click', () => downloadModal.classList.remove('show'));
    const langBtn = document.getElementById('langBtn');
    const langModal = document.getElementById('langModal');
    const closeLang = document.getElementById('closeLangModal');
    langBtn.addEventListener('click', () => langModal.classList.add('show'));
    closeLang.addEventListener('click', () => langModal.classList.remove('show'));
    window.addEventListener('click', (e) => {
        if (e.target === donateModal) donateModal.classList.remove('show');
        if (e.target === downloadModal) downloadModal.classList.remove('show');
        if (e.target === langModal) langModal.classList.remove('show');
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            langModal.classList.remove('show');
        });
    });
    // 导航高亮
    const sections = document.querySelectorAll('.chapter-card');
    const navLinks = {
        chapter1: document.getElementById('nav-chapter1'),
        chapter2: document.getElementById('nav-chapter2'),
        chapter3: document.getElementById('nav-chapter3'),
        chapter4: document.getElementById('nav-chapter4')
    };
    function setActiveLink(id) {
        Object.values(navLinks).forEach(link => {
            if (link) link.classList.remove('active');
        });
        if (navLinks[id]) navLinks[id].classList.add('active');
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                if (id === 'chapter1') setActiveLink('chapter1');
                else if (id === 'chapter2') setActiveLink('chapter2');
                else if (id === 'chapter3') setActiveLink('chapter3');
                else if (id === 'chapter4') setActiveLink('chapter4');
            }
        });
    }, { threshold: 0.2, rootMargin: '-50px 0px -50px 0px' });
    sections.forEach(section => observer.observe(section));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();