# 移动端优化指南

本文档定义了Hayser项目中所有页面和组件的移动端优化标准，确保在各种设备上都有良好的用户体验。

## 响应式断点

```typescript
export const breakpoints = {
  xs: 480,    // 超小屏幕（手机竖屏）
  sm: 576,    // 小屏幕（手机横屏）
  md: 768,    // 中等屏幕（平板竖屏）
  lg: 992,    // 大屏幕（平板横屏/小桌面）
  xl: 1200,   // 超大屏幕（桌面）
  xxl: 1600,  // 超超大屏幕（大桌面）
};
```

## 使用响应式Hook

所有组件都应该使用 `useResponsive` Hook 来获取当前屏幕信息：

```typescript
import useResponsive from '../hooks/useResponsive';

const MyComponent: React.FC = () => {
  const { isMobile, isTablet, isDesktop, isXs } = useResponsive();
  
  return (
    <div style={{
      padding: isXs ? '8px' : isMobile ? '12px' : '16px'
    }}>
      {/* 组件内容 */}
    </div>
  );
};
```

## 布局优化标准

### 1. 间距（Spacing）
- **超小屏幕 (xs)**: 8px - 12px
- **移动端 (mobile)**: 12px - 16px  
- **平板端 (tablet)**: 16px - 20px
- **桌面端 (desktop)**: 20px - 24px

### 2. 字体大小（Typography）
- **标题**: 
  - xs: 18px, mobile: 20px, desktop: 24px+
- **正文**: 
  - xs: 12px, mobile: 14px, desktop: 16px
- **辅助文字**: 
  - xs: 10px, mobile: 12px, desktop: 14px

### 3. 按钮尺寸（Button Sizes）
- **移动端最小触摸目标**: 44px x 44px
- **超小屏幕**: 40px x 40px
- **桌面端**: 32px x 32px

### 4. 卡片和容器
- **圆角**: 移动端 8px，桌面端 6px
- **阴影**: 移动端更明显，桌面端更细腻
- **边距**: 移动端减少，桌面端正常

## 组件优化规范

### Header 组件
- 移动端隐藏次要信息（如副标题）
- 使用汉堡菜单替代完整导航
- 调整Logo和按钮尺寸
- 优化触摸目标大小

### Footer 组件  
- 移动端垂直堆叠信息
- 简化链接和信息展示
- 调整文字大小和间距
- 居中对齐内容

### 表格组件
- 移动端使用卡片式布局
- 横向滚动处理
- 简化列显示
- 优化操作按钮

### 表单组件
- 增大输入框高度（移动端最小44px）
- 优化标签位置（移动端上方，桌面端左侧）
- 简化复杂表单
- 优化键盘交互

## CSS 类名规范

```css
/* 移动端专用样式 */
.mobile-only { display: block; }
.desktop-only { display: none; }

@media (min-width: 769px) {
  .mobile-only { display: none; }
  .desktop-only { display: block; }
}

/* 响应式工具类 */
.mobile-padding { padding: 12px; }
.mobile-text { font-size: 14px; }
.mobile-button { min-height: 44px; }

@media (max-width: 480px) {
  .xs-padding { padding: 8px; }
  .xs-text { font-size: 12px; }
  .xs-button { min-height: 40px; }
}
```

## 性能优化

### 1. 图片优化
- 移动端使用较小尺寸图片
- 支持WebP格式
- 懒加载非关键图片

### 2. 代码分割
- 移动端和桌面端组件分离
- 按需加载复杂组件
- 优化包大小

### 3. 交互优化
- 减少动画复杂度
- 优化滚动性能
- 避免过度重绘

## 测试标准

### 设备测试
- iPhone SE (375px)
- iPhone 12 (390px) 
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1200px+)

### 功能测试
- 触摸交互正常
- 文字清晰可读
- 按钮易于点击
- 滚动流畅
- 表单输入便捷

## 开发检查清单

- [ ] 使用 `useResponsive` Hook
- [ ] 设置合适的断点样式
- [ ] 优化触摸目标大小
- [ ] 测试各种屏幕尺寸
- [ ] 检查文字可读性
- [ ] 验证交互流畅性
- [ ] 确保性能良好

## 示例代码

```typescript
import React from 'react';
import { Card, Button, Space } from 'antd';
import useResponsive from '../hooks/useResponsive';

const ResponsiveCard: React.FC = () => {
  const { isMobile, isXs } = useResponsive();
  
  return (
    <Card
      style={{
        margin: isXs ? '8px 0' : isMobile ? '12px 0' : '16px 0',
        borderRadius: isMobile ? '8px' : '6px',
      }}
      bodyStyle={{
        padding: isXs ? '12px' : isMobile ? '16px' : '24px',
      }}
    >
      <Space 
        direction={isMobile ? 'vertical' : 'horizontal'}
        size={isMobile ? 'small' : 'middle'}
        style={{ width: '100%' }}
      >
        <Button 
          type="primary"
          size={isMobile ? 'large' : 'middle'}
          style={{
            minHeight: isMobile ? '44px' : '32px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          主要操作
        </Button>
        <Button 
          size={isMobile ? 'large' : 'middle'}
          style={{
            minHeight: isMobile ? '44px' : '32px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          次要操作
        </Button>
      </Space>
    </Card>
  );
};
```

遵循这些标准，确保所有页面在移动端都有优秀的用户体验。
