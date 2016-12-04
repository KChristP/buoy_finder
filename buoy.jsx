import React from 'react';

class Buoy extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.handleClick = this.handleClick.bind(this);
	}

	parseLocation(buoy){
    let locationData = buoy.content.slice(76, 92).split(" ")
    let latitude = parseFloat(locationData[0].slice(0, -1))
    let longitude = parseFloat(locationData[1].slice(0, -1))
    let distance = parseFloat(locationData[3])
		let x = (latitude - this.props.userLocation[0]) * 5
		let y = (longitude - this.props.userLocation[1]) * 5
    let parsed = {latitude, latDir: locationData[0][-1], longitude, lonDir: locationData[1][-1], distance, x, y, locationData}
    return parsed
  }

	handleClick(e){
		alert("clicked")
	}

	componentDidMount(){
		// console.log(this.props.buoy);
		// console.log(this.props);
	}

	render(){
	  let location = this.parseLocation(this.props.buoy);
      return (
        <mesh
            position={new THREE.Vector3(
							location.x,
							location.y,
             	0
					 	)}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshLambertMaterial
              color={0x006600}
            />
        </mesh>
	)}
}

export default Buoy;
