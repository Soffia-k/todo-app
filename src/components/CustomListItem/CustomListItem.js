import { Tooltip, List } from 'antd';
import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { CustomButton } from '../CustomButton/CustomButton';

import moment from 'moment';

export function CustomListItem(props) {
	const { values, setValues } = props;

	return (
		<List
			className='width50'
			bordered
			dataSource={values}
			renderItem={(item, index) => (
				<List.Item style={{ backgroundColor: item.status === 'done' ? '#e6ffe6' : '#f5f5f5' }}>

					<div>{index + 1} - {item.taskName}. {item.status === 'done' ? <span>Finish date: {moment(item.dateFinished).format('MMM Do YYYY')}</span> : ''}</div>

					<CustomButton icon={<CheckOutlined />} designType={'link'} text={item.status === 'new' ? 'Mark as done' : 'Unmark as done'} onClick={() => {
						setValues(
							prev => prev.map(
								(task) => task.id === item.id ? { ...task, status: task.status === 'done' ? 'new' : 'done', dateFinished: Date.now() } : task
							)
						);
					}}/>

					<Tooltip title="Delete. CANNOT be reverted!">
						<CustomButton designType={'link'} icon={<CloseCircleOutlined />} onClick={() => {
							setValues(
								prev => prev.filter(
									(value) => value.id !== item.id
								)
							);
						}} />
					</Tooltip>

				</List.Item>
			)}
		/>
	);
}