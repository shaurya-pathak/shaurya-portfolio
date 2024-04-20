import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Shaurya Pathak" />
      <Page useSplashScreenAnimation>
      {/* <div style={{
        textAlign: 'center',
        backgroundColor: '#222', // Assuming you want a white background
        color: '#fff', // Text color is black to contrast with the white background
        padding: '30px',
        marginBottom: '20px',
      }}>
        <a href="http://chess.shauryapathak.xyz"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff', // Text color is black for normal state
            fontSize: '22px',
            transition: 'color 0.3s ease',
          }}
          onMouseOver={(event) => event.currentTarget.style.color = '#800080'} // Purple on hover
          onMouseOut={(event) => event.currentTarget.style.color = '#fff'} // Black when not hovered
        >
          Check out my featured web application <b><u> Here!</u></b>
        </a>
      </div> */}


        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="features" heading="Projects" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me!" />
        <InterestsSection sectionId="details" heading="Interests" />
        
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
