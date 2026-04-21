/**
 * 模态框模块
 * 负责：社群、捐赠、语言、下载密码、下载通道等模态框的管理
 */

import { $, on } from '../utils/dom.js';
import { PasswordHelper, DOWNLOAD_LINKS } from '../config.js';

class ModalManager {
    constructor() {
        this.modals = new Map();
        this.init();
    }

    /**
     * 初始化所有模态框
     */
    init() {
        // 注册模态框
        this.registerModal('community', 'forumBtn', 'communityModal', 'closeCommunity');
        this.registerModal('donate', 'donateBtn', 'donateModal', 'closeDonate');
        this.registerModal('language', 'langBtn', 'langModal', 'closeLang');
        
        // 密码模态框（特殊处理）
        this.setupPasswordModal();
        
        // 下载通道模态框
        this.setupDownloadModal();
        
        // 内联捐赠按钮
        on($('#inlineDonate'), 'click', () => this.show('donate'));
        
        // 点击遮罩关闭
        this.setupOverlayClose();
        
        // 语言选项关闭
        this.setupLanguageOptions();
    }

    /**
     * 注册普通模态框
     */
    registerModal(name, triggerId, modalId, closeId) {
        const trigger = $(`#${triggerId}`);
        const modal = $(`#${modalId}`);
        const close = $(`#${closeId}`);
        
        if (trigger && modal) {
            on(trigger, 'click', () => this.show(name));
            on(close, 'click', () => this.hide(name));
            this.modals.set(name, modal);
        }
    }

    /**
     * 显示模态框
     */
    show(name) {
        const modal = this.modals.get(name);
        if (modal) {
            modal.classList.add('show');
        }
    }

    /**
     * 隐藏模态框
     */
    hide(name) {
        const modal = this.modals.get(name);
        if (modal) {
            modal.classList.remove('show');
        }
    }

    /**
     * 隐藏所有模态框
     */
    hideAll() {
        this.modals.forEach(modal => {
            modal.classList.remove('show');
        });
        // 额外清理密码输入框
        const pwdInput = $('#passwordInput');
        if (pwdInput) pwdInput.value = '';
    }

    /**
     * 设置密码模态框
     */
    setupPasswordModal() {
        const passwordModal = $('#passwordModal');
        const downloadFloat = $('#downloadFloatBtn');
        const closePassword = $('#closePassword');
        const submitPwd = $('#submitPassword');
        const pwdInput = $('#passwordInput');
        
        if (passwordModal) {
            this.modals.set('password', passwordModal);
        }
        
        // 浮动按钮打开密码模态框
        on(downloadFloat, 'click', (e) => {
            e.preventDefault();
            this.show('password');
        });
        
        // 关闭密码模态框
        on(closePassword, 'click', () => {
            this.hide('password');
            if (pwdInput) pwdInput.value = '';
        });
        
        // 验证密码
        on(submitPwd, 'click', () => {
            const inputKey = pwdInput?.value.trim() || '';
            const version = PasswordHelper.getVersionFromKey(inputKey);
            
            if (version) {
                this.setDownloadModalContent(version);
                this.hide('password');
                if (pwdInput) pwdInput.value = '';
                this.show('download');
            } else {
                alert('密钥错误');
                if (pwdInput) pwdInput.value = '';
            }
        });
    }

    /**
     * 设置下载模态框
     */
    setupDownloadModal() {
        const downloadModal = $('#downloadModal');
        const closeDownload = $('#closeDownloadModal');
        const validateBtn = $('#validateKeyBtn');
        const keyInputInline = $('#downloadKeyInput');
        
        if (downloadModal) {
            this.modals.set('download', downloadModal);
        }
        
        on(closeDownload, 'click', () => this.hide('download'));
        
        // 内联验证
        on(validateBtn, 'click', () => {
            const inputKey = keyInputInline?.value.trim() || '';
            const version = PasswordHelper.getVersionFromKey(inputKey);
            
            if (version) {
                this.setDownloadModalContent(version);
                if (keyInputInline) keyInputInline.value = '';
                this.show('download');
            } else {
                alert('密钥错误，请重新输入');
                if (keyInputInline) keyInputInline.value = '';
            }
        });
    }

    /**
     * 设置下载模态框内容
     */
    setDownloadModalContent(version) {
        const downloadModal = $('#downloadModal');
        if (!downloadModal) return;
        
        const link = downloadModal.querySelector('a');
        const hint = downloadModal.querySelector('p:last-of-type');
        
        if (link && hint && DOWNLOAD_LINKS[version]) {
            const config = DOWNLOAD_LINKS[version];
            link.href = config.url;
            link.innerHTML = config.label;
            hint.innerHTML = config.hint;
        }
    }

    /**
     * 点击遮罩关闭模态框
     */
    setupOverlayClose() {
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.hideAll();
            }
        });
    }

    /**
     * 语言选项关闭
     */
    setupLanguageOptions() {
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(btn => {
            on(btn, 'click', () => this.hide('language'));
        });
    }
}

// 导出单例
export const modalManager = new ModalManager();