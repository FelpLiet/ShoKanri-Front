import React, {useEffect, useRef} from 'react';
import './LandingPage.scss';
import { Button } from '@/components/ui/button';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useScroll, useTransform } from 'framer-motion';
import animationData from '@/assets/lottie/logo-no-name.json';
import logoSvg from '@/assets/icons/kanri-no-name.svg';
import nameSvg from '@/assets/icons/name.svg';

import mockTela1 from '@/assets/telas/tela1.png';
import mockTela2 from '@/assets/telas/tela2.png';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    container: ref,
        
  });

  // Create opacity and movement transforms based on scroll position
  const heroOpacity = useTransform(scrollY, [700, 1000], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 500], [0, -400]);
  const heroDescriptionOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Transform values for the about section to fade in
  const aboutOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  const aboutY = useTransform(scrollY, [200, 400], [10, 500]);
  
  // Transform values for the CTA section
  const ctaOpacity = useTransform(scrollY, [500, 700], [0, 1]);
  const ctaScale = useTransform(scrollY, [500, 700], [0.9, 1]);

  
  const floatingElements = [
    { 
      image: mockTela1, 
      x: ['5vw', '8vw'],
      y: ['20vh', '25vh'], 
      rotate: [-1, 3], 
      scale: [0.98, 1], 
      duration: 8,
      className: 'floating-mock mock1'
    },
    { 
      image: mockTela2, 
      x: ['-5vw', '0vw'], 
      y: ['10vh', '5vh'], 
      rotate: [3, -1], 
      scale: [1, 0.98], 
      duration: 8,
      className: 'floating-mock mock2'
    },
  ];

  return (
    <motion.div className="landing-page" ref={ref}>
      <div className="floating-background">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`floating-element ${element.className}`}
            animate={{
              x: element.x,
              y: element.y,
              rotate: element.rotate,
              scale: element.scale,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: element.duration,
              ease: "easeInOut"
            }}
            >
              <img src={element.image} alt={`Dashboard preview ${index + 1}`} />
            </motion.div>
        ))}
        <div className="blur-overlay"></div>
      </div>
      <header className="landing-header">
        <div className="logo">
          <img src={logoSvg} alt="Sho-Kanri logo" style={{width: '30px'}} />
          <img src={nameSvg} alt="Sho-Kanri" />
        </div>
        <div className='options'>
          <a href='#hero'>Início</a>
          <a href='#about'>Sobre</a>
          <a href='#features'>Features</a>
        </div>
        <Button onClick={onGetStarted} className="login-button">Login</Button>
      </header>
      
      <main className="landing-content">
        <motion.section
          id="hero"
          className="hero"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}>
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '200px', width: '200px' }}
          />
          <h1>Sho-Kanri</h1>
          <motion.div
            className="hero-description"
            style={{
              opacity: heroDescriptionOpacity
            }}>
            <p>Controle suas finanças de forma simples e eficiente</p>
            <Button onClick={onGetStarted} size="lg" className="login-button">Get Started</Button>
          </motion.div>
        </motion.section>
        
        <motion.section 
          id="about"
          className="about"
          style={{
            opacity: aboutOpacity,
            y: aboutY
          }}>
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
        </motion.section>

        <motion.section 
          id="features" 
          className="call-to-action"
          style={{
            opacity: ctaOpacity,
            scale: ctaScale
          }}>
          <h2>Ready to take control of your finances?</h2>
          <Button onClick={onGetStarted} size="lg" className="cta-button">Get Started</Button>
        </motion.section>
      </main>
      
      <footer className="landing-footer">
        <p>© 2025 ShoKanri. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default LandingPage;