//  动态的摇晃的卡片，里面可以添加内容
 
 import '../sass/Content/card.scss';
 import {useSpring, animated} from 'react-spring'
 import { useState } from 'react';
 function Card() {
	const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
	const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 50, friction: 180 } }))
	return (
	  <animated.div
		class="card"
		onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
		onMouseLeave={() => set({ xys: [0, 0, 1] })}
		style={{ transform: props.xys.interpolate(trans) }}
	  >
		  <h1>fdsaf</h1>
	  </animated.div>
	)
  }
  export default Card;