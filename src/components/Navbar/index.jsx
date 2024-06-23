import Button from '../Button';
import {TwitterIcon,FacebookIcon,YoutubeIcon,GithubIcon,SteamIcon,DiscordIcon} from '../Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import lightThemeIcon from '../../assets/light.png';
import darkThemeIcon from '../../assets/dark.png';
import { useSelector,useDispatch } from "react-redux";
import { changeTheme } from '../../features/theme/themeSlice';
import { useState } from 'react';
///
import styles from './Navbar.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles)
function Navbar() {

  const [isOpen,setIsOpen] = useState(false)

  const location = useLocation();
  const currentPath = location.pathname;
  const navList = [
    {
      name:'Home',
      to:'/'
    },
    {
      name:'About',
      to:'/About'
    },
    {
      name:'Projects',
      to:'/Projects'
    },
    // {
    //   name:'Artwork',
    //   to:'/Artwork'
    // },
    {
      name:'Playlist',
      to:'/Playlist'
    },
    {
      name:'Spotify',
      to:'/Spotify'
    },
  ]
  const socialList = [
    {
      name:'Twitter',
      icon: <TwitterIcon />,
      href: 'https://twitter.com/serizawa6106',

    },
    {
      name:'Facebook',
      icon: <FacebookIcon />,
      href: 'https://www.facebook.com/profile.php?id=100075348840940',
      
    },
    {
      name:'Youtube',
      icon: <YoutubeIcon />,
      href: 'https://www.youtube.com/@lucyonfiree',
      
    },
    {
      name:'Github',
      icon: <GithubIcon />,
      href: 'https://github.com/Serizawa24',
      
    },
    {
      name:'Steam',
      icon: <SteamIcon />,
      href: 'https://steamcommunity.com/id/JodieJoestar/',
    },
    {
      name:'Discord',
      icon: <DiscordIcon />,
      href: 'https://discord.gg/Qmm6Dxe83t',
    }
  ]

  const { theme } = useSelector(theme=>{
    return theme.theme
  })
  const dispatch = useDispatch()

  const handleClickButton = () => {
    setIsOpen(!isOpen)
  }

  return ( 
    <div className={cx('wrapper')}>

      <button title="Open Navigation Menu" className={cx('ham-button')} 
        onClick = {(e)=>{
          handleClickButton()
        }}
      >
        <span className={cx(`ham-slash-${isOpen?'open':'close'}`)} ></span>
        <span className={cx(`ham-slash-${isOpen?'open':'close'}`)} ></span>
        <span className={cx(`ham-slash-${isOpen?'open':'close'}`)} ></span>

      </button>

      <div className={cx('nav-desk')}>
        <nav className={cx('navigate')}>
          {navList.map(item=><Button className={cx('navigate-btn',{
            "active": currentPath === item.to
          })}  key={item.name} to={item.to} >{item.name}</Button>)}
        </nav>

        <nav className={cx('social')}>
          {socialList.map(item=><Button className={cx('social-btn')} key={item.name} href={item.href} target='_blank' >{item.icon}</Button>)}
          
          <button className={cx('theme-btn')}
            onClick={()=>{
              dispatch(changeTheme());
            }}
          >
            <img className={cx('theme-icon')} src={theme==='light' ? darkThemeIcon:lightThemeIcon} alt='theme'/>
          </button>
          <Button
            to='/login'
          >
          <FontAwesomeIcon className={cx('auth-btn')} icon={faRightToBracket} />
          </Button>
        </nav>
      </div>
      
      <div className={cx(`nav-mobile-${isOpen?'open':'close'}`)}>
        <nav className={cx('navigate')}>
          {navList.map(item=><Button  className={cx('navigate-btn',{
            "active": currentPath === item.to
          })}  key={item.name} to={item.to} >{item.name}</Button>)}
        </nav>

        <nav className={cx('social')}>
          {socialList.map(item=><Button className={cx('social-btn')} key={item.name} href={item.href} target='_blank' >{item.icon}</Button>)}
          
          <button className={cx('theme-btn')}
            onClick={()=>{
              dispatch(changeTheme());
            }}
          >
            <img className={cx('theme-icon')} src={theme==='light' ? lightThemeIcon:darkThemeIcon} alt='theme'/>
          </button>
          <Button
            to='/Login'
          >
          <FontAwesomeIcon className={cx('auth-btn')} icon={faRightToBracket} />
          </Button>
        </nav>
      </div>


    </div>
  );
}

export default Navbar;