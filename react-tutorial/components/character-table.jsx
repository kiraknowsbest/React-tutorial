// Depending on the situation, you may decide
// to have a component defined as a class or 
// not. One main difference is if the component
// will have a state.

// Notice that when using props outside of a
// class, the 'this' keyword isn't used. 

// Also, see that props can be passed in
// multiple times within the same html tag.

// React also allows ES6, meaning that arrow
// functions can be used =>, but isn't mandatory

//Here, I am using deconstruction to essentially
// target only specific properties on the props object.
// This is why {characters} is in the parameters.

var CharacterDiv = function({characters}) {
    return (
    <div>
      {characters.map(function(character) {
        return <Characters key={character.name} character={character} />
      })}
    </div>
  );
};