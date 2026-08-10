export function Input(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input onChange={(e)=>{props.onChangeValue(e.target.value);}} value={props.value}/>
        <button type="submit">Submit</button>
        <button onClick={(e)=>props.onChangeValue('')}>Clear</button>
      </form>
    </>
  );
}