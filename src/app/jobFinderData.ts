// jobFinderData.ts
  export const questions: { [key: string]: Question } = {
    start: {
      id: 'start',
      text: 'Welchen Job möchtest du ausführen?',
      options: [
        { text: 'Werkstudent', nextId: 'werkstudent_previous' },
        { text: 'Minijob', nextId: 'minijob_previous' },
        { text: 'Kurzfristige Beschäftigung', nextId: 'kurz_previous' }
      ]
    },
    werkstudent_previous: {
      id: 'werkstudent_previous',
      text: 'Hast oder hattest du dieses Jahr schon eine andere Tätigkeit ausgeführt?',
      options: [
        { text: 'Nein', nextId: 'werkstudent_success' },
        { text: 'Ja, einen Minijob', nextId: 'werkstudent_with_minijob' },
        { text: 'Ja, eine kurzfristige Beschäftigung', nextId: 'werkstudent_days' }
      ]
    },
    werkstudent_days: {
      id: 'werkstudent_days',
      text: 'Hast du bereits über 70 Arbeitstage gearbeitet?',
      options: [
        { text: 'Ja', nextId: 'result_over_70' },
        { text: 'Nein', nextId: 'werkstudent_success' }
      ]
    },
    werkstudent_with_minijob: {
      id: 'werkstudent_with_minijob',
      text: 'Ist es während der Vorlesungszeit?',
      options: [
        { text: 'Ja', nextId: 'check_hours_semester' },
        { text: 'Nein, Semesterferien', nextId: 'werkstudent_minijob_success' }
      ]
    },
    check_hours_semester: {
      id: 'check_hours_semester',
      text: 'Bleibst du unter 20 Stunden pro Woche (Mo-Sa)?',
      options: [
        { text: 'Ja', nextId: 'werkstudent_minijob_success' },
        { text: 'Nein', nextId: 'result_too_many_hours' }
      ]
    },
    minijob_previous: {
      id: 'minijob_previous',
      text: 'Hast du aktuell einen anderen Job?',
      options: [
        { text: 'Nein', nextId: 'minijob_success' },
        { text: 'Ja, Werkstudent', nextId: 'check_hours_semester' },
        { text: 'Ja, kurzfristige Beschäftigung', nextId: 'minijob_success' }
      ]
    },
    kurz_previous: {
      id: 'kurz_previous',
      text: 'Hast oder hattest du dieses Jahr schon eine andere Tätigkeit?',
      options: [
        { text: 'Nein', nextId: 'kurz_success' },
        { text: 'Ja, Werkstudent', nextId: 'check_days_total' },
        { text: 'Ja, eine andere kurzfristige Beschäftigung', nextId: 'check_days_total' }
      ]
    },
    check_days_total: {
      id: 'check_days_total',
      text: 'Wirst du mit der neuen Tätigkeit über 70 Arbeitstage in diesem Jahr kommen?',
      options: [
        { text: 'Ja', nextId: 'result_over_70' },
        { text: 'Nein', nextId: 'kurz_success' }
      ]
    }
  };
  
  export const results: { [key: string]: Result } = {
    werkstudent_success: {
      id: 'werkstudent_success',
      text: 'Du kannst als Werkstudent arbeiten! ✅',
      details: [
        'Maximal 20 Stunden pro Woche während der Vorlesungszeit',
        'Keine Stundenbegrenzung in den Semesterferien',
        'Sozialversicherungspflichtig mit Ermäßigung',
        'Kranken-, Pflege- und Arbeitslosenversicherungsfrei'
      ],
      type: 'success'
    },
    werkstudent_minijob_success: {
      id: 'werkstudent_minijob_success',
      text: 'Du kannst beide Jobs parallel ausüben! ✅',
      details: [
        'Werkstudent: Max. 20h/Woche während Vorlesungszeit',
        'Minijob: Max. 520€/Monat',
        'Gesamtarbeitszeit beachten!',
        'Beide Arbeitgeber informieren'
      ],
      type: 'success'
    },
    minijob_success: {
      id: 'minijob_success',
      text: 'Du kannst den Minijob ausüben! ✅',
      details: [
        'Maximaler Verdienst: 520€ pro Monat',
        'Keine Stundenbegrenzung',
        'Sozialversicherungsfrei',
        'Kombinierbar mit anderen Jobs'
      ],
      type: 'success'
    },
    kurz_success: {
      id: 'kurz_success',
      text: 'Du kannst kurzfristig beschäftigt werden! ✅',
      details: [
        'Maximal 70 Arbeitstage pro Jahr',
        'Keine Verdienstgrenze',
        'Sozialversicherungsfrei',
        'Nur Lohnsteuer fällig'
      ],
      type: 'success'
    },
    result_over_70: {
      id: 'result_over_70',
      text: 'Diese Kombination ist leider nicht möglich! ❌',
      details: [
        '70-Tage-Limit bereits überschritten',
        'Warte bis zum nächsten Kalenderjahr',
        'Alternative: Wechsel zu Minijob möglich',
        'Bei der Krankenkasse beraten lassen'
      ],
      type: 'error'
    },
    result_too_many_hours: {
      id: 'result_too_many_hours',
      text: 'Achtung: Zu viele Arbeitsstunden! ⚠️',
      details: [
        '20-Stunden-Grenze während Vorlesungszeit überschritten',
        'Werkstudentenprivileg gefährdet',
        'Reduziere die Stunden oder warte auf die Semesterferien',
        'Sprich mit deiner Krankenkasse'
      ],
      type: 'error'
    }
  };