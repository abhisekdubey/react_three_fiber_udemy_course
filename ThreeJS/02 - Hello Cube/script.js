// Scene Objects-(Mesh) Camera Renderer
import * as THREE from "./three.module.min.js";

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // near value is 1 and far value is 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector("#canvas"); // Select the Canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer Size

renderer.render(scene, camera); // Display what the camera in the scene captured
