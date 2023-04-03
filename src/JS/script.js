import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import stars from '../Material/Background.jpg';
import mercury from '../Material/mercury.jpg';
import Sun from '../Material/sun.jpg';
import earth from '../Material/earth.jpg';
import venus from '../Material/venus.jpg';
import mars from '../Material/mars.jpg';
import jupiter from '../Material/jupiter.jpg';
import saturn from '../Material/saturn.jpeg';
import uranus from '../Material/uranus.jpg';
import neptune from '../Material/neptune.jpg';
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
camera.position.set(2,2,100);
/*Add sun light*/
const pointLight=new THREE.PointLight(0xFFFFFF,2,300);
scene.add(pointLight);
/* */
/*Stars Background*/
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(stars);

const geometry = new THREE.SphereGeometry(200,2000,2000);
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.BackSide // make sure texture is applied to the inside of the sphere
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
/* */
/*SUN*/
const sunGeometry =new THREE.SphereGeometry(20,2000,2000);
const sunMaterial=new THREE.MeshBasicMaterial({map:textureLoader.load(Sun)});
const sun=new THREE.Mesh(sunGeometry,sunMaterial);
scene.add(sun);
/**/ 
/*Mercury*/
const MercuryGeometry =new THREE.SphereGeometry(3,2000,2000);
const MercuryMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(mercury)});
const Mercury=new THREE.Mesh(MercuryGeometry,MercuryMaterial);
const MercuryObj=new THREE.Object3D();
Mercury.position.x=30;
scene.add(MercuryObj);
MercuryObj.add(Mercury);
/* */
/*Venus*/
const VenusGeometry =new THREE.SphereGeometry(6,2000,2000);
const VenusMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(venus)});
const Venus=new THREE.Mesh(VenusGeometry,VenusMaterial);
const VenusObj=new THREE.Object3D();
Venus.position.x=50;
scene.add(VenusObj);
VenusObj.add(Venus);
/* */
/*Earth*/
const EarthGeometry =new THREE.SphereGeometry(7,2000,2000);
const EarthMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(earth)});
const Earth=new THREE.Mesh(EarthGeometry,EarthMaterial);
const EarthObj=new THREE.Object3D();
Earth.position.x=60;
scene.add(EarthObj);
EarthObj.add(Earth);
/* */
/*Mars*/
const MarsGeometry =new THREE.SphereGeometry(5,2000,2000);
const MarsMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(mars)});
const Mars=new THREE.Mesh(MarsGeometry,MarsMaterial);
const MarsObj=new THREE.Object3D();
Mars.position.x=70;
scene.add(MarsObj);
MarsObj.add(Mars);
/* */
/*Jupiter*/
const JupiterGeometry =new THREE.SphereGeometry(12,2000,2000);
const JupiterMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(jupiter)});
const Jupiter=new THREE.Mesh(JupiterGeometry,JupiterMaterial);
const JupiterObj=new THREE.Object3D();
Jupiter.position.x=80;
scene.add(JupiterObj);
JupiterObj.add(Jupiter);
/* */
/*Saturn*/
const SaturnGeometry =new THREE.SphereGeometry(10,2000,2000);
const SaturnMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(saturn)});
const Saturn=new THREE.Mesh(SaturnGeometry,SaturnMaterial);
const SaturnObj=new THREE.Object3D();
Saturn.position.x=90;
scene.add(JupiterObj);
SaturnObj.add(Saturn);
/* */
/*Uranus*/
const UranusGeometry =new THREE.SphereGeometry(7,2000,2000);
const UranusMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(uranus)});
const Uranus=new THREE.Mesh(UranusGeometry,UranusMaterial);
const UranusObj=new THREE.Object3D();
Uranus.position.x=100;
scene.add(UranusObj);
UranusObj.add(Uranus);
/* */
/*Neptune*/
const NeptuneGeometry =new THREE.SphereGeometry(7,2000,2000);
const NeptuneMaterial=new THREE.MeshStandardMaterial({map:textureLoader.load(neptune)});
const Neptune=new THREE.Mesh(NeptuneGeometry,NeptuneMaterial);
const NeptuneObj=new THREE.Object3D();
Neptune.position.x=110;
scene.add(NeptuneObj);
NeptuneObj.add(Neptune);
/* */
orbit.update();
renderer.render(scene,camera);
function animate(time){
    sun.rotation.y+=0.01;
    MercuryObj.rotation.y+=0.1;
    VenusObj.rotation.y+=0.08;
    EarthObj.rotation.y+=0.07;
    MarsObj.rotation.y+=0.06;
    JupiterObj.rotation.y+=0.05;
    SaturnObj.rotation.y+=0.04;
    UranusObj.rotation.y+=0.03;
    NeptuneObj.rotation.y+=0.02;
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);
