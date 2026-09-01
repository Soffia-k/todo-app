import { Button, Tooltip, List } from 'antd';
import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';

import moment from 'moment';

export function CustomList(props) {
	const {values, setValues} = props;

	return (
		
		<List
			className='width50'
			bordered
			dataSource={values}
			renderItem={(item, index) => (
				<List.Item style={{ backgroundColor: item.status === 'done' ? '#e6ffe6': 'green' }}>

					<div>{index + 1} - {item.taskName}. {item.status === 'done' ? <span>Finish date: {moment(item.dateFinished).format('MMM Do YYYY')}</span> : ''}</div>

					<Button icon={<CheckOutlined />} type="link" style={{ marginLeft: '10px' }} onClick={() => {
						setValues(
							prev => prev.map(
								(task) => task.id === item.id ? { ...task, status: task.status === 'done' ? 'new' : 'done', dateFinished: Date.now() } : task
							)
						);
					}}>{item.status === 'new' ? 'Mark as done' : 'Unmark as done'}
					</Button>

					<Tooltip title="Delete. CANNOT be reverted!">
						<Button type="link" shape="circle" icon={<CloseCircleOutlined />} style={{ marginLeft: '10px' }} onClick={() => {
							setValues(
								values.filter((value) => value.id !== item.id)
							);
						}} />
					</Tooltip>

				</List.Item>
			)}
		/>
	);
}