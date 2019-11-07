// 默认导入 React, React.Component as Component, ReactDOM, JQuery as $, loadsh as _
// import './sass/main.scss';
import './sass/Layout.scss';
import MoudleOne from './component/sider/module1';
import {useSpring, animated} from 'react-spring'
import { useState } from 'react';
import Card from './component/Carder';
import Avatar from './component/avatar';
import ContentFrame from './component/contentOpen/contenframe';
import Flip from './component/flip';
import Viewpager from './component/Rotationchart';
import Goo from './component/Goo';
import Listcode from './component/listcode';
import camera from './images/camera.png';
import MoudleTwo from './component/sider/module2';

function Counter() {
	const [count, setCount] = useState(0);
	return (
	  <>
		Count: {count}
		<button onClick={() => setCount(0)}>Reset</button>
		<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
		<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
	  </>
	);
  }
  function Hook() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
function App() {
	const props = useSpring({opacity: 1, from: {opacity: 0}})
	return <animated.h1 style={props}>I will fade in</animated.h1>
  }
  function k(){
	const props = useSpring({ scroll: 100, from: { scroll: 0 } })
	return <animated.div scrollTop={props.scroll} />
  }
  function p(){
	const AnimatedDonut = animated(Donut)
	// ...
	const props = useSpring({ value: 100, from: { value: 0 } })
	return <AnimatedDonut percent={props.value} />
  }
  function l(){
	const props = useSpring({x: state ? 1 : 0})
	return (
	  <animated.div
		style={{
		  transform: props.x
			.interpolate({
			  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
			  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
			})
			.interpolate(x => `scale(${x})`)
		}}
	  />
	)
  }
//   function Card() {
// 	const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// 	const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	
// 	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 60 } }))
// 	return (
// 	  <animated.div
// 		class="card"
// 		onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
// 		onMouseLeave={() => set({ xys: [0, 0, 1] })}
// 		style={{ transform: props.xys.interpolate(trans) }}
// 	  >
// 		  <h1>fdsaf</h1>
// 	  </animated.div>
// 	)
//   }
class Index extends Component {

	
	
	constructor(props){
		super(props);
		this.state = {
			now: new Date()
		};
	}

	componentDidMount(){
		setInterval(() => {
			this.setState({
				now: new Date()
			})
		},1000)
	}
	
	render(){
	
		
		return(

			<>
				  <header>
                    {/* 添加头像 */}
                    {/* 用户名 */}
                    {/* 搜索框 */}
                    {/* 音乐播放器 */}
                    <h1>混迹零柒叁壹的堕落街</h1>
                </header>
                <section className="main-SiderContent">
                    <sider>

                   
					
                    </sider>
                    <content>
                            {/* 模块1：日历表 */}
							{/* <MoudleOne></MoudleOne> */}
                        {/* 模块2：各种图片，视频，分类等等。 */}
						<MoudleTwo></MoudleTwo>
						
                    </content>
                </section>
                <footer>
                    {/* 商标信息，联系方式 */}
                    <h1>This is ongbo！！What's up</h1>
                </footer>
					{/* <h1>Hello React, (๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤</h1>
					<Hook></Hook>
					<Counter></Counter>
					<App></App>
					<k>fdsfasdf
					</k>
					<p></p>
					<l></l>
					<Listcode></Listcode> */}
					{/* <Goo></Goo> */}
					{/* <Card></Card>
					<Avatar></Avatar>
					<Flip></Flip> */}
					{/* <Viewpager></Viewpager> */}
					{/* <ContentFrame></ContentFrame> */}
			</>
		);
	}
}



ReactDOM.render(<Index />,$('#main')[0]);
