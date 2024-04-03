import { useState } from 'react'

function HashInput(){
  const [hashInput, setHashInput] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHashInput('');
  }


  return (
    <>
      <h3>Provide a Hash</h3>
      <div>
        <label htmlFor="hashInput">Hash input: </label>
        <input id="hashInput" placeholder="enter SHA1 here" type="text" value={hashInput} onChange={handleOnChange}/>
        <button type="button" id="hashInputClear" onClick={handleOnClick}>X</button>
        <br/>
        <p style={{margin: '0', fontSize: '.8em'}}>(All other inputs are ignored when this is used)</p>
        <div id="hashInputError" style={{color: 'red'}}></div>
      </div>
    </>
    )

}

export default HashInput