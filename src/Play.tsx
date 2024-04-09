import { FC } from 'react'
import { useSHAlala } from './SHAlalaProvider'

const Play: FC = () => {

  const {playHash} = useSHAlala()
  return(
    <>
      <h3>Play</h3>
      <button type="submit" style={{marginTop: '10px'}} onClick={playHash}>SHAlala</button>
      <button id="stop" type="button">stop</button>
    </>
  )
}

export default Play