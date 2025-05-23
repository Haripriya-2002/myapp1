
export const syllabusData = {
  preliminaryExam: {
    paperI: [
      {
        title: "Current events of national and international importance",
        topics: [
          "Major national and international events",
          "Government policies and initiatives",
          "Social issues and developments",
          "Economic developments",
          "Environmental issues"
        ]
      },
      {
        title: "History of India and Indian National Movement",
        topics: [
          "Ancient Indian History",
          "Medieval Indian History",
          "Modern Indian History",
          "Indian National Movement",
          "Post-Independence India"
        ]
      },
      {
        title: "Indian and World Geography",
        topics: [
          "Physical Geography",
          "Indian Geography",
          "World Geography",
          "Economic Geography",
          "Climate and Weather"
        ]
      },
      {
        title: "Indian Polity and Governance",
        topics: [
          "Constitution of India",
          "Political System",
          "Panchayati Raj",
          "Public Policy",
          "Rights Issues"
        ]
      },
      {
        title: "Economic and Social Development",
        topics: [
          "Sustainable Development",
          "Poverty and Demographic indicators",
          "Social Sector initiatives",
          "Inclusive Growth",
          "Economic Reforms"
        ]
      },
      {
        title: "Environmental Ecology, Biodiversity and Climate Change",
        topics: [
          "Ecology and Environment",
          "Biodiversity",
          "Climate Change",
          "Environmental Impact Assessment",
          "International Environmental Conventions"
        ]
      },
      {
        title: "General Science",
        topics: [
          "Physics",
          "Chemistry",
          "Biology",
          "Science and Technology",
          "Space Technology"
        ]
      }
    ],
    paperII: [
      {
        title: "Comprehension",
        topics: [
          "Reading comprehension",
          "Verbal reasoning",
          "Logical reasoning",
          "Analytical ability",
          "Decision making and problem solving"
        ]
      },
      {
        title: "Interpersonal skills including communication skills",
        topics: [
          "Communication skills",
          "Interpersonal abilities",
          "Team-building skills",
          "Leadership qualities",
          "Emotional intelligence"
        ]
      },
      {
        title: "Logical reasoning and analytical ability",
        topics: [
          "Deductive reasoning",
          "Inductive reasoning",
          "Analogical reasoning",
          "Critical reasoning",
          "Data interpretation"
        ]
      },
      {
        title: "Decision-making and problem-solving",
        topics: [
          "Decision making models",
          "Problem solving techniques",
          "Strategic thinking",
          "Ethical dilemmas",
          "Case studies"
        ]
      },
      {
        title: "General mental ability",
        topics: [
          "Numerical ability",
          "Data interpretation",
          "Verbal and figure classification",
          "Analogies",
          "Spatial orientation"
        ]
      },
      {
        title: "Basic numeracy and data interpretation",
        topics: [
          "Number systems",
          "Percentages",
          "Ratio and proportion",
          "Data interpretation",
          "Graphs and charts"
        ]
      },
      {
        title: "English Language comprehension skills",
        topics: [
          "Vocabulary",
          "Grammar",
          "Sentence structure",
          "Synonyms and antonyms",
          "Comprehension passages"
        ]
      }
    ]
  },
  mainExam: [
    {
      title: "Essay",
      description: "Candidates may be required to write essays on multiple topics. The essay paper aims to test the candidate's ability to communicate ideas effectively and organize thoughts coherently."
    },
    {
      title: "General Studies I: Indian Heritage and Culture, History and Geography",
      topics: [
        "Indian culture and heritage",
        "History of India and the freedom struggle",
        "World History",
        "Indian and world geography",
        "Society and social issues"
      ]
    },
    {
      title: "General Studies II: Governance, Constitution, Polity, Social Justice",
      topics: [
        "Indian Constitution",
        "Parliamentary system and governance",
        "Social justice and international relations",
        "Welfare schemes and policies",
        "Bilateral and global groupings"
      ]
    },
    {
      title: "General Studies III: Technology, Economic Development, Biodiversity, Security",
      topics: [
        "Indian economy and planning",
        "Agriculture and food security",
        "Science and technology",
        "Environment and ecology",
        "Disaster management and security challenges"
      ]
    },
    {
      title: "General Studies IV: Ethics, Integrity, and Aptitude",
      topics: [
        "Ethics and human interface",
        "Attitude and moral influence",
        "Civil service values",
        "Emotional intelligence",
        "Case studies on ethics"
      ]
    },
    {
      title: "Optional Subject Papers I & II",
      description: "Candidates must choose one optional subject from the list provided by UPSC. Each optional subject has two papers."
    }
  ]
};

export const mockTests = [
  {
    id: 1,
    title: "Preliminary Test 1: General Studies",
    description: "Covers current affairs, history, geography, and polity",
    questions: 100,
    duration: 120,
    difficulty: "Medium"
  },
  {
    id: 2,
    title: "Preliminary Test 2: CSAT",
    description: "Focuses on aptitude, reasoning, and comprehension",
    questions: 80,
    duration: 120,
    difficulty: "Medium"
  },
  {
    id: 3,
    title: "Mains Test: Essay Writing",
    description: "Practice essay writing on contemporary topics",
    questions: 2,
    duration: 180,
    difficulty: "Hard"
  },
  {
    id: 4,
    title: "Mains Test: GS Paper I",
    description: "Indian Heritage, Culture, History and Geography",
    questions: 20,
    duration: 180,
    difficulty: "Hard"
  },
  {
    id: 5,
    title: "Mains Test: GS Paper II",
    description: "Governance, Constitution, Polity, Social Justice",
    questions: 20,
    duration: 180,
    difficulty: "Hard"
  }
];

