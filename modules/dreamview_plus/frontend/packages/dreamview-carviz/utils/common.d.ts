import * as THREE from 'three';
export declare const coordinatesSame: (coord1: any, coord2: any) => boolean;
export declare const getObjectBox3: (object: any) => THREE.Box3;
export declare const getObjectLengthAndWidth: (object: any) => number[];
export declare const disposeMesh: (mesh: any) => void;
export declare const disposeGroup: (group: any) => void;
export declare const drawCircle: (radius: any, material: any, segments?: number) => THREE.Mesh<THREE.CircleGeometry, any>;
export declare const drawArrow: (color: any, length?: number, conelength?: number, conewidth?: number) => THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
export declare const drawImge: (img: any, width: any, height: any) => THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
export declare const drawSolidPolygonFace: (color: any) => THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
export declare const addOutLineToObject: (object: any, color: any) => void;
export declare const drawSolidBox: (x: any, y: any, z: any, color: any) => THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
export declare const drawBox: (x: any, y: any, z: any, color: any) => THREE.BoxHelper;
export declare const drawDashedBox: (x: any, y: any, z: any, color: any) => THREE.LineSegments<THREE.EdgesGeometry<THREE.BoxGeometry>, THREE.LineDashedMaterial>;
