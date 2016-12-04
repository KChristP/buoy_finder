import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import ReactDOM from 'react-dom';
import Buoy from './buoy';


class Scene extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, -10, 10);

    this.state = {
      cubeRotation: new THREE.Euler(),
      userLocation: [40, 73]
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      // this.setState({
      //   cubeRotation: new THREE.Euler(
      //     this.state.cubeRotation.x + 0.01,
      //     this.state.cubeRotation.y + 0.01,
      //     this.state.cubeRotation.z + 0.01
      //   ),
      // });
    };

  }

  // componentWillReceiveProps(newProps){
  //   alert(newProps)
  // }


  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    // if(this.props.buoys && this.state.dog){
    //   // console.log(this.state);
    //   // this.setState({dog: false})
    // }
    console.log("tpb", this.props.buoys);
    let buoys = this.props.buoys.map((buoy, idx) => <Buoy buoyNumber={idx} key={buoy.content} buoy={buoy} userLocation={this.state.userLocation}/>)

    return (<React3
      mainCamera="camera"
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          rotation={new THREE.Euler(0.5, 0, 0)}

          position={this.cameraPosition}
        />
        <mesh
            position={new THREE.Vector3(0, 0, 0)}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshLambertMaterial
              color={0xFF0000}
            />
        </mesh>
        <mesh
            position={new THREE.Vector3(0, 0, -1)}
          >
            <boxGeometry
              width={100}
              height={100}
              depth={0.0001}
            />
            <meshBasicMaterial
              color={0x00CC99}
            />
        </mesh>
        <pointLight
          position={new THREE.Vector3(3, 5, 500)}
          color={0xFFFFFF}>

        </pointLight>
        <ambientLight></ambientLight>
        {buoys}
      </scene>
    </React3>);
  }
}

export default Scene