export const studyResources = [
  {
    id: 1,
    title: "Indian Polity",
    author: "M. Laxmikanth",
    category: "Polity",
    description: "Comprehensive coverage of Indian political system and constitution",
    rating: 4.8
  },
  {
    id: 2,
    title: "India's Struggle for Independence",
    author: "Bipan Chandra",
    category: "History",
    description: "Detailed account of Indian freedom movement",
    rating: 4.7
  },
  {
    id: 3,
    title: "Indian Economy",
    author: "Ramesh Singh",
    category: "Economy",
    description: "Complete guide to Indian economic system and policies",
    rating: 4.5
  },
  {
    id: 4,
    title: "Certificate Physical and Human Geography",
    author: "Goh Cheng Leong",
    category: "Geography",
    description: "Fundamental concepts of physical and human geography",
    rating: 4.6
  },
  {
    id: 5,
    title: "Environment and Ecology",
    author: "Majid Husain",
    category: "Environment",
    description: "Comprehensive coverage of environmental issues and ecology",
    rating: 4.4
  },
  {
    id: 6,
    title: "Ethics, Integrity and Aptitude",
    author: "Subba Rao and P.N. Roy Chowdhury",
    category: "Ethics",
    description: "Guide to ethical concepts and case studies",
    rating: 4.3
  }
];

export const currentAffairsTopics = [
  {
    id: 1,
    title: "National Education Policy 2020",
    category: "Education",
    date: "May 15, 2025",
    summary: "Key highlights and implementation status of NEP 2020"
  },
  {
    id: 2,
    title: "India's G20 Presidency",
    category: "International Relations",
    date: "May 10, 2025",
    summary: "Achievements and outcomes of India's G20 leadership"
  },
  {
    id: 3,
    title: "Climate Action Plan",
    category: "Environment",
    date: "May 5, 2025",
    summary: "India's commitments and initiatives to combat climate change"
  },
  {
    id: 4,
    title: "Digital India Program",
    category: "Technology",
    date: "April 28, 2025",
    summary: "Progress and impact of Digital India initiatives"
  },
  {
    id: 5,
    title: "Economic Survey Highlights",
    category: "Economy",
    date: "April 20, 2025",
    summary: "Key findings and projections from the latest Economic Survey"
  }
];

export const studyPlans = [
  {
    id: 1,
    title: "Beginner's 12-Month Plan",
    duration: "12 months",
    difficulty: "Beginner",
    description: "Comprehensive study plan for first-time aspirants",
    phases: [
      {
        title: "Foundation Phase (3 months)",
        activities: ["NCERT books", "Basic concepts", "Current affairs"]
      },
      {
        title: "Main Study Phase (6 months)",
        activities: ["Standard reference books", "Previous year questions", "Mock tests"]
      },
      {
        title: "Revision Phase (3 months)",
        activities: ["Comprehensive revision", "Test series", "Current affairs"]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced 6-Month Plan",
    duration: "6 months",
    difficulty: "Advanced",
    description: "Intensive study plan for experienced aspirants",
    phases: [
      {
        title: "Revision Phase (2 months)",
        activities: ["Revise core concepts", "Update notes", "Current affairs"]
      },
      {
        title: "Practice Phase (3 months)",
        activities: ["Mock tests", "Answer writing practice", "Previous year analysis"]
      },
      {
        title: "Final Preparation (1 month)",
        activities: ["Final revision", "Current affairs consolidation", "Strategy refinement"]
      }
    ]
  },
  {
    id: 3,
    title: "Mains-Focused Plan",
    duration: "4 months",
    difficulty: "Intermediate",
    description: "Specialized plan focusing on Mains examination",
    phases: [
      {
        title: "Content Building (1 month)",
        activities: ["Topic-wise study", "Note making", "Current affairs"]
      },
      {
        title: "Answer Writing Practice (2 months)",
        activities: ["Daily answer writing", "Essay practice", "Mock tests"]
      },
      {
        title: "Revision (1 month)",
        activities: ["Comprehensive revision", "Mock tests", "Current affairs"]
      }
    ]
  }
];

export const successStories = [
  {
    id: 1,
    name: "Shruti Sharma",
    rank: "AIR 1",
    year: "2022",
    background: "Economics graduate",
    attempts: 2,
    quote: "Consistency and quality of preparation matters more than quantity.",
    tips: [
      "Focus on understanding concepts rather than rote learning",
      "Regular answer writing practice is crucial",
      "Stay updated with current affairs daily",
      "Maintain a balanced approach to all subjects"
    ]
  },
  {
    id: 2,
    name: "Ankita Agarwal",
    rank: "AIR 2",
    year: "2021",
    background: "Engineering graduate",
    attempts: 3,
    quote: "The key is to stay motivated and keep improving with each attempt.",
    tips: [
      "Create a personalized study plan and stick to it",
      "Analyze previous year question papers thoroughly",
      "Focus on your strengths while improving weaknesses",
      "Take regular breaks to avoid burnout"
    ]
  },
  {
    id: 3,
    name: "Rahul Sharma",
    rank: "AIR 5",
    year: "2023",
    background: "Medical graduate",
    attempts: 1,
    quote: "Strategic preparation and smart work can help you succeed in the first attempt.",
    tips: [
      "Choose reliable sources and stick to them",
      "Practice time management during preparation",
      "Join a test series for realistic assessment",
      "Develop a current affairs strategy early on"
    ]
  }
];
