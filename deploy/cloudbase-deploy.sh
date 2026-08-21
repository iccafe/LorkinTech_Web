#!/usr/bin/env bash
# 部署官网到腾讯云 CloudBase 静态网站托管（FREE 体验版）
# 用法: ./deploy/cloudbase-deploy.sh
set -euo pipefail

ENV_ID="${CLOUDBASE_ENV_ID:-lorkintech-d9gxrvjxyc20250c5}"
SITE_URL="https://lorkintech-d9gxrvjxyc20250c5-1301828486.tcloudbaseapp.com"
WEB_DIR="$(cd "$(dirname "$0")/.." && pwd)"
STAGING="$(mktemp -d /tmp/lorkin-site.XXXXXX)"
trap 'rm -rf "$STAGING"' EXIT

command -v tcb >/dev/null 2>&1 || {
  echo "✗ 未安装 @cloudbase/cli，请先执行: npm install -g @cloudbase/cli"
  exit 1
}

if ! tcb env list >/dev/null 2>&1; then
  echo "→ 未登录或登录态失效，打开浏览器授权..."
  tcb login
fi

echo "→ 组装发布文件（排除 scripts/、.git、.DS_Store 等）..."
rsync -a \
  --exclude 'scripts/' \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.DS_Store' \
  "$WEB_DIR"/ "$STAGING"/

echo "→ 上传到环境 $ENV_ID ..."
tcb hosting deploy "$STAGING" -e "$ENV_ID" \
  --ignore 'scripts/**,.git/**,.DS_Store'

echo "✔ 发布完成：$SITE_URL"
