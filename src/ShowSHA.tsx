import { FC } from 'react'

interface ShowSHAProps {
  hash: string
}

const ShowSHA: FC<ShowSHAProps> = ({ hash }) => {
  return (
    <div id="sha">
      {hash.length == 0 ? '' : `SHA1 Hash: ${hash}`}
    </div>
  )
}

export default ShowSHA