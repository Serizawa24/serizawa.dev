import TransitionEffect from '../../components/TransitionEffect/index.js';
import AnimatedText from '../../components/AnimatedText';
import { motion } from 'framer-motion';
import { Shuffer,Backward,Play,Pause,Forward,Loop } from '../../components/Icon/index.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoop,setPlay,setShuffle,setCurrentIndex,setBack,setNext,setListLength } from '../../features/music/musicSlice.js'
import { useState,useEffect,useRef } from 'react';

//
import Somebody from '../../assets/music/Somebody.mp3';
import Herecomehope from '../../assets/music/Herecomehope.mp3';
import Hightide from '../../assets/music/Hightide.mp3';
import Mageofviolet from '../../assets/music/Mageofviolet.mp3';
import Unison from '../../assets/music/Unison.mp3';
import Hozukibiyori from '../../assets/music/Hozukibiyori.mp3';
import Template from '../../assets/music/Template.mp3';

///
import styles from './Playlist.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const Song = ({item,index,active}) => {
  const dispatch = useDispatch()
  return(
    <motion.li
        onClick={
          (e)=>{
            dispatch(setCurrentIndex(index))
          }
        }
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

function Playlist() {
  const bgm = [
    {
      name:'Khaim - Somebody',
      author:'Khaim',
      src:'https://www.youtube.com/watch?v=0dP7cdf-EgI',
      audioSrc:Somebody,
    },
    {
      name:'MAGE OF VIOLET （Midnight ver.）',
      author:'IRyS Ch. hololive-EN',
      src:'https://www.youtube.com/watch?v=9i-MNqTEu6c',
      audioSrc:Mageofviolet,
    },
    {
      name:'HERE COMES HOPE （Midnight ver.）',
      author:'IRyS Ch. hololive-EN',
      src:'https://www.youtube.com/watch?v=gvv0iNpElDU',
      audioSrc:Herecomehope,

    },
    {
      name:'High Tide （Midnight ver.）',
      author:'Moona Hoshinova hololive-ID',
      src:'https://www.youtube.com/watch?v=h9GuWohn-sA',
      audioSrc:Hightide,

    },
    {
      name:'Unison （Midnight ver.）',
      author:'Marine Ch. 宝鐘マリン',
      src:'https://www.youtube.com/watch?v=eNKb9P1Xp4Q',
      audioSrc:Unison,

    },
    {
      name:'Hozukibiyori （Midnight ver.）',
      author:'AyaFubuMi - Topic',
      src:'https://www.youtube.com/watch?v=cqmvRhvPzTc',
      audioSrc:Hozukibiyori,

    },
    {
      name:'TEMPLATE （Midnight ver.)',
      author:'Various Artists - Topic',
      src:'https://www.youtube.com/watch?v=WhXciBKikE0',
      audioSrc:Template,

    },
  ] // fake api
  const { isPlaying,isLoop,isShuffle,currentIndex } = useSelector(state=>state.music)
  const dispatch = useDispatch();
  const [songTime,setSongTime] = useState("0:00");
  const [songDuration,setSongDuration] = useState("0:00");
  const [value,setValue] = useState(0);
  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const nextRef = useRef(null);
  const backRef = useRef(null);
  const handleSliderChange = (e) =>{
    setValue(e.target.value)
    let seekValue = e.target.value
    let seekTime = ( audioRef.current.duration/100 ) * seekValue;     
    audioRef.current.currentTime = seekTime;
  }
  useEffect(()=>{
    dispatch(setListLength(bgm.length))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  //set time
  const handleTimeUpdate = () => {
    const minutes = Math.floor(Math.round(audioRef.current.currentTime) / 60);
    const seconds = Math.round(audioRef.current.currentTime) % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    setSongTime(formattedTime);
  };
  //time duration
  useEffect(()=>{
    const minutes = Math.floor(Math.round(audioRef.current.duration) / 60);
    const seconds = Math.round(audioRef.current.duration) % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    setSongDuration(formattedTime)

    setValue((Math.round(audioRef.current.currentTime)/Math.round(audioRef.current.duration))*100)
    if(isPlaying) {
      audioRef.current.play()
      audioRef.current.volume = 0.8
    } else {
      audioRef.current.pause()
    }
    audioRef.current.onended = function(){
      nextRef.current.click();
    }
  },[isPlaying,audioRef,songTime,currentIndex])
  //loop
  useEffect(() => {
    if (isLoop) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  }, [isLoop]);

  return ( 
    <>
      <audio src={bgm[currentIndex].audioSrc} onTimeUpdate={handleTimeUpdate} ref={audioRef} />
      <TransitionEffect />  
      <div className={cx('wrapper')}>
        <div className={cx('title')}>
          <AnimatedText text="My Ultimate Playlist" fontSize='var(--title-size-head)' mb="6.4"/>
        </div>
        <ul className={cx('music')}>
          { bgm.map((item,index)=><Song active={ index === currentIndex?true:false} key={index} item={item} index={index} />)}
        </ul>
      </div>
      <div className={cx('player')}>
        <header className={cx('player-head')}>
          <div className={cx('player-info')}>
            <h3 className={cx('player-info-name')}>{bgm[currentIndex].name}</h3>
            <span className={cx('player-info-dot')}>.</span>
            <p className={cx('player-info-author')}>{bgm[currentIndex].author}</p>
          </div >
          <div className={cx('player-button')}>
            <span onClick = {
              ()=>{
                dispatch(setShuffle())
              }
            } 
            style={{
              color:isShuffle ? "#B63E96" : "var(--text-black)",
            }}
            className={cx('player-button-icon')}>
              <Shuffer />
            </span>
            <span onClick = {
              ()=>{
                dispatch(setBack())
              }
            } 
            ref={backRef}
            className={cx('player-button-icon')}>
              <Backward />
            </span>
          
            <span onClick = {
              ()=>{
                dispatch(setPlay())

              }
            } className={cx('player-button-icon')}>
              {isPlaying ? <Pause /> : <Play />}
            </span>
            <span onClick = {
              ()=>{
                dispatch(setNext())
              }
            } 
            ref={nextRef}
            className={cx('player-button-icon')}>
              <Forward />
            </span>
            <span onClick = {
              ()=>{
                dispatch(setLoop())
              }
            } 
            style={{
              color:isLoop ? "#B63E96" : "var(--text-black"
            }}
            className={cx('player-button-icon')}>
              <Loop />
            </span>
          </div>
        </header>
        <section className={cx('player-control')}>
        <span className={cx('player-time')}>
            {songTime}
        </span>
        <input onChange={
          handleSliderChange
        } ref={sliderRef} type="range" min="0" max="100" value={value.toString()} step="0.1" className={cx('player-slider')} />
        <span className={cx('player-time')}>
            {songDuration}
        </span>
        </section>
      </div>
    </>
   );
}

export default Playlist;