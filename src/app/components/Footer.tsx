'use client';

import React from 'react';
import Link from 'next/link';
import { Book, User, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hauptinfo */}
          <div>
            <h3 className="text-white font-semibold mb-4">Über diese Seite</h3>
            <p className="text-sm">
              Von Studenten für Studenten: Hier findest du alle wichtigen Informationen zur Kombination von Werkstudentenjobs, 
              Minijobs und der 70-Tage-Regelung.
            </p>
            <div className="mt-4 text-sm">
              <p>⚠️ Informationen ohne Gewähr</p>
              <p>✓ Bei der Krankenkasse prüfen</p>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="hover:text-cyan-400 transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-cyan-400 transition">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Verwandte Projekte */}
          <div>
            <h3 className="text-white font-semibold mb-4">Weitere Bildungsangebote</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://kombinatorik.info" className="hover:text-cyan-400 transition flex items-center">
                  <Book className="w-4 h-4 mr-2" />
                  Mathe Kombinatorik Rechner
                </a>
              </li>
              <li>
                <a href="https://oskai.de" className="hover:text-cyan-400 transition flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Mehr von Oskar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> in Aalen
          </p>
          <p className="mt-2 text-gray-500">
            © {new Date().getFullYear()} studentenjobs-kombi.de - Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;