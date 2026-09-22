import { create } from 'zustand';

export const useValue = create((set) => {
	return {
		value: '',
		setValue: (newValue) => set({ value: newValue }),
		values: [],
		addValue: () => {
			set((state) => {
				return {
					values: [...state.values, {
						id: Date.now(),
						taskName: state.value,
						status: "new",
						dateFinished: "",
					}]
				}
			})
		},
		changeStatus: (id) => set((state) => {
			return { values: state.values.map((task) => task.id === id ? { ...task, status: task.status === "done" ? "new" : "done" } : task) }
		}),
		deleteTask: (id) => set((state) => {
			return { values: state.values.filter((task) => task.id !== id) }
		})
	}
});
