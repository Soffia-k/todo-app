import { Button } from 'antd';

export function CustomButton(props) {
    const { designType, type, onClick, text, icon } = props;

    return (
        <Button style={{ marginLeft: '10px' }} type={designType} icon={icon} htmlType={type} onClick={onClick}>{text || null}</Button>
    );
}