// Scene Objects-(Mesh) Camera Renderer
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Loading Manager
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("Start...");
};
loadingManager.onLoad = () => {
  console.log("On Load...");
};
loadingManager.onProgress = () => {
  console.log("On Progress...");
};
loadingManager.onError = () => {
  console.log("Error!");
};

// Textures Load
const textureLoder = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoder.load("/texture/color.jpg");

// Mesh
const geometry = new THREE.PlaneGeometry(1, 1);

const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height); // near value is 1 and far value is 2000
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector("#canvas"); // Select the Canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer Size

// Clock Class
const clock = new THREE.Clock();

// Animate
const animate = () => {
  // GetElapsedTime
  // const elapsedTime = clock.getElapsedTime();

  // Update Rotation On X Axes
  // mesh.rotation.y = elapsedTime * Math.PI;

  // Renderer
  renderer.render(scene, camera); // Display what the camera in the scene captured

  // Request ANimation Frame
  window.requestAnimationFrame(animate);
};

animate();

// function will get called 60 times per second on some devices 0.1 * 60 => 0.6 X
// function will get called 120 times per second on some devices 0.1 * 120 => 1.2 X
// fps - stands for frame Per Second
