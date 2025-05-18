// import * as Three from 'three'
// import './style.css'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// const canvas =<HTMLCanvasElement> document.querySelector('canvas.canvas');
// if(!canvas) throw new Error("failed to get canvas");

// const scene = new Three.Scene();

// const fog = new Three.Fog('#262837',15,20 );
// scene.fog = fog

// const textureLoader = new Three.TextureLoader();


// //bricks;
// const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
// const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientocclusion.jpg')
// const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
// const bricksRoughnessTextures = textureLoader.load('/textures/bricks/roughness.jpg')

// //grass
// const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
// const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientocclusion.jpg')
// const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
// const grassRoughnessTextures = textureLoader.load('/textures/grass/roughness.jpg')

// grassColorTexture.repeat.set(8,8);
// grassAmbientOcclusionTexture.repeat.set(8,8);
// grassNormalTexture.repeat.set(8,8);
// grassRoughnessTextures.repeat.set(8,8);

// grassColorTexture.wrapS= Three.RepeatWrapping;
// grassAmbientOcclusionTexture.wrapS= Three.RepeatWrapping;
// grassNormalTexture.wrapS= Three.RepeatWrapping;
// grassRoughnessTextures.wrapS= Three.RepeatWrapping;


// grassColorTexture.wrapT= Three.RepeatWrapping;
// grassAmbientOcclusionTexture.wrapT= Three.RepeatWrapping;
// grassNormalTexture.wrapT= Three.RepeatWrapping;
// grassRoughnessTextures.wrapT= Three.RepeatWrapping;




// const material = new Three.MeshStandardMaterial({
//    map:grassColorTexture,
//    aoMap:grassAmbientOcclusionTexture,
//    normalMap:grassNormalTexture,
//    roughnessMap:grassRoughnessTextures
// })
// const boxMesh = new Three.Mesh(new Three.BoxGeometry(1,1,1),material);
// boxMesh.position.y=0.5
// const planeGeometry = new Three.PlaneGeometry(20,20);

// const planeMesh = new Three.Mesh(planeGeometry,material)
// planeMesh.rotation.x= - Math.PI/2
// planeMesh.position.set(0,0.2,0)
// planeMesh.material.side = 2
// planeMesh.receiveShadow = true
// planeMesh.geometry.setAttribute(
//   'uv2',
//   new Three.Float32BufferAttribute(planeMesh.geometry.attributes.uv.array,2)
// )
// scene.add(planeMesh);


// ///house
// const house = new Three.Group();
// scene.add(house);

// const walls = new Three.Mesh(
//   new Three.BoxGeometry(4,2.5,4),
//   new Three.MeshStandardMaterial({
//     map:bricksColorTexture,
//     aoMap:bricksAmbientOcclusionTexture,
//     normalMap:bricksNormalTexture,
//     roughnessMap:bricksRoughnessTextures,
//   })
// )
// walls.geometry.setAttribute(
//   'uv2',
//   new Three.Float32BufferAttribute(walls.geometry.attributes.uv.array,2)
// )
// walls.position.y = 1.5
// house.add(walls)

// const roof = new Three.Mesh(
//   new Three.ConeGeometry(3.5,1,4),
//   new Three.MeshStandardMaterial({color:'#b35f45'})
// )
// roof.position.y=2.754+0.5
// roof.rotation.y= Math.PI/4
// house.add(roof)

// const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
// const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientocclusion.jpg')
// const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
// const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
// const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// const door = new Three.Mesh(
//   new Three.PlaneGeometry(2,2,30,20),
//   new Three.MeshStandardMaterial({
//     map:doorColorTexture,
//     transparent:true,
//     alphaMap:doorAlphaTexture,
//     aoMap:doorAmbientOcclusionTexture,
//     displacementMap:doorHeightTexture,
//     displacementScale:0.1,
//     normalMap:doorNormalTexture,
//     roughnessMap:doorRoughnessTexture,
//     metalnessMap:doorMetalnessTexture
//   })

// )
// door.geometry.setAttribute('uv2',new Three.Float32BufferAttribute(
//   door.geometry.attributes.uv.array,2
// ))
// door.position.set(0,1.2,2.001)
// scene.add(door)

// const graves = new Three.Group()
// scene.add(graves);

// const graveGeometry = new Three.BoxGeometry(0.5,1,0.1);
// const graveMaterial = new Three.MeshStandardMaterial({color:"#b2b6b1"})

