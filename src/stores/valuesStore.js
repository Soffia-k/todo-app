import { create } from 'zustand';

// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

export const useValue = create((set) => ({
	value: '123',
	setValue: (newValue) => set({ value: newValue }),
	values: [],
	valuesDone: (values) => {
    return values.filter(item => item.done)
  },
	valuesNew: [],
	setValues: (newValues) => set({ values: newValues }),
}))
