import React from 'react';

class UserInput extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render(){
    return(
      <div>
        <form class="location_input" action="index.html" method="post">
          <label for="latitude">Latitude
            <input type="text" name="latitude" value="0" />
          </label>
          <label for="longitude">Longitude
            <input type="text" name="longitude" value="0" />
          </label>
        </form>
      </div>
    )
  }
}

export default UserInput;
