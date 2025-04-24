import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--secondary-color);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-color);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>© 2024 My Portfolio. All rights reserved.</div>
        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 