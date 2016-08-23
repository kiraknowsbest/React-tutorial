// This example begins with a React component
// labeled "App", which is made into a class
// so that it can have a "state".

class App extends React.Component {
  constructor (props) {
    super(props);

    // State is a way to keep track of
    // changes in a component, and when
    // the state changes, the element will
    // be rendered.

    this.state = {
      verb: this.props.verbs[Math.floor(Math.random() * 20)]
    };
  }

  // In React, the render method is used
  // to create the DOM content for a
  // component. Notice that {} can be used
  // within the html tags to 'break' into 
  // JavaScript instead of html.
  
  // Here, I show how state can be checked
  // within {} and decisions can be made 
  // based on those results.

  // I am using setTimeout() within the 
  // render method. Since React components
  // render whenever there is a change to
  // their state, this will allow 
  // the 'verb' property to update once every
  // 500 ms

  // The reason setTimeout works correctly is because
  // it is in the render method. When render is invoked,
  // setTimeout is called. Render is invoked each time
  // the state of app changes. If I were to switch this
  // with the code in componentDidMount, which uses 
  // setInterval instead, the functionality would stay
  // the same. That works because componentDidMount
  // is a 'lifecycle' method which is only ever called 
  // once. This ensures only one interval is in existence.

  // componentDidMount() {
  //   setInterval(function() {
  //     this.setState({'verb': this.props.verbs[Math.floor(Math.random() * 20)]});
  //   }.bind(this), 500);
  // }

  render () {
    setTimeout(function() {
      this.setState({'verb': this.props.verbs[Math.floor(Math.random() * 20)]});
    }.bind(this), 500);
    return (
      <div>
        I am {this.state.verb}
        <div className="character-title">Invader Zim Characters</div>
        <CharacterDiv characters={this.props.characters} />
      </div>
    );
  }
}