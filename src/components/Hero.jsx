import React, { useState, useRef, useEffect } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineSound, AiOutlinePause } from "react-icons/ai";
import AudioPermissionModal from "./AudioPermissionModal";
import { 
  SiTryhackme, 
  SiHackthebox, 
  SiGnubash 
} from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiPython,
  DiRust,
  DiLinux,
} from "react-icons/di";

const icons = [
  <DiLinux className="text-purple-400" />,
  <SiGnubash className="text-purple-400" />,
  <DiPython className="text-purple-400" />,
  <DiRust className="text-purple-400" />,
  <DiReact className="text-purple-400" />,
  <DiHtml5 className="text-purple-400" />,
  <DiCss3 className="text-purple-400" />,
  <DiJavascript className="text-purple-400" />,
];

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const { t, i18n } = useTranslation();
  const audioRef = useRef(new Audio('/Crescent-Moon-chosic.com.mp3'));useEffect(() => {
    audioRef.current.loop = true;
    
    const checkAudioPermissions = async () => {
      // Verificar se o usuário já recusou anteriormente
      const audioPermission = localStorage.getItem('audioPermission');
      
      if (audioPermission === 'denied') {
        // Se recusou anteriormente, não tentar tocar e não mostrar modal
        setShowAudioModal(false);
        setShowPlayButton(false);
        return;
      }

      // Primeiro, tentar tocar automaticamente (funciona no Firefox e outros)
      try {
        audioRef.current.volume = 1;
        audioRef.current.muted = false;
        await audioRef.current.play();
        
        // Se conseguiu tocar, salvar permissão e não mostrar modal
        localStorage.setItem('audioPermission', 'granted');
        setIsPlaying(true);
        setShowAudioModal(false);
        setShowPlayButton(false);
        console.log('Áudio tocando automaticamente');
        
      } catch (err) {
        // Se falhou (Chrome e navegadores restritivos), verificar se já tinha permissão
        if (audioPermission === 'granted') {
          // Usuário já deu permissão antes, mostrar botão simples
          setShowPlayButton(true);
          setShowAudioModal(false);
        } else {
          // Primeira vez que falha, mostrar modal de permissão
          setShowAudioModal(true);
          setShowPlayButton(false);
        }
        console.log('Autoplay bloqueado, mostrando UI de permissão');
      }
    };

    checkAudioPermissions();
  }, []);  const handleAcceptAudio = () => {
    // Salvar permissão no localStorage
    localStorage.setItem('audioPermission', 'granted');
    
    // Garantir que o áudio esteja configurado corretamente
    audioRef.current.volume = 1;
    audioRef.current.muted = false;
    
    audioRef.current.play()
      .then(() => {
        console.log('Áudio ativado pelo usuário');
        setIsPlaying(true);
      })
      .catch(err => {
        console.log('Erro ao tentar tocar:', err);
        // Se falhar, tentar novamente após um pequeno delay
        setTimeout(() => {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(e => console.log('Segundo erro ao tentar tocar:', e));
        }, 100);
      });
  };

  const handlePlayAudio = () => {
    // Função para quando usuário já deu permissão antes e quer tocar agora
    setShowPlayButton(false);
    
    audioRef.current.volume = 1;
    audioRef.current.muted = false;
    
    audioRef.current.play()
      .then(() => {
        console.log('Áudio tocando após clique');
        setIsPlaying(true);
      })
      .catch(err => {
        console.log('Erro ao tocar áudio:', err);
      });
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.log('Erro ao tentar tocar:', err));
      setIsPlaying(true);
    }
  };

  const handleDownloadCv = () => {
    const currentLanguage = i18n.resolvedLanguage || i18n.language;
    const cvPath = currentLanguage === "pt" ? "/CV-Paule-Macedo-PT-BR.pdf" : "/CV-Paule-Macedo-EN.pdf";

    window.location.href = cvPath;
  };

  const animationTexts = [
    t("hero.software_engineer"),
    1000,
    t("hero.cybersecurity"),
    1000,
  ];  return (
    <>
      {showAudioModal && (
        <AudioPermissionModal onAccept={() => {
          handleAcceptAudio();
          setShowAudioModal(false);
        }} />
      )}
      {showPlayButton && (
        <motion.div 
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-24 right-4 z-40 max-w-sm"
        >
          <div className="bg-purple-900 bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-purple-400 border-opacity-50 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <AiOutlineSound className="text-purple-400 text-xl" />
              <h2 className="text-lg font-semibold text-gray-200">Tocar Áudio</h2>
            </div>
            
            <p className="mb-4 text-sm text-gray-300">
              Clique para ativar o áudio de fundo.
            </p>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayAudio}
                className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors border border-purple-500"
              >
                Tocar
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    <div className="max-w-[1000px] mx-auto relative pt-24">
     <div className="flex flex-col-reverse md:grid md:grid-cols-2 place-items-center gap-8 p-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={animationTexts}
            repeat={Infinity}
            speed={50}
            className="font-bold text-xl md:text-3xl xl:text-4xl text-gray-400 italic mb-4"
            key={i18n.language}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-5xl tracking-tight mb-4"
          >
            {t("hero.greeting")} <br />
            <span className="text-purple-500">PAULE MACEDO</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 max-w-[300px] md:text-2xl text-lg mb-6 md:max-w-[500px]"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex mb-5 items-center flex-col md:flex-row gap-6 my-4"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 w-max p-3 border border-purple-400 rounded-xl"
                onClick={handleDownloadCv}
              >
                {t("hero.download_cv")}
              </motion.a>
            </div>
            <div className="flex gap-6 flex-row text-4xl xl:text-6xl md:text-5xl text-purple-400 z-20 relative">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/paulemacedo"
                className="relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/Paulemacedo/"
                className="relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://tryhackme.com/r/p/paulemacedo"
                className="relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTryhackme />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAudio}
                className="cursor-pointer relative z-10 select-none"
                style={{ pointerEvents: 'auto' }}
              >
                {isPlaying ? <AiOutlinePause /> : <AiOutlineSound />}
              </motion.div>
            </div>
          </motion.div>
          <p className="text-[11px] md:text-xs text-gray-400 opacity-80 -mt-2 mb-2 text-center md:text-left">
            {t("hero.cv_download_notice")}
          </p>
        </motion.div>

        <motion.img
          src={profilepic}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[300px] md:w-[450px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 gap-2 md:gap-7 overflow-hidden"
      >
        <motion.div
          className="flex gap-7 md:gap-10 w-max"
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[
            ...icons,
            ...icons,
            ...icons,
            ...icons,
            ...icons,
            ...icons,
            ...icons,
            ...icons,
          ].map((icon, index) => (
            <div key={index} className="opacity-20">
              {icon}
            </div>
          ))}
        </motion.div>
      </motion.div>      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
    </>
  );
};

export default Hero;