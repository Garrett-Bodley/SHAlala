import './App.css'
import HashInput from './HashInput.tsx'
import GithubInput from './GithubInput.tsx'
import ToneProvider from './utilities/ToneProvider.tsx'

function App() {

  return (
    <>
      <h1>SHAlala</h1>
      <h2>Turn Your SHA1 into Music If You Want to Do That For Some Reason</h2>
      <ToneProvider>
        <HashInput/>
        <GithubInput/>
      </ToneProvider>
    </>
  )
}

export default App
