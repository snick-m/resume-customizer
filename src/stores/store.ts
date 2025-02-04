import { create } from 'zustand';

export interface EducationEntry {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
}

export interface ExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  points: string[];
}

export interface ProjectEntry {
  title: string;
  points: string[];
  skills?: string[];
  link?: string;
}

export interface AchievementEntry {
  title: string;
  event: string;
  points: string[];
  skills?: string[];
}

interface EducationState {
  entries: EducationEntry[];
  addEntry: (entry: EducationEntry) => void;
  updateEntry: (index: number, entry: EducationEntry) => void;
  removeEntry: (index: number) => void;
  clearEntries: () => void;
}

interface ExperienceState {
  entries: ExperienceEntry[];
  addEntry: (entry: ExperienceEntry) => void;
  updateEntry: (index: number, entry: ExperienceEntry) => void;
  removeEntry: (index: number) => void;
  clearEntries: () => void;
}

interface ProjectState {
  entries: ProjectEntry[];
  addEntry: (entry: ProjectEntry) => void;
  updateEntry: (index: number, entry: ProjectEntry) => void;
  removeEntry: (index: number) => void;
  clearEntries: () => void;
}

interface AchievementState {
  entries: AchievementEntry[];
  addEntry: (entry: AchievementEntry) => void;
  updateEntry: (index: number, entry: AchievementEntry) => void;
  removeEntry: (index: number) => void;
  clearEntries: () => void;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

interface ContactInfoState {
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  setInfo: (info: ContactInfo) => void;
}

interface LayoutState {
  spacing: number;
  setSpacing: (spacing: number) => void;
  indentation: boolean;
  toggleIndentation: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  spacing: 4,
  setSpacing: (spacing) => set({ spacing }),
  indentation: true,
  toggleIndentation: () => set((state) => ({ indentation: !state.indentation })),
}));

export const useEducationStore = create<EducationState>((set) => ({
  entries: [
    {
      school: 'Toronto Metropolitan University',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: 'September 2023',
      endDate: 'December 2025'
    },
    {
      school: 'BRAC University',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: 'June 2021',
      endDate: 'December 2023'
    }
  ],
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (index, entry) => set((state) => {
    const entries = [...state.entries];
    entries[index] = entry;
    return { entries };
  }),
  removeEntry: (index) => set((state) => {
    const entries = [...state.entries];
    entries.splice(index, 1);
    return { entries };
  }),
  clearEntries: () => set({ entries: [] }),
}));

export const useExperienceStore = create<ExperienceState>((set) => ({
  entries: [
    {
      company: 'Toronto MetRobotics',
      position: 'Camera Systems Lead Developer',
      startDate: 'June 2024',
      points: [
        'Designed a backend and frontend camera system using C++ and Python using GTK3 for the GUI. Leading 2 members to develop the system. This system will provide crucial camera control to the user and make the software easy to use',
        'Developed camera orchestration system on Bash using GStreamer and improved latency by 50% utilizing UDP Streams',
        'Switched to H.264 Cameras doubling quality and efficiency while reducing bandwidth usage through optimizations'
      ]
    }, {
      company: 'Toronto MetRobotics',
      position: 'Software Developer',
      startDate: 'October 2023',
      endDate: 'June 2024',
      points: [
        'Used Nix, Python, Websockets, GStreamer, and Rust to build a new WebRTC Camera System integrated into web dashboard allowing great control over cameras and streamlined system startup',
        'Built a dashboard using Vue with NodeJS and a custom PubSub on Websockets with strict message types for system overview reducing diagnosis time, improving driver’s User Experience, and increasing system reliability',
        'Wrote and tested C++ firmware for a Teensy micro-controller to integrate new motor drivers using PlatformIO',
        'Wrote and tested a Python library for UM982 GNSS module and assisted in integrating with the new Navigation system',
        'Worked on C++ firmware and Python code-base to improve reliability, remove critical bugs, and implement new features'
      ]
    }, {
      company: 'BRACU Mongol-Tori',
      position: 'Senior Developer of Control & Software',
      startDate: 'December 2022',
      endDate: 'August 2023',
      points: [
        'Created a web control center with HTML, Tailwind CSS, JavaScript, and ROS JS increasing system reliability drastically',
        'Added Inverse Kinematics to the rover using C++ and Python resulting in a 2 times boost in mission completion time',
        'Collaborated with Autonomous, Network, and Camera Systems to debug and improve overall system fluency',
        'Created URDF from CAD files for ROS package for Gazebo simulation of the rover allowing for autonomous testing',
      ]
    }, {
      company: 'Edvive',
      position: 'Lead Developer',
      startDate: 'February 2022',
      endDate: 'March 2022',
      points: [
        'Developed REST API with NodeJS, Express.js for a curated eCommerce style mobile application with 40+ endpoints',
        'Designed and implemented MongoDB database schema for flexible data requirements and frontend customization',
        'Assisted in mobile application development with Flutter by debugging, integrating with API, and reviewing code',
      ]
    }, {
      company: 'Sugary',
      position: 'NodeJS Developer',
      startDate: 'October 2021',
      endDate: 'January 2022',
      points: [
        'Lead the core product development for beginner English training web application using React, NodeJS, Express.js, MongoDB and Web Hardware APIs with a feedback loop from 50+ early real world testers',
        'Collaborated with executives to drive technical decisions and communicated with test users for critical product feedback',
        'Led brainstorming sessions for new features and delegated development by managing a team of 4 developers',
      ]
    }, {
      company: 'Intvill Ltd.',
      position: 'Robotics Software Developer',
      startDate: 'June 2019',
      endDate: 'May 2021',
      points: [
        'Lead the core product development for beginner English training web application using React, NodeJS, Express.js, MongoDB and Web Hardware APIs with a feedback loop from 50+ early real world testers',
        'Collaborated with executives to drive technical decisions and communicated with test users for critical product feedback',
        'Led brainstorming sessions for new features and delegated development by managing a team of 4 developers',
      ]
    },
  ],
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (index, entry) => set((state) => {
    const entries = [...state.entries];
    entries[index] = entry;
    return { entries };
  }),
  removeEntry: (index) => set((state) => {
    const entries = [...state.entries];
    entries.splice(index, 1);
    return { entries };
  }),
  clearEntries: () => set({ entries: [] }),
}));

