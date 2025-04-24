import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
