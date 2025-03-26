import React from 'react';
import './LandingPage.scss';
import { Button } from '@/components/ui/button';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '@/assets/logo-no-name.json';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">ShoKanri</div>
        <div className='options'>
          <a href='#'>Início</a>
          <a href='#'>Sobre</a>
          <a href='#'>Features</a>
        </div>
        <Button onClick={onGetStarted} className="login-button">Login</Button>
      </header>
      
      <main className="landing-content">
        <section className="hero">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '200px', width: '200px' }}
          />
          <h1>Sho-Kanri</h1>
          <p>Controle suas finanças de forma simples e eficiente</p>
          <Button onClick={onGetStarted} size="lg" className="cta-button">Get Started</Button>
        </section>
        
        <section className="about">
          <div className="about-card">
            <h3>O que é?</h3>
            <p>Nosso gerenciador financeiro é uma plataforma completa para organizar, monitorar e planejar suas finanças, reunindo todas as contas e transações em um único lugar.</p>
          </div>
          <div className="about-card">
            <h3>Para quem é?</h3>
            <p>Desenvolvido para profissionais autônomos, pequenas empresas e famílias que buscam controle e transparência em suas finanças.</p>
          </div>
          <div className="about-card">
            <h3>Solução?</h3>
            <p>Ele ajuda a eliminar a confusão na gestão financeira, facilitando o acompanhamento dos gastos, o planejamento de orçamentos e a análise de desempenho financeiro</p>
          </div>
        </section>

        <section className="call-to-action">
            <h2>Ready to take control of your finances?</h2>
            <Button onClick={onGetStarted} size="lg" className="cta-button">Get Started</Button>
        </section>
      </main>
      
      <footer className="landing-footer">
        <p>© 2025 ShoKanri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
