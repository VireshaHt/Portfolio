import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaTrophy, FaUsers, FaDownload, FaArrowLeft } from 'react-icons/fa'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)
  const [activeTab, setActiveTab] = useState('skills')
  const [showEducationPage, setShowEducationPage] = useState(false)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleShowMore = () => {
    setShowEducationPage(true)
  }

  const handleBackToAbout = () => {
    setShowEducationPage(false)
  }

  // Education data
  const educationData = [
    {
      id: 1,
      institution: "Jawaharlal Nehru National College of Engineering (JNNCE). Shivamogga.India",
      degree: "Bachelor of Engineering in Information Science & Engineering",
      duration: "2022 - 2026",
      cgpa: "3.7/4",
      image: "public/jnnce1.webp",
      marksCard: "public/Transcript Certificates.pdf",
      description: "I’m in the final year of my B.E. in Information Science & Engineering at JNNCE, Shivamogga (affiliated with VTU, Belagavi, India), 2022–2026 batch, and I serve as Chair, IEEE Computer Society Student Chapter (JNNCE)."
    },
    {
      id: 2,
      institution: "K.V.S Science PU College. Shikarpura. India",
      degree: "Pre-University College(plus one and plus two)",
      duration: "2020- 2022",
      percentage: "94%",
      image: "public/kvs.jpg",
      marksCard: "public/Viresha H T_PUC.pdf",
      description: "I completed my Higher Secondary Education (Plus One & Plus Two) in the Science stream (PCMB: Physics, Chemistry, Mathematics, Biology) at Kamalamma Vrushabendra Swamy Science PU College, Shikaripura, India. I studied Plus One (2020–2021) and Plus Two (2021–2022) under the Karnataka State Pre-University Board (PUE) and achieved an overall 97% (PCMB) in my Higher Secondary Examination."
    },
    {
      id: 3,
      institution: "Morarji Desai Residential School Hosuru. Shivamogga. India",
      degree: "Secondary Education (10th Grade)",
      duration: "2019-2020",
      percentage: "91.2%",
      image: "public/mdrs.jpeg",
      marksCard: "public/Viresha H T_10th.pdf",
      description: "I completed my 6th to 10th grades at MDRS Hosuru. During this time, I actively participated in computer-science clubs and served as the General Secretary in Grade 10. I represented my school at the state level in ball badminton, and I also participated in—and won—multiple quiz competitions. I achieved an A+ grade in all subjects in the SSLC examination conducted by the Karnataka State Board."
    }
  ]

  // Skills data organized by categories
  const skillsData = {
    frontend: {
      title: "Frontend Web Development",
      skills: ["HTML", "CSS", "Bootstrap", "React", "JavaScript", "Tailwind CSS"]
    },
    backend: {
      title: "Backend Web Development", 
      skills: ["Django Framework", "Flask", "Node.js", "Express.js", "REST APIs"]
    },
    languages: {
      title: "Known Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "SQL"]
    },
    database: {
      title: "Database Management System (DBMS)",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"]
    },
    nonTechnical: {
      title: "Non Technical Skills",
      skills: ["Teamwork", "Collaboration & Networking", "Effective Communication", "Organisation & Team Management", "Problem Solving", "Event Marketing & Promotion"]
    }
  }

  // Experience data
  const experienceData = [
    {
      title: "Team Lead - CERVI-AI Project",
      company: "NewGen IEDC Funded Project",
      duration: "2024 - 2025",
      description: "Led development of AI-powered cervical cytology screening system using YOLOv8, securing ₹2L funding and Special Jury Award."
    },
    {
      title: "SPARK Internship",
      company: "Jawaharlal Nehru National College of Engineering (JNNCE) & Subbaiah Institute of Medical Sciences (SIMS)",
      duration: "2025",
      description: "Collaborated with SIMS pathologists to design an end-to-end pipeline for AI-assisted cervical cytology: curated & de-identified slide images, defined labeling SOPs, implemented preprocessing (CLAHE, morphological ops), trained YOLOv8 models, and built a Flask + React review tool for upload → inference → doctor sign-off. Documented ethics/compliance and deployment on Jetson Nano."

    },
    {
      title: "IEEE CS Student Chapter Chair",
      company: "JNNCE",
      duration: "2025 - Present",
      description: "Organizing technical events, hackathons, and workshops for student community development."
    },
    {
      title: "Hackathon Organizer",
      company: "Jawaharlal Nehru National College of Engineering (JNNCE)",
      duration: "2025",
      description: "Organized 24-hour hackathon with 100+ participants, managing logistics and technical support."
    }
  ]

  if (showEducationPage) {
    return (
      <section id="education" className="education section">
        <div className="container">
          <motion.div 
            className="education-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button className="back-btn" onClick={handleBackToAbout}>
              <FaArrowLeft />
              <span>Back to About</span>
            </button>
            <h2>Education</h2>
          </motion.div>

          <div className="education-grid">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="education-image">
                  <img src={edu.image} alt={edu.institution} />
                </div>
                <div className="education-content">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="duration">{edu.duration}</p>
                  <p className="performance">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                  </p>
                  <p className="description">{edu.description}</p>
                  <button 
                    className="download-btn"
                    onClick={() => window.open(edu.marksCard, '_blank')}
                  >
                    <FaDownload />
                    Download Marks Card
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-title fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content" ref={aboutRef}>
          <motion.div 
            className="about-left fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="profile-image">
              <img src="/Viresha H T.jpg" alt="Viresha H T" />
            </div>
          </motion.div>

          <motion.div 
            className="about-right fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <p>
              I’m an Information Science & Engineering student at JNNCE with a deep passion for programming and building useful software. My strengths include software development, data structures, algorithms, and problem-solving. I work primarily with Java and Python, and I’ve built full-stack web projects that integrate modern front-end frameworks, REST APIs, and databases. I’m eager to apply my skills to real-world problems and grow in AI, networking, and automation.
              </p>
            </div>

            <div className="tabs-container">
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button 
                  className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </button>
                <button 
                  className={`tab ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'skills' && (
                  <div className="skills-content">
                    {Object.entries(skillsData).map(([key, category]) => (
                      <div key={key} className="skill-category">
                        <h4>{category.title}</h4>
                        <div className="skill-items">
                          {category.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="experience-content">
                    {experienceData.map((exp, index) => (
                      <div key={index} className="experience-item">
                        <h4>{exp.title}</h4>
                        <p className="company">{exp.company}</p>
                        <p className="duration">{exp.duration}</p>
                        <p className="description">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="education-content">
                    {educationData.map((edu, index) => (
                      <div key={index} className="education-item">
                        <h4>{edu.institution}</h4>
                        <p className="degree">{edu.degree}</p>
                        <p className="duration">{edu.duration}</p>
                        <p className="performance">
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className="show-more-btn" onClick={handleShowMore}>
              Show More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
