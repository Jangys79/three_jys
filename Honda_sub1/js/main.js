import * as THREE from 'three';
import {GLTFLoader} from 'gltf';
import {OrbitControls} from 'orbit';



window.addEventListener("load", function(){
    init()
})
async function init(){
    //캔버스 사이즈 맞게 renderer사이즈 조정
    const canvas = document.querySelector('#canvas')

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha:true, //배경 투명
        antialias:true, //경계면 계단현상 방지

    })

    // renderer.setSize(window.innerWidth, window.innerHeight)
    // 브라우저 화면에 꽉 채워서 3d 모델링 표현
    const rtWidht = 500;
    const rtHeigt = 900;
    renderer.setSize(rtWidht, rtHeigt)

    renderer.outputEncoding = THREE.sRGBEncoding;//캔버스 사용시 필요

    //2. scene
    const scene = new THREE.Scene();
   


    //3.카메라
    const camera = new THREE.PerspectiveCamera(75,
        rtWidht / rtHeigt // 랜더러와 카메라 랜즈 너비, 높이가 같아야함
       ,1,500);

    camera.position.set( 1, 1, 1);
    

    //OrbitControls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;//쥼이 안됨

    //4. 오브젝트 
    const gltfLoader = new GLTFLoader();
    const gltf = await gltfLoader.loadAsync('./models/honda_nr750_1994/scene.gltf')
    const honda = gltf.scene
    honda.scale.set(2,2,2)
    honda.position.set(0, 0, 0); // X를 0으로 설정
    honda.position.y -= 20;

    scene.add(honda);


    // 조명 추가
    const directionalLight1 = new THREE.DirectionalLight( 0xffffff,1 );
    directionalLight1.position.set(10, 5, 10);
    scene.add( directionalLight1 );
    const directionalLight2 = new THREE.DirectionalLight( 0xffffff,1 );
    directionalLight2.position.set(10, 20, 10);
    scene.add( directionalLight2 );


    //조명 헬퍼 DirectionalLightHelper
    const light = new THREE.DirectionalLight( 0xFFFFFF );
    scene.add( directionalLight1 );
    const helper = new THREE.DirectionalLightHelper( directionalLight1, 5 );
    scene.add( helper );

    


  

    //5. 반응형 코드
    render();

    function render() {
    renderer.render(scene, camera);   
    camera.lookAt(honda.position);//카메라가 honda바라보게함
    requestAnimationFrame(render);
    }

    function handleResize() {
    camera.aspect = rtWidht / rtHeigt;

    camera.updateProjectionMatrix();

    renderer.setSize(rtWidht, rtHeigt);

    renderer.render(scene, camera);
    }

    window.addEventListener('resize', handleResize);

    //스크롤 이벤트
    
    //마우스 휠을 내리면 카메라가 돌아감
    const Frist = document.querySelector(".Frist")
    gsap.from(camera.position,{
        x:5, y:5, z:5,
        scrollTrigger:{
            trigger : Frist,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
            markers : true,

        }
    })
    const Second = document.querySelector(".Second")
    gsap.from(camera.position,{
        x:8, y:8, z:8,
        scrollTrigger:{
            trigger : Second,//기준
            start : "top center",
            end : '+=1000',
            scrub :true,
            markers : true,

        }
    })




}//init




