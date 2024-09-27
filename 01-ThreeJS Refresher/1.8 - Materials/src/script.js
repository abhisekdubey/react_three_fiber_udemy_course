import "./style.css";
import * as THREE from "three";

//------------------------------------------Scene------------------------------------------
const scene = new THREE.Scene();

//------------------------------------------Lights------------------------------------------
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(2, 2, 2);
scene.add(ambientLight, pointLight);

//----------------------------------------TextureLoader-------------------------------------
const textureLoader = new THREE.TextureLoader();
const colorTexture = textureLoader.load("/texture/color.jpg");
const matCapTexture = textureLoader.load("/texture/mat2.png");
const bumpTexture = textureLoader.load("/texture/bump.jpg");
const displacementTexture = textureLoader.load("/texture/displacementMap.jpg");

//------------------------------------------Resizing------------------------------------------
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//-------------------------------------MeshBasicMaterial---------------------------------
// const geometry = new THREE.PlaneGeometry(1, 1, 64, 64);
// const material = new THREE.MeshBasicMaterial();
// material.map = colorTexture;
// material.wireframe = true;
// material.color = new THREE.Color("skyblue");
// material.transparent = true;
// material.opacity = 0.4;
// material.side = THREE.DoubleSide;
// material.visible = false;

//-------------------------------------MeshDepthMaterial---------------------------------
// const geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
// const material = new THREE.MeshDepthMaterial();

//-------------------------------------MeshNormalMaterial---------------------------------
// const geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
// const material = new THREE.MeshNormalMaterial();

//-------------------------------------MeshMatcapMaterial---------------------------------
// const geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matCapTexture;

//-------------------------------------MeshLambertMaterial---------------------------------
// const geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
// const material = new THREE.MeshLambertMaterial();

const geometry = new THREE.PlaneGeometry(1, 1, 12, 12);
const material = new THREE.MeshStandardMaterial();
material.map = colorTexture;
// material.bumpMap = bumpTexture;
material.displacementMap = displacementTexture;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//------------------------------------------Camera------------------------------------------
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 1;
scene.add(camera);

//------------------------------------------Renderer------------------------------------------
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//-----------------------------------------Clock Class-----------------------------------------
const clock = new THREE.Clock();

//-------------------------------------------Animate-------------------------------------------
const animate = () => {
  //--------------------------------------GetElapsedTime---------------------------------------
  const elapsedTime = clock.getElapsedTime();

  //------------------------------------------Renderer-----------------------------------------
  renderer.render(scene, camera);

  //-----------------------------------RequestAnimationFrame-----------------------------------
  window.requestAnimationFrame(animate);
};
animate();
