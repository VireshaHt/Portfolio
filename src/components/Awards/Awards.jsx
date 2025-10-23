import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar, FaGraduationCap, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import './Awards.css'

const Awards = () => {
  const awardsRef = useRef(null)
  const [showAll, setShowAll] = useState(false)

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

    if (awardsRef.current) {
      observer.observe(awardsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const awards = [
    {
      id: 1,
      title: "Special Jury Award",
      organization: "Matrix Global Summit (Matrix Forum)",
      year: "2025",
      description:
        "Honored with the Special Jury Award at Matrix Global Summit 2025 for the 'Cervi-AI' AI-assisted cervical cytology platform. Recognized by an expert panel for innovation, technical rigor, and social impact; showcased a live demo and field results; evaluated on feasibility, scalability, and usability.",
      icon: <FaTrophy aria-label="Trophy icon" />,
      category: "Awards & Honors",
      featured: true,
      color: "gold"
      //certificateUrl: 'public/AWS Cloud Technical Certification.pdf'
    },
    {
      id: 2,
      title: "1st Place - Line Follower Event",
      organization: "TechZone State-Level Technical Symposium, JNNCE",
      year: "2024",
      description: "Secured 1st place in the Line Follower event at TechZone State-Level Technical Symposium, JNNCE. Demonstrated expertise in robotics, sensor integration, and embedded programming.",
      icon: <FaAward />,
      category: "competition",
      featured: true,
      color: "gold"
      // certificateUrl: 'public/line-follower-techzone-1st.pdf'
    },


   {
  id: 3,
  title: 'Certificate of Merit — SGPA 9.48 (Category III)',
  organization: 'JNN College of Engineering (IQAC), Shivamogga',
  year: '2023',
  description:
    'Awarded for excellent academic performance by securing 9.48 SGPA in VTU examinations during AY 2022–2023; Category-III (SGPA 9.0–9.5) with cash prize.',
  icon: <FaGraduationCap />,
  category: 'academic',
  featured: false,
  color: 'blue',
  certificateUrl: 'public/merit.jpg'
},
    
    {
      id: 4,
      title: "2nd Place - Line Follower Event",
      organization: "Techspark 1.0, JNNCE",
      year: "2024",
      description: "Achieved 2nd place in Line Follower Event at Techspark 1.0, JNNCE. Showcased advanced robotics skills and autonomous navigation capabilities.",
      icon: <FaMedal />,
      category: "competition",
      featured: false,
      color: "silver",
      certificateUrl: 'public/TechSpark1.0.pdf'
    },
    {
      id: 5,
      title: "3rd Place - Line Follower Event",
      organization: "Techzone 2K23, JNNCE",
      year: "2023",
      description: "Secured 3rd place in Line Follower Event at Techzone 2K23, JNNCE. Demonstrated consistent performance in robotics competitions.",
      icon: <FaMedal />,
      category: "competition",
      featured: false,
      color: "bronze",
      certificateUrl: 'public/Techzon.pdf'
    },
    {
      id: 6,
      title: "2nd Place - Hobby Project Event",
      organization: "Mysterio 5.0, JNNCE",
      year: "2025",
      description: "Achieved 2nd place in Hobby Project event at Mysterio 5.0, JNNCE. Showcased innovative project development and presentation skills.",
      icon: <FaStar />,
      category: "competition",
      featured: false,
      color: "silver",
      certificateUrl: 'public/hoby project.jpeg'
    },
   {
  id: 7,
  title: '3rd Place – Hiring Challenge',
  organization: 'Mysterio 5.0, JNNCE',
  year: '2025',
  description:
    'Secured 3rd place in the “Hiring Challenge” at MYSTERIO 5.0 — a state-level technical symposium hosted by the Dept. of ECE, JNNCE — held on 26 April 2025. Awarded a Certificate of Appreciation.',
  icon: <FaStar />,
  category: 'competition',
  featured: false,
  color: 'blue',
  certificateUrl: 'public/hiring challege.jpeg'
},
   {
  id: 8,
  title: '1st place in Ball Badminton Inter-Collegiate Division Level Tournament',
  organization: 'VTU Dept. of Physical Education & Sports',
  year: '2024',
  description:
    'Represented JNNCE at the VTU Inter Collegiate Division Level Tournament (Rest of Bangalore Zone) and earned a Merit Certificate in Ball Badminton; hosted at JNNCE, Shivamogga (25–26 Oct 2024).',
  icon: <FaMedal />,
  category: 'competition',
  featured: false,
  color: 'green',
  certificateUrl: 'public/Sports certificate.pdf'
}
  ]

  const categories = [
   // { key: 'all', label: 'All Awards', count: awards.length },
   // { key: 'scholarship', label: 'Scholarships', count: awards.filter(a => a.category === 'scholarship').length },
  //  { key: 'academic', label: 'Academic', count: awards.filter(a => a.category === 'academic').length },
   // { key: 'competition', label: 'Competitions', count: awards.filter(a => a.category === 'competition').length },
   // { key: 'leadership', label: 'Leadership', count: awards.filter(a => a.category === 'leadership').length },
   // { key: 'research', label: 'Research', count: awards.filter(a => a.category === 'research').length },
   // { key: 'service', label: 'Service', count: awards.filter(a => a.category === 'service').length }
  ]

  const featuredAwards = awards.filter(award => award.featured)
  const otherAwards = awards.filter(award => !award.featured)
  
  // Show only first 4 other awards initially, or all if showAll is true
  const displayedOtherAwards = showAll 
    ? otherAwards 
    : otherAwards.slice(0, 3)

  return (
    <section id="awards" className="awards section">
      <div className="container">
        <motion.div 
          className="section-title fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Awards & Honors</h2>
          <p>Recognition for academic excellence and outstanding achievements</p>
        </motion.div>

        <div className="awards-content" ref={awardsRef}>
          {/* Featured Awards */}
          <motion.div 
            className="featured-awards fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Featured Honors</h3>
            <div className="featured-grid">
              {featuredAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  className={`award-card featured ${award.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="award-header">
                    <div className="award-icon">{award.icon}</div>
                    <div className="award-badge">Featured</div>
                  </div>
                  <div className="award-content">
                    <h4>{award.title}</h4>
                    <p className="award-organization">{award.organization}</p>
                    <p className="award-year">{award.year}</p>
                    <p className="award-description">{award.description}</p>
                  </div>
                  <div className="award-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Awards */}
          <motion.div 
            className="other-awards fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Additional Recognition</h3>
            <div className="awards-grid">
              {displayedOtherAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  className={`award-card ${award.color}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="award-icon">{award.icon}</div>
                  <div className="award-content">
                    <h4>{award.title}</h4>
                    <p className="award-organization">{award.organization}</p>
                    <p className="award-year">{award.year}</p>
                    <p className="award-description">{award.description}</p>
                    
                    <div className="award-actions">
                      {/* CHANGED: open certificate in a new tab */}
                      <motion.a
                        className="view-certificate-btn"
                        href={award.certificateUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          if (!award.certificateUrl) {
                            e.preventDefault();
                            console.warn(`No certificateUrl set for: ${award.title}`);
                          }
                        }}
                      >
                        <FaEye />
                        <span>View Certificate</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Show More/Less Button */}
            {otherAwards.length > 4 && (
              <motion.div 
                className="show-more-container fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="show-more-btn"
                  onClick={() => setShowAll(!showAll)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? 'Show Less' : `Show More (${otherAwards.length - 4} more)`}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="awards-stats fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {categories.slice(1).map((category, index) => (
                <motion.div
                  key={category.key}
                  className="stat-item glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-number">{category.count}</div>
                  <div className="stat-label">{category.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Awards
