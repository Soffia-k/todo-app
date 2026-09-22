import { Tooltip, List } from 'antd';
import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { CustomButton } from '../CustomButton/CustomButton';
import { useValue } from '../../stores/valuesStore';

import moment from 'moment';

export function CustomListItem(props) {
	const { tasks } = props;
	const { deleteTask, changeStatus } = useValue();

	return (
		<List
			className='width50'
			bordered
			dataSource={tasks}
			renderItem={(item, index) => (
				<List.Item style={{ backgroundColor: item.status === 'done' ? '#e6ffe6' : '#f5f5f5' }}>

					<div>{index + 1} - {item.taskName}. {item.status === 'done' ? <span>Finish date: {moment(item.dateFinished).format('MMM Do YYYY')}</span> : ''}</div>

					<CustomButton icon={<CheckOutlined />} designType={'link'} text={item.status === 'new' ? 'Mark as done' : 'Unmark as done'} onClick={() => {
						changeStatus(item.id);
					}} />

					<Tooltip title="Delete. CANNOT be reverted!">
						<CustomButton designType={'link'} icon={<CloseCircleOutlined />} onClick={() => {
							deleteTask(item.id);
						}} />
					</Tooltip>

				</List.Item>
			)}
		/>
	);
}