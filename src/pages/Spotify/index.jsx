import TransitionEffect from '../../components/TransitionEffect/index.js';
import AnimatedText from '../../components/AnimatedText';
import { motion } from 'framer-motion';

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/spotify/spotifySlice.js";
import { APIController } from "./spotify.js";

import styles from "./Spotify.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


const Song = ({item,index,active}) => {
  const dispatch = useDispatch()
  return(
    <motion.li
        
        className={cx('song-list-box')}
        style={{
          width: active? '100%':"98%"
        }}
        initial={{y:150}}
        whileInView={{
          y:0,
          transition:{
            duration:0.5,
            ease:"easeInOut"
          }
        }}
        viewport={{once:true}}
      >
        <div className={cx('song-list-wrapper')}>
          <h2 className={cx('song-list-title')}>{item.name}</h2>
          <span className={cx('song-list-date')}>{item.author}</span>
          <a href={item.src} rel='noreferrer' target='_blank' className={cx('song-list-link')} title='Visit Link'>Link</a>
        </div>
        <div  className={cx('song-list-shadow')}/>

      </motion.li>
  )
}

function Spotify() {
  const { token } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (!token) {
      APIController.getToken().then((data) => dispatch(setToken(data)));
    }else{
      APIController.getUserPlaylist("31jtqvrm7kntope7j3jwo4ee52d4", token).then(
    (data) => setPlaylists(data)
  );
    }

  }, []);
  useEffect(() => {
    if (!token) {
      APIController.getToken().then((data) => dispatch(setToken(data)));
    }else{
      APIController.getUserPlaylist("31jtqvrm7kntope7j3jwo4ee52d4", token).then(
    (data) => setPlaylists(data)
  );
    }

  }, []);
  console.log(playlists.items);

  return (
   <>
   <TransitionEffect />  
      <div className={cx('wrapper')}>
        <div className={cx('title')}>
          <AnimatedText text="My Ultimate Playlist" fontSize='var(--title-size-head)' mb="6.4"/>
        </div>
        <ul className={cx('music')}>
          { !!playlists.items && playlists.items.map((item,index)=><Song  key={index} item={item} index={index} />)}
        </ul>
      </div>
   </>
  );
}

export default Spotify;
