import {useEffect} from "react";

const Tabs = () => {

  useEffect(() => {

    const el = document.querySelector('.chrome-tabs');
    let ChromeTabs = window.ChromeTabs;
    let chromeTabs = new ChromeTabs();
    chromeTabs.init(el);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Home',
        favicon: false
      }, {
        animate: true,
        background: false
      });
    }, 100);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Portfolio',
        favicon: false
      }, {
        animate: true,
        background: true 
      });
    }, 400);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Contact',
        favicon: false
      }, {
        animate: true,
        background: true 
      });
    }, 700);

  }, []);

  return(
    <div className="chrome-tabs">
      <div className="chrome-tabs-content"></div>
      <div className="chrome-tabs-bottom-bar"></div>
    </div>
  );

}

export default Tabs;
