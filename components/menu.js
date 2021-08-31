import Image from 'next/image';
import menu from '../pages/images/menu-icon.svg'

const Menu = ({className}) => {
  return (
    <Image className={className} src={menu} alt='Main menu'/>
  );
};

export default Menu;
