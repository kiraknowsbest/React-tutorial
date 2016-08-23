// When using a class in React, the "super" must 
// be called first, before anything else. 

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  // Here, I am using logic to determine whether
  // or not the details are showing once rendered.

  render() {
    return (
      <div onClick={() => this.setState({showDetails: !this.state.showDetails})}>
        <img className="charPic" src={this.props.character.image} />
        {this.state.showDetails ? <div className="names">{this.props.character.name}</div> : null }
        {this.state.showDetails ? <div>{this.props.character.details}</div> : null }
      </div>
    ) 
  }
}