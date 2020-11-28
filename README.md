# 3d FLAG / THREE js

### Adapting the animation from this project i did yesterday, into react:

<br>

[3d flag first test with vanilla js](https://github.com/nadiamariduena/3d-waving-flag-threejs)

[<img src="./src/img/flag-test-vanillajs1.gif">](https://github.com/nadiamariduena/3d-waving-flag-threejs)

<br>
<br>

##### START BY INSTALLING three.js

> npm i three

- I advice you to follow the tutorial to get familiar with the code

[3d flag by superHi](https://www.superhi.com/video/how-to-make-a-3d-waving-flag-using-three-js-webgl-and-javascript)

- Aftwerwards follow the instructions from this website

[3d flag adapted to React](https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817)

<br>
<br>
<br>

## THE TRICK is to wrap the vanilla javascript code inside a componentDidMount()

- THIS IS NOT MY CODE but their example

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
class App extends Component {
  //
  //
  // wrapping the JS code here:
  //
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }
  //
  //
  // wrapping the JS code, end:
  //
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

<br>

### SINCE MY CODE IS A BIT DIFFERENT ...

- I replaced few things, for example in the react adaptation website they tell you to replace line 11:

```javascript
// from this
document.body.appendChild(renderer.domElement);
//  to this
this.mount.appendChild(renderer.domElement);
```

#### BUT SINCE I HAVE A SECTION with a class, i added this:

```javascript
// 1
const section = document.querySelector("section.flag");
//
//
// document.body.appendChild( renderer.domElement );
// use ref as a mount point of the Three.js scene instead of the document.body
// 2
section.appendChild(renderer.domElement);
//
//
  //
  //------------------
  //
  render() {
    //   3
    return <section ref={(ref) => (this.mount = ref)} className="flag" />;
  }
}
//
//
//
// the styles
  section.flag {
    width: 100vw;
    height: 100vh;
    background-color: rgb(236, 236, 236);
  }
```

<br>
<br>

#### AFTER MAKING THE CONNECTION 

- I JUST NEED TO ADD THE CODE I HAD 

```javascript

```