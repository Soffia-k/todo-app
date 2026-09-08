import { Input, DatePicker } from 'antd';
import { CustomButton } from '../CustomButton/CustomButton';

export function Form(props) {
  const { value, setValue, setValues } = props;

  const handleSubmit = (value, e) => {
    e.preventDefault();
    if (value !== '' && value !== ' ') {
      setValues(prev => [...prev, { id: Date.now(), taskName: value, status: 'new', dateFinished: '' }]);
    }
    setValue('');
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <form onSubmit={(e) => { handleSubmit(value, e) }}>

      <Input className='width30' placeholder="What are you up to?" onChange={(e) => setValue(e.target.value)} value={value} />

      <DatePicker style={{ marginLeft: '10px' }} onChange={onChange} needConfirm />

      <CustomButton designType={'primary'} type={'submit'} text={'Submit'} />
      <CustomButton designType={'text'} onClick={() => setValue('')} text={'Clear'} />

    </form>
  );
}