import '../sass/Layout.scss';
import MoudleOne from '../component/sider/module1';
import '../sass/componentsMoudle/style.scss'
class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <header>
                    {/* 添加头像 */}
                    {/* 用户名 */}
                    {/* 搜索框 */}
                    {/* 音乐播放器 */}
                    <h1>jflskadjflksjfl</h1>
                </header>
                <section className="main-SiderContent">
                    <sider>

                        {/* 模块1：日历表 */}
                        <MoudleOne></MoudleOne>
                        {/* 模块2：各种图片，视频，分类等等。 */}
                        <h1>idkiied</h1>
                       
                    </sider>
                    <content>
                        {/* 博客文章 */}
                        <h1>jfkdsjaflkf</h1>
                    </content>
                </section>
                <footer>
                    {/* 商标信息，联系方式 */}
                    <h1>footerfotteer</h1>
                </footer>
            </>
        );
    }
}

ReactDOM.render(<Index />,$("#main")[0])
// export default Index;