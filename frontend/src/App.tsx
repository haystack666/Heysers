import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="bg-white shadow-sm border-b">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 m-0">
              Hayser - 服务器管理备忘录
            </h1>
          </div>
        </Header>
        
        <Content className="p-6">
          <Routes>
            <Route path="/" element={
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  欢迎使用 Hayser 服务器管理系统
                </h2>
                <p className="text-gray-600">
                  系统正在开发中，敬请期待...
                </p>
              </div>
            } />
          </Routes>
        </Content>
        
        <Footer className="text-center bg-gray-50">
          Hayser ©2024 Created by You
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
