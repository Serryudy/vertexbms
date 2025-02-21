'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Menu from '../components/Menu';
import NeatoHelp from '@/components/NeatoHelp';
import DownloadCTA from '@/components/DownloadCTA';
import AnimationSection from '@/components/Animation';
import Slideshow from '@/components/Slideshow';
import FloatingImages from '@/components/FloatingImages';
import Bubbleanimation from '@/components/Bubbleanimation';
import Services from '@/components/services';
import RepairServices from '@/components/Repaiservices';
import Boston from '@/components/Joinneato';
import AnimatedOverlay from '@/components/animateOverlay';

export default function Home() {
  return (
    <div className="App">
      <div className="first-page">
        {/* Fixed Menu */}
        <div className="fixed-top" style={{ zIndex: 1000 }}>
          <Menu />
        </div>
        {/* Scroll Container */}
        <div style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          paddingTop: '80px' // Add space for fixed header
        }}>
          {/* First section */}
          <section style={{
            height: '100vh',
            paddingTop: '40px' // Adjusted padding
          }}>
            <DownloadCTA
              title="Find top-rated certified<br />pros in your area."
              subtitle="Certain areas of your home might require extra care."
            />
          </section>
          {/* Second section */}
          <section style={{
            padding: ' 0 40px',
            height: '100vh',
            position: 'relative',
          }}>
            <NeatoHelp />
          </section>
          <section style={{ height: '100px', position: 'relative'}}>
            <AnimationSection />
          </section>
          <section style={{ height: '100px', position: 'relative'}}>
            <Slideshow />
          </section>
        </div>
      </div>
      <div className="second-page">
        <section style={{ height: '100px', position: 'relative'}}>
          <FloatingImages />
        </section>
        <section>
          <RepairServices />
        </section>
      </div>
      <div className="third-page">
        <section style={{ height: '100vh', position: 'relative' }}>
          {/* Position the Bubbleanimation on top of the dividing line */}
          <div style={{
            position: 'absolute',
            top: '-280px',
            left: '0',
            right: '0',
            zIndex: 5,
            paddingBottom: '10px'
          }}>
            <Bubbleanimation className="shadow-lg" />
          </div>
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Boston />
        </section>      
        <AnimatedOverlay /> 
      </div>
    </div>
  );
}