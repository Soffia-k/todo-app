import { CustomListItem } from '../CustomListItem/CustomListItem';
import { useValue } from '../../stores/valuesStore';

export function CustomList() {
	const values = useValue((s) => s.values);
	const setValues = useValue((s) => s.setValues);

	return (
		<>
			<CustomListItem values={values.filter((value) => value.status === 'new')} setValues={setValues} />
			<CustomListItem values={values.filter((value) => value.status === 'done')} setValues={setValues} />
		</>
	);

}