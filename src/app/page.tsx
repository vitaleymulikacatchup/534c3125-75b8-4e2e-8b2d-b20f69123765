"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import CarouselBase from '@/components/carousel/CarouselBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarBase 
        logoSrc="/images/logo.svg"
        logoAlt="NebulaLens Logo"
        leftButtonText="Menu"
        rightButtonText="Contact"
        onLeftButtonClick={() => console.log('Menu clicked')}
        onRightButtonClick={() => console.log('Contact clicked')}
      />
      <BillboardHero
        title="Capture the Universe"
        subtitle="Cinematic photography bringing you closer to galaxies"
      />
      <SplitAbout
        heading="About NebulaLens"
        body="At NebulaLens, we specialize in expansive photography that captures the beauty of our universe in stunning detail. Our artistic approach ensures every shot is a masterpiece."
      />
      <CarouselBase 
        items={[
          { title: 'Galactic Wonders', description: 'Explore the stars', image: '/images/placeholder1.avif' },
          { title: 'Nebula Dreams', description: 'Vibrant colors of space', image: '/images/placeholder2.avif' },
          { title: 'Starry Nights', description: 'Where dreams come alive', image: '/images/placeholder3.avif' },
          { title: 'Cosmic Harmony', description: 'Balance in the universe', image: '/images/placeholder4.avif' },
        ]}
      />
      <TextGridTokenomics
        title="Our Artistic Values"
        description="We strive for excellence in every shot, merging artistry with technology."
        tokenData={[
          { value: 'Creativity', description: 'Unleashing unique perspectives' },
          { value: 'Quality', description: 'Ensuring stunning visual clarity' },
          { value: 'Experience', description: 'Years in the photographic domain' },
          { value: 'Diversity', description: 'Capturing various landscapes and events' }
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        copyrightText="© 2025 NebulaLens Studio"
        onPrivacyClick={() => alert('Privacy Policy')}
        className="footer"
        containerClassName="container"
        logoClassName="logo"
        columns={[
          { title: 'Quick Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'Gallery', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
          { title: 'Social', items: [{ label: 'Instagram', onClick: () => {} }, { label: 'Facebook', onClick: () => {} }] },
          { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Use', onClick: () => {} }] }
        ]}
      />
    </SiteThemeProvider>
  );
}
