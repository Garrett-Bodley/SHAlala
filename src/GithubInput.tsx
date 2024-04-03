function GithubInput(){
  return(
    <div>
      <h3>Load a Github Repo</h3>
      <div>
        <p style={{margin: '0'}}>Grabs the most recent commit of the Github Repo</p>
        <p style={{margin: '0', fontSize: '.8em'}}>(Text/File input are ignored if a repo has been specified)</p>
        <div>
          <label htmlFor="githubInput">Github URL: </label>
          <input id="githubInput" type="text" placeholder="https://github.com/UserName/Repository" style={{width: '50%'}}/>
          <button id="githubInputButton" type="button">Load</button>
          <button id="githubClearButton" type="button">X</button>
        </div>
      </div>
      <div id="githubResults"></div>
    </div>
  )
}

export default GithubInput