import {useEffect} from "react";

const Tabs = () => {

  useEffect(() => {
    const el = document.querySelector('.chrome-tabs');
    const ChromeTabs = window.ChromeTabs;
    const chromeTabs = new ChromeTabs();
    chromeTabs.init(el);
  
    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Home',
        favicon: false
      }, {
        animate: true,
        background: false
      });
    }, 300);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Portfolio',
        favicon: false
      }, {
        animate: true,
        background: true 
      });
    }, 600);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Contact',
        favicon: false
      }, {
        animate: true,
        background: true 
      });
    }, 900);

  }, []);

  return(
    <div className="chrome-tabs">
      <div className="chrome-tabs-content"></div>
      <div className="chrome-tabs-bottom-bar"></div>
    </div>
  );

}

export default Tabs;
