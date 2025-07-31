import React from 'react';
import { BlogContentBlock } from '@/data/static-data';

interface BlogContentRendererProps {
  content: BlogContentBlock[];
}

export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                {block.content}
              </p>
            );
          
          case 'heading':
            return (
              <h2 key={index} className="text-3xl font-bold text-gray-800 mb-6 mt-10">
                {block.content}
              </h2>
            );
          
          case 'subheading':
            return (
              <h3 key={index} className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                {block.content}
              </h3>
            );
          
          case 'list':
            return (
              <div key={index} className="mb-8">
                {block.content && (
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">{block.content}</p>
                )}
                <ul className="list-disc list-inside space-y-3 pl-4">
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 leading-relaxed">
                      {item.includes(':') ? (
                        <>
                          <strong className="text-gray-800">
                            {item.split(':')[0]}:
                          </strong>
                          {item.split(':').slice(1).join(':')}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContentRenderer;