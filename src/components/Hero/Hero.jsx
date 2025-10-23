import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * 100,
                y: Math.random() * 100
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="highlight">Viresha H T</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Computer Science Enthusiast | AI/ML & Full-Stack Developer
            </motion.p>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Information Science & Engineering student skilled in Java, Python, MERN/Flask, SQL, and networking. I build AI and full-stack solutions—like a NewGen IEDC-funded, award-recognized cervical cancer detection system—and I’m excited about solving real-world problems in AI, cloud, and automation.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a 
                href="/VireshaHTResume.pdf" 
                className="btn btn-outline"
                download="VireshaHTResume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="btn-icon" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <a href="https://github.com/VireshaHt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/viresha-h-t/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a> */}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-container">
              <img 
                src="/Viresha-H-T.jpg" 
                alt="Viresha-H-T" 
                className="hero-photo"
              />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero

