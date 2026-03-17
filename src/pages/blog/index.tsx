import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { BlogPost } from '@/types';

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Comment sécuriser vos scripts Node.js',
      content: 'Découvrez les meilleures pratiques pour sécuriser vos applications Node.js...',
      author: 'Admin',
      createdAt: new Date('2024-01-15'),
      tags: ['Sécurité', 'Node.js', 'Tutoriel']
    },
    {
      id: '2',
      title: 'Guide complet des VPS pour débutants',
      content: 'Apprenez tout ce qu\'il faut savoir pour bien démarrer avec un serveur VPS...',
      author: 'Tech Team',
      createdAt: new Date('2024-01-10'),
      tags: ['VPS', 'Débutant', 'Guide']
    },
    {
      id: '3',
      title: 'Les meilleures pratiques pour créer un bot Discord',
      content: 'Tutoriel étape par étape pour créer un bot Discord professionnel...',
      author: 'Dev Team',
      createdAt: new Date('2024-01-05'),
      tags: ['Discord', 'Bot', 'Développement']
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - DEV PRIMEEE HOUSE</title>
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Blog & Tutoriels
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            Articles techniques, guides et actualités
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition cursor-pointer">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
          <p className="text-gray-400 mb-4 line-clamp-3">{post.content}</p>
          
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>{post.author}</span>
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
