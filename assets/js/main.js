(function() {
    // 语言包 (更新日志精简为一个版本，下载流程独立)
    const i18n = {
        zh: {
            // 浮动按钮
            float_forumload: "加入社群",
            float_download: "下载整合",
            float_donate: "支持作者",
            float_lang: "选择语言",
            // 导航
            nav_brand: "导航|点击跳转",
            nav_chapter1: "整合概念",
            nav_chapter2: "整合特色",
            nav_chapter3: "性能需求",
            nav_chapter4: "整合发售",
            nav_chapter5: "更新日志",
            nav_chapter6: "下载流程",
            // 英雄区
            hero_surtitle: "SKYRIM · SON OF NORD",
            hero_title: "诺德之子",
            hero_subtitle: "立志打造属于中国人自已的 Lorerim",
            // 第一章
            ch1_title: "诺德之子 · 整合概念",
            ch1_desc1: "诺德之子整合，是一个注重真实向、高沉浸式的《上古卷轴5》整合包，致力于还原泰姆瑞尔大陆的政治、文化与宗教世界观。您将体验到：",
            ch1_item1: "顶尖的城市与重要地点美化，作者从950+ N网模组中精选的高质量新任务及原版任务拓展；",
            ch1_item2: "自组装的基于社区着色器的PBR全覆盖纹理，画面质感跃升；",
            ch1_item3: "收录N网最优秀的9个智能随从 + 10余个原版随从拓展，陪伴更真实；",
            ch1_item4: "真实欧美风人物美化（兼顾部分东方审美），NPC日程与互动更智能；",
            ch1_item5: "可选实验室插件，满足多元需求；",
            ch1_item6: "旨在打造一个完美的天际大陆，亦可作为您的打底包。",
            ch1_footer: "最重要的是：安装极简，操作容易。所有输出文件（DynDoLod、TexGen、Bodyslide、xEdit、Loot 等）均已备齐，您无需再与繁琐的工具纠缠！",
            ch1_placeholder: "—— 关键词：城市拓展 原版任务多分支 新任务拓展 真实向 沉浸式 智能NPCs 智能随从 实验室 欧美风 光影 高兼容性 龙战 Lorefriendly 安装容易 附加工具及输出齐全 PBR全覆盖 ——",
            // 第二章
            ch2_title: "诺德之子 · 整合特色",
            feature1_title: "最好的全城市拓展与美化",
            feature1_quote: "“额……这也叫城市吗？”",
            feature1_desc: "每一个城镇都经过了拓展与美化，大小至少拓展至原来的两倍至三倍。作者自制兼容补丁，禁用3000+对象降低性能需求。",
            feature2_title: "PBR全覆盖",
            feature2_quote: "“我花了200个G对比N网所有的PBR材质”",
            feature2_desc: "整合社区顶尖PBR材质，实现真实光影反射，每一寸地表、建筑都质感十足。",
            ch2_placeholder: "—— 整合特色持续完善中 ——",
            // 第三章
            ch3_title: "诺德之子 · 配置建议",
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
            // 第四章
            versions_title: "整合发售版本",
            version_free_title: "免费版",
            version_free_desc: "包含核心整合内容，适合普通玩家体验。",
            version_free_price: "免费",
            version_free_offer: "长期免费",
            version_paid_title: "付费版",
            version_paid_desc: "包含更多优质模组和独家优化，享受更佳体验。",
            version_paid_price: "¥69",
            version_paid_offer: "首发8折优惠",
            version_family_title: "全家桶版",
            version_family_desc: "包含付费版全部内容，额外赠送未来一年更新和专属支持。",
            version_family_price: "¥199",
            version_family_offer: "限时立减30",
            // 第五章
            update_title:"诺德之子 · 更新日志",
            // 第六章
            download_process_title: "诺德之子 · 下载流程",
            // 第七章
            nav_chapter7: "常见问题",
            faq_title: "常见问题",
            faq_q1: "整合包需要什么配置？",
            faq_a1: "最低配置需GTX 1060 4G显存，推荐RTX 2060 6G以上。详细请参考“性能需求”章节。",
            faq_q2: "安装后打不开/闪退怎么办？",
            faq_a2: "请确保：1. 游戏路径无中文；2. 已安装VC++运行库和.NET Framework；3. 关闭杀毒软件；4. 验证游戏文件完整性。",
            faq_q3: "实验室（NSFW）内容如何启用？",
            faq_a3: "实验室内容为可选插件，需在Mod Organizer中勾选对应的“Lab”组。具体请查看压缩包内的教程文档。",
            faq_q4: "免费版和付费版有什么区别？",
            faq_a4: "免费版包含核心整合，付费版增加更多模组、独家优化和优先支持。详见“整合发售”卡片。",
            // 鸣谢
            donors_title: "鸣谢捐赠者",
            donors_desc: "感谢以下玩家对整合包的支持，你们的每一份心意都是作者继续打磨的动力。（如果不想名字在列表中显示请备注:)）",
            donors_thanks: "愿凯娜之风吹散你们的烦恼！",
            // 捐款模态框
            donate_title: "感谢您的支持",
            donate_message1: "感谢以下玩家对整合包的支持，你们的每一份心意都是作者继续打磨的动力。",
            donate_message2: "愿塔洛斯指引你",
            // 下载模态框
            download_title: "选择下载通道",
            download_message: "根据你的网络环境选择合适的网盘",
            download_notice:"* 具体下载流程请参阅下方“下载流程”卡片或压缩包中的教程。",
            // 语言模态框
            lang_title: "选择语言",
            // 社群模态框
            community_title: "诺德之子 · 玩家社群",
            community_message: "扫码加入QQ/微信群，实时获取更新信息及社区最新模组",
            community_note: "* 如果二维码失效，请联系管理员或关注更新",
            // 其他
            support_button: "成为支持者",
            copyright: "© 2026 诺德之子|SoN整合包 · 版本 1.0.1 · 开源精神"
        },
        en: {
            float_forumload: "Join Community",
            float_download: "Download",
            float_donate: "Support",
            float_lang: "Language",
            nav_brand: "Nav|Click the button to jump to other sections",
            nav_chapter1: "Concept",
            nav_chapter2: "Features",
            nav_chapter3: "Requirements",
            nav_chapter4: "Editions",
            nav_chapter5: "Updates",
            nav_chapter6: "Download Guide",
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
            ch1_placeholder: "—— Keywords: Urban expansion, Original multi-branch missions, New mission expansions, Realistic, Immersive, Smart NPCs, Intelligent followers, Laboratory, Western style, Lighting, High compatibility, Dragon combat, Lore-friendly, Easy installation, Complete additional tools and outputs, Full PBR coverage  ——",
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
            versions_title: "Pack Editions",
            version_free_title: "Free Edition",
            version_free_desc: "Includes core pack, suitable for basic experience.",
            version_free_price: "Free",
            version_free_offer: "Always free",
            version_paid_title: "Paid Edition",
            version_paid_desc: "Includes premium mods and exclusive optimizations.",
            version_paid_price: "$9.99",
            version_paid_offer: "Launch 20% off",
            version_family_title: "Family Edition",
            version_family_desc: "All paid content + 1-year updates and support.",
            version_family_price: "$29.99",
            version_family_offer: "Limited $5 off",
            update_title:"Son of Nord · Update Log",
            download_process_title: "Son of Nord · Download Guide",
            nav_chapter7: "FAQ",
            faq_title: "Frequently Asked Questions",
            faq_q1: "What are the system requirements?",
            faq_a1: "Minimum: GTX 1060 4GB VRAM. Recommended: RTX 2060 6GB+. See 'Requirements' section for details.",
            faq_q2: "Game crashes after installation?",
            faq_a2: "Ensure: 1. No Chinese characters in path; 2. VC++ and .NET Framework installed; 3. Antivirus disabled; 4. Verify game files.",
            faq_q3: "How to enable adult (Lab) content?",
            faq_a3: "It's optional. Check 'Lab' group in Mod Organizer. See tutorial in archive.",
            faq_q4: "Difference between free and paid versions?",
            faq_a4: "Free includes core pack. Paid adds more mods, exclusive optimizations, and priority support. See 'Editions' card.",
            donors_title: "Son of Nord · Donors",
            donors_desc: "Thanks to all supporters, your encouragement keeps me going.",
            donors_thanks: "May Kynareth's breeze ease your worries!",
            donate_title: "Thank You",
            donate_message1: "Every support is motivation to improve the pack",
            donate_message2: "May Talos guide you",
            download_title: "Choose Download",
            download_message: "Select the appropriate mirror based on your network",
            download_notice:"* See the 'Download Guide' card below for installation instructions.",
            lang_title: "Choose Language",
            community_title: "Son of Nord · Community",
            community_message: "Join our QQ/WeChat groups!",
            community_note: "* If QR codes expired, contact admin.",
            support_button: "Become a supporter",
            copyright: "© 2026 Son of Nord|SoN Pack · Ver 1.0.1 · Open source"
        }
    };

    // 简体中文更新日志 (单个版本，简洁)
    i18n.zh.changelog_html = `
        <details>
            <summary><span>版本 2.0.0 (2025-02-20)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>新增PBR全覆盖材质，重制雪漫城纹理</li>
                    <li>添加3个新随从：伊索尔德、法恩达尔美化</li>
                    <li>修复龙裔DLC任务线脚本延迟</li>
                    <li>性能优化：降低显存占用约300MB</li>
                </ul>
            </div>
        </details>
    `;
    // 简体中文下载流程
    i18n.zh.downloadprocess_html = `
        <ol style="font-size: 1.35rem; color: #ddd2c0; margin-left: 2rem;">
            <li>点击右下角“下载整合”按钮，选择网盘通道（百度/天翼/磁力）。</li>
            <li>下载压缩包后，解压至非中文路径（如 D:\\Skyrim\\SoN）。</li>
            <li>运行 “SkyrimSELauncher.exe” 或通过 ModOrganizer 启动（整合包已配置完毕）。</li>
            <li>首次进入游戏请等待着色器编译（约5-10分钟）。</li>
        </ol>
        <p style="color: #bcae99; margin-top: 1.5rem;">详细视频教程请访问 B站/YouTube 搜索“诺德之子安装”</p>
    `;

    // 英文更新日志
    i18n.en.changelog_html = `
        <details>
            <summary><span>Version 2.0.0 (2025-02-20)</span></summary>
            <div class="changelog-content">
                <ul>
                    <li>Added full PBR textures, overhauled Whiterun visuals</li>
                    <li>3 new followers: Ysolda, Faendal replacer</li>
                    <li>Fixed script lag in Dragonborn DLC</li>
                    <li>Performance: VRAM usage -300MB</li>
                </ul>
            </div>
        </details>
    `;
    // 英文下载流程
    i18n.en.downloadprocess_html = `
        <ol style="font-size: 1.35rem; color: #ddd2c0; margin-left: 2rem;">
            <li>Click the "Download" float button, choose a mirror (Baidu/Tianyi/Magnet).</li>
            <li>Extract the archive to a non-Chinese path (e.g. D:\\Skyrim\\SoN).</li>
            <li>Run "SkyrimSELauncher.exe" or launch via ModOrganizer (pre-configured).</li>
            <li>Wait for shader compilation on first launch (approx. 5-10 min).</li>
        </ol>
        <p style="color: #bcae99; margin-top: 1.5rem;">Video tutorials available on YouTube.</p>
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
        setLanguage('zh');
    }

    // 模态框控制
    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const closeDonate = document.getElementById('closeDonateModal');
    
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadModal = document.getElementById('downloadModal');
    const closeDownload = document.getElementById('closeDownloadModal');
    
    const langBtn = document.getElementById('langBtn');
    const langModal = document.getElementById('langModal');
    const closeLang = document.getElementById('closeLangModal');
    
    // 新增社群模态框
    const forumBtn = document.getElementById('forumBtn');
    const communityModal = document.getElementById('communityModal');
    const closeCommunity = document.getElementById('closeCommunityModal');

    // 打开/关闭事件
    if (donateBtn && donateModal && closeDonate) {
        donateBtn.addEventListener('click', () => donateModal.classList.add('show'));
        closeDonate.addEventListener('click', () => donateModal.classList.remove('show'));
    }
    if (downloadBtn && downloadModal && closeDownload) {
        downloadBtn.addEventListener('click', () => downloadModal.classList.add('show'));
        closeDownload.addEventListener('click', () => downloadModal.classList.remove('show'));
    }
    if (langBtn && langModal && closeLang) {
        langBtn.addEventListener('click', () => langModal.classList.add('show'));
        closeLang.addEventListener('click', () => langModal.classList.remove('show'));
    }
    if (forumBtn && communityModal && closeCommunity) {
        forumBtn.addEventListener('click', () => communityModal.classList.add('show'));
        closeCommunity.addEventListener('click', () => communityModal.classList.remove('show'));
    }

    // 内联支持按钮
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

    // 点击遮罩关闭所有模态框
    window.addEventListener('click', (e) => {
        if (donateModal && e.target === donateModal) donateModal.classList.remove('show');
        if (downloadModal && e.target === downloadModal) downloadModal.classList.remove('show');
        if (langModal && e.target === langModal) langModal.classList.remove('show');
        if (communityModal && e.target === communityModal) communityModal.classList.remove('show');
    });

    // 导航高亮与平滑滚动
    const sections = document.querySelectorAll('.chapter-card');
    const navLinks = {
        chapter1: document.getElementById('nav-chapter1'),
        chapter2: document.getElementById('nav-chapter2'),
        chapter3: document.getElementById('nav-chapter3'),
        chapter4: document.getElementById('nav-chapter4'),
        chapter5: document.getElementById('nav-chapter5'),
        chapter6: document.getElementById('nav-chapter6'),
        chapter7: document.getElementById('nav-chapter7'),
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
                else if (id === 'chapter5') setActiveLink('chapter5');
                else if (id === 'chapter6') setActiveLink('chapter6');
                else if (id === 'chapter7') setActiveLink('chapter7');
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -0px 0px' });

    sections.forEach(section => observer.observe(section));

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.fixed-nav').offsetHeight;
                // 使用 offsetTop 计算绝对位置，更稳定
                const targetTop = targetSection.offsetTop - navHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // 语言选项点击事件
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            langModal.classList.remove('show');
        });
    });
})();
