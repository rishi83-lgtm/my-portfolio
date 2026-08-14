export const profile = {
  name: 'Rishi Kaushik',
  title: 'Full Stack Developer',
  tagline: 'MERN-stack developer building fast, responsive and reliable web applications.',
  intro:
    'I am a Full Stack Developer and MCA candidate at Lovely Professional University who loves turning ideas into production-ready web apps. I work primarily with React.js, Node.js, Express.js and MongoDB, and enjoy building secure, well-structured products — from AI-powered finance platforms to hospital management systems.',
  location: 'Bilaspur, Chhattisgarh, India',
  email: 'rishikaushik930@gmail.com',
  phone: '+91-9301728349',
  image: '/images/rishi-kaushik.jpeg',
  resume: '/resume.pdf',
  socials: {
    github: 'https://github.com/rishi930-A',
    linkedin: 'https://www.linkedin.com/in/rishikaushikdev',
  },
}

export const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Tech Stack', value: 'MERN' },
  { label: 'MCA CGPA', value: '7.31' },
  { label: 'Certifications', value: '3' },
]

export type Project = {
  title: string
  period: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Finsage',
    period: 'Jul 2026 – Aug 2026',
    tagline: 'AI-powered personal finance & budgeting platform',
    description:
      'A responsive AI-powered personal finance and budgeting platform for managing income, expenses, budgets, savings goals and financial transactions with intelligent insights.',
    highlights: [
      'Architected the full stack with React.js, Node.js, Express.js and MongoDB to manage income, expenses, budgets, savings goals and transactions.',
      'Built JWT authentication with bcrypt password hashing and persistent financial records via MongoDB and Mongoose.',
      'Facilitated AI-driven financial analysis, budgeting, spending insights and savings guidance.',
      'Accelerated backend communication with RESTful APIs for fast and reliable financial management.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Zustand'],
    github: 'https://github.com/rishi83-lgtm/Finsage-',
    featured: true,
  },
  {
    title: 'Medicare',
    period: 'Feb 2026 – Mar 2026',
    tagline: 'Hospital Management System',
    description:
      'A responsive Hospital Management System that streamlines patient and hospital operations with role-based dashboards for Admin, Doctor and Patient.',
    highlights: [
      'Engineered the system with React.js, JavaScript (ES6), Node.js, Express.js and MongoDB to streamline hospital operations.',
      'Integrated secure authentication and role-based access for Admin, Doctor and Patient using JWT and bcrypt.',
      'Implemented dashboards and RESTful APIs for real-time patient data management.',
    ],
    tech: ['React.js', 'JavaScript (ES6)', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/rishi83-lgtm/Hospital-Management-System',
    featured: true,
  },
  {
    title: 'Blind Guard',
    period: 'Feb 2024 – May 2024',
    tagline: 'Assistive mobility system for the visually impaired',
    description:
      'An Arduino-based assistive mobility system programmed in C++ that helps visually impaired individuals navigate safely using ultrasonic and infrared sensing.',
    highlights: [
      'Developed the assistive mobility system in C++ to support navigation for visually impaired individuals.',
      'Used an HC-SR04 ultrasonic sensor to detect obstacles within a 2–400 cm range via pulse-duration measurement.',
      'Incorporated infrared sensing to identify surface-level hazards such as pits and uneven pathways.',
    ],
    tech: ['C++', 'Arduino', 'HC-SR04', 'IR Sensor', 'Vibration Motor', 'NEO-6M GPS'],
    demo: 'https://drive.google.com/file/d/1YiRseuKjrWbjKlCxWv9r72x_izLXzGD0/view?usp=drivesdk',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Programming Languages', skills: ['C++', 'JavaScript (ES6)', 'Python', 'SQL', 'PHP'] },
  { category: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Web Design'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT'] },
  { category: 'Database', skills: ['MongoDB', 'MySQL'] },
  { category: 'Tools & Technologies', skills: ['Git', 'GitHub', 'Postman', 'Mongoose'] },
  {
    category: 'Core & Soft Skills',
    skills: ['Data Structures & Algorithms', 'OOP', 'Problem-Solving', 'Team Collaboration', 'Leadership'],
  },
]

export type TimelineItem = {
  title: string
  org: string
  period: string
  points: string[]
  tag: string
}

export const experience: TimelineItem[] = [
  {
    title: 'Full Stack Developer — Finsage (Personal Project)',
    org: 'Independent',
    period: 'Jul 2026 – Aug 2026',
    tag: 'Project',
    points: [
      'Designed and built an AI-powered personal finance platform end to end with the MERN stack.',
      'Implemented secure JWT auth, RESTful APIs and AI-driven budgeting insights.',
    ],
  },
  {
    title: 'Full Stack Developer — Medicare (Personal Project)',
    org: 'Independent',
    period: 'Feb 2026 – Mar 2026',
    tag: 'Project',
    points: [
      'Built a Hospital Management System with role-based access for Admin, Doctor and Patient.',
      'Delivered real-time dashboards backed by RESTful APIs and MongoDB.',
    ],
  },
  {
    title: 'Participant — 24-Hour Hack Manthan 2025',
    org: 'Lovely Professional University',
    period: 'Oct 2025',
    tag: 'Hackathon',
    points: ['Competed in a 24-hour hackathon, rapidly prototyping a working solution under time pressure.'],
  },
  {
    title: 'Certificate of Momentum Recognition',
    org: 'GeeksforGeeks',
    period: 'Oct 2025',
    tag: 'Recognition',
    points: ['Recognized by GeeksforGeeks for consistent progress and momentum in problem-solving.'],
  },
]

export type EducationItem = {
  degree: string
  institution: string
  period: string
  location: string
  score: string
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University',
    period: '2025 – 2027',
    location: 'Jalandhar, Punjab',
    score: 'CGPA: 7.31',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Govt. E. Raghavendra Rao Postgraduate Science College',
    period: '2021 – 2024',
    location: 'Bilaspur, Chhattisgarh',
    score: 'CGPA: 6.9',
  },
  {
    degree: '12th with Science',
    institution: 'Govt. H.S. School Rajendra Nagar',
    period: '2020 – 2021',
    location: 'Bilaspur, Chhattisgarh',
    score: 'Percentage: 93%',
  },
  {
    degree: '10th Standard',
    institution: 'Saraswati Shishu Mandir H.S. School',
    period: '2017 – 2018',
    location: 'Bilaspur, Chhattisgarh',
    score: 'Percentage: 83.5%',
  },
]

export type Certificate = {
  title: string
  issuer: string
  date: string
  link: string
}

export const certificates: Certificate[] = [
  {
    title: 'React Training',
    issuer: 'Internshala Trainings',
    date: 'Jul 2026',
    link: 'https://drive.google.com/file/d/1M2E4WSOasYVqlJ_twEyaHjiG0Ew8hpiz/view',
  },
  {
    title: 'Java Programming',
    issuer: 'NEO Colab (iamneo)',
    date: 'Jun 2026',
    link: 'https://drive.google.com/file/d/1PjxnyiHgiLSnxyUNWJnAxtn09jHuI_5o/view',
  },
  {
    title: 'Communication & Public Speaking Skills',
    issuer: 'Lovely Professional University',
    date: 'Mar 2026',
    link: 'https://drive.google.com/file/d/1weQXaWzoCIjdnvZzz_AeGL6W_s1gnKCT/view?usp=drivesdk',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]
