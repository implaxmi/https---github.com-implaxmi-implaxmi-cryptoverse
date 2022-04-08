import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'; 
import 'antd/dist/antd.css';

const App = () => {
  return (
      <div className="app">
          <div className="navbar">
            <Navbar />
            
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="exchanges" element={<Exchanges />} />
                  <Route exact path="cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route exact path="coin/:coinId" element={<CryptoDetails />} />
                  <Route exact path="news" element={<News />} />
                </Routes>
              </div>
            </Layout>
          <div className="footer">
            <Typography.Title label={5} style={{ color: 'white', textAlign: 'center' }} >
            Cryptoverse <br />
            All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
              <p>implaxmi © 2022</p>
            </Space>
          </div>
          </div>
      </div>
  )
}

export default App