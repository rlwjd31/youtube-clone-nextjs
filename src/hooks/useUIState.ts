import { create } from "zustand";

export type UIStore = {
  category: string;
  headerImageSrc: string;
  setCategory: (category: string) => void;
  setHeaderImageSrc: (src: string) => void;
};

const useUIState = create<UIStore>((set) => ({
  category: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1569715442753-2eef87d75db3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setCategory: (category) => set({ category: category }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
