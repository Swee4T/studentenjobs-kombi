import Script from 'next/script'

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "studentenjobs-kombi.de",
    "url": "https://studentenjobs-kombi.de",
    "description": "Kompletter Guide: Werkstudent & Minijob kombinieren, 70-Tage-Regelung und aktuelle Verdienstgrenzen 2024",
    "sameAs": [
      "https://kombinatorik.info",
      "https://oskai.de"
    ],
    "author": {
      "@type": "Person",
      "name": "Oskar Pokorski",
      "url": "https://oskai.de"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Darf ich als Werkstudent einen Minijob haben?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, ein Minijob (520€) ist parallel zur Werkstudententätigkeit möglich, solange die 20-Stunden-Grenze während der Vorlesungszeit eingehalten wird."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist die 70-Tage-Regelung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die 70-Tage-Regelung besagt, dass Studenten maximal 70 Arbeitstage oder 3 Monate pro Jahr sozialversicherungsfrei arbeiten können. Dies gilt für Werkstudenten und kurzfristige Beschäftigungen zusammen."
          }
        }
      ]
    }
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}