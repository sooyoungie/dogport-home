import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options;

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);
        
        loader.load(
            glbPath,
            (gltf) => {
                const obj = gltf.scene;
                obj.name = "dog";
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = options.receiveShadow;
                obj.castShadow = options.castShadow;
                scene.add(obj);

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = options.castShadow;
                        child.receiveShadow = options.receiveShadow;
                    }
                });

                resolve(obj);
            },
            undefined,
            function (error) {
                reject(error);
            }
        );
    });
}