'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Menu from '../components/Menu';
import NeatoHelp from '@/components/NeatoHelp';
import DownloadCTA from '@/components/DownloadCTA';
import IPhoneDisplay from '@/components/IPhoneDisplay';
import AnimationSection from '@/components/Animation';
import Slideshow from '@/components/Slideshow';

export default function Home() {
  return (
    <div className="main-page">
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
          top: '200px',
          height: '100vh',
          position: 'relative',
          paddingTop: '100px' // Adjusted padding
        }}>
          <div style={{ 
            height: '100%',
            transform: 'scale(0.95)',
            position: 'relative'
          }}>
            <NeatoHelp />
            <div style={{ 
              position: 'absolute', 
              top: '-200px', 
              right: '38%', 
              zIndex: 2 
            }}>
              <IPhoneDisplay />
            </div>
          </div>
        </section>
        <section style={{ height: '100px', position: 'relative', paddingTop: '100px', top: '200px' }}>
          <AnimationSection />
        </section>
        <section style={{ height: '100px', position: 'relative', paddingTop: '100px', top: '200px' }}>
          <Slideshow   />  
        </section>  
      </div>
    </div>
  );
}