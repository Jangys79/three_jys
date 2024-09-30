import * as THREE from 'three';
import {GLTFLoader} from 'gltf';
import {OrbitControls} from 'orbit';

//1. 랜더러 renderer
window.addEventListener('load',function(){
    init()

})
async function init(){
    const renderer = new THREE.WebGLRenderer({
        antialias : true, //계단현상 방지
        alpha : true //배경 투명
    });

    //그림자 넣기
renderer.shadowMap.enabled = true;
 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//2. 카메라 camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 30, 10 ,5 );
//scene.add( camera );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;//쥼이 안됨

//3. 씬 scene
const scene = new THREE.Scene();



//4. honda 넣을 glft
const gltfLoader = new GLTFLoader();
const gltf = await gltfLoader.loadAsync('./models/honda_nr750_1994/scene.gltf')
const honda = gltf.scene;
scene.add(honda);
honda.scale.set(14,14,14)
honda.position.set(1, 20 , 10)
// gltf 그림자 넣기
honda.castShadow =true ;
honda.traverse(object => {
    if (object.isMesh){
        object.castShadow = true;
      }
    });
scene.add(honda);

//5. 조명 추가directionalLight 
const directionalLight1 = new THREE.DirectionalLight( 0xffffff,1 );
directionalLight1.position.set(10, 5, 10);
scene.add( directionalLight1 );
const directionalLight2 = new THREE.DirectionalLight( 0xffffff,1 );
directionalLight2.position.set(-10, 20, 10);
scene.add( directionalLight2 );
const directionalLight3 = new THREE.DirectionalLight( 0xffffff,1 );
directionalLight3.position.set(-30, 50, 10);
scene.add( directionalLight3 );
const directionalLight4 = new THREE.DirectionalLight( 0xffffff,1 );
directionalLight4.position.set(30, -50, -10);
scene.add( directionalLight4 );

//조명 헬퍼 DirectionalLightHelper
// const light = new THREE.DirectionalLight( 0xFFFFFF );
// scene.add( light );
// const helper = new THREE.DirectionalLightHelper( light, 5 );
// scene.add( helper );

//6. 바닥 추가 CircleGeometry



//render
render();

function render() {
  renderer.render(scene, camera);   
  camera.lookAt(honda.position);
  requestAnimationFrame(render);
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);
}

window.addEventListener('resize', handleResize);


    //스크롤 이벤트
    
    //마우스 휠을 내리면 카메라가 돌아감
    const Frist = document.querySelector(".Frist")
    gsap.from(camera.position,{
        x:5, y:10, z:10,
        scrollTrigger:{
            trigger : Frist,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
           // markers : true,
        }
    })
    const Second = document.querySelector(".Second")
    gsap.from(camera.position,{
        x: 10, y: 90, z: 95,
        scrollTrigger:{
            trigger : Second,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
          //  markers : true,

        }
    })
    const Third = document.querySelector(".Third")
    gsap.from(camera.position,{
        x:-1 , y:-30, z:-120,
        scrollTrigger:{
            trigger : Third,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
           // markers : true,
        }
    })
    const Fourth = document.querySelector(".Fourth")
    gsap.from(camera.position,{
      x: -50, y: 150, z: 400,
        scrollTrigger:{
            trigger : Fourth,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
            //markers : true,
        }
    })

    const Fifth = document.querySelector(".Fifth")
    gsap.from(camera.position,{
        x:10, y:-300, z: -900,
        scrollTrigger:{
            trigger : Fifth,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
           // markers : true,
           
            
        }
    })


}


