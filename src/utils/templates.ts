
import { SlideContent } from "@/components/slides/Slide";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  slides: SlideContent[];
}

export const templates: Template[] = [
  {
    id: "minimal-business",
    title: "Minimal Business",
    description: "Clean and professional presentation for business pitches and reports",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["business", "minimal", "professional"],
    featured: true,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "Business Quarterly Report",
        subtitle: "Q2 2023 Performance & Strategy",
        backgroundColor: "#ffffff",
        textColor: "#333333",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "content",
        title: "Executive Summary",
        content: "This quarter we achieved 15% growth in revenue and expanded into two new markets. Our customer satisfaction score reached an all-time high of 94%.",
        backgroundColor: "#ffffff",
        textColor: "#333333"
      },
      {
        id: "slide-3",
        type: "split",
        title: "Market Expansion",
        content: "Our strategic entry into the European market has yielded a 22% increase in global revenue, with particularly strong performance in Germany and France.",
        imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xvYmV8ZW58MHx8MHx8fDA%3D",
        backgroundColor: "#ffffff",
        textColor: "#333333"
      }
    ]
  },
  {
    id: "creative-pitch",
    title: "Creative Pitch Deck",
    description: "Visually striking template for creative projects and startup pitches",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["creative", "pitch", "startup"],
    featured: true,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "NOVA",
        subtitle: "Reimagining Digital Experiences",
        backgroundColor: "#2E2E2E",
        textColor: "#ffffff",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "image",
        title: "Our Vision",
        imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzaW9ufGVufDB8fDB8fHww",
        backgroundColor: "#2E2E2E",
        textColor: "#ffffff"
      },
      {
        id: "slide-3",
        type: "content",
        title: "The Opportunity",
        content: "The global digital experience market is projected to reach $508 billion by 2027, growing at a CAGR of 16.8%. Our innovative approach positions us to capture a significant share of this expanding market.",
        backgroundColor: "#2E2E2E",
        textColor: "#ffffff"
      }
    ]
  },
  {
    id: "education",
    title: "Education & Learning",
    description: "Engaging template for educational presentations and lectures",
    category: "Education",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["education", "learning", "lecture"],
    featured: false,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "Introduction to Data Science",
        subtitle: "Understanding the fundamentals and applications",
        backgroundColor: "#F5F7FA",
        textColor: "#2D3748",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "content",
        title: "What is Data Science?",
        content: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data.",
        backgroundColor: "#F5F7FA",
        textColor: "#2D3748"
      },
      {
        id: "slide-3",
        type: "split",
        title: "Key Components",
        content: "Statistics, Machine Learning, Data Analysis, Programming, Domain Expertise, Data Visualization",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
        backgroundColor: "#F5F7FA",
        textColor: "#2D3748"
      }
    ]
  },
  {
    id: "product-launch",
    title: "Product Launch",
    description: "Impactful template for showcasing new product launches",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D",
    tags: ["product", "launch", "marketing"],
    featured: true,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "Introducing Echo",
        subtitle: "The next generation of smart home devices",
        backgroundColor: "#FFFFFF",
        textColor: "#111111",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "image",
        title: "Redefining Smart Living",
        imageUrl: "https://images.unsplash.com/photo-1558002038-58a4161b5401?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBob21lfGVufDB8fDB8fHww",
        backgroundColor: "#FFFFFF",
        textColor: "#111111"
      },
      {
        id: "slide-3",
        type: "content",
        title: "Key Features",
        content: "• Advanced voice recognition\n• Seamless integration with 100+ smart home devices\n• Energy-efficient design\n• Enhanced privacy controls\n• Premium sound quality",
        backgroundColor: "#FFFFFF",
        textColor: "#111111"
      }
    ]
  },
  {
    id: "annual-report",
    title: "Annual Report",
    description: "Comprehensive template for annual financial and business reports",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFubnVhbCUyMHJlcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["annual report", "business", "financial"],
    featured: false,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "Annual Report 2023",
        subtitle: "Global Performance & Strategic Direction",
        backgroundColor: "#F8F9FA",
        textColor: "#212529",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "content",
        title: "Financial Highlights",
        content: "• Revenue: $342M (+18% YoY)\n• Operating Profit: $78M (+22% YoY)\n• Operating Margin: 22.8% (+0.7pp YoY)\n• EPS: $1.87 (+25% YoY)",
        backgroundColor: "#F8F9FA",
        textColor: "#212529"
      },
      {
        id: "slide-3",
        type: "split",
        title: "Strategic Initiatives",
        content: "Our three-pronged approach focuses on market expansion, product innovation, and operational excellence. These initiatives have yielded significant improvements in all key performance indicators.",
        imageUrl: "https://images.unsplash.com/photo-1571942676532-b3762bd21951?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmF0ZWd5fGVufDB8fDB8fHww",
        backgroundColor: "#F8F9FA",
        textColor: "#212529"
      }
    ]
  },
  {
    id: "portfolio",
    title: "Creative Portfolio",
    description: "Showcase your creative work with this visually appealing template",
    category: "Creative",
    thumbnail: "https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["portfolio", "creative", "showcase"],
    featured: false,
    slides: [
      {
        id: "slide-1",
        type: "title",
        title: "Portfolio 2023",
        subtitle: "Designer & Creative Director",
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
        layout: "center"
      },
      {
        id: "slide-2",
        type: "image",
        title: "Brand Identity: Azure",
        imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
        backgroundColor: "#FFFFFF",
        textColor: "#000000"
      },
      {
        id: "slide-3",
        type: "split",
        title: "Web Design: Luminance",
        content: "A responsive e-commerce platform for a luxury home decor brand, featuring custom animations and an intuitive shopping experience.",
        imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
        backgroundColor: "#FFFFFF",
        textColor: "#000000"
      }
    ]
  }
];

// Helper function to get a template by ID
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

// Helper function to get featured templates
export const getFeaturedTemplates = (): Template[] => {
  return templates.filter(template => template.featured);
};

// Helper function to get templates by category
export const getTemplatesByCategory = (category: string): Template[] => {
  return templates.filter(template => template.category === category);
};

// Helper function to search templates
export const searchTemplates = (query: string): Template[] => {
  const lowercaseQuery = query.toLowerCase();
  return templates.filter(template => {
    return (
      template.title.toLowerCase().includes(lowercaseQuery) ||
      template.description.toLowerCase().includes(lowercaseQuery) ||
      template.category.toLowerCase().includes(lowercaseQuery) ||
      template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
};
