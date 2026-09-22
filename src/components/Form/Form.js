import { Input, DatePicker } from 'antd';
import { CustomButton } from '../CustomButton/CustomButton';
import { useValue } from '../../stores/valuesStore';

export function Form() {
  const { value, setValue, addValue } = useValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '' && value !== ' ') {
      addValue();
    }
    setValue('');
  }

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <Input className='width30' placeholder="What are you up to?" onChange={(e) => setValue(e.target.value)} value={value} />

      {/* <DatePicker style={{ marginLeft: '10px' }} onChange={onChange} placeholder="Deadline" needConfirm /> */}

      <CustomButton designType={'primary'} type={'submit'} text={'Submit'} />
      <CustomButton designType={'text'} onClick={() => setValue('')} text={'Clear'} />

    </form>
  );
}