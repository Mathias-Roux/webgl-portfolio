import * as THREE from '../../../node_modules/three/build/three.module.js';
import fragment from './shaders/fragement.js'
import vertex from './shaders/vertex.js'

export default class Sketch {
  constructor(options) {
    this.container = options.domElement
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.container.appendChild(this.renderer.domElement)

    this.time = 0
    this.resize()
    this.addObjects()
    this.render()
    this.setupResize()
    this.handleImages()
  }

  handleImages(){
    let images = [...document.querySelectorAll('.images')]
    images.forEach(img => {
      let mat = this.material.clone()
      mat.uniforms.texture1.value = new THREE.Texture(img)
      mat.uniforms.texture1.value.needsUpdate = true

      let geo = new THREE.PlaneBufferGeometry(1.5,1,20,20)
      let mesh = new THREE.Mesh(geo,mat)
      this.scene.add(mesh)
      mesh.position.y = i*1.2
    })
  }

  resize() {
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: "f", value: 0 },
        texture1: { type: "t", value: null },
        resolution: { type: "v4", vzlue: new THREE.Vector4() },
        uvRate1: {
          value: new THREE.Vector2(1, 1)
        }
      },
      vertexShader: vertex,
      fragmentShader: fragment
    })

    this.geometry = new THREE.PlaneGeometry(1,1,1,1)
  }

  render() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render.bind(this))
  }
}
