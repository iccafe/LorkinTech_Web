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
      zh: "COMSOL 产品库：多物理场仿真平台、仿真 App 部署产品与专业附加模块",
      en: "The COMSOL product suite: multiphysics simulation platform, simulation app deployment products, and add-on modules"
    },

    // -- Product library intro --
    "prod.suite.title": { zh: "COMSOL 产品库", en: "The COMSOL Product Suite" },
    "prod.suite.p1": {
      zh: "COMSOL Multiphysics® 是一款适用于各个工程、制造和科研领域的通用多物理场仿真软件，支持模拟单个物理场、灵活耦合多个物理场，并提供仿真 App 开发与模型管理等工具。附加产品 COMSOL Compiler™ 和 COMSOL Server™ 帮助您轻松地分发、部署仿真 App，实现高效协作，让仿真分析赋能设计、制造与研发部门以及其他合作者。",
      en: "COMSOL Multiphysics® is a general-purpose multiphysics simulation software for engineering, manufacturing, and scientific research. It models single or flexibly coupled multiphysics problems and provides tools for simulation app development and model management. Add-on products COMSOL Compiler™ and COMSOL Server™ let you easily distribute and deploy simulation apps for efficient collaboration, empowering design, manufacturing, and R&D teams as well as partners."
    },
    "prod.suite.p2": {
      zh: "丰富的附加模块为电磁、结构力学、声学、流体流动、传热和化工等领域提供专业的分析功能，所有附加模块都可以与 COMSOL Multiphysics® 组合使用，提供一致的建模工作流程和使用体验。同时，多个接口产品还支持与 CAD 和其他第三方软件的链接，为您提供更全面的仿真解决方案。",
      en: "A rich portfolio of add-on modules delivers specialized analysis for electromagnetics, structural mechanics, acoustics, fluid flow, heat transfer, and chemical engineering. All add-on modules can be combined with COMSOL Multiphysics®, offering a consistent modeling workflow and experience. Interface products also link with CAD and other third-party software for a more complete simulation solution."
    },

    // -- Platform --
    "prod.platform.title": { zh: "COMSOL Multiphysics 仿真平台", en: "COMSOL Multiphysics Simulation Platform" },
    "prod.platform.desc": {
      zh: "COMSOL Multiphysics 一款适用于各个工程、制造和科研领域的通用多物理场仿真软件，支持模拟电磁、结构力学、声学、流体流动、传热、化学等物理场及其之间的任意耦合。平台内置模型开发器、App 开发器与模型管理器三大组件，配合丰富的附加模块与接口产品，提供从几何建模、物理场设置、网格划分、求解计算到结果分析的一致化工作流程。",
      en: "COMSOL Multiphysics is a general-purpose multiphysics simulation software applicable to engineering, manufacturing, and scientific research. It supports modeling and arbitrary coupling of electromagnetics, structural mechanics, acoustics, fluid flow, heat transfer, and chemistry. The platform includes three core components — the Model Builder, Application Builder, and Model Manager — and, together with a rich portfolio of add-on and interface products, delivers a consistent workflow from geometry modeling and physics setup to meshing, solving, and result analysis."
    },
    "prod.comp1": { zh: "模型开发器", en: "Model Builder" },
    "prod.comp1.d": {
      zh: "完整覆盖几何与 CAD、基于物理场或方程建模、网格划分、研究与优化、求解以及可视化的全生命周期建模工作流。",
      en: "A complete modeling lifecycle covering geometry and CAD, physics- and equation-based modeling, meshing, studies and optimization, solving, and visualization."
    },
    "prod.comp2": { zh: "App 开发器", en: "Application Builder" },
    "prod.comp2.d": {
      zh: "将专业仿真模型封装为带专属界面的仿真 App，供设计、制造、运营团队及客户中的非仿真专业人员便捷使用。",
      en: "Turn simulation models into standalone simulation apps with dedicated user interfaces, usable by non-experts on design, manufacturing, operations teams and with customers."
    },
    "prod.comp3": { zh: "模型管理器", en: "Model Manager" },
    "prod.comp3.d": {
      zh: "集中管理仿真数据，支持版本控制、协同开发、标签分类检索与精细的访问权限设置。",
      en: "Centrally manage simulation data with version control, collaborative development, tagged search, and fine-grained access control."
    },

    // -- App deployment --
    "prod.deploy.title": { zh: "仿真 App 的部署产品", en: "Simulation App Deployment Products" },
    "prod.deploy.desc": {
      zh: "将仿真 App 便捷地分发到设计、制造、运营和客户手中，让仿真成果贯通分析、设计与生产全流程。",
      en: "Distribute simulation apps to design, manufacturing, operations teams and customers, bridging simulation from analysis through design to production."
    },
    "prod.compiler": { zh: "COMSOL Compiler™", en: "COMSOL Compiler™" },
    "prod.compiler.d": {
      zh: "COMSOL Multiphysics 的附加产品，用于将仿真 App 编译为可独立运行的应用程序，无需安装 COMSOL 软件即可运行。",
      en: "An add-on to COMSOL Multiphysics that compiles simulation apps into standalone applications that run without a COMSOL installation."
    },
    "prod.server": { zh: "COMSOL Server™", en: "COMSOL Server™" },
    "prod.server.d": {
      zh: "仿真 App 的管理与部署工具，支持通过网页浏览器或瘦客户端在组织内部和外部集中运行仿真 App，实现高效协作。",
      en: "A management and deployment tool for simulation apps, enabling centralized app execution on web browsers and thin clients, inside and outside an organization."
    },

    // -- Modules --
    "prod.modules.title": { zh: "专业附加模块与接口产品", en: "Add-on Modules and Interface Products" },
    "prod.modules.desc": {
      zh: "所有附加模块和接口产品均基于 COMSOL Multiphysics 平台组合使用，提供一致、高效的建模流程，覆盖电磁、结构力学、声学、流体与传热、化工以及多功能与数据接口等领域。",
      en: "All add-on modules and interface products are used with the COMSOL Multiphysics platform, offering a consistent and efficient modeling workflow across electromagnetics, structural mechanics, acoustics, fluid flow and heat transfer, chemical engineering, and multipurpose and interface capabilities."
    },
    
    // Cat
    "mod.cat.em": { zh: "电磁", en: "Electromagnetics" },
    "mod.cat.fluid": { zh: "流体 & 传热", en: "Fluid Flow & Heat Transfer" },
    "mod.cat.struct": { zh: "结构 & 声学", en: "Structural Mechanics & Acoustics" },
    "mod.cat.chem": { zh: "化工", en: "Chemical Engineering" },
    "mod.cat.multipurpose": { zh: "多功能", en: "Multipurpose" },
    "mod.cat.interface": { zh: "接口", en: "Interfaces" },

    "catd.em": {
      zh: "覆盖 AC/DC、RF、光学、等离子体、放电与半导体的完整电磁建模仿真能力。",
      en: "Complete electromagnetics modeling from AC/DC, RF, optics, plasma, and discharge to semiconductors."
    },
    "catd.fluid": {
      zh: "从层流湍流、多相流到传热与金属加工的流体与热分析全谱系模块。",
      en: "A full spectrum of fluid flow and heat transfer modules, from laminar and turbulent to multiphase and metal processing."
    },
    "catd.struct": {
      zh: "涵盖线性/非线性结构、复合材料、疲劳、转子与多体动力学的结构声学模块群。",
      en: "Structural and acoustic modules covering linear/nonlinear analysis, composites, fatigue, rotordynamics, and multibody dynamics."
    },
    "catd.chem": {
      zh: "面向反应工程、电池、燃料电池、电镀与腐蚀的电化学化工模块。",
      en: "Chemical engineering modules for reaction engineering, batteries, fuel cells, electrodeposition, and corrosion."
    },
    "catd.multi": {
      zh: "优化、不确定性量化、材料库、粒子追踪与气液属性的多功能工具。",
      en: "Multipurpose tools for optimization, uncertainty quantification, material library, particle tracing, and fluid properties."
    },
    "catd.interface": {
      zh: "与 MATLAB、Simulink、Excel 及主流 CAD/ECAD 软件的无缝集成接口。",
      en: "Seamless interfaces with MATLAB, Simulink, Excel, and leading CAD/ECAD software."
    },
    "catd.platform": {
      zh: "通用多物理场仿真平台，内置模型开发器、App 开发器与模型管理器。",
      en: "General-purpose multiphysics simulation platform with Model Builder, Application Builder, and Model Manager."
    },
    "back.products": { zh: "← 返回产品介绍", en: "← Back to Products" },
    "prod.view": { zh: "查看模块", en: "View Modules" },
    "prod.platform.card.title": { zh: "COMSOL Multiphysics 平台", en: "COMSOL Multiphysics Platform" },

    // EM (7)
    "mod.acdc": { zh: "AC/DC 模块", en: "AC/DC Module" },
    "mod.acdc.d": {
      zh: "针对电机、变压器、制动器、高压隔离开关等低频电磁应用，仿真静电场、电流场、磁场与电磁力，支持与结构、传热及电路耦合。",
      en: "Designed for low-frequency electromagnetic applications such as motors, transformers, brakes, and high-voltage switchgear, modeling electrostatics, current, magnetic fields, and electromagnetic forces, with coupling to structural, thermal, and circuit simulations."
    },
    "mod.rf": { zh: "RF 模块", en: "RF Module" },
    "mod.rf.d": {
      zh: "面向射频与微波器件，仿真天线、滤波器、波导与微带电路，支持 S 参数、谐波分析及与传热、结构耦合，广泛用于 5G 与无线通信。",
      en: "For RF and microwave devices, simulating antennas, filters, waveguides, and microstrip circuits with S-parameters and harmonic analysis, coupled to thermal and structural analysis, widely used in 5G and wireless communication."
    },
    "mod.waveopt": { zh: "波动光学模块", en: "Wave Optics Module" },
    "mod.waveopt.d": {
      zh: "基于 Maxwell 方程仿真光的传播、衍射、干涉与偏振，适用于光波导、光子晶体、超表面与衍射光栅等微纳光学器件。",
      en: "Simulates wave propagation, diffraction, interference, and polarization based on Maxwell's equations, for waveguides, photonic crystals, metasurfaces, and diffraction gratings in micro- and nano-optics."
    },
    "mod.rayopt": { zh: "射线光学模块", en: "Ray Optics Module" },
    "mod.rayopt.d": {
      zh: "采用几何光学光线追踪法仿真透镜组、照明系统与光学成像，支持数千条光线的并行追踪及与结构、传热耦合。",
      en: "Uses ray-tracing geometric optics for lens systems, illumination, and imaging, with parallel tracing of thousands of rays and coupling to structural and thermal analysis."
    },
    "mod.plasma": { zh: "等离子体模块", en: "Plasma Module" },
    "mod.plasma.d": {
      zh: "仿真电晕放电、电容耦合等离子体与等离子体化学，支持与流体、传热及化学反应的耦合，用于半导体刻蚀、镀膜等工艺。",
      en: "Models corona discharge, capacitively coupled plasmas, and plasma chemistry, coupled with fluid flow, heat transfer, and chemical reactions, for semiconductor etching and deposition processes."
    },
    "mod.discharge": { zh: "放电模块", en: "Electric Discharge Module" },
    "mod.discharge.d": {
      zh: "仿真气体放电、电晕与放电的击穿过程，支持表面电荷与流体耦合，应用于绝缘设计、静电除尘与保护器件。",
      en: "Simulates gas discharges, corona, and breakdown phenomena with surface charge and fluid coupling, for insulation design, electrostatic precipitators, and protective devices."
    },
    "mod.semicon": { zh: "半导体模块", en: "Semiconductor Module" },
    "mod.semicon.d": {
      zh: "基于漂移-扩散方程与泊松方程模拟双极晶体管、MOSFET、IGBT、太阳能电池及 LED、激光二极管等半导体器件，并可耦合传热与结构力学，用于半导体制造工艺与先进封装分析。",
      en: "Simulates semiconductor devices such as BJTs, MOSFETs, IGBTs, solar cells, LEDs, and laser diodes using drift-diffusion and Poisson equations, with coupling to heat transfer and structural mechanics for manufacturing and advanced packaging analysis."
    },

    // Fluid & heat (11)
    "mod.cfd": { zh: "CFD 模块", en: "CFD Module" },
    "mod.cfd.d": {
      zh: "领先生物、制药、食品等行业的计算流体动力学建模，涵盖层流与湍流、多相流、自由表面及流固耦合，可扩展至化学反应的仿真。",
      en: "Industry-leading CFD modeling for biomedical, pharmaceutical, and food applications, including laminar and turbulent flow, multiphase flow, free surfaces, and fluid-structure interaction, extendable to reacting flows."
    },
    "mod.mixer": { zh: "搅拌器模块", en: "Mixer Module" },
    "mod.mixer.d": {
      zh: "面向旋转机械的专用仿真工具，可自动处理旋转域、叶轮与搅拌器几何，常用的建模方法可用于有序仿真、混合和反应研究。",
      en: "A dedicated tool for rotating machinery, automatically handling rotating domains, impellers, and mixer geometries, with methods for orderly pattern simulation, mixing, and reaction studies."
    },
    "mod.polymer": { zh: "聚合物流动模块", en: "Polymer Flow Module" },
    "mod.polymer.d": {
      zh: "基于广义牛顿与非牛顿本构模型仿真聚合物加工，覆盖注塑、吹塑、挤出与热成型中的流动、传热与结晶行为。",
      en: "Models polymer processing using generalized Newtonian and non-Newtonian constitutive models, covering flow, heat transfer, and crystallization in injection molding, blow molding, extrusion, and thermoforming."
    },
    "mod.microfluid": { zh: "微流体模块", en: "Microfluidics Module" },
    "mod.microfluid.d": {
      zh: "面向微尺度流体，支持 Creeping Flow、电渗流、收缩流与表面张力效应，应用于芯片实验室、微混合器与微分离器件。",
      en: "For microscale flows with creeping flow, electroosmosis, contractions, and surface tension effects, applied to lab-on-a-chip, micromixers, and micro-separation devices."
    },
    "mod.porous": { zh: "多孔介质流模块", en: "Porous Media Flow Module" },
    "mod.porous.d": {
      zh: "仿真多孔介质中的流动、多相流、自由流动耦合与反应性传输，用于过滤、土壤修复、燃料电池与岩体渗流分析。",
      en: "Simulates flow in porous media, including multiphase flow, coupling to free flow, and reactive transport, for filtration, soil remediation, fuel cells, and subsurface seepage."
    },
    "mod.subsurface": { zh: "地下水流模块", en: "Subsurface Flow Module" },
    "mod.subsurface.d": {
      zh: "仿真饱和与非饱和地下水流动、多组分溶质传输与热度传导，支持地质力学耦合，应用于含水层评价、环境影响评估与地热能。",
      en: "Simulates saturated and unsaturated groundwater flow, multi-species solute transport, and heat transfer with geomechanics coupling, for aquifer assessment, environmental impact, and geothermal energy."
    },
    "mod.pipe": { zh: "管道流模块", en: "Pipe Flow Module" },
    "mod.pipe.d": {
      zh: "面向管道、沟槽及网络化流体系统的布局仿真，可包含压力波、热量传递与瞬态效应，应用于大型管网与流体输送系统设计。",
      en: "Simulates flow in pipes, grooves, and networked fluid systems, including pressure waves, heat transfer, and transient effects, applied to large-scale piping and fluid delivery systems."
    },
    "mod.molecular": { zh: "分子流模块", en: "Molecular Flow Module" },
    "mod.molecular.d": {
      zh: "基于用户控制、可视化定义的自由分子流域，仿真真空系统与极稀薄气体中的分子流，用于真空设备与高真空工艺设计。",
      en: "Models molecular flow in vacuum systems and extremely rarefied gases based on user-controlled, visual free-molecular flow domains, for vacuum equipment and high-vacuum processes."
    },
    "mod.granular": { zh: "颗粒流模块", en: "Granular Flow Module" },
    "mod.granular.d": {
      zh: "仿真散料、颗粒物料与悬杂流的流动行为，可用于料斗、筒仓、输送与沉降过程的设计与优化。",
      en: "Simulates the flow behavior of bulk solids, granular materials, and suspensions, for the design and optimization of hoppers, silos, conveying, and sedimentation."
    },
    "mod.metal": { zh: "金属加工模块", en: "Metal Processing Module" },
    "mod.metal.d": {
      zh: "面向金属加工工业应用中的流体流动与热量传递建模，可加入相变、湍流与电磁感应，应用于铸造、淬火与感应加热分析。",
      en: "Models fluid flow and heat transfer in metal processing, adding phase change, turbulence, and electromagnetic induction for casting, quenching, and induction heating analysis."
    },
    "mod.heat": { zh: "传热模块", en: "Heat Transfer Module" },
    "mod.heat.d": {
      zh: "涵盖传导、对流与辐射传热，支持薄结构、相变、驻点传热与复合材料等应用，并可与流体流动、电磁、结构和反应工程耦合。",
      en: "Covers conduction, convection, and radiation, supporting thin structures, phase change, stagnation heat transfer, and composite applications, coupled to fluid flow, electromagnetics, structures, and reaction engineering."
    },

    // Structural & acoustic (9)
    "mod.struct": { zh: "结构力学模块", en: "Structural Mechanics Module" },
    "mod.struct.d": {
      zh: "用于结构分析，包括势场与应变场建模、线性与非线性分析、动态加载等，包含大型的零件库，可用于涉及力学与多物理耦合的分析。",
      en: "For structural analysis including stress and strain fields, linear and nonlinear analysis, and dynamic loads, with a large parts library for mechanical and multiphysics applications."
    },
    "mod.nlstruct": { zh: "非线性结构材料模块", en: "Nonlinear Structural Materials Module" },
    "mod.nlstruct.d": {
      zh: "提供超弹性、粘弹性、塑性、蠕变等非线性材料模型，模拟橡胶、聚合物与金属等材料的大变形与疲劳失效行为。",
      en: "Provides nonlinear material models such as hyperelastic, viscoelastic, plastic, and creep behavior, simulating large deformations and failure in rubbers, polymers, and metals."
    },
    "mod.composite": { zh: "复合材料模块", en: "Composite Materials Module" },
    "mod.composite.d": {
      zh: "建立特定铺层的复合材料模型，分析复合材料层合板的内部应力和失效模式，评估各材料组分对整体性能的影响。",
      en: "Builds ply-based composite models, analyzing interlaminar stresses and failure modes in laminated composites and the effect of material constituents on overall performance."
    },
    "mod.geomech": { zh: "岩土力学模块", en: "Geomechanics Module" },
    "mod.geomech.d": {
      zh: "面向土木与地质工程的结构分析，支持多孔介质中的固结、硬化土壤模型及动力学分析，应用于隧道、边坡与地基工程。",
      en: "Structural analysis for civil and geotechnical engineering, supporting consolidation, hardening soil models, and dynamic analysis in porous media, for tunnels, slopes, and foundations."
    },
    "mod.fatigue": { zh: "疲劳模块", en: "Fatigue Module" },
    "mod.fatigue.d": {
      zh: "基于应力寿命、应变寿命与积累的疲劳分析评估结构的疲劳性能，支持不同周期与加载条件的分析，并可作为结构工程的组成部分。",
      en: "Evaluates structural fatigue using stress-life, strain-life, and cumulative fatigue criteria under various load cycles and conditions, integrated into structural engineering studies."
    },
    "mod.rotor": { zh: "转子动力学模块", en: "Rotordynamics Module" },
    "mod.rotor.d": {
      zh: "针对旋转机械的转子动力学特性进行仿真，分析临界转速、偏心度与自然频率，涵盖叠加谐波、轴承刚度与不平衡激励等效应。",
      en: "Simulates rotordynamics of rotating machinery, analyzing critical speeds, eccentricity, and natural frequencies, including harmonic superposition, bearing stiffness, and unbalance excitation."
    },
    "mod.multibody": { zh: "多体动力学模块", en: "Multibody Dynamics Module" },
    "mod.multibody.d": {
      zh: "通过自动生成的刚性和柔性连接件建立模型，在统一环境中仿真机械装置的动力学行为，可包含齿轮、皮带、链条等传动系统的仿真。",
      en: "Builds models with automatically generated rigid and flexible joints, simulating the dynamic behavior of mechanical devices in a unified environment, including gears, belts, and chains in transmission systems."
    },
    "mod.mems": { zh: "MEMS 模块", en: "MEMS Module" },
    "mod.mems.d": {
      zh: "专用于微机电系统的设计与分析，为传感器、执行器与微电子机械器件提供应力、静电、压电等多物理场耦合仿真。",
      en: "Specialized for MEMS design and analysis, providing multiphysics simulation of stress, electrostatics, and piezoelectric effects in sensors, actuators, and micro-electromechanical devices."
    },
    "mod.acoustics": { zh: "声学模块", en: "Acoustics Module" },
    "mod.acoustics.d": {
      zh: "仿真声压、结构传声、振动与噪声、扩音设备、消声器及扬声器，覆盖声-固、压电-声等多物理场声学建模与分析。",
      en: "Simulates pressure acoustics, structural acoustics, vibration and noise, loudspeakers, and mufflers, with multiphysics acoustic modeling such as acousto-structural and piezoelectric-acoustic coupling."
    },

    // Chemical (6)
    "mod.chem": { zh: "化学反应工程模块", en: "Chemical Reaction Engineering Module" },
    "mod.chem.d": {
      zh: "为化学动力学与化学反应提供一个专用接口，可使用用户自定义的动力学表达式，分析质量、能量和动量传递对过程的影响。",
      en: "Provides a dedicated interface for chemical kinetics and reactions, with user-defined kinetic expressions, analyzing how mass, energy, and momentum transfer influence processes."
    },
    "mod.battery": { zh: "电池模块", en: "Battery Design Module" },
    "mod.battery.d": {
      zh: "为电化学电池设计提供专用接口，支持电池多尺度、多物理仿真，可针对电池几何结构、材料与制造参数进行尺寸、形状与位置优化。",
      en: "Provides dedicated interfaces for electrochemical cell design, supporting multiscale, multiphysics battery simulation and sizing, shape, and topology optimization of cell geometry, materials, and manufacturing."
    },
    "mod.fuelcell": { zh: "燃料电池和电解槽模块", en: "Fuel Cell & Electrolyzer Module" },
    "mod.fuelcell.d": {
      zh: "适用于燃料电池和电解槽中的传导、流动与电化学仿真，支持通过几何、材料与工作条件的变更来分析、改善系统设计。",
      en: "For modeling conduction, flow, and electrochemistry in fuel cells and electrolyzers, analyzing system designs through changes in geometry, materials, and operating conditions."
    },
    "mod.electrodep": { zh: "电镀模块", en: "Electrodeposition Module" },
    "mod.electrodep.d": {
      zh: "仿真电场、电流与物质传输驱动的电沉积过程，预测镀层厚度分布，支持与流体和结构耦合，应用于电镀工艺优化。",
      en: "Simulates electrodeposition driven by electric fields, currents, and mass transport, predicting deposit thickness distributions, coupled with fluid flow and structures for plating process optimization."
    },
    "mod.corrosion": { zh: "腐蚀模块", en: "Corrosion Module" },
    "mod.corrosion.d": {
      zh: "研究金属材料的电化学腐蚀机理，评估阴极系统、腐蚀抑制剂与涂层设计，可耦合流体与传热用于工程防腐设计。",
      en: "Studies electrochemical corrosion mechanisms in metals, evaluating cathodic protection, corrosion inhibitors, and coating designs, coupled with flow and heat transfer for engineering corrosion protection."
    },
    "mod.electrochem": { zh: "电化学模块", en: "Electrochemistry Module" },
    "mod.electrochem.d": {
      zh: "模拟电池、电镀池、腐蚀系统及其他电化学装置的电流、电荷与物质传输，支持与电极表面反应动力学、流体流动的耦合。",
      en: "Simulates current, charge, and mass transport in batteries, plating baths, corrosion systems, and other electrochemical devices, coupled with electrode kinetics and fluid flow."
    },

    // Multipurpose (5)
    "mod.optim": { zh: "优化模块", en: "Optimization Module" },
    "mod.optim.d": {
      zh: "对存在多个目标的工程设计进行参数优化、形状优化与拓扑优化，可与任何物理场结合使用，自动搜索满足约束的最佳设计。",
      en: "Performs parameter, shape, and topology optimization for multi-objective engineering design, usable with any physics to automatically search for the best design under constraints."
    },
    "mod.uq": { zh: "不确定性量化模块", en: "Uncertainty Quantification Module" },
    "mod.uq.d": {
      zh: "对模型中材料数据、运行条件等不确定性输入进行系统的量化分析，预测模型结果的不确定范围，支持灵敏度与可靠性分析。",
      en: "Systematically quantifies uncertainty in inputs such as material data and operating conditions, predicting uncertainty bounds in results, with sensitivity and reliability analysis."
    },
    "mod.matlib": { zh: "材料库", en: "Material Library" },
    "mod.matlib.d": {
      zh: "提供强大的材料属性数据库及材料数据管理工具，支持自定义材料子集与快捷搜索引用，涵盖金属、聚合物、陶瓷、半导体与电池材料等。",
      en: "Provides a comprehensive database of material properties and management tools, supporting custom material subsets and quick search and access, covering metals, polymers, ceramics, semiconductors, and battery materials."
    },
    "mod.particle": { zh: "粒子追踪模块", en: "Particle Tracing Module" },
    "mod.particle.d": {
      zh: "仿真带电粒子、中性粒子和质量粒子的运动轨迹与碰撞，可与电磁场、流体流动等物理场耦合，应用于喷镀、分离器、束流分析等。",
      en: "Simulates trajectories and collisions of charged, neutral, and mass particles, coupled with electromagnetic fields and fluid flow, applied to sputtering, separators, and beam analysis."
    },
    "mod.lg": { zh: "气液属性模块", en: "Liquid & Gas Properties Module" },
    "mod.lg.d": {
      zh: "提供液体和气体在特定温度与压力下的密度、粘度、导热率等属性数据，可由用户定义混合物，用于更真实的流动与传热仿真。",
      en: "Provides properties of liquids and gases such as density, viscosity, and thermal conductivity at given temperatures and pressures, with user-defined mixtures for more realistic flow and heat transfer modeling."
    },

    // Interfaces (10)
    "mod.livelink-matlab": { zh: "LiveLink™ for MATLAB®", en: "LiveLink™ for MATLAB®" },
    "mod.livelink-matlab.d": {
      zh: "将 COMSOL Multiphysics 与 MATLAB 双向集成，可在建模与求解过程中直接调用 MATLAB 脚本和函数。",
      en: "Bi-directional integration of COMSOL Multiphysics with MATLAB, calling MATLAB scripts and functions directly during modeling and solving."
    },
    "mod.livelink-simulink": { zh: "LiveLink™ for Simulink®", en: "LiveLink™ for Simulink®" },
    "mod.livelink-simulink.d": {
      zh: "在 Simulink 中将 COMSOL 模型作为 S 函数直接作为控制系统中仿真的组成部分。",
      en: "Directly integrates COMSOL models as S-functions within Simulink for control system simulation."
    },
    "mod.livelink-excel": { zh: "LiveLink™ for Excel®", en: "LiveLink™ for Excel®" },
    "mod.livelink-excel.d": {
      zh: "将 COMSOL Multiphysics 与 Excel 紧密集成，可在工作表中交互式创建、修改与计算 COMSOL 模型及仿真 App。",
      en: "Tight integration of COMSOL Multiphysics with Excel for interactive creation, modification, and computation of COMSOL models and simulation apps in spreadsheets."
    },
    "mod.cadimport": { zh: "CAD 导入模块", en: "CAD Import Module" },
    "mod.cadimport.d": {
      zh: "导入多种格式的 CAD 几何，提供的“修复与简化”、“不精确固体”与“薄实体数据库”功能可让仿真工程师方便地清理 CAD 模型，以便进行仿真分析。",
      en: "Imports CAD geometry in multiple formats with features for repairing and simplifying CAD geometry, including imprecise solids and thin solid databases, to make simulation-ready models."
    },
    "mod.design": { zh: "设计模块", en: "Design Module" },
    "mod.design.d": {
      zh: "提供构造几何形状、布尔操作与参数化 CAD 工具，可在 COMSOL 环境中直接创建和修改几何模型。",
      en: "Provides geometry construction, Boolean operations, and parametric CAD tools to create and modify geometry directly in the COMSOL environment."
    },
    "mod.ecad": { zh: "ECAD 导入模块", en: "ECAD Import Module" },
    "mod.ecad.d": {
      zh: "导入 GDS、OASIS、ODB++、IPC 等常见 ECAD 格式的 PCB 布局与封装几何，用于电子器件的热、电磁与结构分析。",
      en: "Imports PCB layouts and package geometry in common ECAD formats such as GDS, OASIS, ODB++, and IPC, for thermal, electromagnetic, and structural analysis of electronics."
    },
    "mod.sw": { zh: "LiveLink™ for SOLIDWORKS®", en: "LiveLink™ for SOLIDWORKS®" },
    "mod.sw.d": {
      zh: "在 SOLIDWORKS 环境中同步 COMSOL 模型，实现参数化、CAD 装配体到仿真模型的无缝衔接。",
      en: "Keeps COMSOL models in sync within SOLIDWORKS for seamless, parametric CAD assembly to simulation."
    },
    "mod.inventor": { zh: "LiveLink™ for Inventor®", en: "LiveLink™ for Inventor®" },
    "mod.inventor.d": {
      zh: "在 Inventor 环境中将 CAD 模型与 COMSOL 模型保持同步，支持参数化扫描与双向更新。",
      en: "Keeps CAD and COMSOL models in sync within Inventor with parametric sweeps and bi-directional updates."
    },
    "mod.autocad": { zh: "LiveLink™ for AutoCAD®", en: "LiveLink™ for AutoCAD®" },
    "mod.autocad.d": {
      zh: "保留 COMSOL 和 AutoCAD 模型的设计与工程参数，同步模拟几何和各自的原生几何。",
      en: "Synchronizes COMSOL and AutoCAD models, preserving design and engineering parameters for simulation geometry alongside native geometry."
    },
    "mod.revit": { zh: "LiveLink™ for Revit®", en: "LiveLink™ for Revit®" },
    "mod.revit.d": {
      zh: "在 Revit 中将建筑信息模型（BIM）几何同步至 COMSOL，用于建筑与环境的多物理场仿真。",
      en: "Synchronizes Building Information Modeling (BIM) geometry from Revit to COMSOL for multiphysics simulation of buildings and the environment."
    },
    "mod.solidedge": { zh: "LiveLink™ for Solid Edge®", en: "LiveLink™ for Solid Edge®" },
    "mod.solidedge.d": {
      zh: "在 Solid Edge 环境中同步 COMSOL 模型，实现参数化 CAD 到仿真的无缝集成。",
      en: "Keeps COMSOL models in sync within Solid Edge for seamless parametric CAD to simulation integration."
    },
    "mod.catia": { zh: "File Import for CATIA® V5", en: "File Import for CATIA® V5" },
    "mod.catia.d": {
      zh: "在 COMSOL Multiphysics 中直接导入 CATIA V5 格式的装配体与零部件几何进行分析。",
      en: "Directly imports CATIA V5 assemblies and part geometry into COMSOL Multiphysics for analysis."
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
      zh: "覆盖晶圆制造与前道制程、半导体器件设计、先进封装、芯片散热与可靠性评估，以及 PCB 电磁兼容与功率器件电-热分析。",
      en: "Covers wafer fabrication and front-end processes, semiconductor device design, advanced packaging, chip cooling and reliability assessment, PCB EMC, and power device electro-thermal analysis."
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
"sem.cap1": { zh: "晶圆制造与前道制程", en: "Wafer Fabrication & Front-End Processes" },
"sem.cap1.d": { zh: "等离子体刻蚀与沉积（ICP/CCP 反应器）、CVD 与外延生长、离子注入及真空系统分子流、光刻与激光加热、CMP 平坦化等工艺设备与过程仿真。", en: "Simulate process equipment and phenomena including plasma etching and deposition (ICP/CCP reactors), CVD and epitaxial growth, ion implantation and molecular flow in vacuum systems, lithography and laser heating, and CMP planarization." },
"sem.cap3": { zh: "半导体器件设计", en: "Semiconductor Device Design" },
"sem.cap3.d": { zh: "漂移-扩散方程与泊松方程耦合求解，模拟双极晶体管、MOSFET、IGBT、肖特基二极管、p-n 结、太阳能电池及 LED、激光二极管等光电子器件。", en: "Coupled drift-diffusion and Poisson equations for simulating BJTs, MOSFETs, IGBTs, Schottky diodes, p-n junctions, solar cells, and optoelectronic devices such as LEDs and laser diodes." },
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
"elec.banner.desc": { zh: "从晶圆制造与前道制程、器件设计、先进封装到系统级可靠性的全流程多物理场仿真", en: "End-to-end multiphysics simulation from wafer fabrication and front-end processes to device design, advanced packaging, and system-level reliability" },
"elec.ov.title": { zh: "从晶圆制造到系统级可靠性的全流程仿真能力", en: "Full-Process Simulation from Wafer Fabrication to System-Level Reliability" },
"elec.ov.desc": { zh: "半导体产业正从平面器件走向 3D 集成与先进封装，制造与封装工艺涉及电、热、力、湿及等离子体等多种物理过程的强耦合。依托 COMSOL Multiphysics 统一建模环境，我们提供从晶圆制造与前道制程、半导体器件设计、先进封装与封测、散热热管理到结构可靠性的完整链路仿真，覆盖 PCB 电磁兼容与功率器件电-热分析等电子应用，助力企业缩短研发周期、提升良率与产品可靠性。", en: "The semiconductor industry is evolving from planar devices to 3D integration and advanced packaging, where manufacturing and packaging processes strongly couple electrical, thermal, mechanical, moisture, and plasma phenomena. Built on the unified COMSOL Multiphysics environment, we deliver full-chain simulation from wafer fabrication and front-end processes, semiconductor device design, and advanced packaging and test, to thermal management and structural reliability — while covering PCB EMC and power device electro-thermal analysis — helping companies shorten R&D cycles, raise yield, and improve reliability." },
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
"elec.app1": { zh: "晶圆制造与前道制程", en: "Wafer Fabrication & Front-End Processes" },
"elec.app1.d": { zh: "等离子体刻蚀与沉积（ICP/CCP）、CVD 与外延、离子注入与真空分子流、CMP 平坦化的工艺设备与过程仿真。", en: "Plasma etching and deposition (ICP/CCP), CVD and epitaxy, ion implantation and vacuum molecular flow, and CMP planarization for process equipment and process simulation." },
"elec.app2": { zh: "半导体器件设计", en: "Semiconductor Device Design" },
"elec.app2.d": { zh: "漂移-扩散与泊松方程耦合求解，模拟 MOSFET、IGBT、双极晶体管、肖特基二极管、太阳能电池、LED 与激光二极管等光电子器件。", en: "Coupled drift-diffusion and Poisson equations for MOSFETs, IGBTs, BJTs, Schottky diodes, solar cells, and optoelectronic devices such as LEDs and laser diodes." },
"elec.app3": { zh: "先进封装与 3D-IC", en: "Advanced Packaging & 3D-IC" },
"elec.app3.d": { zh: "TSV/微凸点、混合键合与回流焊工艺的应力、翘曲与堆叠散热，2.5D/3D 封装翘曲与界面失效预测。", en: "Stress, warpage, and stacking cooling of TSVs, micro-bumps, hybrid bonding, and reflow; warpage and interface failure prediction for 2.5D/3D packages." },
"elec.app4": { zh: "芯片与功率模块散热", en: "Chip & Power Module Cooling" },
"elec.app4.d": { zh: "AI/GPU 高算力芯片结温、IGBT 与功率器件电-热-结构耦合与热设计。", en: "Junction temperature of AI/GPU chips, and electro-thermal-structural coupling and thermal design of IGBT and power modules." },
"elec.app5": { zh: "PCB 电磁兼容", en: "PCB EMC" },
"elec.app5.d": { zh: "高速互连信号与电源完整性、辐射发射、抗扰度与电磁兼容分析。", en: "Signal and power integrity of high-speed interconnects, radiation, immunity, and EMC analysis." },
"elec.app6": { zh: "等离子体工艺仿真", en: "Plasma Process Simulation" },
"elec.app6.d": { zh: "ICP/CCP 刻蚀与沉积速率、均匀性及等离子体化学。", en: "ICP/CCP etch and deposition rate, uniformity, and plasma chemistry." },
"elec.app7": { zh: "可靠性评估", en: "Reliability Assessment" },
"elec.app7.d": { zh: "焊点蠕变与电迁移、热循环疲劳、高温高湿（HAST）高加速应力试验。", en: "Solder joint creep and electromigration, thermal cycling fatigue, and HAST reliability." },
"elec.app8": { zh: "器件与光电子仿真", en: "Device & Optoelectronics Simulation" },
"elec.app8.d": { zh: "双极晶体管、MOSFET、IGBT 及 LED、激光二极管的器件级建模与耦合分析。", en: "Device-level modeling and coupling analysis of BJTs, MOSFETs, IGBTs, LEDs, and laser diodes." },
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