import {FooterSvg} from '../Svg';

const Footer = () => {

  const style={
    container: "bg-gray-100 p-5 text-right",
    leftText: "inline-block align-middle pr-1",
    iconText: "inline-block align-middle text-red-400 pr-1",
    rightText: "inline-block align-middle",
  }

  return(
    <div className={style.container}>
        <div className={style.leftText}>developed </div>
        <div className={style.iconText}>
          <FooterSvg />          
        </div>
        <div className={style.rightText}>by wiesa anwari</div>
    </div>
  );
}

export default Footer;
