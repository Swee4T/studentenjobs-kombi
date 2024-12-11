'use client'

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { 
  Info, 
  BookOpen, 
  Calendar, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Briefcase,
  CreditCard,
  Clock,
  GraduationCap
} from 'lucide-react';

export default function StudentJobsGuide() {

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Studentenjobs Guide 2024</h1>
          <p className="text-lg text-gray-600">Kombinationen aus Werkstudent, Minijob & Kurzfristige Beschäftigung</p>
        </header>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex items-center justify-center transition-all"
            >
              <Info className="mr-2 h-4 w-4" />
              Übersicht
            </TabsTrigger>
            <TabsTrigger 
              value="rules" 
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center transition-all"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Regeln
            </TabsTrigger>
            <TabsTrigger 
              value="timeline" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white flex items-center justify-center transition-all"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Zeitplan
            </TabsTrigger>
            <TabsTrigger 
              value="warnings" 
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white flex items-center justify-center transition-all"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Wichtig
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-500" />
                  Mögliche Kombinationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Erlaubt ✅
                    </h3>
                    <ul className="space-y-2">
                      <li>• Minijob + Werkstudent, solange unter 20h von Mo-Sa (Vorlesungszeit)</li>
                      <li>• Minijob + Kurzfristige Beschäftigung</li>
                      <li>• Minijob während Praxissemester</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-red-700 mb-2 flex items-center">
                      <XCircle className="mr-2 h-4 w-4" />
                      Nicht Erlaubt ❌
                    </h3>
                    <ul className="space-y-2">
                      <li>• Werkstudent + Kurzfristige Beschäftigung im selben Jahr, falls über 70 Arbeitstage</li>
                      <li>• Überschreitung der 20h/Woche während Vorlesungszeit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-500" />
                  Grundregeln
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-blue-700" />
                      Werkstudent
                    </h3>
                    <ul className="space-y-2">
                      <li>• Max. 20h/Woche während Vorlesungszeit</li>
                      <li>• Keine Stundenbegrenzung in Semesterferien</li>
                      <li>• Zählt zu den 70 Arbeitstagen pro Jahr</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <CreditCard className="mr-2 h-4 w-4 text-purple-700" />
                      Minijob
                    </h3>
                    <ul className="space-y-2">
                      <li>• Max. 520€ pro Monat</li>
                      <li>• Keine Stundenbegrenzung</li>
                      <li>• Ganzjährig möglich</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-orange-700" />
                      Kurzfristige Beschäftigung
                    </h3>
                    <ul className="space-y-2">
                      <li>• Max. 70 Arbeitstage pro Kalenderjahr</li>
                      <li>• Keine Verdienstgrenze</li>
                      <li>• Zeitlich flexibel einteilbar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-green-500" />
                  Jahresplanung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-gray-700" />
                      Vorlesungszeit
                    </h3>
                    <p>• Maximale Gesamtarbeitszeit: 20h/Woche</p>
                    <p>• Minijob möglich</p>
                    <p>• Entweder Werkstudent ODER kurzfristige Beschäftigung</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-gray-700" />
                      Semesterferien
                    </h3>
                    <p>• Keine Stundenbegrenzung</p>
                    <p>• Höherer Verdienst möglich</p>
                    <p>• Flexiblere Zeiteinteilung</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-gray-700" />
                      Praxissemester
                    </h3>
                    <p>• Minijob parallel möglich</p>
                    <p>• Vertragsbedingungen beachten</p>
                    <p>• 520€-Grenze gilt weiterhin für Minijob</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="warnings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  Wichtige Hinweise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Info className="mr-2 h-4 w-4 text-yellow-700" />
                      Vor dem Start
                    </h3>
                    <ul className="space-y-2">
                      <li>• Bei der Krankenkasse informieren</li>
                      <li>• Arbeitsstunden und -tage dokumentieren</li>
                      <li>• Verdienstgrenzen im Blick behalten</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-yellow-700" />
                      Jährliche Planung
                    </h3>
                    <ul className="space-y-2">
                      <li>• 70-Tage-Limit gilt pro Kalenderjahr</li>
                      <li>• Neue Planung ab Januar möglich</li>
                      <li>• Semesterzeiten berücksichtigen</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4 text-yellow-700" />
                      Bei Unsicherheit
                    </h3>
                    <ul className="space-y-2">
                      <li>• Krankenkasse kontaktieren</li>
                      <li>• Arbeitgeber informieren</li>
                      <li>• Schriftliche Bestätigung einholen</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}