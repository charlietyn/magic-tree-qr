## 🇪🇸 Modernización V2 — rama de desarrollo

La refactorización se está realizando **incrementalmente**, siguiendo el plan maestro V2.0,
en la rama **feat/mtq-master-plan-v2-qr-integrity** de **charlietyn/magic-tree-qr**.

Esta rama incorpora: codificador QR separado del código React/WebGPU; validación
centralizada; protección de enlaces y sesión; preservación exacta del contenido; QR
estándar PNG/SVG/ZIP; alternativa 2D sin WebGPU; importación limitada; protección
contra enlaces corruptos, ZIP de evidencias y tests unitarios/de integración.

**No están completas las nueve fases.** Todavía faltan pruebas de compilación,
escaneo real de imágenes, ejecución en navegadores y regresión visual de estaciones.

### Desarrollo local en Node.js 22+ / WSL2 / Windows

    git clone https://github.com/charlietyn/magic-tree-qr.git
    cd magic-tree-qr
    git switch feat/mtq-master-plan-v2-qr-integrity
    npm run verify:local -- --install
    npm run dev

El verificador crea un ZIP privado con logs, SHA-256 y estado real de las pruebas.

[Estado verificable del plan V2](docs/development/MTQ_V2_EXECUTION_STATUS.md) ·
[Diagnóstico inicial](docs/architecture/MTQ_V2_BASELINE.md) ·
[Arquitectura modular](docs/architecture/MTQ_V2_ARCHITECTURE.md) ·
[QA manual](docs/development/MTQ_V2_MANUAL_QA.md) ·
[Verificación local](docs/development/MTQ_V2_LOCAL_VALIDATION.md)

---

# 🌲 3D 艺术二维码生成器 (Magic Tree QR)

> 基于 **WebGPU** 和 **React** 的高性能 3D 体素艺术二维码生成器。将任意网址、文本或内容转化为生长摇曳的四季 3D 魔法树，支持真实扫码识别、二维码图片截图识别解析与四季沉浸式视听体验。

🌐 **在线体验**：[https://tree.ppweilai.online/](https://tree.ppweilai.online/)

---

## ✨ 核心特性

- 🌲 **WebGPU 极速体素渲染**：基于原生 WebGPU 与 WGSL 着色器管线，毫秒级实时演算三维体素树木、分形枝干、万片树叶与微风扰动物理系统。
- 🌸 **完整四季视觉主题**：
  - **🌸 春季（Spring）**：漫天粉红樱花花海，伴随轻盈落樱飞舞与和风呢喃；
  - **🍃 夏季（Summer）**：郁郁葱葱的深绿树冠，伴有林间光斑与 10 只翩翩起舞的蝴蝶；
  - **🍁 秋季（Autumn）**：层林尽染的金黄红叶，带有地面湿润反光与连绵秋雨涟漪；
  - **❄️ 冬季（Winter）**：雅致的雪覆苍松、霜晶雾凇与冬青红梅点缀，伴随漫天旋转飘洒的鹅毛大雪。
- 📷 **全能二维码识别与生成**：
  - **文本/网址输入**：支持符合 QR 容量限制的文本、UTF-8 字符及网址生成二维码；
  - **传图识别**：内置 jsQR 纯前端引擎，点击相机图标即可选择二维码图片秒级解析；
  - **截图粘贴（Ctrl+V）**：无需保存文件，微信/系统截图后直接在页面按 `Ctrl+V` 一键生成；
  - **拖拽支持**：拖入二维码图片文件直接解析。
- 🎯 **3D / 2D 双视角无缝切换**：
  - 点击 3D 树木即可平滑过渡至正上方 2D 视角，实际扫码效果取决于设备、尺寸与对比度；建议使用标准 QR 导出进行可靠识别；
  - 再次点击无缝回归 3D 沉浸式观赏视角。
- 🎨 **丰富配色调色板**：支持默认配色与薰衣草紫、珊瑚红、金黄、天蓝、雪白等自定义主题色彩。
- 🎵 **四季环境音效**：内置专属于春夏秋冬的白噪音与沉浸式背景音乐。

---

## 🛠️ 技术栈

- **构建工具**：[Vite](https://vitejs.dev/)
- **前端框架**：[React 19](https://react.dev/)
- **图形渲染**：[WebGPU](https://www.w3.org/TR/webgpu/) / [WGSL Shaders](https://www.w3.org/TR/WGSL/)
- **二维码编解码**：`qrcode` / `jsqr`
- **部署平台**：Cloudflare Pages / Workers

---

## 🚀 本地开发与运行

### 1. 克隆项目
```bash
git clone https://github.com/xscanzm/magic-tree-qr.git
cd magic-tree-qr
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```
打开浏览器访问 `http://localhost:3000` 即可体验。

### 4. 生产打包
```bash
npm run build
```
编译产物将输出至 `dist/` 目录。

---

## 📜 致敬与鸣谢

- 致敬：[icqr](https://icqr.com)
- 汉化与冬季重构：[xscanzm](https://github.com/xscanzm)

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源。
