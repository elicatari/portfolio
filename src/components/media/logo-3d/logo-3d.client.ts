import {
  ACESFilmicToneMapping,
  AmbientLight,
  DirectionalLight,
  Group,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface LogoOptions {
  canvas: HTMLCanvasElement;
  modelUrl: string;
  /** Si true, no aplica auto-rotacion ni parallax (reduced-motion). */
  reducedMotion: boolean;
}

/**
 * Inicializa la escena Three.js del logo. Carga diferida (dynamic import).
 * Devuelve una funcion de limpieza. Lanza si el modelo no se puede cargar.
 */
export async function initLogo3D({
  canvas,
  modelUrl,
  reducedMotion,
}: LogoOptions): Promise<() => void> {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  scene.add(new AmbientLight(0xffffff, 1.1));
  const key = new DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 4, 5);
  scene.add(key);

  const group = new Group();
  scene.add(group);

  const draco = new DRACOLoader();
  // Decoder Draco servido por Google (evita empaquetar el wasm).
  draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  const gltf = await loader.loadAsync(modelUrl);
  group.add(gltf.scene);

  const resize = () => {
    const { clientWidth, clientHeight } = canvas.parentElement ?? canvas;
    const size = Math.max(1, Math.min(clientWidth, clientHeight));
    renderer.setSize(size, size, false);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  };
  resize();

  const resizeObserver = new ResizeObserver(resize);
  if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

  const pointer = { x: 0, y: 0 };
  const onPointerMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };
  if (!reducedMotion) window.addEventListener('pointermove', onPointerMove);

  let raf = 0;
  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!reducedMotion) {
      group.rotation.y += 0.004;
      group.rotation.x += (pointer.y * 0.25 - group.rotation.x) * 0.05;
    }
    renderer.render(scene, camera);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    resizeObserver.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    renderer.dispose();
    draco.dispose();
  };
}