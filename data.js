// =============================================================
//  EDIT THIS FILE ONLY.
//  Keep the same structure: { field: "value", ... },
//  Leave a field out (or use "") if it does not apply.
//  A category with an empty list [] is hidden on the site.
// =============================================================

const PROFILE = {
  name: "Nicolas Deloustal",
  // Your name as it appears in author lists (it will be shown in bold)
  authorName: "N Deloustal",
  role: "PhD in Bioacoustics, Signal Processing and Deep Learning",
  lab: "LIS Lab (DYNI team), UMR 7020 CNRS",
  university: "Université de Toulon / Aix-Marseille Université",
  thesisTitle: "Biosonar Representations from a Single Sensor: Corrected Wideband Ambiguity Function and Deep Learning Estimation of Range and Off-Axis Angle",
  supervisors: "Pr. Hervé GLOTIN, Dr. Adeline PAIEMENT, Dr. Sebastian PARIS",
  period: "2023 – 2026",
  about:
    "This page lists my work during my PhD: research papers, talks, reports, teaching, outreach, and summer schools.",
  photo: "", // e.g. "photo.jpg" (put the file in the same folder)
  links: {
    email: "nicolas.deloustal83@gmail.com",
    orcid: "https://orcid.org/0009-0007-4082-8805",
    scholar: "https://scholar.google.com/citations?user=r5-YK1IAAAAJ&hl=fr",
    hal: "",
    github: "",
    linkedin: "",
    cv: "" // e.g. "cv.pdf"
  }
};

