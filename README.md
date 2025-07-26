# 服务器管理备忘录系统 (Hayser)

一个专为个人使用的服务器管理备忘录系统，帮助你管理服务器信息、SSH连接、第三方面板访问和实时监控。

## 🚀 功能特性

### 核心功能
- **服务器信息管理** - 记录服务器基本信息、硬件规格、费用和到期时间
- **第三方面板管理** - 支持1Panel、宝塔面板、cPanel等面板信息存储
- **SSH连接管理** - 安全存储SSH凭据，支持在线Web终端
- **配置信息存储** - 分类管理各种配置信息，敏感信息加密存储
- **实时监控** - 定时ping检测，uptime统计，状态变化通知
- **到期提醒** - 服务器续费时间跟踪和提前提醒

### 技术特性
- **单用户系统** - 专为个人使用设计，无需复杂的用户管理
- **数据加密** - 敏感信息AES加密存储，保障数据安全
- **实时通信** - WebSocket实现状态实时推送
- **响应式设计** - 支持桌面端和移动端访问

## 🛠️ 技术栈

### 前端
- React 18 + TypeScript
- Ant Design - UI组件库
- Redux Toolkit - 状态管理
- Recharts - 数据可视化
- xterm.js - Web SSH终端

### 后端
- Node.js + Express + TypeScript
- MySQL 5.7 + Sequelize ORM
- Socket.io - 实时通信
- node-pty - SSH连接
- node-cron - 定时任务

## 📁 项目结构

```
hayser/
├── backend/                 # 后端服务
│   ├── src/
│   │   ├── controllers/     # 控制器
│   │   ├── models/          # Sequelize模型
│   │   ├── routes/          # 路由定义
│   │   ├── services/        # 业务逻辑服务
│   │   ├── middleware/      # 中间件
│   │   ├── config/          # 配置文件
│   │   ├── migrations/      # 数据库迁移
│   │   ├── seeders/         # 种子数据
│   │   └── utils/           # 工具函数
│   ├── package.json
│   └── tsconfig.json
├── frontend/                # 前端应用
│   ├── src/
│   │   ├── components/      # React组件
│   │   ├── pages/           # 页面组件
│   │   ├── store/           # Redux store
│   │   ├── services/        # API服务
│   │   ├── types/           # TypeScript类型定义
│   │   └── utils/           # 工具函数
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- MySQL 5.7
- npm >= 8.0.0

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd hayser
```

2. **安装依赖**
```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

3. **配置数据库**
```bash
# 创建数据库
mysql -u root -p
CREATE DATABASE hayser_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 运行数据库迁移
cd backend
npm run migrate
npm run seed
```

4. **启动服务**
```bash
# 启动后端服务
cd backend
npm run dev

# 启动前端服务
cd frontend
npm start
```

5. **访问应用**
- 前端地址: http://localhost:3000
- 后端API: http://localhost:5000

## 📖 使用说明

### 服务器管理
1. 在服务器列表页面添加新服务器
2. 填写服务器基本信息（名称、IP、端口等）
3. 配置SSH连接信息
4. 添加第三方面板访问信息

### SSH连接
1. 在服务器详情页面配置SSH凭据
2. 点击"SSH连接"按钮打开Web终端
3. 支持多标签页同时连接多个服务器

### 监控功能
1. 系统自动定时ping检测服务器状态
2. 在仪表板查看服务器在线状态
3. 查看历史监控数据和uptime统计

### 面板管理
1. 为每个服务器配置面板信息
2. 支持1Panel、宝塔面板等常见面板
3. 一键跳转到面板后台

## 🔒 安全说明

- 所有敏感信息（密码、SSH密钥、API密钥）均采用AES-256加密存储
- 支持JWT token认证
- 建议在内网环境或通过VPN访问
- 定期备份数据库数据

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 Issue
- 发送邮件

---

**注意**: 本系统专为个人使用设计，包含敏感的服务器信息，请确保在安全的环境中部署和使用。
