import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,21,41,.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#262626', margin: 0 }}>
              Hayser - 服务器管理备忘录
            </h1>
          </div>
        </Header>

        <Content style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
          <Routes>
            <Route path="/" element={
              <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#262626', marginBottom: '16px' }}>
                  欢迎使用 Hayser 服务器管理系统
                </h2>
                <p style={{ color: '#8c8c8c', fontSize: '16px' }}>
                  系统正在开发中，敬请期待...
                </p>
              </div>
            } />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
          Hayser ©2024 Created by You
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
