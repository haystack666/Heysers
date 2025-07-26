import React, { useState } from 'react';
import { Layout, Typography, Space, Badge, Avatar, Dropdown, Button, Drawer } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CloudServerOutlined,
  DashboardOutlined,
  MenuOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import useResponsive from '../../hooks/useResponsive';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { isMobile, isXs } = useResponsive();

  // 用户菜单项
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  const handleUserMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'profile':
        console.log('打开个人资料');
        break;
      case 'settings':
        console.log('打开系统设置');
        break;
      case 'logout':
        console.log('退出登录');
        break;
    }
  };

  return (
    <>
      <Header
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          borderBottom: '1px solid #f0f0f0',
          padding: isXs ? '0 12px' : isMobile ? '0 16px' : '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height: 'auto',
          minHeight: isXs ? '52px' : isMobile ? '56px' : '64px',
        }}
      >
        {/* 左侧：Logo和标题 */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#1890ff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
              flexShrink: 0
            }}
          >
            <CloudServerOutlined style={{ color: '#fff', fontSize: '20px' }} />
          </div>
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <Title
              level={3}
              style={{
                margin: 0,
                color: '#262626',
                fontWeight: 600,
                fontSize: '20px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              Hayser
            </Title>
            <span
              style={{
                color: '#8c8c8c',
                fontSize: '14px',
                fontWeight: 400,
                display: isMobile ? 'none' : 'inline'
              }}
            >
              服务器管理系统
            </span>
          </div>
        </div>

        {/* 桌面端：完整操作区域 */}
        <div
          style={{
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center'
          }}
        >
          <Space size="middle">
            {/* 快速导航 */}
            <Button
              type="text"
              icon={<DashboardOutlined />}
              style={{ color: '#595959' }}
            >
              仪表板
            </Button>

            {/* 通知铃铛 */}
            <Badge count={3} size="small">
              <Button
                type="text"
                icon={<BellOutlined />}
                style={{
                  color: '#595959',
                  fontSize: '16px'
                }}
              />
            </Badge>

            {/* 用户头像和菜单 */}
            <Dropdown
              menu={{
                items: userMenuItems,
                onClick: handleUserMenuClick
              }}
              placement="bottomRight"
              arrow
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Avatar
                  size={32}
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: '#87d068',
                    marginRight: 8
                  }}
                />
                <span style={{ color: '#262626', fontWeight: 500 }}>
                  管理员
                </span>
              </div>
            </Dropdown>
          </Space>
        </div>

        {/* 移动端：简化操作区域 */}
        <div
          style={{
            display: isMobile ? 'flex' : 'none',
            alignItems: 'center'
          }}
        >
          <Space size="small">
            {/* 通知铃铛 */}
            <Badge count={3} size="small">
              <Button
                type="text"
                icon={<BellOutlined />}
                size="large"
                style={{
                  color: '#595959',
                  fontSize: '18px'
                }}
              />
            </Badge>

            {/* 移动端菜单按钮 */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              size="large"
              onClick={() => setMobileMenuVisible(true)}
              style={{
                color: '#595959',
                fontSize: '18px'
              }}
            />
          </Space>
        </div>
      </Header>

      {/* 移动端抽屉菜单 */}
      <Drawer
        title="菜单"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        styles={{
          body: { padding: 0 }
        }}
      >
        <div style={{ padding: '16px' }}>
          {/* 用户信息 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              marginBottom: '16px'
            }}
          >
            <Avatar
              size={48}
              icon={<UserOutlined />}
              style={{
                backgroundColor: '#87d068',
                marginRight: 12
              }}
            />
            <div>
              <div style={{ fontWeight: 500, color: '#262626' }}>管理员</div>
              <div style={{ fontSize: '12px', color: '#8c8c8c' }}>系统管理员</div>
            </div>
          </div>

          {/* 菜单项 */}
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Button
              type="text"
              icon={<DashboardOutlined />}
              size="large"
              block
              style={{
                justifyContent: 'flex-start',
                height: '48px',
                fontSize: '16px'
              }}
            >
              仪表板
            </Button>
            <Button
              type="text"
              icon={<SettingOutlined />}
              size="large"
              block
              style={{
                justifyContent: 'flex-start',
                height: '48px',
                fontSize: '16px'
              }}
            >
              系统设置
            </Button>
            <Button
              type="text"
              icon={<UserOutlined />}
              size="large"
              block
              style={{
                justifyContent: 'flex-start',
                height: '48px',
                fontSize: '16px'
              }}
            >
              个人资料
            </Button>
            <Button
              type="text"
              icon={<LogoutOutlined />}
              size="large"
              block
              danger
              style={{
                justifyContent: 'flex-start',
                height: '48px',
                fontSize: '16px',
                marginTop: '16px'
              }}
            >
              退出登录
            </Button>
          </Space>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;
