(function () {
  "use strict";

  var LANG_KEY = "lorkin-lang";
  var lang = localStorage.getItem(LANG_KEY) || "zh";

  var dict = {
    // ---------- Global / Header ----------
    "brand.zh": { zh: "上海逻境科技有限公司", en: "Shanghai LorkinTech Co., Ltd." },
    "brand.sub": { zh: "COMSOL 官方授权合作伙伴", en: "COMSOL Authorized Partner" },

    "nav.home": { zh: "首页", en: "Home" },
    "nav.products": { zh: "产品介绍", en: "Products" },
    "nav.solutions": { zh: "方案介绍", en: "Solutions" },
    "nav.contact": { zh: "联系我们", en: "Contact" },

    // ---------- Footer ----------

    "footer.about": {
      zh: "上海逻境科技有限公司专注于仿真技术的推广与应用，作为 COMSOL 软件授权合作伙伴，为各行业客户提供软件销售、培训与技术支持。",
      en: "Shanghai LorkinTech Co., Ltd. specializes in the promotion and application of simulation technology. As an authorized partner of COMSOL software, we provide software licensing, training, and technical support to customers across industries."
    },
    "footer.quick": { zh: "快速导航", en: "Quick Links" },
    "footer.contact": { zh: "联系方式", en: "Contact" },
    "footer.rights": { zh: "版权所有", en: "All rights reserved." },

    // ---------- Home / Hero ----------
    "hero.en": { zh: "SHANGHAI LORKINTECH CO., LTD.", en: "SHANGHAI LORKINTECH CO., LTD." },
    "hero.title": { zh: "上海逻境科技有限公司", en: "Shanghai LorkinTech Co., Ltd." },
    "hero.slogan": {
      zh: "专业的多物理场仿真解决方案提供商",
      en: "A Professional Provider of Multiphysics Simulation Solutions"
    },
    "hero.lead": {
      zh: "作为 COMSOL Multiphysics 软件授权合作伙伴，逻境科技致力于帮助工程师与科研人员借助多物理场仿真推动产品创新与技术进步。",
      en: "As an authorized partner of COMSOL Multiphysics, LorkinTech helps engineers and researchers leverage multiphysics simulation to drive product innovation and technical progress."
    },
    "hero.cta.products": { zh: "了解产品", en: "Explore Products" },
    "hero.cta.contact": { zh: "联系我们", en: "Contact Us" },

    // ---------- Home / About ----------
    "about.tag": { zh: "关于我们", en: "ABOUT US" },
    "about.title": { zh: "专注仿真，源于专业", en: "Simulation Focused, Profession Driven" },
    "about.text": {
      zh: "上海逻境科技有限公司（Shanghai LorkinTech Co., Ltd.）是一家专注于多物理场仿真技术的高科技企业，主营 COMSOL Multiphysics 及相关产品的销售、培训与技术服务。我们凭借对行业应用的深入理解，为能源、汽车、电子、航空航天、生物医疗等领域的客户提供从软件选型、授权采购到应用交付的全流程服务。",
      en: "Shanghai LorkinTech Co., Ltd. is a high-tech company dedicated to multiphysics simulation technology, primarily engaged in the sales, training, and technical services of COMSOL Multiphysics and related products. With an in-depth understanding of industrial applications, we provide end-to-end services from software selection, license procurement to application delivery for customers in energy, automotive, electronics, aerospace, and biomedical fields."
    },

    // ---------- Home / Services ----------
    "svc.tag": { zh: "核心业务", en: "CORE SERVICES" },
    "svc.title": { zh: "一站式仿真软件服务", en: "One-Stop Simulation Software Services" },
    "svc1.title": { zh: "软件授权销售", en: "Software Licensing" },
    "svc1.desc": {
      zh: "提供 COMSOL Multiphysics 及各专业模块的正版授权采购、升级与续费服务，配置最合适的许可方案。",
      en: "Provide licensed procurement, upgrades, and renewals for COMSOL Multiphysics and its modules with the most suitable licensing schemes."
    },
    "svc2.title": { zh: "技术培训", en: "Technical Training" },
    "svc2.desc": {
      zh: "提供从入门到进阶的仿真培训课程，覆盖软件操作、物理场建模与工程案例实战。",
      en: "Offer entry-level to advanced simulation training covering software operations, physics modeling, and hands-on engineering cases."
    },
    "svc3.title": { zh: "技术支持与咨询", en: "Support & Consulting" },
    "svc3.desc": {
      zh: "由资深工程师提供建模咨询、技术支持与行业解决方案设计，帮助客户快速落地仿真应用。",
      en: "Our senior engineers provide modeling consulting, technical support, and industry solution design to help customers quickly adopt simulation."
    },

    // ---------- Products pages ----------
    "prod.banner.title": { zh: "产品介绍", en: "Products" },
    "prod.banner.desc": {
      zh: "COMSOL Multiphysics 平台与专业附加模块",
      en: "COMSOL Multiphysics Platform and Its Modules"
    },
    "prod.platform.title": { zh: "COMSOL Multiphysics 仿真平台", en: "COMSOL Multiphysics Simulation Platform" },
    "prod.platform.desc": {
      zh: "COMSOL Multiphysics 是一款功能强大的通用多物理场仿真软件，可用于建模分析电磁、结构、声学、流体、传热、化学以及这些物理场之间的耦合，广泛应用于产品研发、工艺优化与科学研究的各个领域。",
      en: "COMSOL Multiphysics is a powerful general-purpose multiphysics simulation software used to model and analyze electromagnetics, structures, acoustics, fluid flow, heat transfer, chemistry, and the coupling between these physics — broadly applied in product R&D, process optimization, and scientific research."
    },
    "prod.modules.title": { zh: "专业附加模块", en: "Dedicated Add-on Modules" },
    "prod.modules.desc": {
      zh: "可根据应用需求灵活选配，COMSOL 提供数十种专业附加模块，深入覆盖各领域建模。",
      en: "Flexibly selectable to fit application needs. COMSOL offers dozens of dedicated modules covering in-depth modeling in various areas."
    },
    "mod.cfd": { zh: "CFD 计算流体力学", en: "CFD Module" },
    "mod.cfd.d": {
      zh: "层流/湍流、多相流、自由表面与流固耦合等流体仿真。",
      en: "Laminar/turbulent flow, multiphase flow, free surfaces, and fluid-structure interaction."
    },
    "mod.struct": { zh: "结构力学", en: "Structural Mechanics Module" },
    "mod.struct.d": {
      zh: "结构静力/动力分析、疲劳与复合材料力学。",
      en: "Static and dynamic structural analysis, fatigue, and composite mechanics."
    },
    "mod.acoustics": { zh: "声学", en: "Acoustics Module" },
    "mod.acoustics.d": {
      zh: "声压、结构声、振动与噪声分析及消声器、扬声器应用。",
      en: "Pressure acoustics, structural acoustics, vibration and noise analysis for mufflers and loudspeakers."
    },
    "mod.heat": { zh: "传热", en: "Heat Transfer Module" },
    "mod.heat.d": {
      zh: "传导、对流、辐射与相变传热，含电子散热与热管理应用。",
      en: "Conduction, convection, radiation, and phase-change heat transfer including electronics cooling and thermal management."
    },
    "mod.electro": { zh: "电磁与电磁场", en: "AC/DC & RF Module" },
    "mod.electro.d": {
      zh: "静电场、磁场、电磁波、RF 与微波器件仿真。",
      en: "Electrostatics, magnetics, electromagnetic waves, RF, and microwave device simulation."
    },
    "mod.semicon": { zh: "半导体模块", en: "Semiconductor Module" },
    "mod.semicon.d": {
      zh: "基于漂移-扩散方程与泊松方程模拟双极晶体管、MOSFET、IGBT、太阳能电池及 LED、激光二极管等器件，并可耦合传热与结构力学，用于半导体制造工艺、先进封装应力与散热分析。",
      en: "Simulate BJTs, MOSFETs, IGBTs, solar cells, LEDs, and laser diodes via coupled drift-diffusion and Poisson equations, and couple with heat transfer and structural mechanics for semiconductor manufacturing, advanced packaging stress, and thermal analysis."
    },

    "mod.particle": { zh: "粒子追踪", en: "Particle Tracing Module" },
    "mod.particle.d": {
      zh: "带电粒子、质量粒子的运动与碰撞，喷镀、分离器等应用。",
      en: "Trajectories and collisions of charged and mass particles for sputtering, separators, and more."
    },
    "mod.mems": { zh: "MEMS 与微流控", en: "MEMS & Microfluidics Module" },
    "mod.mems.d": {
      zh: "微机电系统、微流控芯片、电渗流与分离微结构仿真。",
      en: "Micro-electromechanical systems, microfluidic chips, electroosmotic flow, and separation microstructures."
    },
    "mod.optim": { zh: "优化与参数估计", en: "Optimization Module" },
    "mod.optim.d": {
      zh: "参数优化、形状优化与拓扑优化，辅助工程设计决策。",
      en: "Parameter, shape, and topology optimization to support engineering design decisions."
    },
    "prod.service.title": { zh: "配套服务", en: "Complementary Services" },
    "prod.ps1": { zh: "授权采购与续费", en: "License Purchase & Renewal" },
    "prod.ps2": { zh: "许可证部署与网络化配置", en: "License Deployment & Network Configuration" },
    "prod.ps3": { zh: "定制化仿真建模培训", en: "Customized Simulation Training" },
    "prod.ps4": { zh: "资深工程师技术答疑与支持", en: "Technical Support from Senior Engineers" },
    "prod.ls1.d": { zh: "专业、合规的正版授权采购方案，配置最合适的许可类型。", en: "Professional and compliant license procurement with the most suitable license type." },
    "prod.ls2.d": { zh: "协助完成单机或网络浮动许可的部署与优化配置。", en: "Help deploy and optimize standalone or network floating licenses." },
    "prod.ls3.d": { zh: "针对行业场景量身定制培训内容，快速提升团队仿真能力。", en: "Tailor training content to industry scenarios to quickly upskill your team." },
    "prod.ls4.d": { zh: "全程技术支持，帮助解决建模与计算中的各类技术问题。", en: "End-to-end technical support for modeling and computation issues." },

    // ---------- Solutions ----------
    "sol.banner.title": { zh: "方案介绍", en: "Solutions" },
    "sol.banner.desc": {
      zh: "面向行业应用的多物理场仿真解决方案",
      en: "Multiphysics Simulation Solutions for Industry Applications"
    },
    "sol.industry.title": { zh: "行业解决方案", en: "Industry Solutions" },
    "sol.industry.desc": {
      zh: "我们深耕多个行业领域，将多物理场仿真与产品开发流程深度融合。",
      en: "We are deeply engaged in multiple industries, integrating multiphysics simulation with product development workflows."
    },
    "ind.energy": { zh: "能源与电池", en: "Energy & Batteries" },
    "ind.energy.d": {
      zh: "锂电池电化学-热-力耦合、燃料电池、光伏系统与储能散热仿真。",
      en: "Electrochemistry-thermal-stress coupling of Li-ion batteries, fuel cells, PV systems, and energy storage cooling."
    },
    "ind.auto": { zh: "汽车制造", en: "Automotive" },
    "ind.auto.d": {
      zh: "整车气动、NVH 声学、驱动电机电磁场与热管理、制动热分析。",
      en: "Vehicle aerodynamics, NVH acoustics, motor electromagnetics & thermal management, and brake thermal analysis."
    },
    "ind.elec": { zh: "电子与半导体", en: "Electronics & Semiconductors" },
    "ind.elec.d": {
      zh: "覆盖芯片散热与热管理、大功率器件电-热分析、先进封装与 TSV 可靠性、PCB 电磁兼容，以及半导体制造与封装工艺仿真。",
      en: "Covers chip thermal management, electro-thermal analysis of power devices, advanced packaging and TSV reliability, PCB EMC, and semiconductor manufacturing and packaging process simulation."
    },

    "ind.aero": { zh: "航空航天", en: "Aerospace" },
    "ind.aero.d": {
      zh: "气动弹性、热防护、噪音与复合材料结构分析。",
      en: "Aeroelasticity, thermal protection, noise, and composite structural analysis."
    },
    "ind.bio": { zh: "生物医疗", en: "Biomedical" },
    "ind.bio.d": {
      zh: "药物递送、微流控生物芯片、医疗器械的电磁与流体安全性评估。",
      en: "Drug delivery, microfluidic biochips, and electromagnetic & fluid safety assessment of medical devices."
    },
    "ind.process": { zh: "化工与过程工业", en: "Chemical & Process" },
    "ind.process.d": {
      zh: "反应器设计、传热传质过程、搅拌混合与分离单元仿真。",
      en: "Reactor design, heat & mass transfer processes, mixing, and separation unit simulation."
    },
    "sol.flow.title": { zh: "合作与服务流程", en: "Engagement & Service Flow" },
    "sol.step1": { zh: "需求沟通", en: "Requirement Discussion" },
    "sol.step1.d": {
      zh: "深入了解业务场景与仿真需求，评估软件与模块选型。",
      en: "Understand your business scenarios and simulation needs; evaluate the right software and modules."
    },
    "sol.step2": { zh: "方案设计", en: "Solution Design" },
    "sol.step2.d": {
      zh: "提供包含选型、许可配置与应用路径的一体化方案。",
      en: "Provide integrated proposals covering selection, licensing, and application roadmaps."
    },
    "sol.step3": { zh: "交付落地", en: "Delivery & Deployment" },
    "sol.step3.d": {
      zh: "完成软件部署、许可证激活及团队技术培训。",
      en: "Complete software deployment, license activation, and team training."
    },
    "sol.step4": { zh: "持续支持", en: "Continuous Support" },
    "sol.step4.d": {
      zh: "长期技术支持与版本升级服务，保障仿真投资持续价值。",
      en: "Ongoing technical support and version upgrades to sustain the value of your simulation investment."
    },
    "cta.title": { zh: "开始您的仿真之旅", en: "Start Your Simulation Journey" },
    "cta.desc": {
      zh: "与我们联系，获取软件演示、报价与行业解决方案建议。",
      en: "Contact us for a software demo, quotation, and industry solution recommendations."
    },
    "cta.btn": { zh: "立即咨询", en: "Get in Touch" },

    // ---------- Contact ----------
    "con.banner.title": { zh: "联系我们", en: "Contact Us" },
    "con.banner.desc": { zh: "我们期待与您的交流与合作", en: "We look forward to hearing from you" },
    "con.addr.title": { zh: "公司地址", en: "Office Address" },
    "con.addr":
    {
      zh: "上海市浦东新区国展路1529号 申能金融大厦 五楼 520室",
      en: "Room 520, 5F, Shenneng Financial Tower, No. 1529 Guozhan Road, Pudong New Area, Shanghai, China"
    },
    "con.email.title": { zh: "联系邮箱", en: "Email" },

    "con.hours.title": { zh: "工作时间", en: "Business Hours" },
    "con.hours": { zh: "周一至周五 9:00 - 18:00", en: "Mon - Fri, 9:00 - 18:00 (GMT+8)" },
    "con.form.title": { zh: "在线留言", en: "Send Us a Message" },
    "con.form.name": { zh: "姓名", en: "Name" },
    "con.form.name.ph": { zh: "请输入您的姓名", en: "Your name" },
    "con.form.email": { zh: "邮箱", en: "Email" },
    "con.form.email.ph": { zh: "请输入您的邮箱", en: "Your email address" },
    "con.form.subject": { zh: "主题", en: "Subject" },
    "con.form.subject.ph": { zh: "产品咨询 / 方案咨询 / 合作洽谈", en: "Product inquiry / Solution / Partnership" },
    "con.form.msg": { zh: "留言内容", en: "Message" },
    "con.form.msg.ph": { zh: "请描述您的需求，我们将尽快与您联系。", en: "Briefly describe your needs and we will get back to you soon." },
    "con.form.submit": { zh: "发送留言", en: "Submit" },
    "con.form.note": { zh: "点击提交将打开您的邮件客户端发送邮件至 sales@lorkintech.com", en: "Submitting opens your email client to send to sales@lorkintech.com" },
    "con.map.note": { zh: "点击下方按钮即可在高德地图中查看公司位置", en: "Click the button below to view our office location on AMap" },
    "con.map.view": { zh: "在高德地图中查看位置", en: "View Location on AMap" },
    "con.map.name": { zh: "申能金融大厦", en: "Shenneng Financial Tower" },

"back.solutions": { zh: "← 返回方案介绍", en: "← Back to Solutions" },
"sem.banner.title": { zh: "半导体行业解决方案", en: "Semiconductor Solutions" },
"sem.banner.desc": { zh: "从晶圆制造、前道制程、先进封装到器件设计与可靠性的全流程多物理场仿真", en: "End-to-end multiphysics simulation from wafer fabrication and front-end processes to advanced packaging, device design, and reliability" },
"sem.ov.title": { zh: "从晶圆制造到系统级可靠性的全流程仿真", en: "Full-Process Simulation from Wafer Fab to System-Level Reliability" },
"sem.ov.desc": { zh: "半导体产业正从平面器件走向 3D 集成与先进封装，制造与封装工艺涉及电、热、力、湿及等离子体等多种物理过程的强耦合。COMSOL Multiphysics 多物理场仿真平台凭借统一的建模环境，覆盖晶圆制造与前道制程、先进封装与封测、器件设计、散热热管理及结构可靠性等完整链路，助力半导体企业缩短研发周期、提升良率与产品可靠性。", en: "The semiconductor industry is evolving from planar devices to 3D integration and advanced packaging, where manufacturing and packaging processes strongly couple electrical, thermal, mechanical, moisture, and plasma phenomena. With its unified modeling environment, the COMSOL Multiphysics platform covers the full chain — wafer fabrication and front-end processes, advanced packaging and test, device design, thermal management, and structural reliability — helping companies shorten R&D cycles, raise yield, and improve reliability." },
"sem.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"sem.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"sem.cap1": { zh: "晶圆制造与前道制程", en: "Wafer Fabrication & Front-End Processes" },
"sem.cap1.d": { zh: "等离子体刻蚀与沉积（ICP/CCP 反应器）、CVD 与外延生长、离子注入及真空系统分子流、光刻与激光加热、CMP 平坦化等工艺设备与过程仿真。", en: "Simulate process equipment and phenomena including plasma etching and deposition (ICP/CCP reactors), CVD and epitaxial growth, ion implantation and molecular flow in vacuum systems, lithography and laser heating, and CMP planarization." },
"sem.cap2": { zh: "先进封装与封测", en: "Advanced Packaging & Test" },
"sem.cap2.d": { zh: "TSV 加工、混合键合、倒装键合、薄晶圆拿持等工艺仿真，回流焊残余应力与翘曲控制、塑封固化与脱模，以及高加速应力试验与焊点可靠性分析。", en: "Simulate TSV processing, hybrid bonding, flip-chip bonding, and thin-wafer handling; control reflow residual stress and warpage, molding curing and demolding; and evaluate HAST and solder joint reliability." },
"sem.cap3": { zh: "半导体器件设计", en: "Semiconductor Device Design" },
"sem.cap3.d": { zh: "漂移-扩散方程与泊松方程耦合求解，模拟双极晶体管、MOSFET、IGBT、肖特基二极管、p-n 结、太阳能电池及 LED、激光二极管等光电子器件。", en: "Coupled drift-diffusion and Poisson equations for simulating BJTs, MOSFETs, IGBTs, Schottky diodes, p-n junctions, solar cells, and optoelectronic devices such as LEDs and laser diodes." },
"sem.cap4": { zh: "散热与热管理", en: "Thermal Management" },
"sem.cap4.d": { zh: "芯片结温与封装热阻评估、功率器件热设计、3D-IC 与先进封装堆叠散热，以及微流道、均热板、液冷等散热方案的验证与优化。", en: "Evaluate chip junction temperature and package thermal resistance, power device thermal design, and 3D-IC and advanced package stack cooling; validate and optimize microchannel, vapor chamber, and liquid cooling schemes." },
"sem.cap5": { zh: "结构与可靠性", en: "Structural Analysis & Reliability" },
"sem.cap5.d": { zh: "封装结构与界面应力、翘曲变形分析，焊点黏塑性蠕变与电迁移失效，热循环疲劳及高加速应力试验（HAST）等可靠性评估。", en: "Analyze package structure and interface stresses, warpage, solder joint viscoplastic creep and electromigration failure, thermal cycling fatigue, and reliability under Highly Accelerated Stress Testing (HAST)." },
"sem.app1": { zh: "先进封装热-力可靠性", en: "Advanced Packaging Thermal-Mechanical Reliability" },
"sem.app1.d": { zh: "TSV/微凸点、混合键合与回流焊工艺的应力、翘曲与热管理。", en: "Stress, warpage, and thermal management of TSVs, micro-bumps, hybrid bonding, and reflow processes." },
"sem.app2": { zh: "芯片与功率模块散热", en: "Chip & Power Module Cooling" },
"sem.app2.d": { zh: "高算力芯片与 IGBT 功率模块的结温与冷却设计。", en: "Junction temperature and cooling design of high-performance chips and IGBT power modules." },
"sem.app3": { zh: "等离子体工艺仿真", en: "Plasma Process Simulation" },
"sem.app3.d": { zh: "ICP/CCP 刻蚀与沉积速率、均匀性及等离子体化学。", en: "ICP/CCP etch and deposition rate, uniformity, and plasma chemistry." },
"sem.app4": { zh: "器件与光电子仿真", en: "Device & Optoelectronics Simulation" },
"sem.app4.d": { zh: "双极晶体管、MOSFET、IGBT 及 LED、激光二极管的器件级建模。", en: "Device-level modeling of BJTs, MOSFETs, IGBTs, LEDs, and laser diodes." },
"sem.app5": { zh: "可靠性评估", en: "Reliability Assessment" },
"sem.app5.d": { zh: "焊点蠕变/电迁移、热循环疲劳与 HAST 高加速应力试验。", en: "Solder creep/electromigration, thermal cycling fatigue, and HAST." },
"energy.banner.title": { zh: "能源与电池解决方案", en: "Energy & Battery Solutions" },
"energy.banner.desc": { zh: "覆盖电池、燃料电池、光伏与储能系统的电化学、热、结构多物理场仿真", en: "Electrochemical, thermal, and structural multiphysics simulation for batteries, fuel cells, PV, and energy storage" },
"energy.ov.title": { zh: "从电化学机理到系统热管理", en: "From Electrochemistry to System Thermal Management" },
"energy.ov.desc": { zh: "能源行业的产品开发涉及电化学、传热、流体与结构等多物理场耦合。我们依托 COMSOL Multiphysics 平台，为电池、燃料电池、光伏与储能系统提供从材料机理研究、电芯/模块设计到系统级热管理的全流程仿真服务，帮助客户提升能量密度、延长寿命并保障运行安全。", en: "Energy product development involves tightly coupled electrochemistry, heat transfer, fluid flow, and structural mechanics. Built on COMSOL Multiphysics, we provide end-to-end simulation from material mechanism research and cell/module design to system-level thermal management for batteries, fuel cells, PV, and energy storage — improving energy density, extending lifetime, and ensuring safe operation." },
"energy.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"energy.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"energy.cap1": { zh: "电池电化学与老化建模", en: "Battery Electrochemistry & Aging" },
"energy.cap1.d": { zh: "锂离子电芯电化学-热耦合、SEI 生长与容量衰减、快充策略优化。", en: "Coupled electrochemistry-thermal modeling of Li-ion cells, SEI growth and capacity fade, fast-charging strategy optimization." },
"energy.cap2": { zh: "电池热管理", en: "Battery Thermal Management" },
"energy.cap2.d": { zh: "电芯、模组与 Pack 级液冷/风冷/相变材料散热，热失控传播抑制与热蔓延安全评估。", en: "Cell, module, and pack-level liquid/air/phase-change cooling, thermal runaway propagation suppression, and thermal safety assessment." },
"energy.cap3": { zh: "燃料电池与电解槽", en: "Fuel Cells & Electrolyzers" },
"energy.cap3.d": { zh: "PEM 燃料电池流场、水管理与多物理场耦合，电解槽水/热管理。", en: "Flow field, water management, and multiphysics coupling of PEM fuel cells; water and thermal management of electrolyzers." },
"energy.cap4": { zh: "光伏与储能系统", en: "PV & Energy Storage Systems" },
"energy.cap4.d": { zh: "光伏电池光-电-热分析、储能集装箱与机柜热设计、逆变器与电力电子散热。", en: "Opto-electro-thermal analysis of PV cells, thermal design of energy storage containers and cabinets, power electronics cooling." },
"energy.app1": { zh: "电池包热失控仿真", en: "Battery Pack Thermal Runaway" },
"energy.app1.d": { zh: "模拟电芯热失控起始与蔓延路径，评估阻隔材料与安全设计。", en: "Simulate thermal runaway initiation and propagation paths; evaluate barrier materials and safety design." },
"energy.app2": { zh: "快充温升控制", en: "Fast-Charging Temperature Control" },
"energy.app2.d": { zh: "优化充电策略与冷却流道，控制温升与温差，延长寿命。", en: "Optimize charging profiles and cooling channels to control temperature rise and gradients." },
"energy.app3": { zh: "储能系统散热", en: "Energy Storage Cooling" },
"energy.app3.d": { zh: "多工况下储能系统温度场与气流组织仿真，保障运行安全。", en: "Multi-scenario temperature and airflow simulation of energy storage systems." },
"energy.app4": { zh: "析锂与电解液研究", en: "Lithium Plating & Electrolyte Study" },
"energy.app4.d": { zh: "电极结构、电解液分布与析锂风险的机理研究。", en: "Mechanism studies of electrode structure, electrolyte distribution, and lithium plating risk." },
"energy.app5": { zh: "燃料电池水热管理", en: "Fuel Cell Water & Thermal Management" },
"energy.app5.d": { zh: "双极板流道与膜电极水热分布优化。", en: "Optimize bipolar plate channels and membrane electrode water/thermal distribution." },
"auto.banner.title": { zh: "汽车行业解决方案", en: "Automotive Solutions" },
"auto.banner.desc": { zh: "整车空气动力学、NVH、驱动电机、电池与整车热管理的多物理场仿真", en: "Multiphysics simulation for vehicle aerodynamics, NVH, e-motors, and vehicle thermal management" },
"auto.ov.title": { zh: "面向新能源与智能网联汽车的仿真能力", en: "Simulation for NEV and Intelligent Connected Vehicles" },
"auto.ov.desc": { zh: "从整车气动性能、NVH 噪声控制到三电系统（电池、电机、电控）的电磁、热与结构问题，汽车研发正越来越依赖多物理场仿真。我们基于 COMSOL Multiphysics 帮助整车与零部件企业建立从部件级到整车级的仿真能力，加速新车型开发与性能验证。", en: "From vehicle aerodynamics and NVH to the electromagnetic, thermal, and structural challenges of the “three-electric” systems (battery, motor, controller), automotive R&D increasingly relies on multiphysics simulation. Built on COMSOL Multiphysics, we help OEMs and suppliers build component- and vehicle-level simulation capabilities to accelerate development and validation." },
"auto.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"auto.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"auto.cap1": { zh: "空气动力学与气动噪声", en: "Aerodynamics & Aeroacoustics" },
"auto.cap1.d": { zh: "整车外流场、风阻系数优化、气动噪声与风噪分析。", en: "Vehicle external flow, drag coefficient optimization, aeroacoustics, and wind noise." },
"auto.cap2": { zh: "声学与 NVH", en: "Acoustics & NVH" },
"auto.cap2.d": { zh: "整车与零部件振动噪声、声腔模态、消声器与排气系统声学。", en: "Vehicle and component vibration-noise, acoustic cavity modes, muffler and exhaust acoustics." },
"auto.cap3": { zh: "驱动电机与电驱系统", en: "E-Motor & Drivetrain" },
"auto.cap3.d": { zh: "电机电磁场、损耗与温度场耦合分析，端部绕组热管理与结构振动。", en: "Coupled electromagnetic, loss, and thermal analysis of e-motors; winding thermal management and structural vibration." },
"auto.cap4": { zh: "整车热管理", en: "Vehicle Thermal Management" },
"auto.cap4.d": { zh: "电池、电机、电控与座舱的集成热管理，一维-三维联合仿真。", en: "Integrated thermal management of battery, motor, controller, and cabin with 1D-3D co-simulation." },
"auto.cap5": { zh: "制动与摩擦热", en: "Brake & Friction Thermal" },
"auto.cap5.d": { zh: "制动盘-片摩擦生热、热衰退与热应力分析。", en: "Friction heating, thermal fade, and thermal stress of brake disc-pad systems." },
"auto.app1": { zh: "风阻与下压力优化", en: "Drag & Downforce Optimization" },
"auto.app1.d": { zh: "整车造型外流场与风阻/风噪协同优化。", en: "Co-optimize vehicle exterior flow, drag, and wind noise." },
"auto.app2": { zh: "车内噪声控制", en: "Interior Noise Control" },
"auto.app2.d": { zh: "声腔与结构耦合分析，优化声学包与吸声材料。", en: "Structure-acoustic analysis to optimize acoustic packages and absorbers." },
"auto.app3": { zh: "电机效率与温升", en: "Motor Efficiency & Temperature Rise" },
"auto.app3.d": { zh: "电磁损耗与冷却结构联合仿真，提升功率密度。", en: "Combined electromagnetic loss and cooling design to raise power density." },
"auto.app4": { zh: "电池包热安全", en: "Battery Pack Thermal Safety" },
"auto.app4.d": { zh: "电芯温场、热失控与热蔓延的整车级评估。", en: "Cell temperature field, thermal runaway, and propagation assessment at vehicle level." },
"auto.app5": { zh: "制动热衰退", en: "Brake Thermal Fade" },
"auto.app5.d": { zh: "连续制动工况下制动系统温度与性能预测。", en: "Predict brake system temperature and performance under repeated braking." },
"elec.banner.title": { zh: "电子与半导体解决方案", en: "Electronics & Semiconductor Solutions" },
"elec.banner.desc": { zh: "芯片散热、先进封装、PCB 电磁兼容与制造/封装工艺仿真", en: "Chip cooling, advanced packaging, PCB EMC, and manufacturing/packaging process simulation" },
"elec.ov.title": { zh: "覆盖器件-封装-系统层级的多物理场能力", en: "Multiphysics Across Device, Package, and System Levels" },
"elec.ov.desc": { zh: "电子与半导体产品的可靠性与性能取决于电、热、力、湿等多物理场的相互作用。我们依托 COMSOL Multiphysics 提供从芯片级、封装级到系统级的一体化仿真能力，覆盖器件设计、先进封装、热管理与电磁兼容等关键环节。面向半导体行业的全流程解决方案，请见半导体解决方案专页。", en: "The reliability and performance of electronics and semiconductor products depend on the interplay of electrical, thermal, mechanical, and moisture fields. Built on COMSOL Multiphysics, we deliver integrated chip-, package-, and system-level simulation covering device design, advanced packaging, thermal management, and EMC. For full semiconductor-process solutions, see our dedicated semiconductor page." },
"elec.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"elec.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"elec.cap1": { zh: "芯片与功率器件热设计", en: "Chip & Power Device Thermal Design" },
"elec.cap1.d": { zh: "结温、热阻与瞬态热响应分析，散热器、均热板与微流道优化。", en: "Junction temperature, thermal resistance, and transient response; optimization of heat sinks, vapor chambers, and microchannels." },
"elec.cap2": { zh: "先进封装与 3D-IC", en: "Advanced Packaging & 3D-IC" },
"elec.cap2.d": { zh: "TSV/微凸点电-热-结构耦合、混合键合与回流焊应力、堆叠散热与翘曲控制。", en: "Electro-thermal-structural coupling of TSVs and micro-bumps, hybrid bonding and reflow stress, stack cooling and warpage control." },
"elec.cap3": { zh: "PCB 电磁兼容与信号/电源完整性", en: "PCB EMC & SI/PI" },
"elec.cap3.d": { zh: "高速互连信号完整性、电源分配网络、辐射发射与电磁兼容分析。", en: "Signal integrity of high-speed interconnects, power distribution networks, radiation, and EMC." },
"elec.cap4": { zh: "制造与封装工艺", en: "Manufacturing & Packaging Processes" },
"elec.cap4.d": { zh: "等离子体刻蚀/沉积、CVD、离子注入与真空分子流、回流焊与塑封工艺仿真。", en: "Plasma etching/deposition, CVD, ion implantation and vacuum molecular flow, reflow soldering, and molding processes." },
"elec.cap5": { zh: "可靠性评估", en: "Reliability Assessment" },
"elec.cap5.d": { zh: "焊点蠕变与电迁移、热循环疲劳、高温高湿（HAST）环境可靠性。", en: "Solder joint creep and electromigration, thermal cycling fatigue, and HAST reliability." },
"elec.app1": { zh: "高算力芯片散热", en: "High-Performance Chip Cooling" },
"elec.app1.d": { zh: "AI/GPU 芯片结温与先进封装热管理。", en: "Junction temperature and advanced package thermal management for AI/GPU chips." },
"elec.app2": { zh: "先进封装翘曲与应力", en: "Advanced Packaging Warpage & Stress" },
"elec.app2.d": { zh: "2.5D/3D 封装回流焊与塑封工艺应力、翘曲与界面失效预测。", en: "Reflow and molding stress, warpage, and interface failure prediction for 2.5D/3D packages." },
"elec.app3": { zh: "PCB 电磁兼容", en: "PCB EMC" },
"elec.app3.d": { zh: "高速电路辐射与抗扰度、电源完整性分析。", en: "Radiation, immunity, and power integrity of high-speed circuits." },
"elec.app4": { zh: "IGBT/功率模块", en: "IGBT / Power Modules" },
"elec.app4.d": { zh: "功率器件电-热-结构耦合与可靠性设计。", en: "Electro-thermal-structural coupling and reliability design of power devices." },
"aero.banner.title": { zh: "航空航天解决方案", en: "Aerospace Solutions" },
"aero.banner.desc": { zh: "气动弹性、热防护、气动噪声与复合材料结构的多物理场仿真", en: "Multiphysics simulation for aeroelasticity, thermal protection, aeroacoustics, and composite structures" },
"aero.ov.title": { zh: "面向严苛环境的航空级仿真能力", en: "Simulation for Extreme Aerospace Environments" },
"aero.ov.desc": { zh: "航空航天产品在极端载荷与环境条件下工作，气动、热、结构与材料行为高度耦合。我们依托 COMSOL Multiphysics 为航空、航天与无人机领域提供气动弹性、热防护、噪声控制与结构可靠性等仿真服务，支撑新一代装备的研发与验证。", en: "Aerospace products operate under extreme loads and environments where aerodynamic, thermal, structural, and material behaviors are tightly coupled. Built on COMSOL Multiphysics, we support aeroelasticity, thermal protection, noise control, and structural reliability for aviation, space, and UAV applications." },
"aero.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"aero.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"aero.cap1": { zh: "气动弹性与颤振", en: "Aeroelasticity & Flutter" },
"aero.cap1.d": { zh: "流固耦合下的颤振边界、静气动弹性与载荷分析。", en: "Flutter boundaries, static aeroelasticity, and load analysis under fluid-structure interaction." },
"aero.cap2": { zh: "热防护与热结构", en: "Thermal Protection & Hot Structures" },
"aero.cap2.d": { zh: "高超声速气动加热、热防护系统与热-结构耦合分析。", en: "Hypersonic aerodynamic heating, thermal protection systems, and thermal-structural coupling." },
"aero.cap3": { zh: "气动声学与降噪", en: "Aeroacoustics & Noise Reduction" },
"aero.cap3.d": { zh: "风扇、喷流与机体噪声仿真，声衬与降噪方案评估。", en: "Fan, jet, and airframe noise; evaluation of liners and noise reduction concepts." },
"aero.cap4": { zh: "复合材料结构", en: "Composite Structures" },
"aero.cap4.d": { zh: "层合板失效、低速冲击损伤、固化残余应力与疲劳。", en: "Laminate failure, low-velocity impact damage, curing residual stress, and fatigue." },
"aero.cap5": { zh: "推进与燃烧", en: "Propulsion & Combustion" },
"aero.cap5.d": { zh: "燃烧室流动与反应、涡轮叶片冷却与热应力。", en: "Combustor flow and reaction, turbine blade cooling, and thermal stress." },
"aero.app1": { zh: "机翼颤振分析", en: "Wing Flutter Analysis" },
"aero.app1.d": { zh: "确定颤振边界与飞行包线限制。", en: "Determine flutter boundaries and flight envelope limits." },
"aero.app2": { zh: "高超声速热防护", en: "Hypersonic Thermal Protection" },
"aero.app2.d": { zh: "气动加热下热防护系统温度与烧蚀评估。", en: "Thermal protection temperature and ablation under aerodynamic heating." },
"aero.app3": { zh: "发动机降噪", en: "Engine Noise Reduction" },
"aero.app3.d": { zh: "风扇噪声源分析与声衬优化。", en: "Fan noise source analysis and acoustic liner optimization." },
"aero.app4": { zh: "卫星热设计", en: "Satellite Thermal Design" },
"aero.app4.d": { zh: "空间热环境下的轨道周期热分析。", en: "Orbital thermal cycling analysis in space environments." },
"bio.banner.title": { zh: "生物医疗解决方案", en: "Biomedical Solutions" },
"bio.banner.desc": { zh: "药物递送、微流控生物芯片与医疗器械安全性的多物理场仿真", en: "Multiphysics simulation for drug delivery, microfluidic biochips, and medical device safety" },
"bio.ov.title": { zh: "面向医疗创新与法规安全的仿真能力", en: "Simulation for Medical Innovation and Regulatory Safety" },
"bio.ov.desc": { zh: "生物医疗产品的开发既要追求临床有效性，也要满足严格的法规安全性要求。我们依托 COMSOL Multiphysics 在药物递送、微流控生物芯片、医疗器械电磁与热安全、生物力学等领域提供多物理场仿真，帮助企业与科研机构加速创新并降低开发风险。", en: "Biomedical product development demands both clinical efficacy and strict regulatory safety. Built on COMSOL Multiphysics, we support drug delivery, microfluidic biochips, electromagnetic and thermal safety of medical devices, and biomechanics to accelerate innovation and reduce development risk." },
"bio.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"bio.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"bio.cap1": { zh: "药物递送与流体", en: "Drug Delivery & Fluidics" },
"bio.cap1.d": { zh: "缓释制剂释放、微针/注射给药、溶出与靶向递送仿真。", en: "Sustained-release, microneedle/injection delivery, dissolution, and targeted delivery." },
"bio.cap2": { zh: "微流控与生物芯片", en: "Microfluidics & Biochips" },
"bio.cap2.d": { zh: "微流控芯片、电渗流、细胞分选与器官芯片建模。", en: "Microfluidic chips, electroosmotic flow, cell sorting, and organ-on-chip modeling." },
"bio.cap3": { zh: "医疗器械电磁与热安全", en: "Medical Device EM & Thermal Safety" },
"bio.cap3.d": { zh: "MRI 射频加热、微波治疗、电刺激器与手术器械电磁场评估。", en: "MRI RF heating, microwave therapy, electrical stimulators, and surgical instrument EM assessment." },
"bio.cap4": { zh: "生物传热与热疗", en: "Bioheat & Thermal Therapy" },
"bio.cap4.d": { zh: "组织温升、射频/微波消融与肿瘤热疗计划。", en: "Tissue temperature rise, RF/microwave ablation, and thermal therapy planning." },
"bio.cap5": { zh: "生物力学与植入器械", en: "Biomechanics & Implants" },
"bio.cap5.d": { zh: "植入器械结构强度、疲劳与血流-血管耦合分析。", en: "Implant structural strength and fatigue, blood-flow-vessel coupling." },
"bio.app1": { zh: "药物缓释设计", en: "Sustained-Release Design" },
"bio.app1.d": { zh: "释放动力学与给药方案优化。", en: "Release kinetics and dosing optimization." },
"bio.app2": { zh: "器官芯片", en: "Organ-on-Chip" },
"bio.app2.d": { zh: "微流道内细胞培养环境与剪切应力评估。", en: "Culture environment and shear stress in organ-on-chip microchannels." },
"bio.app3": { zh: "MRI 射频安全", en: "MRI RF Safety" },
"bio.app3.d": { zh: "植入器械在 MRI 环境中的温升与 SAR 评估。", en: "Temperature rise and SAR evaluation of implants in MRI." },
"bio.app4": { zh: "肿瘤热疗计划", en: "Thermal Therapy Planning" },
"bio.app4.d": { zh: "射频/微波消融温度场与凝固区预测。", en: "Temperature field and coagulation zone prediction for RF/microwave ablation." },
"proc.banner.title": { zh: "化工与过程工业解决方案", en: "Chemical & Process Solutions" },
"proc.banner.desc": { zh: "反应器、传热传质、搅拌混合与分离过程的多物理场仿真", en: "Multiphysics simulation for reactors, heat & mass transfer, mixing, and separation" },
"proc.ov.title": { zh: "面向工艺开发与放大的一体化仿真", en: "Integrated Simulation for Process Development & Scale-up" },
"proc.ov.desc": { zh: "化工过程涉及流动、传热、传质与化学反应的高度耦合，工艺放大与安全评估尤为关键。我们依托 COMSOL Multiphysics 提供反应器设计、传热传质、搅拌混合与分离过程仿真，帮助企业优化工艺参数、提升产量与选择性、保障过程安全。", en: "Chemical processes couple flow, heat transfer, mass transfer, and chemical reactions, making scale-up and safety assessment critical. Built on COMSOL Multiphysics, we support reactor design, heat and mass transfer, mixing, and separation simulation to optimize parameters, improve yield and selectivity, and ensure process safety." },
"proc.cap.title": { zh: "核心仿真能力", en: "Core Simulation Capabilities" },
"proc.app.title": { zh: "典型应用场景", en: "Typical Application Scenarios" },
"proc.cap1": { zh: "反应器与化学反应工程", en: "Reactors & Reaction Engineering" },
"proc.cap1.d": { zh: "均相/非均相反应器、催化床与固定床反应器建模。", en: "Homogeneous/heterogeneous reactors, catalytic and packed-bed reactor modeling." },
"proc.cap2": { zh: "传热传质", en: "Heat & Mass Transfer" },
"proc.cap2.d": { zh: "换热器设计、传热传质耦合、结晶与溶解过程。", en: "Heat exchanger design, coupled heat and mass transfer, crystallization and dissolution." },
"proc.cap3": { zh: "搅拌与混合", en: "Mixing & Blending" },
"proc.cap3.d": { zh: "搅拌槽流动、混合时间、气液分散与放大效应。", en: "Stirred tank flow, mixing time, gas-liquid dispersion, and scale-up effects." },
"proc.cap4": { zh: "多相流与分离", en: "Multiphase Flow & Separation" },
"proc.cap4.d": { zh: "气液固多相流、蒸馏、膜分离与沉降过程。", en: "Gas-liquid-solid flow, distillation, membrane separation, and settling." },
"proc.cap5": { zh: "过程安全与工艺放大", en: "Process Safety & Scale-up" },
"proc.cap5.d": { zh: "反应热失控、温升与停留时间分布分析。", en: "Thermal runaway, temperature rise, and residence time distribution analysis." },
"proc.app1": { zh: "反应器放大设计", en: "Reactor Scale-up Design" },
"proc.app1.d": { zh: "由实验室到工业规模的反应与传热匹配。", en: "Match reaction and heat transfer from lab to industrial scale." },
"proc.app2": { zh: "结晶过程优化", en: "Crystallization Optimization" },
"proc.app2.d": { zh: "过饱和度、晶粒尺寸分布控制。", en: "Control supersaturation and crystal size distribution." },
"proc.app3": { zh: "搅拌槽 CFD", en: "Stirred Tank CFD" },
"proc.app3.d": { zh: "混合效率与功率消耗优化。", en: "Optimize mixing efficiency and power draw." },
"proc.app4": { zh: "膜分离工艺", en: "Membrane Separation" },
"proc.app4.d": { zh: "膜通量与浓差极化评估。", en: "Membrane flux and concentration polarization assessment." },
"proc.app5": { zh: "反应安全分析", en: "Reaction Safety Analysis" },
"proc.app5.d": { zh: "热失控风险与紧急泄放评估。", en: "Thermal runaway risk and emergency relief evaluation." },

  };

  function t(key) {
    if (!dict[key]) return key;
    return dict[key][lang] || key;
  }

  function applyLang() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    var nodesPh = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < nodesPh.length; j++) {
      nodesPh[j].setAttribute("placeholder", t(nodesPh[j].getAttribute("data-i18n-ph")));
    }
    var btns = document.querySelectorAll("#lang-zh, #lang-en");
    for (var k = 0; k < btns.length; k++) {
      btns[k].classList.toggle("active", btns[k].id === "lang-" + lang);
    }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(LANG_KEY, lang);
    applyLang();
  }

  window.LorkinI18n = { get: t, setLang: setLang };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang();
    var zhBtn = document.getElementById("lang-zh");
    var enBtn = document.getElementById("lang-en");
    if (zhBtn) zhBtn.addEventListener("click", function () { setLang("zh"); });
    if (enBtn) enBtn.addEventListener("click", function () { setLang("en"); });
  });
})();