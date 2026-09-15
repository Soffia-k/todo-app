import { CustomListItem } from '../CustomListItem/CustomListItem';
import { useValue } from '../../stores/valuesStore';

export function CustomList() {
	const { values, setValues } = useValue();

	return (
		<>
			<CustomListItem values={values.filter((value) => value.status === 'new')} setValues={setValues} />
			<CustomListItem values={values.filter((value) => value.status === 'done')} setValues={setValues} />
		</>
	);

}