import React, { useState, useEffect } from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import {
  GithubOutlined,
  HeartFilled,
  CopyrightOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import useResponsive from '../../hooks/useResponsive';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('zh-CN'));
  const { isMobile, isXs } = useResponsive();

  // 实时更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('zh-CN'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Footer
      style={{
        backgroundColor: '#fafafa',
        borderTop: '1px solid #f0f0f0',
        padding: isXs ? '12px 16px' : isMobile ? '16px 20px' : '24px 50px',
        marginTop: 'auto'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* 桌面端：完整信息区域 */}
        <div
          style={{
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 16,
            flexWrap: 'wrap',
            gap: 24
          }}
        >
          {/* 左侧：项目信息 */}
          <div>
            <Text strong style={{ fontSize: '16px', color: '#262626' }}>
              Hayser 服务器管理系统
            </Text>
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: '14px' }}>
                专为个人使用设计的服务器信息管理工具
              </Text>
            </div>
            <div style={{ marginTop: 8 }}>
              <Space split={<Divider type="vertical" />}>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  <EnvironmentOutlined /> 本地部署
                </Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  <ClockCircleOutlined /> {currentTime}
                </Text>
              </Space>
            </div>
          </div>

          {/* 右侧：快速链接 */}
          <div>
            <Text strong style={{ fontSize: '14px', color: '#262626' }}>
              快速链接
            </Text>
            <div style={{ marginTop: 8 }}>
              <Space direction="vertical" size={4}>
                <Link 
                  href="https://github.com/haystack666/Heysers" 
                  target="_blank"
                  style={{ fontSize: '13px' }}
                >
                  <GithubOutlined /> 项目源码
                </Link>
                <Link 
                  href="#" 
                  style={{ fontSize: '13px' }}
                >
                  使用文档
                </Link>
                <Link 
                  href="#" 
                  style={{ fontSize: '13px' }}
                >
                  问题反馈
                </Link>
              </Space>
            </div>
          </div>

          {/* 技术栈信息 */}
          <div>
            <Text strong style={{ fontSize: '14px', color: '#262626' }}>
              技术栈
            </Text>
            <div style={{ marginTop: 8 }}>
              <Space direction="vertical" size={4}>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                  React 18 + TypeScript
                </Text>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                  Ant Design + Recharts
                </Text>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                  Node.js + Express
                </Text>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                  MySQL + Sequelize
                </Text>
              </Space>
            </div>
          </div>
        </div>

        {/* 移动端：简化信息区域 */}
        <div
          style={{
            display: isMobile ? 'block' : 'none',
            marginBottom: 16
          }}
        >
          {/* 项目信息 */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Text strong style={{ fontSize: '16px', color: '#262626' }}>
              Hayser 服务器管理系统
            </Text>
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: '14px' }}>
                专为个人使用设计的服务器信息管理工具
              </Text>
            </div>
            <div style={{ marginTop: 8 }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                <ClockCircleOutlined /> {currentTime}
              </Text>
            </div>
          </div>

          {/* 快速链接 */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Space size="large">
              <Link
                href="https://github.com/haystack666/Heysers"
                target="_blank"
                style={{ fontSize: '13px' }}
              >
                <GithubOutlined /> 源码
              </Link>
              <Link
                href="#"
                style={{ fontSize: '13px' }}
              >
                文档
              </Link>
              <Link
                href="#"
                style={{ fontSize: '13px' }}
              >
                反馈
              </Link>
            </Space>
          </div>
        </div>

        <Divider style={{ margin: isMobile ? '12px 0' : '16px 0' }} />

        {/* 底部版权信息 */}
        <div
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          <div style={{ order: isMobile ? 2 : 1 }}>
            <Text type="secondary" style={{ fontSize: '13px' }}>
              <CopyrightOutlined /> {currentYear} Hayser.
              <span style={{ marginLeft: 4 }}>
                Made with <HeartFilled style={{ color: '#ff4d4f', margin: '0 2px' }} /> by Haystack
              </span>
            </Text>
          </div>

          <div style={{ order: isMobile ? 1 : 2, marginBottom: isMobile ? 8 : 0 }}>
            <Space
              split={isMobile ? undefined : <Divider type="vertical" />}
              direction={isMobile ? 'vertical' : 'horizontal'}
              size={isMobile ? 'small' : 'middle'}
            >
              <Text type="secondary" style={{ fontSize: '12px' }}>
                版本 v1.0.0
              </Text>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                MIT License
              </Text>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                仅供个人使用
              </Text>
            </Space>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
