import { FC } from 'react'
import { useSHAlala } from './SHAlalaProvider'

interface ShowSHAProps {
  hash: string
}

const ShowSHA: FC<ShowSHAProps> = () => {
  const { hash } = useSHAlala()
  return (
    <div id="sha">
      {hash.length == 0 ? '' : `SHA1 Hash: ${hash}`}
    </div>
  )
}

export default ShowSHA