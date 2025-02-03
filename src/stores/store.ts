import { ContactInfo } from '@/components/ContactInfo';
import { create } from 'zustand';

interface EducationEntry {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
}

interface ExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  points: string[];
}

interface ProjectEntry {
  title: string;
  points: string[];
  link?: string;
}

interface AchievementEntry {
  title: string;
  event: string;
  points: string[];
}

interface EducationState {
  entries: EducationEntry[];
  addEntry: (entry: EducationEntry) => void;
  updateEntry: (index: number, entry: EducationEntry) => void;
  removeEntry: (index: number) => void;
}

interface ExperienceState {
  entries: ExperienceEntry[];
  addEntry: (entry: ExperienceEntry) => void;
  updateEntry: (index: number, entry: ExperienceEntry) => void;
  removeEntry: (index: number) => void;
}

interface ProjectState {
  entries: ProjectEntry[];
  addEntry: (entry: ProjectEntry) => void;
  updateEntry: (index: number, entry: ProjectEntry) => void;
  removeEntry: (index: number) => void;
}

interface AchievementState {
  entries: AchievementEntry[];
  addEntry: (entry: AchievementEntry) => void;
  updateEntry: (index: number, entry: AchievementEntry) => void;
  removeEntry: (index: number) => void;
}

interface ContactInfo {
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
}));

export const useExperienceStore = create<ExperienceState>((set) => ({
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
}));

export const useProjectStore = create<ProjectState>((set) => ({
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
}));

export const useContactInfoStore = create<ContactInfoState>((set) => ({
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  website: '',
  setInfo: (info) => set(info),
}));