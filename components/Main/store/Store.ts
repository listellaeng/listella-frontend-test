import create from 'zustand';

export type StoreTypes = {
  images: string | [string | ArrayBuffer | null];
};

export type StoreActions = {
  setImages: (images: string | [string | ArrayBuffer | null]) => void;
};

const initialState: StoreTypes = {
	images: '',
};

const useImagesStore = create<StoreTypes & StoreActions>(
	(set) => ({
		...initialState,

		setImages: (images: string | [string | ArrayBuffer | null]) => set(() => ({ images })),
	}),
);

export default useImagesStore;