// for(let i = 0;i<=50;i++){
//   const angle = Math.random() * Math.PI * 2
//   const radius = 3.5 + Math.random()*6
//   const x = Math.sin(angle)*radius;
//   const z = Math.cos(angle)*radius;
//   const grave = new Three.Mesh(graveGeometry,graveMaterial)
//   grave.rotation.y = (Math.random()-0.5)*0.4
//   grave.position.set(x,0.36,z)
//   grave.castShadow = true
//   graves.add(grave);
// }


// const bushGeometry = new Three.SphereGeometry(1,10,10);
// const busMaterial = new Three.MeshStandardMaterial({color:"#89c854"});
// const bush0 = new Three.Mesh(bushGeometry,busMaterial);
// bush0.position.set(1.8,0.3,2.1)
// bush0.scale.set(0.25,0.25,0.25)
// const bush1 = new Three.Mesh(bushGeometry,busMaterial);
// bush1.position.set(1.2,0.3,2.3)
// bush1.scale.set(0.4,0.4,0.4)
// const bush2 = new Three.Mesh(bushGeometry,busMaterial);
// bush2.position.set(-1.8,0.3,2.1)
// bush2.scale.set(0.25,0.25,0.25)
// const bush3 = new Three.Mesh(bushGeometry,busMaterial);
// bush3.position.set(-1.2,0.3,2.3)
// bush3.scale.set(0.4,0.4,0.4)
// house.add(
//   bush0,
//   bush1,
//   bush2,
//   bush3,
// )


// const camera = new Three.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,100)
// camera.lookAt(house.position)
// camera.position.set(0,1,10)

// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0, 0); 
// controls.enableDamping = true; 
// controls.dampingFactor = 0.05; 
// controls.enableZoom = true; 
// controls.enablePan = true; 

// //lights
// const ambientLight = new Three.AmbientLight('#b9d5ff',0.12);
// scene.add(ambientLight)

// // const pointLight = new Three.PointLight(0xffffff,0.5,50,0);
// // pointLight.lookAt(new Three.Vector3(0,0,0))
// // pointLight.position.set(2,4,3)
// // scene.add(pointLight)

// const doorLight =new Three.PointLight('#ff7d46',1,7);
// doorLight.position.set(0,2.2,2.7);
// house.add(doorLight)
// // const pointLightHelper = new Three.PointLightHelper(pointLight);
// // scene.add(pointLightHelper)

// const ghost1 = new Three.PointLight('#ff00ff',2,3)
// const ghost2 = new Three.PointLight('#ff00ff',2,3)
// const ghost3 = new Three.PointLight('#ff00ff',2,3)
// const ghost4 = new Three.PointLight('#ff00ff',2,3)
// scene.add(ghost1,ghost2,ghost3,ghost4)
// const renderer = new Three.WebGLRenderer({canvas,antialias:true});

// window.addEventListener('resize',()=>{
//   camera.aspect = window.innerWidth/window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth,window.innerHeight)
// })
// document.addEventListener('dblclick',()=>{
//   if(document.fullscreenElement){
//     document.exitFullscreen()
//   }else{
//     canvas.requestFullscreen()
//   }
// })
// renderer.setSize(window.innerWidth,window.innerHeight)
// //shadows
// renderer.shadowMap.enabled = true;
// doorLight.castShadow = true;
// ghost1.castShadow=true
// ghost2.castShadow=true
// ghost3.castShadow=true
// walls.castShadow = true;
// bush0.castShadow = true
// bush1.castShadow = true
// bush2.castShadow = true
// bush3.castShadow = true;

// //
// const clock = new Three.Clock()
// const tick = ()=>{
//   const elapsedTime = clock.getElapsedTime();
//   //update ghost;
//   const ghostAngle = elapsedTime 
//   ghost1.position.x = Math.cos(ghostAngle) *4;
//   ghost1.position.z = Math.sin(ghostAngle) *4;
//   ghost1.position.y = Math.sin(elapsedTime )*3;


//   const ghost2Angle = - elapsedTime * 0.32 
//   ghost2.position.x = Math.cos(ghost2Angle) *4;
//   ghost2.position.z = Math.sin(ghost2Angle) *4;
//   ghost2.position.y = Math.sin(ghost2Angle )*3;

//   // boxMesh.rotation.y = Math.sin(elapsedTime)
//   // boxMesh.rotation.z = Math.sin(elapsedTime)
//   controls.update()
//   renderer.setClearColor('#262837')
//   renderer.render(scene,camera)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
//   window.requestAnimationFrame(tick)
// }
// tick()

