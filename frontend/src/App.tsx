import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { AppHeader, AppFooter } from './components/Layout';

import './App.css';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />

        <Content style={{
          padding: '24px',
          backgroundColor: '#f0f2f5',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Routes>
            <Route path="/" element={
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#262626',
                  marginBottom: '16px',
                  background: 'linear-gradient(135deg, #1890ff, #722ed1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  欢迎使用 Hayser 服务器管理系统
                </h2>
                <p style={{
                  color: '#8c8c8c',
                  fontSize: '18px',
                  maxWidth: '600px',
                  lineHeight: 1.6
                }}>
                  专为个人使用设计的服务器信息管理工具，帮助您轻松管理服务器、SSH连接、监控状态和第三方面板访问。
                </p>
                <div style={{
                  marginTop: '32px',
                  padding: '24px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #f0f0f0'
                }}>
                  <p style={{ color: '#595959', margin: 0 }}>
                    🚀 系统正在开发中，敬请期待更多功能...
                  </p>
                </div>
              </div>
            } />
          </Routes>
        </Content>

        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;
