import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Timeline.css'

const Timeline = () => {
  const timelineRef = useRef(null)

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

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const timelineItems = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Engineering in Information Science & Engineering',
      organization: 'Jawaharlal Nehru National College of Engineering (JNNCE)',
      location: 'Shivamogga, India',
      period: '2022 - 2026',
      description: 'Currently in final year of B.E. in Information Science & Engineering at JNNCE, Shivamogga (affiliated with VTU, Belagavi, India). Serving as Chair, IEEE Computer Society Student Chapter (JNNCE).',
      achievements: [
        'CGPA: 3.7/4.0',
        'Chair, IEEE Computer Society Student Chapter',
        'Special Jury Award at Matrix Global Summit 2025',
        '2 Lakh funding from NewGen IEDC for cervical cancer detection project',
        'Multiple hackathon wins and technical competition achievements'
      ],
      icon: <FaGraduationCap />,
      color: 'blue'
    },
    {
      id: 2,
      type: 'experience',
      title: 'IEEE Computer Society Student Chapter - Chair',
      organization: 'JNNCE, Shivamogga',
      location: 'Shivamogga, India',
      period: '2024 - Present',
      description: 'Leading the IEEE Computer Society Student Chapter at JNNCE, organizing technical events, hackathons, and fostering innovation among students.',
      achievements: [
        'Organized 24-hour national hackathon (SHE Secure 2025)',
        'Coordinated Yugma Techfest 1.0 - 3-day technical symposium',
        'Mentored junior students in technical projects',
        'Facilitated knowledge sharing sessions and workshops'
      ],
      icon: <FaBriefcase />,
      color: 'green'
    },
    {
      id: 3,
      type: 'education',
      title: 'Pre-University College (Plus One and Plus Two)',
      organization: 'Kamalamma Vrushabendra Swamy Science PU College',
      location: 'Shikaripura, India',
      period: '2020 - 2022',
      description: 'Completed Higher Secondary Education in Science stream (PCMB: Physics, Chemistry, Mathematics, Biology) under Karnataka State Pre-University Board (PUE).',
      achievements: [
        'Overall 97% in PCMB combination',
        'CET rank: 13000',
        'Active participation in academic competitions',
        'Strong foundation in science and mathematics'
      ],
      icon: <FaGraduationCap />,
      color: 'purple'
    },
    {
      id: 4,
      type: 'experience',
      title: 'AI Research & Development Projects',
      organization: 'JNNCE & C-CAMP',
      location: 'Shivamogga, India',
      period: '2023 - Present',
      description: 'Leading multiple AI and machine learning projects including cervical cancer detection system and tomato leaf disease monitoring system.',
      achievements: [
        'CERVI-AI: 85%+ accuracy in cervical cancer cell classification',
        'Tomato Leaf Health Monitoring: 91% accuracy in disease detection',
        'Secured 2 Lakh funding from NewGen IEDC',
        'Special Jury Award at Matrix Global Summit 2025'
      ],
      icon: <FaBriefcase />,
      color: 'orange'
    },
    {
      id: 5,
      type: 'experience',
      title: 'Technical Competitions & Robotics',
      organization: 'Various Institutions',
      location: 'Karnataka, India',
      period: '2022 - Present',
      description: 'Active participation in technical competitions, robotics events, and hackathons across Karnataka state.',
      achievements: [
        '1st place in Line Follower event at TechZone State-Level Symposium',
        '2nd place in Line Follower Event at Techspark 1.0',
        '3rd place in Line Follower Event at Techzone 2K24',
        '2nd place in Hobby Project event at Mysterio 5.0'
      ],
      icon: <FaBriefcase />,
      color: 'teal'
    },
    {
      id: 6,
      type: 'education',
      title: 'Secondary Education (10th Grade)',
      organization: 'Morarji Desai Residential School Hosuru',
      location: 'Shivamogga, India',
      period: '2019 - 2020',
      description: 'Completed 6th to 10th grades at MDRS Hosuru. Actively participated in computer-science clubs and served as General Secretary in Grade 10.',
      achievements: [
        '91.2% in SSLC examination',
        'A+ grade in all subjects',
        'General Secretary in Grade 10',
        'State level representation in ball badminton',
        'Multiple quiz competition wins',
        'Top 5 rank holders in 10th standard results'
      ],
      icon: <FaGraduationCap />,
      color: 'pink'
    }
  ]

  const educationItems = timelineItems.filter(item => item.type === 'education')
  const experienceItems = timelineItems.filter(item => item.type === 'experience')

  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <motion.div 
          className="section-title fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education & Experience</h2>
          <p>My academic journey and professional experiences</p>
        </motion.div>

        <div className="timeline-content" ref={timelineRef}>
          {/* Education Timeline */}
          <motion.div 
            className="timeline-section fade-in"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="timeline-section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h3>
            <div className="timeline-items">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`timeline-item ${item.color}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-icon">{item.icon}</div>
                  </div>
                  <div className="timeline-content-item">
                    <div className="timeline-header">
                      <h4>{item.title}</h4>
                      <div className="timeline-meta">
                        <div className="timeline-organization">
                          <FaMapMarkerAlt className="meta-icon" />
                          <span>{item.organization}</span>
                        </div>
                        <div className="timeline-location">{item.location}</div>
                        <div className="timeline-period">
                          <FaCalendarAlt className="meta-icon" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-achievements">
                      <h5>Achievements:</h5>
                      <ul>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            className="timeline-section fade-in"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="timeline-section-title">
              <FaBriefcase className="section-icon" />
              Experience
            </h3>
            <div className="timeline-items">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`timeline-item ${item.color}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-icon">{item.icon}</div>
                  </div>
                  <div className="timeline-content-item">
                    <div className="timeline-header">
                      <h4>{item.title}</h4>
                      <div className="timeline-meta">
                        <div className="timeline-organization">
                          <FaMapMarkerAlt className="meta-icon" />
                          <span>{item.organization}</span>
                        </div>
                        <div className="timeline-location">{item.location}</div>
                        <div className="timeline-period">
                          <FaCalendarAlt className="meta-icon" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-achievements">
                      <h5>Key Contributions:</h5>
                      <ul>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Timeline



