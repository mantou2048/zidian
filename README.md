# 中华字典

一个简洁的中华字典网站，纯文字展示汉字的详细信息，包括拼音、笔画、部首、字义、字形结构、组词和成语等。

## 功能特点

- 📝 纯文字内容，简洁易读
- 🔍 汉字搜索功能
- 📖 详细的字典信息（拼音、笔画、部首、字义等）
- 🎨 响应式设计，支持移动端
- ⚡ 静态网站，加载快速
- 🌐 适合部署到 Cloudflare Pages

## 字典内容

目前收录了20个常用汉字，包括：

人、天、地、水、火、木、金、土、山、日、月、风、雨、云、石、竹、花、草、林、田

每个汉字包含以下信息：
- **拼音**：标准汉语拼音
- **笔画**：笔画数
- **部首**：汉字部首
- **字义**：详细释义
- **字形结构**：字形演变和构成
- **组词**：常用词组
- **成语**：相关成语

## 部署到 Cloudflare Pages

### 方法一：通过 Git 仓库部署（推荐）

1. **创建 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **推送到 GitHub**
   - 在 GitHub 创建一个新仓库
   - 推送代码到 GitHub：
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git branch -M main
   git push -u origin main
   ```

3. **连接到 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 "Pages" 页面
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择你的 GitHub 仓库
   - 配置构建设置：
     - **项目名称**：自定义名称
     - **生产分支**：main
     - **构建命令**：留空（静态站点无需构建）
     - **构建输出目录**：`/`（根目录）
   - 点击 "Save and Deploy"

4. **等待部署完成**
   - Cloudflare 会自动部署你的网站
   - 部署完成后会得到一个 `.pages.dev` 域名

### 方法二：直接上传文件

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages" 页面
3. 点击 "Create a project"
4. 选择 "Upload assets"
5. 上传以下文件：
   - index.html
   - style.css
   - script.js
6. 点击 "Deploy site"

### 自定义域名（可选）

1. 在 Cloudflare Pages 项目设置中
2. 进入 "Custom domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

## 本地开发

直接用浏览器打开 `index.html` 文件即可预览。

或者使用简单的 HTTP 服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve

# 使用 PHP
php -S localhost:8000
```

然后在浏览器访问 `http://localhost:8000`

## 扩展字典内容

要添加更多汉字，编辑 `script.js` 文件中的 `dictionary` 对象：

```javascript
const dictionary = {
    '汉': {
        pinyin: 'hàn',
        strokes: '5',
        radicals: '氵',
        meaning: '汉字的释义...',
        examples: '组词示例...',
        composition: '字形结构...',
        idioms: '相关成语...'
    },
    // 添加更多汉字...
};
```

## 文件结构

```
.
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript 逻辑和字典数据
└── README.md       # 说明文档
```

## 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- 无需任何框架或构建工具

## 浏览器支持

- Chrome / Edge (现代版本)
- Firefox (现代版本)
- Safari (现代版本)
- 移动端浏览器

## 许可证

MIT License

## 贡献

欢迎提交 Pull Request 来扩充字典内容或改进功能！
