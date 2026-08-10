export function List(props) {

	return (
		<ol>
			{props.list.map((item) => <li>{item}</li>)}
		</ol>
	);
}