import { Button } from 'antd';

export function CustomButton(props) {
    const { designType, type, onClick, text } = props;
    return (
        <Button style={{ marginLeft: '10px' }} type={designType} htmlType={type} onClick={onClick}>{text}</Button>
    );
}