// import * as Three from 'three'
// import './style.css'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// const canvas =<HTMLCanvasElement> document.querySelector('canvas.canvas');
// if(!canvas) throw new Error("failed to get canvas");

// const scene = new Three.Scene();

// const textureLoader = new Three.TextureLoader();

// const particleTextures = textureLoader.load('/textures/particles/2.png')

// const particleGeometry = new Three.BufferGeometry();
// const count = 50000;
// const positions = new Float32Array(count * 3);
// const radius = 5;
// const colors = new Float32Array(count *3);
// for (let i = 0; i < count * 3; i += 3) {
//   // Generate random point inside a sphere
//   let x, y, z;
//   do {
//     // Random coordinates in a cube [-1, 1]
//     x = Math.random() * 2 - 1;
//     y = Math.random() * 2 - 1;
//     z = Math.random() * 2 - 1;
//   } while (x * x + y * y + z * z > 1); // Reject points outside the unit sphere

//   // Scale to desired radius and apply random distance (for volume distribution)
//   const r = Math.cbrt(Math.random()) * radius; // Cube root for uniform volume distribution
//   x *= r;
//   y *= r;
//   z *= r;

//   // Assign to positions array
//   positions[i] = x;     // x-coordinate
//   positions[i + 1] = y; // y-coordinate
//   positions[i + 2] = z; // z-coordinate

//   // colors[i] = x
//   // colors[i+1]= y;
//   // colors[i+2] = z
//   colors[i] = Math.random()-0.5
//   colors[i+1]= Math.random()-0.5;
//   colors[i+2] = Math.random()-0.5
// }
// particleGeometry.setAttribute('position',
//   new Three.BufferAttribute(positions,3)
// )
// particleGeometry.setAttribute('color',
//   new Three.BufferAttribute(colors,3)
// )
// const particleMaterial = new Three.PointsMaterial(
//   {
//     alphaMap:particleTextures,
//     size:0.1,
//     transparent:true,
//     sizeAttenuation:true,
//     alphaTest:0.001 ,
//     depthWrite:false,
//     blending:Three.AdditiveBlending,
//     vertexColors:true
//   }
// );
// const particles = new Three.Points(particleGeometry,particleMaterial);
// scene.add(particles)








// const camera = new Three.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000)

// camera.position.set(0,1,10)

// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0, 0); 
// controls.enableDamping = true; 
// controls.dampingFactor = 0.05; 
// controls.enableZoom = true; 
// controls.enablePan = true; 



// //lights
// const ambientLight = new Three.AmbientLight('#b9d5ff',0.12);
// scene.add(ambientLight)

// const renderer = new Three.WebGLRenderer({canvas,antialias:true});

// window.addEventListener('resize',()=>{
//   camera.aspect = window.innerWidth/window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth,window.innerHeight)
// })
// document.addEventListener('dblclick',()=>{
//   if(document.fullscreenElement){
//     document.exitFullscreen()
//   }else{
//     canvas.requestFullscreen()
//   }
// })
// renderer.setSize(window.innerWidth,window.innerHeight)
// //shadows
// renderer.shadowMap.enabled = true;
// const clock = new Three.Clock()
// const tick = ()=>{
//   const elapsedTime = clock.getElapsedTime();
//   // particles.rotation.y = elapsedTime *0.5/5
//   for(let i =0;i<count ;i++){
//     // particleGeometry.attributes.array
//     const x = i*3;
//     const y = x+1;
//     const z = y+1;
//     const X_P = particleGeometry.attributes.position.array[x] 
//     particleGeometry.attributes.position.array[y] =  Math.cos(elapsedTime+X_P)
//   }
//   particleGeometry.attributes.position.needsUpdate = true
//   controls.update()
//   renderer.setClearColor('#262837')
//   renderer.render(scene,camera)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
//   window.requestAnimationFrame(tick)
// }
// tick()






// import * as Three from 'three'
// import './style.css'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// const canvas = <HTMLCanvasElement>document.querySelector('canvas.canvas');
// if (!canvas) throw new Error("failed to get canvas");
// import GUI from 'lil-gui';
// const gui = new GUI();
// const scene = new Three.Scene();

// const textureLoader = new Three.TextureLoader();

// const mesh = new Three.Mesh(
//   new Three.BoxGeometry(2, 2, 2),
//   new Three.MeshBasicMaterial({ color: "red" })
// )
// // scene.add(mesh)

