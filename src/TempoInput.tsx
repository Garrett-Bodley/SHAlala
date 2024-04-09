import { FC, useState, ChangeEvent } from 'react'
import { useSHAlala } from './SHAlalaProvider'

interface TempoInputProps {

}


const TempoInput: FC<TempoInputProps> = ({}) => {

  const {tempo, updateTempo } = useSHAlala();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTempo(parseInt(e.target.value))
  }

  return(
    <div>
      tempo:<br/>
      <input id="range-input" value={tempo} onChange={handleOnChange} type="range" min="60" max="240" />
      <span id="range-value">{tempo} BPM</span>
    </div>
  )
}

export default TempoInput