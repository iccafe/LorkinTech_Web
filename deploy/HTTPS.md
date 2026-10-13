# 官网 HTTPS 配置指南（lorkintech.com）

> **已完成（2026-10-13）**：`https://www.lorkintech.com` 已上线，证书 CN=lorkintech.com
> （TrustAsia DV，含 www，有效期 2026-10-13 ~ 2027-04-29）。
> 全站 SEO 地址已切到 `https://www.lorkintech.com`。
> 唯一遗留：`http://` 仍可访问（面板的 301 只做域名跳转，不做 scheme 升级），见文末「已知遗留」。

## 实际采用的方案（与下方通用步骤不同，以本节为准）

| 环节 | 实际做法 |
|---|---|
| 证书来源 | 腾讯云 SSL 证书控制台（账号 100052473587）→ 免费 DV，**文件验证** |
| 域名验证 | 把 `fileauth.txt` 放到网站根目录 `/.well-known/pki-validation/`（走 FTP，无需动 DNS） |
| 证书下载 | 控制台下载 **Nginx** 格式：`*_bundle.crt` + `*.key` |
| 证书部署 | 建站宝盒面板 `http://1.15.104.203/wdsadmin/managePage.php` → SSL 证书 → 上传证书 |
| 强制跳转 | 面板「301跳转」开启 → `http://lorkintech.com` 301 到 `http://www.lorkintech.com` |

### 下次续期怎么做（90 天 / 到期前 30 天）

1. 腾讯云 SSL 控制台 → 我的证书 → 该证书「快速续期」→ 选 **文件验证**
2. 把新的 `fileauth.txt` 用 FTP 放到 `/www/.well-known/pki-validation/`
3. 回控制台点验证 → 等签发（约几分钟）
4. 下载 Nginx 格式证书 → 建站宝盒面板「上传证书」重新上传（会覆盖旧证书），301 保持开启
5. 确认 `curl -I https://www.lorkintech.com` 返回 200，且证书 `notAfter` 已更新

## 为什么值得做

- 搜索引擎（Google / Bing / 百度）对 HTTPS 都有排名加权
- 浏览器对 http 站点会显示「不安全」，影响客户第一印象
- 微信分享、Open Graph 抓图等对 http 资源更严格

## 前置条件

- 域名已 ICP 备案（✅ 已下号：沪ICP备2026047698号-1）
- **服务器的 SSH / 面板权限**（FTP 不够——证书和 nginx 配置改不了，只能传网站文件）

## 方案 A：腾讯云免费 SSL 证书（推荐，和备案同一控制台）

1. 控制台 → SSL 证书 → 申请免费证书（DV，勾选根域名 + `www`）
2. 按提示加一条 DNS 的 TXT 记录完成验证
3. 签发后下载 **Nginx** 版，解压得到 `*_bundle.crt` 与 `*.key`
4. 上传到服务器（如 `/etc/nginx/ssl/`），或直接粘到面板的证书管理里
5. 按下面的 nginx 配置启用，并在到期前续期

## 方案 B：Let's Encrypt（服务器上执行，最快）

```bash
# Debian / Ubuntu
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d lorkintech.com -d www.lorkintech.com

# CentOS / RHEL 系
sudo yum install -y certbot python3-certbot-nginx
sudo certbot --nginx -d lorkintech.com -d www.lorkintech.com
```

certbot 会自动改好 nginx 配置并装上自动续期任务。

## Nginx 配置参考

```nginx
# HTTP 全部 301 跳到 HTTPS
server {
    listen 80;
    server_name lorkintech.com www.lorkintech.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name lorkintech.com www.lorkintech.com;

    ssl_certificate     /etc/nginx/ssl/lorkintech.com_bundle.crt;   # 换成实际路径
    ssl_certificate_key /etc/nginx/ssl/lorkintech.com.key;          # 换成实际路径

    root  /path/to/www;   # 换成 FTP 里 www 目录在服务器上的真实路径
    index index.html;

    location / { try_files $uri $uri/ =404; }
}
```

> 如果服务器用的是**宝塔面板**或**腾讯云轻量应用服务器面板**：
> 直接在「网站 → SSL → 申请证书」点一下，再勾选「强制 HTTPS」，不用手写配置。

## 生效后切到 https（5 步）

1. 改 `scripts/seo-inject.cjs`：`const BASE = "http://lorkintech.com"` → `https://`
2. 重跑注入：`node scripts/seo-inject.cjs`
   （脚本已做幂等处理，重复执行不会叠加标签）
3. 更新 `sitemap.xml` 与 `robots.txt` 里的域名为 `https://`
4. 重新上传整站（本服务器用 FTP，不是 CloudBase）
5. 到 Google Search Console / Bing 站长平台重新提交 sitemap

## 检查清单

- [x] 证书签发（TrustAsia DV，2026-10-13 签发）
- [x] nginx 加载证书，443 可访问（`https://lorkintech.com` 与 `https://www.lorkintech.com` 均 200）
- [x] 域名 301 跳转（`http://lorkintech.com` → `http://www.lorkintech.com`，**注意仍是 http**）
- [x] 站内 SEO 地址全部切到 `https://www.lorkintech.com`
- [ ] 站长平台重新提交 sitemap

## 已知遗留

- **HTTP 没有强制跳到 HTTPS**：建站宝盒面板的「301跳转」只把裸域跳到 www，不升级协议，
  所以 `http://www.lorkintech.com` 仍返回 200。要彻底强制，需要服务商在 nginx 上加
  `return 301 https://$host$request_uri;`，属于主机侧配置（FTP 做不到）。
  **2026-10-13 决定：不向 iisp 提工单，保持现状**（HTTPS 本身已可用，SEO 与分享链接都走 https）。
- **`https://lorkintech.com`（裸域）不跳 www**：HTTPS 下两个域名都能打开，SEO 靠 canonical 收敛到 www。
