import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import ReactDOM from 'react-dom';
import Buoy from './buoy';
// import UserInput from './user_input';
import Scene from './scene';
import {mockJson} from './mockData'


class Main extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      latitude: undefined,
      longitude: undefined,
      allBuoys: undefined,
      dog: undefined

    }
    this.handleLatChange = this.handleLatChange.bind(this)
    this.handleLonChange = this.handleLonChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.lookupBuoys = this.lookupBuoys.bind(this)

  }

  lookupBuoys(latitude, longitude){
    // console.log(this);
    let url = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.ndbc.noaa.gov%2Frss%2Fndbc_obs_search.php%3Flat%3D${latitude}%26lon%3D${longitude}%26radius%3D100`
    // console.log(url);
    let that = this
    function setBuoys(allBuoys){
      that.setState({dog: "nell"})
      that.setState({allBuoys: allBuoys})
      // console.log(allBuoys);
    }
    fetch(url)
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        // console.log(2, that)
        // setBuoys(json.items) // uncomment this line, and comment out mockJson references(line46) to use live api
        // console.log(mockJson);
        setBuoys(JSON.parse(mockJson).items)
      })

    // google.load("feeds", "1");
    // function initialize() {
    //   let url = `http://www.ndbc.noaa.gov/rss/ndbc_obs_search.php?lat=${latitude}&lon=${longitude}&radius=100`
    //   let feed = new google.feeds.Feed(url);
    //   feed.setNumEntries(100)
    //   feed.load(function(result) {
    //     this.setState({allBuoys: result.feed.entries})
    //
    //     // ReactDOM.render(<Scene buoys={allBuoys}/>, document.getElementById('feed'));
    //   });
    // }
    //
    // google.setOnLoadCallback(initialize.bind(this));

  }

  handleLatChange(e){
    let value = e.target.value
    this.setState({latitude: value})
  }

  handleLonChange(e){
    let value = e.target.value
    this.setState({longitude: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.lookupBuoys(this.state.latitude, this.state.longitude)
  }

  render(){
    const {latitude, longitude, allBuoys, dog} = this.state
    // console.log(allBuoys);
    // console.log(dog);
    return(
      <div>
        <form className="location_input" onSubmit={this.handleSubmit}>
          <label>Latitude
            <input
              type="text"
              name="latitude"
              value={latitude}
              onChange={this.handleLatChange} />
          </label>
          <label>Longitude
            <input
              type="text"
              name="longitude"
              value={longitude}
              onChange={this.handleLonChange} />
          </label>
          <div onClick={this.handleSubmit}>Submit</div>
        </form>
        {
          allBuoys ? <Scene buoys={allBuoys}/> : null
        }
      </div>
    )
  }
}
function myRender(){
  ReactDOM.render(<Main />, document.getElementById('root'));

}
myRender()

// function Dog(){
//   return(<div>dog</div>)
// }
