import React from 'react';
import Product from './Product';

const Products = () => {
  const sectionData = {
    heading: "Selected Work",
    bottomHeading: "Every project begins with strategy, continues with design, and ends with measurable impact.",
    projects: [
      {
        title: "AI TRAIL",
        description: "AI-powered career roadmap platform that helps students identify skill gaps, build personalized learning paths, and discover relevant opportunities using intelligent recommendations.",
        button: "View Project",
      },
      {
        title: "FITrainingWithHarry",
        description: "Premium gym management platform featuring attendance tracking, workout plans, diet management, memberships, analytics, and an intuitive admin dashboard.",
        button: "View Project",
      },
      {
        title: "Asthana Studio",
        description: "A creative agency website focused on immersive web experiences, premium animations, modern branding, and high-performance frontend development.",
        button: "View Project",
      },
      {
        title: "Customer Segmentation",
        description: "Interactive analytics dashboard for visualizing customer behavior, segmentation insights, business metrics, and data-driven decision making.",
        button: "View Project",
      },
      {
        title: "Interactive Portfolio",
        description: "A collection of experimental interfaces built with React, GSAP, Three.js, and modern web technologies to create engaging digital experiences.",
        button: "Explore",
      },
    ],
  };

  return (
    <div>
      {/* sectionData ki jagah sectionData.projects par map chalana hai */}
      {sectionData.projects.map((elem, idx) => {
        return <Product key={idx} val={elem} />;
      })}
    </div>
  );
};

export default Products;