import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import stars from '../Material/Background.jpg';
import Sun from '../Material/sun.jpg';
const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
const orbit=new OrbitControls(camera,renderer.domElement);
const axesHelper=new THREE.AxesHelper(5)
scene.add(axesHelper);
camera.position.set(2,2,20);
/*Stars Background*/
const textureLoader=new THREE.TextureLoader();
scene.background=textureLoader.load(stars);
/* */
/*SUN*/
const sunGeometry =new THREE.SphereGeometry(4);
const sunMaterial=new THREE.MeshBasicMaterial({map:textureLoader.load(Sun)});
const sun=new THREE.Mesh(sunGeometry,sunMaterial);
scene.add(sun);
/**/ 
orbit.update();
renderer.render(scene,camera);
function animate(time){
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);
