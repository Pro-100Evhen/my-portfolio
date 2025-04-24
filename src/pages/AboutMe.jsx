import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h3 {
    color: var(--accent-color);
    margin-bottom: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    margin-top: 1rem;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const AboutMe = () => {
  return (
    <PageContainer>
      <Section>
        <Title>Про мене</Title>
        <p>Front Developer з 1.5 роками комерційного досвіду в розробці WordPress веб-сайтів, з фокусом на кастомізації тем та розробці унікальних рішень. За останні 9 місяців я зосередився на вивченні React та розробці SPA додатків.</p>
      </Section>

      <Section>
        <Title>Досвід</Title>
        <p>За останні 9 місяців я вивчав React, проходячи курс по темам "React - The Complete Course" та "Redux Toolkit". Я отримав досвід роботи з Hooks та бібліотеками, а також створив декілька проектів.</p>
      </Section>

      <Section>
        <Title>Мої проекти</Title>
        <ProjectsGrid>
          <ProjectCard>
            <h3>React веб-магазин</h3>
            <p>SPA онлайн магазин, побудований на React з використанням Redux Toolkit для управління станом. Включає функціонал авторизації, каталог товарів, кошик та оформлення замовлення.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Переглянути код
            </a>
          </ProjectCard>

          <ProjectCard>
            <h3>WordPress розробка</h3>
            <p>Створення кастомних тем та робота з різними конструкторами (Elementor, WPBakery). Налаштування функціоналу сервісних сторінок для кожної сторінки на сайті авіакомпанії.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub /> Переглянути код
            </a>
          </ProjectCard>
        </ProjectsGrid>
      </Section>
    </PageContainer>
  );
};

export default AboutMe; 