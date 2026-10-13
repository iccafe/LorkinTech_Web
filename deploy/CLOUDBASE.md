# CloudBase 静态网站托管操作手册

官网当前托管在腾讯云 CloudBase 静态网站托管（FREE 体验版）。

## 环境信息

| 项目 | 值 |
|---|---|
| 环境 ID | `lorkintech-d9gxrvjxyc20250c5` |
| 访问地址 | https://lorkintech-d9gxrvjxyc20250c5-1301828486.tcloudbaseapp.com |
| 地域 | 上海（ap-shanghai） |
| 套餐 | FREE 体验版（3,000 资源点/月） |
| 当前到期日 | **2027-02-21** |

## 日常发布（改版后更新网站）

```bash
./deploy/cloudbase-deploy.sh
```

脚本会自动：检查登录态 → 组装文件（排除 scripts/、.git 等）→ 上传到云端。
首次使用需先安装 CLI 并登录一次：

```bash
npm install -g @cloudbase/cli   # 已装过可跳过
tcb login                        # 浏览器授权一次即可，长期有效
```

## 控制台手动上传（CLI 不可用时的替代方案）

1. 打开 [CloudBase 控制台](https://tcb.cloud.tencent.com/dev) → 选择环境 → 静态网站托管 → 文件管理
2. 将 `web` 目录**里面的内容**（index.html、css/、js/、logo/ 等）拖入上传
   - 注意 index.html 必须位于根层级，不要把 `web` 文件夹本身传上去
3. 覆盖旧文件后即生效（CDN 缓存约 5 分钟）

## ⚠️ 续期提醒（重要）

免费环境**单次有效期 6 个月，到期不续会被回收下线**。

- 到期前 1 个月内可续期：控制台 → 环境设置 → 续期
- 请设置日历提醒：**2027 年 1 月中旬**检查续期
- 每次续期后更新本手册的「当前到期日」

## 资源点用量查看

控制台 → 套餐用量。3,000 点/月约支撑数千至上万次页面访问；
若接近用尽（当月服务会停），升级 PERSONAL（¥19.9/月）或迁移阿里云轻量服务器。

## 后续待办

- [x] lorkintech.com 通过腾讯云办理 ICP 备案 → 已下号：沪ICP备2026047698号-1
- [ ] 备案通过后在静态托管绑定自定义域名 + 配置证书
- [x] 全站 SEO URL（canonical/sitemap/robots）已从 github.io 切到 `http://lorkintech.com`
- [x] GitHub Pages（iccafe.github.io/LorkinTech_Web/）保留为备用入口（已同步最新版）

> 注：lorkintech.com 目前解析到自有服务器（通过 FTP 部署），并未走 CloudBase 静态托管；
> HTTPS 配置见 `HTTPS.md`。
