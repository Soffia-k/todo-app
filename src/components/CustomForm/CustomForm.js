import { Input, DatePicker, Form } from 'antd';
import { CustomButton } from '../CustomButton/CustomButton';
import { useValue } from '../../stores/valuesStore';
import dayjs from 'dayjs';

export function CustomForm() {
  const { addValue } = useValue();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addValue(values.task, values.pickDate);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="basic"
      style={{ maxWidth: 400, margin: '0 auto', alignContent: 'center' }}
      initialValues={{ pickDate: dayjs().add(7, 'day') }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        name="task"
        rules={[{ required: true, message: 'Please input your task!' }]}
      >
        <Input className='width30' placeholder="What are you up to?" />
      </Form.Item>

      <Form.Item
        name="pickDate"
        rules={[{ required: true, message: 'Please input the deadline!' }]}
      >
        <DatePicker placeholder="Deadline" needConfirm />
      </Form.Item>

      <Form.Item
      >
        <CustomButton designType={'primary'} type={'submit'} text={'Submit'} />
        <CustomButton designType={'text'} onClick={() => form.resetFields()}  text={'Clear'} />
      </Form.Item>

    </Form>
  );
}