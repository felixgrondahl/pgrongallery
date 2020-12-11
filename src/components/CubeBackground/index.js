import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { useSpring, animated } from "react-spring/three";
import useMouseMovement from "../../Hooks/useMouseMovement";

const Box = ({ mouseRot, position }) => {
	const { rotation } = useSpring({
		rotation: mouseRot,
		from: { rotation: [0, 0, 0] },
		config: { mass: 7, tension: 15, friction: 30, precision: 0.0001 },
	});

	return (
		<animated.mesh position={position} rotation={rotation} scale={[1, 1, 1]}>
			<boxBufferGeometry attach="geometry" args={[1.1, 0.6, 1.8]} />
			<meshPhysicalMaterial
				attach="material"
				dithering
				side={THREE.BackSide}
				color={"#262626"}
				roughness={0.6}
				metalness={0.8}
			/>
		</animated.mesh>
	);
};

const CubeBackground = () => {
	const { x, y } = useMouseMovement();

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: "0px",
				zIndex: -9999,
			}}
		>
			<Canvas colorManagement camera={{ fov: 50, position: [0, 0, 0] }}>
				{/* <ambientLight intensity={1} /> */}
				<pointLight
					position={[0, 0.6, 0]}
					intensity={5}
					distance={100}
					decay={2}
					color={"white"}
				/>
				{/* <pointLight
					position={[-1, -0.2, 2]}
					intensity={10}
					distance={50}
					decay={2}
					color={"#A68446"}
				/> */}
				<Suspense fallback={null}>
					<Box position={[0, 0, 0]} mouseRot={[y * 0.002, x * 0.002, 0]} />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default CubeBackground;
