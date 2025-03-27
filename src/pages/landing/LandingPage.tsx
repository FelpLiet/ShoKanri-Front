import React, {useRef, useEffect, useState} from 'react';
import './LandingPage.scss';
import { Button } from '@/components/ui/button';
import { Player } from '@lottiefiles/react-lottie-player';

import animationData from '@/assets/lottie/logo-no-name.json';
import logoSvg from '@/assets/icons/kanri-no-name.svg';
import nameSvg from '@/assets/icons/name.svg';
import cofrinhoPath from '@/assets/icons/cofrinho.svg';
import lupaDinheiroPath from '@/assets/icons/lupa-dinheiro.svg';
import usuariosPath from '@/assets/icons/usuarios.svg';
import dinheiroPath from '@/assets/icons/dinheiro-cheque-editar.svg';
import mockTela1 from '@/assets/telas/tela1.png';
import mockTela2 from '@/assets/telas/tela2.png';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const indicatorRef = useRef<HTMLDivElement>(null);

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
    { 
      image: mockTela1, 
      x: ['10vw', '12vw'], 
      y: ['30vh', '35vh'], 
      rotate: [1, -3], 
      scale: [0.98, 1], 
      duration: 8,
      className: 'floating-mock mock3'
    },
    
  ];

  // Add smooth scrolling behavior
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const currentScrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate the current section index
      const currentSectionIndex = Math.round(currentScrollTop / windowHeight);
      
      // Determine which section to scroll to
      let targetSectionIndex;
      if (delta > 0) {
        // Scrolling down
        targetSectionIndex = currentSectionIndex + 1;
      } else {
        // Scrolling up
        targetSectionIndex = currentSectionIndex - 1;
      }
      
      // Ensure target section is within bounds
      const sections = container.querySelectorAll('.snap-section');
      targetSectionIndex = Math.max(0, Math.min(targetSectionIndex, sections.length - 1));
      
      // Smooth scroll to target section
      const targetScrollTop = targetSectionIndex * windowHeight;
      
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Add touch event handling for mobile devices
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default to avoid browser's native scroll
      e.preventDefault();
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      
      const swipeDistance = touchStartY - touchEndY;
      if (Math.abs(swipeDistance) < 50) return; // Ignore small swipes
      
      const currentScrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.round(currentScrollTop / windowHeight);
      
      let targetSectionIndex;
      if (swipeDistance > 0) {
        // Swipe up - go down
        targetSectionIndex = currentSectionIndex + 1;
      } else {
        // Swipe down - go up
        targetSectionIndex = currentSectionIndex - 1;
      }
      
      // Ensure target section is within bounds
      const sections = container.querySelectorAll('.snap-section');
      targetSectionIndex = Math.max(0, Math.min(targetSectionIndex, sections.length - 1));
      
      // Smooth scroll to target section
      const targetScrollTop = targetSectionIndex * windowHeight;
      
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    };
    
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const sections = ['hero', 'about', 'features'];
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Find which section is currently most visible
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);
      const currentSection = sections[currentSectionIndex] || sections[0];
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Move indicator when active section changes
  useEffect(() => {
    if (!indicatorRef.current) return;
    
    const activeLink = document.querySelector(`.options a[href="#${activeSection}"]`);
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const headerRect = document.querySelector('.options')?.getBoundingClientRect();
      
      if (headerRect) {
        indicatorRef.current.style.width = `${linkRect.width}px`;
        indicatorRef.current.style.left = `${linkRect.left - headerRect.left}px`;
      }
    }
  }, [activeSection]);

  // Function to scroll to the specified section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Arrow component for reusability
  const ScrollArrow = ({ targetSection }: { targetSection: string }) => (
    <div className="scroll-down-arrow" onClick={() => scrollToSection(targetSection)}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  return (
    <div className="landing-page smooth-scroll-container" ref={ref}>
      <div className="floating-background">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`floating-element ${element.className}`}
          >
            <img src={element.image} alt={`Dashboard preview ${index + 1}`} />
          </div>
        ))}
        <div className="blur-overlay"></div>
      </div>
      
      <header className="landing-header">
        <div className="logo">
          <img src={logoSvg} alt="Sho-Kanri logo" style={{width: '30px'}} />
          <img src={nameSvg} alt="Sho-Kanri" />
        </div>
        <div className='options'>
          <a href='#hero' className={activeSection === 'hero' ? 'active' : ''}>Início</a>
          <a href='#about' className={activeSection === 'about' ? 'active' : ''}>Sobre</a>
          <a href='#features' className={activeSection === 'features' ? 'active' : ''}>Features</a>
          <div className="nav-indicator" ref={indicatorRef}></div>
        </div>
        <Button onClick={onGetStarted}>Login</Button>
      </header>
      
      <main className="landing-content">
        <section id="hero" className="hero snap-section">
          <Player
            autoplay
            loop
            src={animationData}
            className='hero-animation'
          />
          <h1>Sho-Kanri</h1>
          <div className="hero-description">
            <p>Controle suas finanças de forma simples e eficiente</p>
            <Button onClick={onGetStarted} size="lg">Get Started</Button>
          </div>
          
          <ScrollArrow targetSection="about" />
        </section>
        
        <section id="about" className="about snap-section">
          <div className="about-logo">
            <Player
              autoplay
              loop
              src={animationData}
              className='about-animation'
              />
            <img src={nameSvg} alt="Sho-Kanri" />
          </div>
          <div className="about-container">
            <div className="about-card">
              <img src={dinheiroPath} style={{width: '49px'}} alt="money icon" />
              <div className="about-text">
                <h3>O que é?</h3>
                <p>Nosso gerenciador financeiro é uma plataforma completa para organizar, monitorar e planejar suas finanças, reunindo todas as contas e transações em um único lugar.</p>
              </div>
            </div>
            <div className="about-card">
              <img src={usuariosPath} style={{width: '49px'}} alt="" />
              <div className="about-text">
                <h3>Para quem é?</h3>
                <p>Desenvolvido para profissionais autônomos, pequenas empresas e famílias que buscam controle e transparência em suas finanças.</p>
              </div>
            </div>
            <div className="about-card">
              <img src={cofrinhoPath} style={{width: '49px'}} alt="" />
              <div className="about-text">
                <h3>Solução?</h3>
                <p>Ele ajuda a eliminar a confusão na gestão financeira, facilitando o acompanhamento dos gastos, o planejamento de orçamentos e a análise de desempenho financeiro</p>
              </div>
            </div>
          </div>
          <ScrollArrow targetSection="features" />
        </section>

        <section id="features" className="features snap-section">
          <div className='features-container'>
            <div className='features-text'>
              <h2>Vem conhecer nossas funcionalidades</h2>
              <p>Embarque nessa jornada junto a nos rumo a seu gerenciamento financeiro</p>
              <Button onClick={onGetStarted} size="lg">Get Started</Button>
            </div>
            <div className="features-card-container">
              <div className='features-card'>
                <img src={lupaDinheiroPath} alt="money icon" />
                <h3>Rastreamento de despezas</h3>
              </div>
              <div className='features-card'>
                <img src={usuariosPath} alt="users icon" />
                <h3>Lorem</h3>
              </div>
              <div className='features-card'>
                <img src={cofrinhoPath} alt="piggy bank icon" />
                <h3>Metas Financeiras</h3>
              </div>
              <div className='features-card'>
                <img src={cofrinhoPath} alt="piggy bank icon" />
                <h3>Metas Financeiras</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="landing-footer">
        <p>© 2025 ShoKanri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;