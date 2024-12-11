'use client';

import React from 'react';
import { Card } from "@/app/components/ui/card"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Impressum & Rechtliches</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Oskar Pokorski</p>
            <p>Limesstr. 48</p>
            <p>73434 Aalen</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <p>E-Mail: kontakt@studentenjobs-kombi.de</p>
            <p>Telefon: 0160 93898949</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Die Inhalte wurden mit größtmöglicher Sorgfalt erstellt.
              Dennoch können wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität übernehmen.
            </p>
            <p className="mb-4">
              Für verbindliche Auskünfte wenden Sie sich bitte direkt an:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ihre zuständige Krankenkasse</li>
              <li>Die Agentur für Arbeit</li>
              <li>Einen Steuerberater</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
            <p>
              Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">Stand: Dezember 2024</p>
        </Card>
      </div>
    </div>
  );
}