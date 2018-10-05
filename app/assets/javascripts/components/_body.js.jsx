class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchTerm: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault();

    let url = "https://api.github.com/search/repositories?q=" + this.state.searchTerm
    fetch(url)
      .then((response) => {return response.json()})
      .then((results) => {this.addSearchResults(results.items)})
  }

  addSearchResults(githubResults){
    this.setState({
      results: githubResults
    });
  }

  handleSearchTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render(){
    var results = this.state.results.map((item) => {
      return(
        <div key={item.id}>
         <GithubResult item={item}/>
        </div>
      )
    })

    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleSearchTermChange} placeholder='Enter search term' />
          <button>Search</button>
        </form>

        <div>
          {results}
        </div>
      </div>
    );
  }
}