const ACTIVITIES = {
  // ---------- Peer-reviewed publications ----------
  publications: [
    {
      year: 2026,
      title: "A corrected wideband ambiguity function for robust biosonar strategy analysis",
      authors: "N Deloustal, H Glotin, S Paris",
      venue: "The Journal of the Acoustical Society of America, 160(2), 1642–1657",
      doi: "https://doi.org/10.1121/10.0046097",
      pdf: "",
      code: ""
    }
  ],

  // ---------- Preprints ----------
  // status: e.g. "Under review", "Submitted", "In preparation"
  preprints: [
    {
      year: 2026,
      title: "Wigner-Ville Derived Conditional Autoencoder with Feature-Wise Linear Modulation for Single-Hydrophone Range and Off-Axis Estimation of a Biosonar",
      authors: "N Deloustal, H Glotin, S Paris",
      venue: "IEEE ICASSP 2027",
      status: "",
      link: "https://hal.science/hal-05723856v2"
    },
    {
      year: 2026,
      title: "Wideband Ambiguity Function Analysis and Quantification Protocols of Hyperbolic Frequency-Modulated (Bio) Sonars",
      authors: "B Le Gac, N Deloustal, H Glotin",
      venue: "IEEE ICASSP 2027",
      status: "",
      link: "https://hal.science/hal-05801151"
    }
  ],

  // ---------- Research reports ----------
  reports: [
    {
      year: 2023,
      title: "Bilan d'une décennie d'observations des grands cétacés en milieu anthropisé Nord Pelagos : BOMBYX, KM3NeT, et antennes mobiles Sphyrna et WhaleWay",
      authors: "H Glotin, S Chavin, J Girardet, P Giraudet, P Best, M Ferrari, V Sarano, et al.",
      institution: "Université de Toulon",
      link: "https://univ-tln.hal.science/hal-04939839v1"
    },
    {
      year: 2023,
      title: "Analyse automatisée de la diversité acoustique, de la détection d'espèces aux indices bioacoustiques",
      authors: "S Chavin, P Mahé, T Hermet, N Deloustal, H Glotin",
      institution: "Université de Toulon",
      link: "https://univ-tln.hal.science/mnhn-04918405/"
    },
    {
      year: 2023,
      title: "Suivi et identification temps-fréquence bioacoustique par transfer learning sur YOLO : gestion des chorus",
      authors: "N Deloustal, S Chavin, H Glotin",
      institution: "LIS (DYNI team), Université de Toulon, CNRS",
      link: "https://univ-tln.hal.science/hal-05009994v2"
    },
    {
      year: 2022, 
      title: "Veille bioacoustique de l'avifaune en Guadeloupe",
      authors: "N Deloustal, H Glotin",
      institution: "LIS (DYNI team), Université de Toulon, CNRS; OFB (Office Français de la Biodiversité)",
      link: "https://hal.science/hal-05009906"
    }
  ],

  // ---------- Internship reports ----------
  internships: [
    {
      year: 2023,
      title: "Automatic discrimination and classification of cetacean time-frequency modulated clicks",
      institution: "Master's (M2) internship report",
      supervisor: "H Glotin",
      duration: "01/2023 – 06/2023",
      link: "https://doi.org/10.13140/RG.2.2.14127.91047"
    }
  ],


  // ---------- Teaching ----------
  // type: "Lecture", "Tutorial", "Lab", "Project supervision", ...
  teaching: [
    {
      year: "2025–2026",
      course: "UE42 Maths pour l'info 4",
      level: "L2 Informatique",
      institution: "Université de Toulon",
      type: "CM - TD - TP - CC - CT",
      hours: 42
    },
        {
      year: "2024–2025",
      course: "UE42 Maths pour l'info 4",
      level: "L2 Informatique",
      institution: "Université de Toulon",
      type: "CM - TD - TP - CC - CT",
      hours: 57
    },
    {
      year: "2023–2024",
      course: "B65 Bio-informatique",
      level: "L3 Sciences de la vie",
      institution: "Université de Toulon",
      type: "TP - CC",
      hours: 24
    }
  ],




  // ---------- Student supervision ----------
  // level: "L2", "L3", "M1", "M2"... Fill in what you know; empty fields are hidden.
  supervision: [
    {
      year: "2026",
      level: "Engineering",
      topic: "",       // internship topic
      student: "",     // student name (optional)
      coSupervisors: "",
      duration: "6 months",    // e.g. "6 months"
      institution: "Institut Supérieur des Biotechnologies de Paris" 
    },
    {
      year: "2026",
      level: "L3",
      topic: "",
      student: "",
      coSupervisors: "",
      duration: "3 months",
      institution: "Université Paris Dauphine-PSL"
    },
    {
      year: "2024",
      level: "L2",
      topic: "",
      student: "",
      coSupervisors: "",
      duration: "1 month",
      institution: "Université de Toulon"
    }
  ],


  // ---------- Conferences (talks and posters) ----------
  // type: "Talk", "Poster", "Invited talk"
  conferences: [
          {
      year: 2025,
      date: "November 2025",
      title: "Nouvelles formulations de fonction d'ambiguïté large bande dédiées à l'étude de signaux biologiques",
      event: "Journées Apprentissage Signal Image",
      location: "Châteauneuf-le-Rouge, France",
      type: "Talk",
      link: ""
    },
    {
      year: 2025,
      date: "June 2025",
      title: "Ambiguity function of biosonar cetaceans from HD observations and their automatic classification",
      authors: "N Deloustal, H Glotin, S Paris, A Paiement",
      event: "One Ocean Science Congress (OOS 2025)",
      location: "Nice, France",
      type: "Talk",
      link: "https://meetingorganizer.copernicus.org/OOS2025/OOS2025-1562.html"
    },
    {
      year: 2025,
      date: "",
      title: "Biosonar ambiguity function: A comparative approach of the complex pipistrelle versus the powerful sperm whale foraging strategies",
      authors: "N Deloustal, H Glotin, S Paris, A Paiement",
      event: "International Bioacoustics Conference (IBAC 2025)",
      location: "Rotterdam, Netherlands",
      type: "Poster",
      link: "https://hal.science/hal-05825584"
    },
        {
      year: 2024,
      date: "",
      title: "Analyse fine des biosonars de globicéphales (G.m.) et leur classification automatique",
      authors: "N Deloustal, A Paiement, S Paris, H Glotin",
      event: "SERENADE 2024 (ENSTA Bretagne)",
      location: "Toulon, France",
      type: "Talk",
      link: ""
    },
    {
      year: 2024,
      date: "",
      title: "Ethoacoustics of Free Ranging Cetaceans by Super Resolution Portable Array: details on Pm IPI & possible Gm IPI",
      authors: "H Glotin, N Deloustal, A Paiement, S Paris, V Gies, V Barchasz, et al.",
      event: "Detection, Classification, Localisation and Density Estimation of Marine Mammals (DCLDE 2024)",
      location: "Kerteminde, Denmark",
      type: "Poster",
      link: "https://hal.science/hal-05825874"
    }
  ],



  // ---------- Fieldwork ----------
  // Fill in dates and a short description; empty fields are hidden.
  fieldwork: [
        {
      year: 2026,
      dates: "May 26-29, 2026",        // e.g. "June 12–20, 2024"
      title: "Acoustic propagation experiments at sea and in Port Pothuau",
      location: "Port Pothuau, Hyères, France",
      description: "Calibration protocols for hydrophones, active and passive acoustics",  // one or two sentences: goal, equipment, what you recorded
      partners: "UTLN, LIS, CIAN, LISSE, UQO",     // e.g. "LIS, Université de Toulon"
      link: ""
    },
    {
      year: 2025,
      dates: "November 2025",        // e.g. "June 12–20, 2024"
      title: "Passive acoustic monitoring of wing foiling",
      location: "Port-Hélène, Hyères, France",
      description: "Recording the noise level of a moving wing foil using remote antennas",  // one or two sentences: goal, equipment, what you recorded
      partners: "UTLN, LIS, CIAN, Parc national de Port-Cros",     // e.g. "LIS, Université de Toulon"
      link: ""
    },
    {
      year: 2025,
      dates: "September 21-28, 2025",        // e.g. "June 12–20, 2024"
      title: "At-sea mission in the Mediterranean Sea",
      location: "Mediterranean Sea",
      description: "Real-time recording and localisation of sperm whales using passive acoustics",  // one or two sentences: goal, equipment, what you recorded
      partners: "UTLN, LIS, CIAN, Longitude 181",     // e.g. "LIS, Université de Toulon"
      link: "https://cian.lis-lab.fr/whaleway/"
    },
    {
      year: 2024,
      dates: "September 7-21, 2024",        // e.g. "June 12–20, 2024"
      title: "At-sea mission in the Mediterranean Sea",
      location: "Mediterranean Sea",
      description: "Real-time recording and localisation of sperm whales using passive acoustics",  // one or two sentences: goal, equipment, what you recorded
      partners: "UTLN, LIS, CIAN, Longitude 181",     // e.g. "LIS, Université de Toulon"
      link: "https://cian.lis-lab.fr/whaleway/"
    },
    {
      year: 2023,
      dates: "September 15-29, 2023",        // e.g. "June 12–20, 2024"
      title: "At-sea mission in the Mediterranean Sea",
      location: "Mediterranean Sea",
      description: "Real-time recording and localisation of Cetaceans using passive acoustics",  // one or two sentences: goal, equipment, what you recorded
      partners: "UTLN, LIS, CIAN, Live Together",     // e.g. "LIS, Université de Toulon"
      link: ""
    }
  ],


  // ---------- Outreach / public talks ----------
  outreach: [
        {
      year: 2025,
      date: "",
      title: "Decoding echolocation: Good practices for studying the sonar of marine animals",
      event: "EUROPAM",
      audience: "Researchers",
      location: "Toulon, France",
      link: ""
    },
        {
      year: 2025,
      date: "",
      title: "Plongée dans le monde de la bioacoustique",
      event: "Fête de la Science",
      audience: "General public",
      location: "Toulon, France",
      link: ""
    }
  ],


  // ---------- Summer schools ----------
  // role: "Organizer" or "Participant"
  summerSchools: [
    {
      year: 2025,
      dates: "May 2025",
      name: "ERMITES 2025",
      location: "La Garde, France",
      role: "Organizer",
      details: "",
      link: "https://cian.lis-lab.fr/ermites2025/"
    },
    {
      year: 2024,
      dates: "May 2024",
      name: "ERMITES 2024",
      location: "La Garde, France",
      role: "Organizer",
      details: "",
      link: "https://cian.lis-lab.fr/ermites2024/"
    }
  ]
};
