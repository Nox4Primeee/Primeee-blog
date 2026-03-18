import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">DEV PRIMEEE HOUSE</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              La communauté des développeurs d'élite
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/shop">Serveurs</Link></li>
              <li><Link href="/bots">Bots</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms">Conditions</Link></li>
              <li><Link href="/privacy">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Discord: dev-primee</li>
              <li>Telegram: @devprimee</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300">
          © 2024 DEV PRIMEEE HOUSE. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
