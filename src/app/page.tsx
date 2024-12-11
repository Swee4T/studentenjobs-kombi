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
import JobFinder from './components/JobFinder';

export default function StudentJobsGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2">Studentenjobs Guide 2024</h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">Kombinationen aus Werkstudent, Minijob & Kurzfristige Beschäftigung</p>
        </header>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent p-1">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex items-center justify-center p-2 sm:p-3 text-sm sm:text-base transition-all"
            >
              <Info className="mr-1 sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Übersicht</span>
              <span className="sm:hidden">Info</span>
            </TabsTrigger>
            <TabsTrigger 
              value="rules" 
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center p-2 sm:p-3 text-sm sm:text-base transition-all"
            >
              <BookOpen className="mr-1 sm:mr-2 h-4 w-4" />
              Regeln
            </TabsTrigger>
            <TabsTrigger 
              value="timeline" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white flex items-center justify-center p-2 sm:p-3 text-sm sm:text-base transition-all"
            >
              <Calendar className="mr-1 sm:mr-2 h-4 w-4" />
              Zeit
            </TabsTrigger>
            <TabsTrigger 
              value="warnings" 
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white flex items-center justify-center p-2 sm:p-3 text-sm sm:text-base transition-all"
            >
              <AlertTriangle className="mr-1 sm:mr-2 h-4 w-4" />
              Wichtig
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Info className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="break-words">Mögliche Kombinationen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2 flex items-center text-sm sm:text-base">
                      <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                      Erlaubt ✅
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minijob + Werkstudent bei unter 20h</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minijob + Kurzfristige Beschäftigung</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minijob während Praxissemester</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold text-red-700 mb-2 flex items-center text-sm sm:text-base">
                      <XCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                      Nicht Erlaubt ❌
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Werkstudent + Kurzfristige Beschäftigung im selben Jahr, falls über 70 Arbeitstage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Überschreitung der 20h/Woche während Vorlesungszeit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="break-words">Grundregeln</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Briefcase className="mr-2 h-4 w-4 text-blue-700 flex-shrink-0" />
                      Werkstudent
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Max. 20h/Woche während Vorlesungszeit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Keine Stundenbegrenzung in Semesterferien</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Zählt zu den 70 Arbeitstagen pro Jahr</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <CreditCard className="mr-2 h-4 w-4 text-purple-700 flex-shrink-0" />
                      Minijob
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Max. 520€ pro Monat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Sonntag z.B. gehört nicht zur Vorlesungszeit. Werden nicht zu den 20h angerechnet.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Keine Stundenbegrenzung</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ganzjährig möglich</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Clock className="mr-2 h-4 w-4 text-orange-700 flex-shrink-0" />
                      Kurzfristige Beschäftigung
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Max. 70 Arbeitstage pro Kalenderjahr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Keine Verdienstgrenze</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Zeitlich flexibel einteilbar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <Calendar className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="break-words">Jahresplanung</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <GraduationCap className="mr-2 h-4 w-4 text-gray-700 flex-shrink-0" />
                      Die vorlesungfreie Zeit
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Nachts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Am Wochenende</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Semesterferien</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Calendar className="mr-2 h-4 w-4 text-gray-700 flex-shrink-0" />
                      Zu dieser Zeit gilt
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Keine Stundenbegrenzung</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Höherer Verdienst möglich</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Flexiblere Zeiteinteilung</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Briefcase className="mr-2 h-4 w-4 text-gray-700 flex-shrink-0" />
                      Praxissemester
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minijob parallel möglich</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Vertragsbedingungen beachten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>520€-Grenze gilt weiterhin für Minijob</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="warnings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="break-words">Wichtige Hinweise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Info className="mr-2 h-4 w-4 text-yellow-700 flex-shrink-0" />
                      Vor dem Start
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Bei der Krankenkasse informieren</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Arbeitsstunden und -tage dokumentieren</span>
                      </li>
                      <li className="flex items-start ml-4">
                        <span className="mr-2">•</span>
                        <span>besonders für Arbeit am Wochende und vorlesungsfreier Zeit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Verdienstgrenzen im Blick behalten</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <Calendar className="mr-2 h-4 w-4 text-yellow-700 flex-shrink-0" />
                      Jährliche Planung
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>70-Tage-Limit gilt pro Kalenderjahr</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Neue Planung ab Januar möglich</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Semesterzeiten berücksichtigen</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2 flex items-center text-sm sm:text-base">
                      <AlertTriangle className="mr-2 h-4 w-4 text-yellow-700 flex-shrink-0" />
                      Bei Unsicherheit
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Krankenkasse kontaktieren</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Arbeitgeber informieren</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Schriftliche Bestätigung einholen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* JobFinder Sektion */}
        <div className="mt-12 sm:mt-20">
          <JobFinder />
        </div>
      </div>
    </div>
  );
}