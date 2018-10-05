class GithubResult extends React.Component{

  render(){
    return(
      <div>
        <h2>Repo: {this.props.item.name}</h2>
        <h4>{this.props.item.description}</h4>
        <a href={this.props.item.url}>{this.props.item.url}</a>
        <div>Forked: {this.props.item.forks_count}</div>
        <div>Language: {this.props.item.language}</div>
      </div>
    )
  }
}
