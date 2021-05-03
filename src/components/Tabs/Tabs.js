import {useEffect} from "react";

const Tabs = props => {

  useEffect(() => {
    console.log(props.active)

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
        background: props.active === 0 ? false : true
      });
    }, 100);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Portfolio',
        favicon: false
      }, {
        animate: true,
        background: props.active === 1 ? false : true
      });
    }, 400);

    setTimeout(() => {
      chromeTabs.addTab({
        title: 'Contact',
        favicon: false
      }, {
        animate: true,
        background: props.active === 2 ? false : true
      });
    }, 700);

  }, [props.active]);

  return(
    <div className="chrome-tabs">
      <div className="chrome-tabs-content"></div>
      <div className="chrome-tabs-bottom-bar"></div>
    </div>
  );

}

export default Tabs;
