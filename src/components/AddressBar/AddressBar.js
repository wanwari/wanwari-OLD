import {LeftSvg, RightSvg, RefreshSvg, HomeSvg, MenuSvg} from '../Svg';

const AddressBar = () => {

  const refreshPage = () => {
    window.location.reload();
  }

  const style = {
    container: "flex justify-between bg-white py-2",
    navBtn: "mr-1 py-2",
    urlBar: "flex-grow rounded-lg border border-gray-300 bg-white pl-2 py-1 ml-2 text-gray-600",
    btnGroup: "pl-4",
    menuBtn: "mt-2 px-4",
  };

  return(
    <div className={style.container}>

      <div className={style.btnGroup}>
        <button className={style.navBtn}>
          <LeftSvg />
        </button> 

        <button className={style.navBtn}>
          <RightSvg />
        </button> 

        <button className={style.navBtn} onClick={refreshPage}>
          <RefreshSvg />
        </button> 

        <button className={style.navBtn}>
          <HomeSvg />
        </button> 
      </div>

      <input type="text" value="https://wanwari.ca/" className={style.urlBar} disabled />
      
      <div className={style.menuBtn}>
        <button>
          <MenuSvg />
        </button> 
      </div>

    </div>
  );
}

export default AddressBar;
