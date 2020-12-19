import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { useSpring, animated } from "react-spring/three";
import useMouseMovement from "../../Hooks/useMouseMovement";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import PropTypes from "prop-types";

const GetScrollPos = () => {
	const [scrollY, setScrollY] = useState(0);

	useScrollPosition(({ currPos }) => {
		setScrollY(currPos.y);
	});

	return scrollY;
};

const Box = () => {
	const mouseMovement = useMouseMovement();

	const { rotation } = useSpring({
		rotation: [
			-GetScrollPos() * 0.00025 + mouseMovement?.y * 0.0015,
			mouseMovement?.x * 0.0015,
			0,
		],
		from: { rotation: [0, 0, 0] },
		config: { mass: 7, tension: 15, friction: 30, precision: 0.0001 },
	});

	return (
		<animated.mesh rotation={rotation}>
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

Box.propTypes = {
	mouseRot: PropTypes.array,
	position: PropTypes.array,
};

const CubeBackground = () => {
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
					<Box />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default CubeBackground;
