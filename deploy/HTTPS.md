# 官网 HTTPS 配置指南（lorkintech.com）

> 现状（2026-10-13 核对）：域名只监听 80 端口（HTTP），443 未开放。
> 因此全站 SEO 地址暂用 `http://lorkintech.com`。
> 证书配好后，把 `scripts/seo-inject.cjs` 的 `BASE` 改成 `https://lorkintech.com` 重跑即可。

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

- [ ] 证书签发
- [ ] nginx 加载证书，443 可访问
- [ ] HTTP 301 跳转到 HTTPS
- [ ] 站内 SEO 地址全部切到 https
- [ ] 站长平台重新提交 sitemap
