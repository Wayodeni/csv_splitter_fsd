import { create } from 'zustand'
import { Section } from './types'

type SectionStore = {
  sections: Section[]
  setSections: (users: Section[]) => void
}

export const useSectionStore = create<SectionStore>()((set) => ({
  sections: [],
  setSections: (sections: Section[]) => set({ sections }),
}))