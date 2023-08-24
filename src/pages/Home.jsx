
import { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'antd';
import './Home.css'
import index from '../assets/index.png'
// import news from '../assets/news.png'


// import { Menu } from 'antd';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const items = [
  //   {
  //     label: '绿色发展',
  //     key: 'mail',
  //   },
  //   {
  //     label: '智造中心',
  //     key: 'app',
  //   },
  //   {
  //     label: '质量监督',
  //     key: 'SubMenu',
  //   },
  //   {
  //     label: '生态合作',
  //     key: 'mail1',
  //   },
  //   {
  //     label: '咨询活动',
  //     key: 'app1',
  //   },
  //   {
  //     label: '赋能案例',
  //     key: 'SubMenu1',
  //   },
  // ];

  const iframe = useRef(null);

  useEffect(() => {
    console.log(iframe)
    // iframe.current.style.height = iframe.current.contentWindow.document.body.scrollHeight + 'px';
  }, [])

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div >
      <Modal title="" width="80%"   open={isModalOpen} onCancel={handleCancel} footer={null}>
        <div className='iframe-block'>
            <iframe
              ref={iframe}
              src="http://localhost:3000"
              frameBorder="0"
              height="900px"
              width= "99%"
           
          />   

        </div>
      


      </Modal>


      <div className="body">
        <img onClick={showModal} src={index}></img>



      </div>

      {/* <div className='chatgpt'>
        <iframe
          ref={iframe}
          src="http://localhost:3000"
          frameBorder="0"
          width="1800px"
          height="1888px"
        />
      </div> */}


      {/* <div className="header">
        <div className="nav">
          <div className='logo'><img src={beiminglogo}></img></div>
          <div className='nav-item'>
            <Menu mode="horizontal" items={items} selectedKeys="mail" style={{ background: "unset" }} />
          </div>
          <div className='search'></div>
          <div className='user'></div>
        </div>
      </div> */}
      {/* <div className='news-wrapper'>
        <div className='news-left'>
          <div className='news-left-title'>咨询中心 <span>News center</span></div>
          <div className='news-left-image'><img src={news}></img></div>
        </div>
        <div className='news-right'>
          <div className='news-right-title'><span>全部</span><span></span>|<span>公司动态</span>|<span>环保行动</span><span>|</span><span>媒体聚焦</span><span>|</span><span>MORE</span></div>
          <div className='news-right-content'>
            <div className='news-right-content-item content-item'><div>【深度】腾讯启动“净零行动”，互联网企业踊跃入局碳中和</div> <hr/><div>2022-02-28</div></div>
            <div className=''>内2022年2月24日，腾讯宣布开始“净零行动”，承诺不晚于2030年，实现自身运营及供应链的全面碳中和。同时，不晚于2030年，实现100%绿色电力。</div>
            <hr/><div className='news-right-content-item'><div>浅议碳中和背景下的煤企转型路径</div><div>2022-02-21</div></div>
            <hr/>
            <div className='news-right-content-item'><div>构建新型电力系统，加强电力灵活调节能力建设！</div><div></div></div>  <hr/>
            <div className='news-right-content-item'><div>北京冬奥会如何实现碳中和？7大亮点不可不知</div><div>2022-02-15</div></div>  <hr/>
            <div className='news-right-content-item'><div>中国城市碳中和指数实验室在京挂牌成立</div><div>2022-01-18</div></div>
          </div>

        </div>

      </div> */}
    </div>
  );
};

export default Home;