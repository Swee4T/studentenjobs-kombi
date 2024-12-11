'use client';

import React from 'react';
import { Card } from "@/app/components/ui/card"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Diese Website dient ausschließlich der Information. Es werden keine personenbezogenen 
              Daten erhoben, gespeichert oder verarbeitet, außer den technisch notwendigen Daten, 
              die beim Besuch der Website automatisch entstehen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Hosting und Server-Log-Files</h2>
            <p className="mb-4">
              Beim Besuch dieser Website werden automatisch durch unseren Provider 
              (Vercel Inc.) technisch notwendige Daten erfasst:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Diese Daten werden automatisch nach 30 Tagen gelöscht und dienen ausschließlich 
              der technischen Bereitstellung der Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Cookies und Analyse-Tools</h2>
            <p className="mb-4">
              Diese Website verwendet keine Cookies und keine Analyse-Tools. 
              Es findet kein Tracking statt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Kontaktmöglichkeit</h2>
            <p className="mb-4">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Kontakt: kontakt@studentenjobs-kombi.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Ihre Rechte</h2>
            <p>
              Da wir keine personenbezogenen Daten erheben, verarbeiten oder speichern, 
              entfallen die üblichen Rechte wie Auskunft, Berichtigung, Löschung etc.
            </p>
          </section>

          <p className="text-sm text-gray-600">Stand: Dezember 2024</p>
        </Card>
      </div>
    </div>
  );
}