import React from 'react';
import styled from 'styled-components';

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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 2rem auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--accent-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const TimelineItem = styled.div`
  padding: 1rem 2rem;
  position: relative;
  background: white;
  border-radius: 8px;
  width: calc(50% - 2rem);
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:nth-child(odd) {
    margin-left: auto;
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--secondary-color);
    border: 4px solid var(--primary-color);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(odd)::before {
    left: -60px;
  }

  &:nth-child(even)::before {
    right: -60px;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: var(--accent-color);
  border-left: 4px solid var(--secondary-color);
  padding-left: 1rem;
  margin: 2rem 0;
`;

const MyFuture = () => {
  return (
    <PageContainer>
      <Section>
        <Title>Моє професійне майбутнє</Title>
      </Section>

      <Timeline>
        <TimelineItem>
          <h3>Крок 1: Поглиблення знань React</h3>
          <p>Вивчення додаткових бібліотек та фреймворків екосистеми React, включаючи Next.js та React Native. Створення більш складних проектів з використанням сучасних практик розробки.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>Крок 2: Розширення стеку технологій</h3>
          <p>Освоєння Node.js та Express.js для створення повноцінних веб-додатків. Вивчення принципів проектування API та роботи з базами даних.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>Крок 3: Професійне зростання</h3>
          <p>Участь у більших проектах, розвиток soft skills та лідерських якостей. Прагнення до позиції Senior Developer з фокусом на архітектурні рішення та менторство.</p>
        </TimelineItem>
      </Timeline>

      <Section>
        <Title>Робота мрії</Title>
        <p>
          Моя мета - стати провідним розробником в компанії, що створює інноваційні рішення та має глобальний вплив. 
          Я прагну працювати в команді, де цінується креативність, постійне навчання та професійний розвиток. 
          Важливими аспектами для мене є можливість працювати над складними технічними завданнями та вносити свій внесок у розвиток технологічної спільноти.
        </p>
      </Section>
    </PageContainer>
  );
};

export default MyFuture; 