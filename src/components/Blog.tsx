import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building Scalable Backend Systems',
    date: 'March 15, 2025',
    summary: 'Learn about the key principles and best practices for building scalable backend systems that can handle millions of requests.',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80'
  },
  {
    title: 'The Future of Cloud Computing',
    date: 'March 1, 2025',
    summary: 'Exploring emerging trends in cloud computing and how they will shape the future of software development.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    title: 'Mastering Database Optimization',
    date: 'February 15, 2025',
    summary: 'Tips and techniques for optimizing database performance in high-traffic applications.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80'
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Blog</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="p-6">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              
              
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;