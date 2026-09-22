import { CustomListItem } from '../CustomListItem/CustomListItem';
import { useValue } from '../../stores/valuesStore';

export function CustomList() {
	const values = useValue((s) => s.values);

	const newTasks = values.filter((value) => value.status === 'new');
	const doneTasks = values.filter((value) => value.status === 'done');

	return (
		<>
			<CustomListItem tasks={newTasks} />
			<CustomListItem tasks={doneTasks}/>
		</>
	);

}