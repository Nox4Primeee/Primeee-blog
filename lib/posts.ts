export async function getPosts(locale: string) {
  // Simule des posts depuis GitHub ou fichiers MDX
  return [
    {
      slug: 'bienvenue',
      title: locale === 'fr' ? 'Bienvenue chez DEV PRIMEEE HOUSE' : 'Welcome to DEV PRIMEEE HOUSE',
      excerpt: locale === 'fr' ? 'Notre communauté de développeurs s\'agrandit' : 'Our developer community is growing',
      date: '2024-01-15',
      content: 'Contenu du post...'
    }
  ];
}