// type Parameters = {
//   count: number,
//   size: number,
//   radius:number,
//   branches:number,
//   spin:number,
//   randomness:number,
//   skewness:number,
//   randomnessPower:number,
//   insideColor : string,
//   outsideColor : string,
// }
// const parameters = {} as Parameters

// parameters.count = 100000
// parameters.size = 0.02
// parameters.radius = 5
// parameters.branches = 3
// parameters.spin = 1;
// parameters.randomness = 0.2;
// parameters.skewness = 0.7,
// parameters.randomnessPower = 3,
// parameters.insideColor = '#ff6030'
// parameters.outsideColor = '#1b3984'

// let geometry: Three.BufferGeometry | null = null;
// let material: Three.PointsMaterial | null = null
// let points: Three.Points | null = null;

// gui.add(parameters, 'count').min(100).max(100000).step(100)
// gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001)
// gui.add(parameters, 'radius').min(0.01).max(20).step(0.01)
// gui.add(parameters, 'branches').min(2).max(20).step(1)
// gui.add(parameters, 'spin').min(-5).max(5).step(0.001)
// gui.add(parameters, 'randomness').min(0).max(2).step(0.001)
// gui.add(parameters, 'skewness').min(0).max(1).step(0.001)
// gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001)
// gui.addColor(parameters, 'insideColor')
// gui.addColor(parameters, 'outsideColor')


// const generateGalaxy = () => {
//   if (geometry && material && points) {
//     geometry.dispose()
//     material.dispose();
//     scene.remove(points)
//   }

//   geometry = new Three.BufferGeometry();
//   const positions = new Float32Array(parameters.count);
//   const colors = new Float32Array(parameters.count *3)

//   const colorInside = new Three.Color(parameters.insideColor);
//   const colorOutside = new Three.Color(parameters.outsideColor);
//   for (let i = 0; i < parameters.count; i++) {
//     const i3 = i * 3;
//     const radius = (1- Math.pow(Math.random(), parameters.skewness)) * parameters.radius;
//     const spinAngle = radius*parameters.spin;
//     const branchAngle = ((i % parameters.branches) / parameters.branches)*2*Math.PI; 

//     const randomX = Math.pow(Math.random(),parameters.randomnessPower) * (Math.random()<0.5?1:-1)
//     const randomY = Math.pow(Math.random(),parameters.randomnessPower) * (Math.random()<0.5?1:-1)
//     const randomZ = Math.pow(Math.random(),parameters.randomnessPower) * (Math.random()<0.5?1:-1)
//     if(i<20){
//       console.log(i,branchAngle) 
//     }
//     positions[i3] = Math.cos(branchAngle+spinAngle)* radius + randomX;
//     positions[i3 + 1] = randomY
//     positions[i3 + 2] = Math.sin(branchAngle +spinAngle) * radius + randomZ

//     const mixedColor = colorInside.clone();
//     mixedColor.lerp(colorOutside,radius/parameters.radius)
//     colors[i3] = mixedColor.r
//     colors[i3+1] = mixedColor.g
//     colors[i3+2] = mixedColor.b
//   }
//   geometry.setAttribute(
//     'position',
//     new Three.BufferAttribute(positions, 3)
//   )
//   geometry.setAttribute(
//     'color',
//     new Three.BufferAttribute(colors,3)
//   )
//   //material;
//   material = new Three.PointsMaterial({
//     size: parameters.size,
//     sizeAttenuation: true,
//     depthWrite: false,
//     blending: Three.AdditiveBlending,
//     vertexColors:true
//   })
//   points = new Three.Points(geometry, material)
//   scene.add(points)
// }
// generateGalaxy()
// gui.onChange(() => {
//   generateGalaxy()
// })
// const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

// camera.position.set(0, 1, 10)

// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0, 0);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;



// //lights
// // const ambientLight = new Three.AmbientLight('#b9d5ff',0.12);
// // scene.add(ambientLight)

// const renderer = new Three.WebGLRenderer({ canvas, antialias: true });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })
// document.addEventListener('dblclick', () => {
//   if (document.fullscreenElement) {
//     document.exitFullscreen()
//   } else {
//     canvas.requestFullscreen()
//   }
// })
// renderer.setSize(window.innerWidth, window.innerHeight)
// //shadows
// renderer.shadowMap.enabled = true;
// const clock = new Three.Clock()
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   // particles.rotation.y = elapsedTime *0.5/5

//   controls.update()

//   renderer.render(scene, camera)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   window.requestAnimationFrame(tick)
// }
// tick()






