import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
//
//
class App extends Component {
  //
  //
  componentDidMount() {
    //
    const section = document.querySelector("section.flag");

    //
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    //
    var renderer = new THREE.WebGLRenderer({
      // 7 adding the alpha transparency
      alpha: true,
      antialias: true, //8 this will smooth the edges of the cube
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    section.appendChild(renderer.domElement);
    //
    //
    const loader = new THREE.TextureLoader();
    //
    //
    //
    // THREE.PlaneGeometry(5, 3); the 5 stands for width and 3 for height
    //const geometry = new THREE.PlaneGeometry(5, 2.5, 20, 15);
    const geometry = new THREE.PlaneGeometry(5, 3, 50, 30);
    // it will increase the segments in the geometry
    // its related to this   const waveX1 = 0.1 * Math.sin(dots_vertices.x * 2 + t_timeClock);
    //
    //
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    //
    //
    //
    //
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    //
    //
    // new rotation
    cube.rotation.set(-0.1, 0, 0);
    // x direction y direction and z
    //
    // this will increase the flag, actually is like zooming, the less the bigger
    camera.position.z = 4;
    //
    //
    //by default its not doing anything, however inside the animate function you will be using it
    // its going to wave the flag smoothly
    const clock = new THREE.Clock();
    //
    //
    function animate() {
      // for each time it animates, i want to get a progress of the clock
      const t_timeClock = clock.getElapsedTime();
      //
      // so if x is the thing that moves, i want to add the t_timeClock
      //
      //
      // With the vertices we are going to grab all the points /vertices withing the cube/flag
      // We are going to move them in a sine "curve"
      // the map is going to make something for every single point, so each point is going to do a partcular thing, moving up down etc
      cube.geometry.vertices.map((dots_vertices) => {
        //
        //
        const waveX1 = 0.1 * Math.sin(dots_vertices.x * 2 + t_timeClock);
        // 2.5 will make the wave huge and very close to the user, 0.5 is flat , 0.1 even more flattened
        //
        //
        // second wave
        const waveX2 = 0.15 * Math.sin(dots_vertices.x * 3 + t_timeClock * 2);
        // 0.15 is less than 0.25 , 0.25 corresponds to half of the first wave, so this 2 wave is a little wave
        // const waveX2 = 0.5 * Math.sin(dots_vertices.x * 3 + t_timeClock * 2);
        // * 3  the waves , so this wave runs on 3 in amplitude and moves twice as quick
        //
        //
        // 3 wave but in the Y direction
        // const waveY1 = 0.1 * Math.sin(dots_vertices.y * 6 + t_timeClock * 0.1); //to slowdown the time t_timeClock * 0.5);
        //
        // dots_vertices.z = waveX1 + waveX2 + waveY1;
        dots_vertices.z = waveX1 + waveX2;
      });

      //
      // // its going to wave the flag smoothly
      cube.geometry.verticesNeedUpdate = true;
      //
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    //
    //
    animate();
    //
    //
    //
    //
  }
  render() {
    return <section ref={(ref) => (this.mount = ref)} className="flag" />;
  }
}

//
export default App;
