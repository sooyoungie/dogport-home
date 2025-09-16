import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../libs/model';

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
    const refContainer = useRef();
    const refInitialized = useRef(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [renderer, setRenderer] = useState();
    const [_camera, setCamera] = useState();
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    );
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState();
    // const [dog, setDog] = useState();
    // const [mixer, setMixer] = useState();

    const handleWindowResize = useCallback(() => {
        if (typeof window === 'undefined') return;
        
        const { current: container } = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    useEffect(() => {
        // Ensure we're on client-side
        if (typeof window === 'undefined') return;
        
        const { current: container } = refContainer;
        if (container && !renderer && !refInitialized.current) {
            refInitialized.current = true;
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const newRenderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            newRenderer.setPixelRatio(window.devicePixelRatio);
            newRenderer.setSize(scW, scH);
            newRenderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(newRenderer.domElement);
            setRenderer(newRenderer);

            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.015;
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.1,
                50000
            );
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            // AmbientLight
            const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
            scene.add(ambientLight);

            // OrbitControls
            const controls = new OrbitControls(camera, newRenderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            controls.zoomSpeed = 2.5;
            setControls(controls);

            let req = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

                    camera.position.y = 10;
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                newRenderer.render(scene, camera);
            };

            loadGLTFModel(scene, '/dog.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                console.log('3D model loaded successfully');
                animate();
                setLoading(false);
            }).catch((error) => {
                console.error('Error loading 3D model:', error);
                setLoading(false);
                setError(true);
            });

            return () => {
                if (req) cancelAnimationFrame(req);
                if (container && newRenderer.domElement) {
                    container.removeChild(newRenderer.domElement);
                }
                newRenderer.dispose();
                controls.dispose();
                refInitialized.current = false;
            };
            // let dog = scene.getObjectByName("dog");
            // let mixer = new THREE.AnimationMixer(dog);

            // const clock = new THREE.Clock();

            // function animate() {
            //     requestAnimationFrame(animate);

            //     let delta = clock.getDelta();

            //     mixer.update(delta);

            //     controls.update();
            //     renderer.render(scene, camera);
            // }

            // return () => {
            //     controls.dispose();
            // }
        }

        return () => {
            refInitialized.current = false;
        };
    }, [initialCameraPosition, renderer, scene, target])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [renderer, handleWindowResize]);

    return (
        <Box 
            ref={refContainer} 
            className='voxel-dog' 
            m="auto" 
            mt={['-20px', '-60px', '-120px']}
            mb={['-40px', '-140px', '-200px']} 
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            {loading && (
                <Spinner 
                    size='xl' 
                    position='relative' 
                    left='50%' 
                    top='50%' 
                    ml="calc(0px - var(--spinner-size) / 2)" 
                    mt="calc(0px - var(--spinner-size))"
                />
            )}
            {error && (
                <Box 
                    position='relative' 
                    left='50%' 
                    top='50%' 
                    transform='translate(-50%, -50%)'
                    textAlign='center'
                    color='gray.500'
                >
                    3D Model unavailable
                </Box>
            )}
        </Box>
    )
}

export default VoxelDog;