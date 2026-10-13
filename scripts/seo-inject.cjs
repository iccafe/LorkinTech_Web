const fs = require("fs");
const path = require("path");

const root = process.cwd();
const BASE = "http://lorkintech.com";
const LOGO = BASE + "/logo/LorkinTech_logo_web.png";
const ADDR_ZH = "上海市浦东新区国展路1529号 申能金融大厦 五楼 520室";
const ADDR_EN = "Room 520, 5F, Shenneng Financial Tower, No. 1529 Guozhan Road, Pudong New Area, Shanghai, China";
const EMAIL = "sales@lorkintech.com";

const CANON_ANCHOR = '<link rel="canonical" href="';
const SHEET_ANCHOR = '<link rel="stylesheet" href=';

const orgLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shanghai LorkinTech Co., Ltd. / 上海逻境科技有限公司",
  "alternateName": "上海逻境科技",
  "url": BASE + "/",
  "logo": LOGO,
  "email": EMAIL,
  "address": { "@type": "PostalAddress", "streetAddress": "申能金融大厦 五楼 520室", "addressLocality": "上海市浦东新区", "addressCountry": "CN" },
  "areaServed": "CN",
  "knowsAbout": "COMSOL Multiphysics 多物理场仿真软件代理与技术支持"
};

const webSiteLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "上海逻境科技有限公司 | Shanghai LorkinTech Co., Ltd.",
  "url": BASE + "/",
  "inLanguage": ["zh-CN", "en-US"],
  "publisher": { "@type": "Organization", "name": "Shanghai LorkinTech Co., Ltd.", "logo": LOGO }
};

const localBizLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE + "/#business",
  "name": "上海逻境科技有限公司",
  "alternateName": "LorkinTech",
  "url": BASE + "/",
  "image": LOGO,
  "email": EMAIL,
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "上海市浦东新区国展路1529号 申能金融大厦 五楼 520室",
    "addressLocality": "上海市浦东新区",
    "addressCountry": "CN"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$"
};

const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) pages.push(p);
  }
})(root);

for (const f of pages) {
  let t = fs.readFileSync(f, "utf8");

  // Drop anything between <head> and <meta charset> (legacy builder fallback)
  t = t.replace(/<head>\n[\s\S]*?(\s*<meta charset="UTF-8">)/, "<head>\n$1");

  // Remove a previously injected SEO block, so repeated runs stay idempotent
  const canonAt = t.indexOf(CANON_ANCHOR);
  const sheetAt = t.indexOf(SHEET_ANCHOR);
  if (canonAt !== -1 && sheetAt !== -1 && canonAt < sheetAt) {
    let start = canonAt;
    while (start > 0 && (t[start - 1] === " " || t[start - 1] === "\t")) start--;
    if (start > 0 && t[start - 1] === "\n") start--;
    t = t.slice(0, start) + t.slice(sheetAt);
  }

  const relPath = path.relative(root, f).split(path.sep).join("/"); // e.g. index.html, products/em.html
  const url = relPath === "index.html" ? BASE + "/" : BASE + "/" + relPath;

  // title / desc for OG
  const title = (t.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (t.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";

  // Build JSON-LD scripts
  const scripts = [];
  const isRoot = relPath === "index.html";
  const type = relPath.split("/")[0];

  if (isRoot) {
    scripts.push(orgLD, webSiteLD, localBizLD, {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "上海逻境科技是 COMSOL 的官方授权合作伙伴吗？",
          "acceptedAnswer": { "@type": "Answer", "text": "是的，上海逻境科技有限公司是 COMSOL Multiphysics 官方授权合作伙伴，提供软件授权采购、技术培训与仿真项目支持服务。" }
        },
        {
          "@type": "Question",
          "name": "可以购买哪些 COMSOL 产品和模块？",
          "acceptedAnswer": { "@type": "Answer", "text": "我们提供 COMSOL Multiphysics 仿真平台、COMSOL Compiler™ 与 COMSOL Server™ 部署产品，以及电磁、流体与传热、结构与声学、化工、多功能与接口等全部专业附加模块。" }
        },
        {
          "@type": "Question",
          "name": "如何获得 COMSOL 软件的技术支持与培训？",
          "acceptedAnswer": { "@type": "Answer", "text": "联系我们（sales@lorkintech.com）即可获得资深工程师的全程技术支持，并可根据行业场景定制仿真建模培训。" }
        }
      ]
    });
  } else {
    scripts.push(orgLD);
    if (type === "products" || type === "solutions") {
      const crumbName = type === "products" ? "产品介绍" : "方案介绍";
      const crumbUrl = type === "products" ? BASE + "/products.html" : BASE + "/solutions.html";
      scripts.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": BASE + "/" },
          { "@type": "ListItem", "position": 2, "name": crumbName, "item": crumbUrl },
          { "@type": "ListItem", "position": 3, "name": title, "item": url }
        ]
      });
    }
  }

  const ldHtml = scripts
    .map((s) => "  <script type=\"application/ld+json\">\n" + JSON.stringify(s, null, 2) + "\n  </script>")
    .join("\n");

  const block =
    "\n  <link rel=\"canonical\" href=\"" + url + "\">\n" +
    "  <meta property=\"og:type\" content=\"website\">\n" +
    "  <meta property=\"og:site_name\" content=\"Shanghai LorkinTech\">\n" +
    "  <meta property=\"og:title\" content=\"" + title + "\">\n" +
    "  <meta property=\"og:description\" content=\"" + desc + "\">\n" +
    "  <meta property=\"og:url\" content=\"" + url + "\">\n" +
    "  <meta property=\"og:image\" content=\"" + LOGO + "\">\n" +
    "  <meta name=\"twitter:card\" content=\"summary\">\n" +
    "  <meta name=\"twitter:title\" content=\"" + title + "\">\n" +
    "  <meta name=\"twitter:description\" content=\"" + desc + "\">\n" +
    ldHtml + "\n";

  // Insert after the charset/viewport/title/description block, before stylesheet link
  const idx = t.indexOf(SHEET_ANCHOR);
  t = t.slice(0, idx) + block + "\n" + t.slice(idx);
  fs.writeFileSync(f, t);
  console.log("injected:", relPath);
}
console.log("done, total", pages.length);
