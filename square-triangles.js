const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');

//clear screen

gl.clearColor(232, 220, 220,1);
gl.clear(gl.COLOR_BUFFER_BIT);

//declare shader

const vertexShader = `#version 300 es 
    precision mediump float;
    in vec2 position;

    in vec3 color;
    out vec3 vColor;


    void main() {
        gl_Position = vec4(position, 0, 1);
        vColor = color;
    }
`;

const fragmentShader = `#version 300 es
    precision mediump float; 
    out vec4 fragColor;

    in vec3 vColor;

    void main() {
        fragColor = vec4(vColor, 1);
    }
`;

//compile shader

const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vs, vertexShader);
gl.shaderSource(fs, fragmentShader);
gl.compileShader(vs);
gl.compileShader(fs);

if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vs));
}

if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fs));
}

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
}

gl.useProgram(program);

const triangleCoords = [
    0.0, 0.0,
    0.0, 0.05,
    0.05, 0.0,
    0.05, 0.0,
    0.05, 0.05,
    0.0, 0.05,

    0.05, 0.05,
    0.05, 0.1,
    0.1, 0.05,
    0.1, 0.05,
    0.1, 0.1,
    0.05, 0.1,

    0.05, 0.05,
    0.05, 0.0,
    0.1, 0.0,
    0.1, 0.0,
    0.1, 0.1,
    0.05, 0.05,

    0.1, 0.05,
    0.1, 0.0,
    0.15, 0.0,
    0.15, 0.0,
    0.15, 0.05,
    0.1, 0.05,

    0.15, 0.05,
    0.15, 0.0,
    0.2, 0.0,
    0.2, 0.0,
    0.2, 0.05,
    0.15, 0.05,

    0.2, 0.05,
    0.2, 0.0,
    0.25, 0.0,
    0.25, 0.0,
    0.25, 0.05,
    0.2, 0.05,

    0.25, 0.05,
    0.25, 0.0,
    0.3, 0.0,
    0.3, 0.0,
    0.3, 0.05,
    0.25, 0.05,

    0.3, 0.05,
    0.3, 0.0,
    0.35, 0.0,
    0.35, 0.0,
    0.35, 0.05,
    0.3, 0.05,

    0.35, 0.05,
    0.35, 0.0,
    0.4, 0.0,
    0.4, 0.0,
    0.4, 0.05,
    0.35, 0.05,

    0.4, 0.05,
    0.4, 0.0,
    0.45, 0.0,
    0.45, 0.0,
    0.45, 0.05,
    0.4, 0.05,


    0.0, 0.0,
    0.0, 0.05,
    -0.05, 0.0,
    -0.05, 0.0,
    -0.05, 0.05,
    -0.0, 0.05,

    -0.05, 0.05,
    -0.05, 0.1,
    -0.1, 0.05,
    -0.1, 0.05,
    -0.1, 0.1,
    -0.05, 0.1,

    -0.05, 0.05,
    -0.05, 0.0,
    -0.1, 0.0,
    -0.1, 0.0,
    -0.1, 0.1,
    -0.05, 0.05,

    -0.1, 0.05,
    -0.1, 0.0,
    -0.15, 0.0,
    -0.15, 0.0,
    -0.15, 0.05,
    -0.1, 0.05,

    -0.15, 0.05,
    -0.15, 0.0,
    -0.2, 0.0,
    -0.2, 0.0,
    -0.2, 0.05,
    -0.15, 0.05,

    -0.2, 0.05,
    -0.2, 0.0,
    -0.25, 0.0,
    -0.25, 0.0,
    -0.25, 0.05,
    -0.2, 0.05,

    -0.25, 0.05,
    -0.25, 0.0,
    -0.3, 0.0,
    -0.3, 0.0,
    -0.3, 0.05,
    -0.25, 0.05,

    -0.3, 0.05,
    -0.3, 0.0,
    -0.35, 0.0,
    -0.35, 0.0,
    -0.35, 0.05,
    -0.3, 0.05,

    -0.35, 0.05,
    -0.35, 0.0,
    -0.4, 0.0,
    -0.4, 0.0,
    -0.4, 0.05,
    -0.35, 0.05,

    -0.4, 0.05,
    -0.4, 0.0,
    -0.45, 0.0,
    -0.45, 0.0,
    -0.45, 0.05,
    -0.4, 0.05,

    //linea 2

    0.0, 0.1, 
    0.0, 0.05,
    0.05, 0.05,
    0.05, 0.05,
    0.05, 0.1,
    0.0, 0.1, 

    0.1, 0.05,
    0.1, 0.1,
    0.15, 0.05,
    0.15, 0.05,
    0.15, 0.1,
    0.1, 0.1,

    0.15, 0.05,
    0.15, 0.1,
    0.2, 0.05,
    0.2, 0.05,
    0.2, 0.1,
    0.15, 0.1,

    0.2, 0.05,
    0.2, 0.1,
    0.25, 0.05,
    0.25, 0.05,
    0.25, 0.1,
    0.2, 0.1,

    0.25, 0.05,
    0.25, 0.1,
    0.3, 0.05,
    0.3, 0.05,
    0.3, 0.1,
    0.25, 0.1,

    0.3, 0.05,
    0.3, 0.1,
    0.35, 0.05,
    0.35, 0.05,
    0.35, 0.1,
    0.3, 0.1,

    0.35, 0.05,
    0.35, 0.1,
    0.4, 0.05,
    0.4, 0.05,
    0.4, 0.1,
    0.35, 0.1,

    0.4, 0.05,
    0.4, 0.1,
    0.45, 0.05,
    0.45, 0.05,
    0.45, 0.1,
    0.4, 0.1,

    0.45, 0.05,
    0.45, 0.1,
    0.5, 0.05,
    0.5, 0.05,
    0.5, 0.1,
    0.45, 0.1,

    
    0.0, 0.1, 
    0.0, 0.05,
    -0.05, 0.05,
    -0.05, 0.05,
    -0.05, 0.1,
    0.0, 0.1, 

    -0.1, 0.05,
    -0.1, 0.1,
    -0.15, 0.05,
    -0.15, 0.05,
    -0.15, 0.1,
    -0.1, 0.1,

    -0.15, 0.05,
    -0.15, 0.1,
    -0.2, 0.05,
    -0.2, 0.05,
    -0.2, 0.1,
    -0.15, 0.1,

    -0.2, 0.05,
    -0.2, 0.1,
    -0.25, 0.05,
    -0.25, 0.05,
    -0.25, 0.1,
    -0.2, 0.1,

    -0.25, 0.05,
    -0.25, 0.1,
    -0.3, 0.05,
    -0.3, 0.05,
    -0.3, 0.1,
    -0.25, 0.1,

    -0.3, 0.05,
    -0.3, 0.1,
    -0.35, 0.05,
    -0.35, 0.05,
    -0.35, 0.1,
    -0.3, 0.1,

    -0.35, 0.05,
    -0.35, 0.1,
    -0.4, 0.05,
    -0.4, 0.05,
    -0.4, 0.1,
    -0.35, 0.1,

    -0.4, 0.05,
    -0.4, 0.1,
    -0.45, 0.05,
    -0.45, 0.05,
    -0.45, 0.1,
    -0.4, 0.1,

    -0.45, 0.05,
    -0.45, 0.1,
    -0.5, 0.05,
    -0.5, 0.05,
    -0.5, 0.1,
    -0.45, 0.1,

    //tercera linea
    0.0, 0.15, 
    0.0, 0.1,
    0.05, 0.1,
    0.05, 0.1,
    0.05, 0.15,
    0.0, 0.15,

    0.05, 0.15, 
    0.05, 0.1,
    0.1, 0.1,
    0.1, 0.1,
    0.1, 0.15,
    0.05, 0.15,

    0.1, 0.15, 
    0.1, 0.1,
    0.15, 0.1,
    0.15, 0.1,
    0.15, 0.15,
    0.1, 0.15,

    0.15, 0.15, 
    0.15, 0.1,
    0.2, 0.1,
    0.2, 0.1,
    0.2, 0.15,
    0.15, 0.15,

    0.2, 0.15, 
    0.2, 0.1,
    0.25, 0.1,
    0.25, 0.1,
    0.25, 0.15,
    0.2, 0.15,

    0.25, 0.15, 
    0.25, 0.1,
    0.3, 0.1,
    0.3, 0.1,
    0.3, 0.15,
    0.25, 0.15,

    0.3, 0.15, 
    0.3, 0.1,
    0.35, 0.1,
    0.35, 0.1,
    0.35, 0.15,
    0.3, 0.15,

    0.35, 0.15, 
    0.35, 0.1,
    0.4, 0.1,
    0.4, 0.1,
    0.4, 0.15,
    0.35, 0.15,

    0.4, 0.15, 
    0.4, 0.1,
    0.45, 0.1,
    0.45, 0.1,
    0.45, 0.15,
    0.4, 0.15,

    0.45, 0.15, 
    0.45, 0.1,
    0.5, 0.1,
    0.5, 0.1,
    0.5, 0.15,
    0.45, 0.15,

    0.0, 0.15, 
    0.0, 0.1,
    -0.05, 0.1,
    -0.05, 0.1,
    -0.05, 0.15,
    0.0, 0.15,

    -0.05, 0.15, 
    -0.05, 0.1,
    -0.1, 0.1,
    -0.1, 0.1,
    -0.1, 0.15,
    -0.05, 0.15,

    -0.1, 0.15, 
    -0.1, 0.1,
    -0.15, 0.1,
    -0.15, 0.1,
    -0.15, 0.15,
    -0.1, 0.15,

    -0.15, 0.15, 
    -0.15, 0.1,
    -0.2, 0.1,
    -0.2, 0.1,
    -0.2, 0.15,
    -0.15, 0.15,

    -0.2, 0.15, 
    -0.2, 0.1,
    -0.25, 0.1,
    -0.25, 0.1,
    -0.25, 0.15,
    -0.2, 0.15,

    -0.25, 0.15, 
    -0.25, 0.1,
    -0.3, 0.1,
    -0.3, 0.1,
    -0.3, 0.15,
    -0.25, 0.15,

    -0.3, 0.15, 
    -0.3, 0.1,
    -0.35, 0.1,
    -0.35, 0.1,
    -0.35, 0.15,
    -0.3, 0.15,

    -0.35, 0.15, 
    -0.35, 0.1,
    -0.4, 0.1,
    -0.4, 0.1,
    -0.4, 0.15,
    -0.35, 0.15,

    -0.4, 0.15, 
    -0.4, 0.1,
    -0.45, 0.1,
    -0.45, 0.1,
    -0.45, 0.15,
    -0.4, 0.15,

    -0.45, 0.15, 
    -0.45, 0.1,
    -0.5, 0.1,
    -0.5, 0.1,
    -0.5, 0.15,
    -0.45, 0.15,

    //cuarta linea
    0.0, 0.2, 
    0.0, 0.15,
    0.05, 0.15,
    0.05, 0.15,
    0.05, 0.2,
    0.0, 0.2,

    0.05, 0.2, 
    0.05, 0.15,
    0.1, 0.15,
    0.1, 0.15,
    0.1, 0.2,
    0.05, 0.2,

    0.1, 0.2, 
    0.1, 0.15,
    0.15, 0.15,
    0.15, 0.15,
    0.15, 0.2,
    0.1, 0.2,

    0.15, 0.2, 
    0.15, 0.15,
    0.2, 0.15,
    0.2, 0.15,
    0.2, 0.2,
    0.15, 0.2,

    0.2, 0.2, 
    0.2, 0.15,
    0.25, 0.15,
    0.25, 0.15,
    0.25, 0.2,
    0.2, 0.2,

    0.25, 0.2, 
    0.25, 0.15,
    0.3, 0.15,
    0.3, 0.15,
    0.3, 0.2,
    0.25, 0.2,

    0.3, 0.2, 
    0.3, 0.15,
    0.35, 0.15,
    0.35, 0.15,
    0.35, 0.2,
    0.3, 0.2,

    0.35, 0.2, 
    0.35, 0.15,
    0.4, 0.15,
    0.4, 0.15,
    0.4, 0.2,
    0.35, 0.2,

    0.4, 0.2, 
    0.4, 0.15,
    0.45, 0.15,
    0.45, 0.15,
    0.45, 0.2,
    0.4, 0.2,

    0.45, 0.2, 
    0.45, 0.15,
    0.5, 0.15,
    0.5, 0.15,
    0.5, 0.2,
    0.45, 0.2,

    0.5, 0.2, 
    0.5, 0.15,
    0.55, 0.15,
    0.55, 0.15,
    0.55, 0.2,
    0.5, 0.2,

    0.0, 0.2, 
    0.0, 0.15,
    -0.05, 0.15,
    -0.05, 0.15,
    -0.05, 0.2,
    0.0, 0.2,

    -0.05, 0.2, 
    -0.05, 0.15,
    -0.1, 0.15,
    -0.1, 0.15,
    -0.1, 0.2,
    -0.05, 0.2,

    -0.1, 0.2, 
    -0.1, 0.15,
    -0.15, 0.15,
    -0.15, 0.15,
    -0.15, 0.2,
    -0.1, 0.2,

    -0.15, 0.2, 
    -0.15, 0.15,
    -0.2, 0.15,
    -0.2, 0.15,
    -0.2, 0.2,
    -0.15, 0.2,

    -0.2, 0.2, 
    -0.2, 0.15,
    -0.25, 0.15,
    -0.25, 0.15,
    -0.25, 0.2,
    -0.2, 0.2,

    -0.25, 0.2, 
    -0.25, 0.15,
    -0.3, 0.15,
    -0.3, 0.15,
    -0.3, 0.2,
    -0.25, 0.2,

    -0.3, 0.2, 
    -0.3, 0.15,
    -0.35, 0.15,
    -0.35, 0.15,
    -0.35, 0.2,
    -0.3, 0.2,

    -0.35, 0.2, 
    -0.35, 0.15,
    -0.4, 0.15,
    -0.4, 0.15,
    -0.4, 0.2,
    -0.35, 0.2,

    -0.4, 0.2, 
    -0.4, 0.15,
    -0.45, 0.15,
    -0.45, 0.15,
    -0.45, 0.2,
    -0.4, 0.2,

    -0.45, 0.2, 
    -0.45, 0.15,
    -0.5, 0.15,
    -0.5, 0.15,
    -0.5, 0.2,
    -0.45, 0.2,

    -0.5, 0.2, 
    -0.5, 0.15,
    -0.55, 0.15,
    -0.55, 0.15,
    -0.55, 0.2,
    -0.5, 0.2,

    // quinta linea
];

const vertexColor = [
    0, 0, 0, //r
    0, 0, 0, //g 
    0, 0, 0, //b
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.0816, 0.301, 0.680, //azul fuerte
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970, //azul bajito
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,


    0, 0, 0, //r
    0, 0, 0, //g 
    0, 0, 0, //b
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.0816, 0.301, 0.680, //azul fuerte
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970, //azul bajito
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    //segunda linea

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    //tercera linea

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.950, 0.665, 0.793, //rosa
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,

    //cuarta linea
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,
    0.0816, 0.301, 0.680,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,
    0.601, 0.804, 0.970,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,
    0.950, 0.665, 0.793,

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,

    //quinta linea
];

const positionBuffer = gl.createBuffer();
const colorBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoords), gl.STATIC_DRAW);
const position = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(position);
gl.vertexAttribPointer(position, 2, gl.FLOAT, gl.FALSE, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColor), gl.STATIC_DRAW);
const color = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(color);
gl.vertexAttribPointer(color, 3, gl.FLOAT, gl.FALSE, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 480);