import { CustomListItem } from '../CustomListItem/CustomListItem';

export function CustomList(props) {
	const { values, setValues } = props;

	return (
		<>
			<CustomListItem values={values.filter((value) => value.status === 'new')} setValues={setValues} />
			<CustomListItem values={values.filter((value) => value.status === 'done')} setValues={setValues} />
		</>
	);

}