import * as Three from 'three'
import './style.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'
const canvas = <HTMLCanvasElement>document.querySelector('canvas.canvas');
if (!canvas) throw new Error("failed to get canvas");
import GUI from 'lil-gui';
// const gui = new GUI();
const scene = new Three.Scene();

const textureLoader = new Three.TextureLoader();

const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
gradientTexture.magFilter = Three.NearestFilter
gradientTexture
const parameters = {
  materialColor: '#a3bfff'
}
// const mesh = new Three.Mesh(
//   new Three.BoxGeometry(2, 2, 2),
//   new Three.MeshBasicMaterial({ color: "red" })
// )
// scene.add(mesh)
const material = new Three.MeshToonMaterial({ color: parameters.materialColor, gradientMap: gradientTexture })


const objectDistance = 5
const mesh1 = new Three.Mesh(
  new Three.TorusGeometry(1, 0.4, 16, 60),
  material
)

const mesh2 = new Three.Mesh(
  new Three.ConeGeometry(1, 2, 32),
  material
)

const mesh3 = new Three.Mesh(
  new Three.TorusKnotGeometry(0.8, 0.35, 100, 16),
  material
)
mesh1.position.y = -  objectDistance * (0)
mesh2.position.y = -  objectDistance * (1)
mesh3.position.y = -  objectDistance * (2)

scene.add(mesh1, mesh2, mesh3)

const meshSections = [mesh1, mesh2, mesh3]




const count = 200;
const particles = new Float32Array(count * 3);

const geometry = new Three.BufferGeometry();
for (let i = 0; i < count; i++) {
  particles[i * 3 + 0] = (Math.random()-.5)*10;
  particles[i * 3 + 1] =objectDistance*0.5 -Math.random()*objectDistance*meshSections.length;
  particles[i * 3 + 2] = (Math.random()-.5)*10;
}

geometry.setAttribute(
  'position',
  new Three.BufferAttribute(particles, 3)
)
const Points = new Three.PointsMaterial({ color: parameters.materialColor, size: 0.03, sizeAttenuation: true })

// gui.addColor(parameters, 'materialColor')
//   .onChange(() => {
//     material.color.set(parameters.materialColor)
//     Points.color.set(parameters.materialColor)
// })

const pointsMesh = new Three.Points(geometry, Points);
scene.add(pointsMesh)




const cameraGroup = new Three.Group()
scene.add(cameraGroup)

const camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(0, 0, 7)


cameraGroup.add(camera)
// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0, 0);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.enableZoom = true;
// controls.enablePan = true;



//lights
// const ambientLight = new Three.AmbientLight('#b9d5ff',0.12);
// scene.add(ambientLight)


const directionalLight = new Three.DirectionalLight('#fffffff', 1)
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight)

const renderer = new Three.WebGLRenderer({ canvas, antialias: true });


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
document.addEventListener('dblclick', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    canvas.requestFullscreen()
  }
})
renderer.setSize(window.innerWidth, window.innerHeight)
//shadows
// renderer.shadowMap.enabled = true;
let currentSection = 0 
let scrollY = window.scrollY
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  const newSection = Math.round(scrollY/window.innerHeight)
  if(newSection != currentSection){
    currentSection = newSection
    gsap.to(
      meshSections[currentSection].rotation,{duration:1.5,ease:"power1.out",x:'+=6',y:'+=3',z:"+=1.5"}
    )
  }
})

const cursor = {
  x: 0,
  y: 0,
}
window.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / window.innerWidth - 0.5
  cursor.y = -(e.clientY / window.innerHeight - 0.5)
  // console.log(cursor)
})
let previousTime = 0
const clock = new Three.Clock()
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltatime = elapsedTime - previousTime;
  previousTime = elapsedTime


  camera.position.y = - (scrollY / window.innerHeight) * objectDistance;

  const parallaxX = cursor.x * 0.6;
  const parallaxY = cursor.y * 0.6;
  cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * deltatime * 3
  cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * deltatime * 3

  // particles.rotation.y = elapsedTime *0.5/5
  for (let i = 0; i < meshSections.length; i++) {
    // meshSections[i].position.x = Math.pow(-1,i)*(0.5)
    meshSections[i].rotation.x += (deltatime * 0.1)
    meshSections[i].rotation.y += (deltatime * 0.12)
  }
  // controls.update()

  renderer.render(scene, camera)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  window.requestAnimationFrame(tick)
}
tick()



