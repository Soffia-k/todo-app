import { Input, DatePicker } from 'antd';
import { CustomButton } from '../CustomButton/CustomButton';
import { useValue } from '../../stores/valuesStore';
import { useState } from 'react';

export function Form() {
  const { value, setValue, addValue } = useValue();
  const [deadline, setDeadline] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '' && value !== ' ') {
      addValue(deadline);
    }
    setValue('');
    setDeadline(null);
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <Input className='width30' placeholder="What are you up to?" onChange={(e) => setValue(e.target.value)} value={value} />

      <DatePicker style={{ marginLeft: '10px' }} value={deadline} onChange={(date) => setDeadline(date)} placeholder="Deadline" needConfirm />

      <CustomButton designType={'primary'} type={'submit'} text={'Submit'} />
      <CustomButton designType={'text'} onClick={() => { setValue(''); setDeadline(null); }} text={'Clear'} />

    </form>
  );
}