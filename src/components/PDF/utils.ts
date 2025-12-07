import { Font } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

if (typeof window !== 'undefined') {
  Font.register({
    family: 'Archia',
    src: `${window.location.origin}/fonts/Archia.ttf`
  });

  Font.register({
    family: 'Aesthetic',
    src: `${window.location.origin}/fonts/Aesthetic.ttf`
  });
}

// Tailwind configuration for PDF
export const tw = createTw({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Archia',
        serif: 'Aesthetic',
      },
      colors: {
        green: {
          200: '#bbf7d0',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
        },
      },
    },
  },
});

// Markdown parser
export const parseMarkdown = (text: string) => {
  const lines = text.trim().split('\n');
  const elements = [];
  let currentList = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('- ')) {
      if (!inList) {
        inList = true;
        currentList = [];
      }
      currentList.push(line.substring(2));
    } else {
      if (inList) {
        elements.push({ type: 'list', items: currentList });
        currentList = [];
        inList = false;
      }
      
      if (line) {
        // Simple link parsing
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push({ type: 'text', content: line.substring(lastIndex, match.index) });
          }
          parts.push({ type: 'link', text: match[1], href: match[2] });
          lastIndex = match.index + match[0].length;
        }
        
        if (lastIndex < line.length) {
          parts.push({ type: 'text', content: line.substring(lastIndex) });
        }
        
        elements.push({ type: 'paragraph', parts: parts.length > 0 ? parts : [{ type: 'text', content: line }] });
      }
    }
  }
  
  if (inList && currentList.length > 0) {
    elements.push({ type: 'list', items: currentList });
  }
  
  return elements;
};