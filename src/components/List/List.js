export function List(props) {
	return (
		<ol>
			{props.list.map((item, index) => <li key={index}>{item}</li>)}
		</ol>
	);
}