export const useProjectStore = create<ProjectState>((set) => ({
  entries: [
    {
      title: 'Bipedal Robot',
      points: [
        'Created CAD Model on Fusion360, URDF for Gazebo simulation, and implemented limb motion and walk sequence with C++ on ESP8266 microcontroller allowing a highly reliable development pipeline with testing',
        'Assembled and led a team of 5 Undergraduate students to take the project from ideation to development and then prototype stages demonstrating initiative and leadership',
      ],
      skills: 'ESP8266, C++, Fusion360, ROS, Gazebo'.split(', '),
    }, {
      title: 'Custom Keyboard Firmware',
      points: [
        'Modified open sourced C++ keyboard firmware to implement animation streaming to onboard OLED display over USB connection using Golang with multiple memory restraints',
        'Added custom ARGB LED control to onboard encoder in union with modifier keys by contributing to the firmware',
      ],
    }, {
      title: 'Ambient RGB LED Strips Synchronization System',
      points: [
        'Built a Golang tool to pick prominent color from screen and send to RGB LED Strip controller using HTTP requests',
        'Ensured lowest resource usage while maintaining quality through optimization steps such as down-sampling, low refresh rates, and smooth transitions',
      ],
    }, {
      title: 'Foodies Social Network',
      points: [
        'Developed a backend with Express.js for a REST API, MongoDB Atlas as database, and Svelte for the admin dashboard',
        'Designed MongoDB schemas relying on its GeoLocation features as a core component reducing development time',
        'Used Git with GitHub for version tracking and collaboration, and GitHub Actions Pipelines for CI/CD automating the deployment and testing',
      ],
    }, {
      title: 'Freelance 3D Artist',
      points: [
        'Delivered over 60 3D Render and Animation projects to 40+ clients all over the world demonstrating strong soft skills',
        'Communicated on client requirements and revisions effectively to ensure high satisfaction rate resulting in a 5.0 star rating across multiple marketplaces',
      ],
    },
  ],
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (index, entry) => set((state) => {
    const entries = [...state.entries];
    entries[index] = entry;
    return { entries };
  }),
  removeEntry: (index) => set((state) => {
    const entries = [...state.entries];
    entries.splice(index, 1);
    return { entries };
  }),
  clearEntries: () => set({ entries: [] }),
}));

export const useAchievementStore = create<AchievementState>((set) => ({
  entries: [],
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  updateEntry: (index, entry) => set((state) => {
    const entries = [...state.entries];
    entries[index] = entry;
    return { entries };
  }),
  removeEntry: (index) => set((state) => {
    const entries = [...state.entries];
    entries.splice(index, 1);
    return { entries };
  }),
  clearEntries: () => set({ entries: [] }),
}));

export const useContactInfoStore = create<ContactInfoState>((set) => ({
  phone: '123-456-7890',
  email: 'mushfiqur.rahman@torontomu.ca',
  linkedin: 'https://linkedin.com/in/mushfiqrrm',
  github: 'https://github.com/snick-m ',
  website: '',
  setInfo: (info) => set(info),
}));
