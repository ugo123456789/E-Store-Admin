import { create } from 'zustand';

// Define the interface for the modal store
interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Create the custom store using zustand
export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));
