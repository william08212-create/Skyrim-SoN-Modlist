/**
 * 诺德之子整合包 - 配置文件
 * 包含：常量定义、密码算法等
 */

// ==================== 3D轮播屏图片数据 ====================
export const images = [
    { src: "assets/images/SoN-Concept/SoN-Concept-FalkreathFort.png", title: "湿" },
    { src: "assets/images/SoN-Concept/SoN-Concept-MorthalMarsh.png", title: "沼泽迷雾" },
    { src: "assets/images/SoN-Concept/SoN-Concept-BeeandBarb.png", title: "蜂与钩" },
    { src: "assets/images/SoN-Concept/SoN-Concept-ThievesGuild.png", title: "盗贼公会" },
    { src: "assets/images/SoN-Concept/SoN-Concept-Oakwood.png", title: "橡木镇" },
    { src: "assets/images/SoN-Concept/SoN-Concept-SolitudeRadiant.png", title: "窗影" },
    { src: "assets/images/SoN-Concept/SoN-Concept-SolitudeBryling.png", title: "宅邸一隅" },
    { src: "assets/images/SoN-Concept/SoN-Concept-Falkreath.png", title: "乡间小路" },
    { src: "assets/images/SoN-Concept/SoN-Concept-HighHrothgar.png", title: "高霍斯加修道院" },
    { src: "assets/images/SoN-Concept/SoN-Concept-FalkreathForest.png", title: "佛克瑞斯森林" },
    { src: "assets/images/SoN-Concept/SoN-Concept-WindhelmGreyQuater.png", title: "风盔城灰民区" },
    { src: "assets/images/SoN-Concept/SoN-Concept-BluePalace.png", title: "女王寝" },
    { src: "assets/images/SoN-Concept/SoN-Concept-HighHrothgar.png", title: "" },
    { src: "assets/images/SoN-Concept/SoN-Concept-FalkreathForest.png", title: "" },
    { src: "assets/images/SoN-PretoFill.png", title: "" },
    { src: "../assets/images/SoN-PretoFill.png", title: "" },
    { src: "/assets/images/SoN-PretoFill.png", title: "" },
    { src: "assets/images/SoN-Concept/SoN-Concept-HighHrothgar.png", title: "" },
    { src: "../assets/images/SoN-Concept/SoN-Concept-FalkreathForest.png", title: "" },
    { src: "/assets/images/SoN-Concept/SoN-Concept-FalkreathForest.png", title: "" } 
];

// ==================== 轮播配置 ====================
export const CAROUSEL_CONFIG = {
    CARD_WIDTH: 260,
    CARD_HEIGHT: 156,
    MIN_RADIUS: 300,
    DRAG_SPEED: 0.15,
    EXTRA_GAP: 280,
    CIRCLE_SPEED: 0.002,
};

// ==================== 下载链接配置 ====================
export const DOWNLOAD_LINKS = {
    free: {
        url: 'https://chat.deepseek.com/',
        label: '免费版下载 (天翼云盘)',
        hint: '* 如果您的密钥获取流程正规，您现在应该已经知道提取码了 *'
    },
    standard: {
        url: 'https://www.bilibili.com/',
        label: '标准版下载 (天翼云盘)',
        hint: '* 如果您的密钥获取流程正规，您现在应该已经知道提取码了 *'
    },
    ultimate: {
        url: 'https://yun.139.com',
        label: '全家桶版下载 (天翼云盘)',
        hint: '* 如果您的密钥获取流程正规，您现在应该已经知道提取码了 *'
    }
};

// ==================== 密码算法 ====================
export const PasswordHelper = {
    /**
     * 获取今日基础密码
     */
    getTodayPassword() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const rawPwd = `SoN${year}${month}${day}`;
        const OFFSET = 1;
        let shiftedPwd = '';
        for (let i = 0; i < rawPwd.length; i++) {
            shiftedPwd += String.fromCharCode(rawPwd.charCodeAt(i) + OFFSET);
        }
        let binaryPwd = '';
        for (let i = 0; i < shiftedPwd.length; i++) {
            const charCode = shiftedPwd.charCodeAt(i);
            binaryPwd += charCode.toString(2).padStart(8, '0');
        }
        return binaryPwd;
    },

    /**
     * 取反码
     */
    getInversePassword(pwd) {
        let inverse = '';
        for (let i = 0; i < pwd.length; i++) {
            inverse += pwd[i] === '0' ? '1' : '0';
        }
        return inverse;
    },

    /**
     * 补码
     */
    getTwosComplementPassword(pwd) {
        let inverse = this.getInversePassword(pwd);
        let carry = 1;
        let result = '';
        for (let i = inverse.length - 1; i >= 0; i--) {
            let sum = parseInt(inverse[i], 10) + carry;
            result = (sum % 2) + result;
            carry = Math.floor(sum / 2);
        }
        return result;
    },

    /**
     * 获取今日三种密钥
     */
    getTodayPasswords() {
        const freePwd = this.getTodayPassword();
        return {
            free: freePwd,
            standard: this.getInversePassword(freePwd),
            ultimate: this.getTwosComplementPassword(freePwd)
        };
    },

    /**
     * 根据密钥获取版本
     */
    getVersionFromKey(inputKey) {
        const passwords = this.getTodayPasswords();
        if (inputKey === passwords.free) return 'free';
        if (inputKey === passwords.standard) return 'standard';
        if (inputKey === passwords.ultimate) return 'ultimate';
        return null;
    }
};
