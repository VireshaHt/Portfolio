import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaUniversity } from 'react-icons/fa'
import './Certifications.css'

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const certifications = [
    {
      id: 1,
      title: 'Programming in Java (Elite)',
      provider: 'NPTEL SWAYAM',
      instructor: 'NPTEL Faculty',
      date: '31-Mar-2024',
      description:
        'Successfully completed with 67 marks (Elite). Covered OOP, collections, exceptions, I/O, threads, JDBC.',
      skills: ['Java', 'OOP', 'Data Structures', 'JDBC'],
      category: 'programming',
      verified: true,
      credentialId: 'NPTEL24CS43S95410015',
      url: 'public/Programming In Java Certificate.pdf'
    },
    {
      id: 2,
      title: 'Technical Support Fundamentals',
      provider: 'Google (Coursera)',
      instructor: 'Google Instructors',
      date: '03-Sep-2023',
      description:
        'Google IT Support Fundamentals – Hardware, OS, networking, troubleshooting, and customer support.',
      skills: ['IT Support', 'Networking', 'Systems', 'Troubleshooting'],
      category: 'it-support',
      verified: true,
      credentialId: 'XFCN2K2DUJCW',
      url: 'public/Technical Fundamental Suppotr.pdf'
    },
    {
      id: 3,
      title: 'The Joy of Computing using Python',
      provider: 'NPTEL (SWAYAM)',
      instructor: 'NPTEL Faculty',
      date: '20-May-2025',
      description:
        'Foundational Python programming: problem-solving, algorithms, loops/functions, data structures, and debugging.',
      skills: ['Python Programming', 'Problem Solving', 'Algorithms', 'Loops & Functions', 'Data Structures', 'Debugging'],
      category: 'programming',
      verified: true,
      credentialId: '',
      url: 'public/Joy comp py.pdf'
    },
    {
      id: 4,
      title: 'AWS Cloud Technical Essentials',
      provider: 'Amazon Web Services (Coursera)',
      instructor: 'AWS Training',
      date: '28-Jan-2025',
      description:
        'Core AWS concepts, compute, storage, networking, security, billing, and basic architecture patterns.',
      skills: ['AWS', 'Cloud', 'VPC', 'EC2', 'S3'],
      category: 'cloud',
      verified: true,
      credentialId: 'SMROK4JJPMOA',
      url: 'public/AWS Cloud Technical Certification.pdf'
    },
    {
      id: 5,
      title: 'Python for Data Science, AI & Development',
      provider: 'IBM (Coursera)',
      instructor: 'IBM Instructors',
      date: '31-Jul-2023',
      description:
        'Python programming for data analysis and AI: NumPy, Pandas, visualization, APIs, and Flask basics.',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      category: 'data',
      verified: true,
      credentialId: 'Z73ZHWAG7PDQ',
      url: 'https://coursera.org/share/23bc9497f003a266e2f2ae2605071956'
    },
    {
      id: 6,
      title: 'SPARK Internship Program',
      provider: 'Subbaiah Research Institute, JNNCE & C-CAMP',
      instructor: 'Mentor Team',
      date: '06-Mar-2025',
      description:
        'AI-focused internship on healthcare devices and applications with exposure to real-world workflows.',
      skills: ['Healthcare AI', 'Research', 'Prototyping'],
      category: 'internship',
      verified: true,
      credentialId: 'N/A',
      url: 'public/SPARK Internship.pdf'
    },
    {
      id: 7,
      title: 'Data Analytics with Python – Elite Gold',
      provider: 'Visvesvaraya Technological University (VTU)',
      instructor: 'VTU Faculty',
      date: '02-Jun-2025',
      description:
        'Skill enhancement program covering EDA, statistics, visualization, and model building in Python.',
      skills: ['Data Analytics', 'Statistics', 'Visualization', 'Python'],
      category: 'data',
      verified: true,
      credentialId: 'N/A',
      url: 'public/DAWpy.pdf'
    },
    {
      id: 8,
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      provider: 'IBM (Coursera)',
      instructor: 'Upkar Lidder, Rav Ahuja, Michelle Saltoun',
      date: '08-Aug-2023',
      description:
        'Intro to web dev: HTML/CSS/JS fundamentals, DOM manipulation, responsive layouts, forms, debugging, and simple site deployment.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'DOM', 'Git & GitHub'],
      category: 'data',
      verified: true,
      credentialId: 'D3ZAQUFA3FMV',
      url: 'public/I Web Development certificate.pdf'
    },
    {
      id: 9,
      title: 'Foundations of Cybersecurity',
      provider: 'Google (Coursera)',
      instructor: 'Amanda Brophy',
      date: '03-Nov-2023',
      description:
        'Core cybersecurity principles: CIA triad, common threats, security controls, risk management, tools, and career pathways.',
      skills: ['Cybersecurity Fundamentals', 'CIA Triad', 'Risk Management', 'Security Controls', 'Threats & Vulnerabilities'],
      category: 'cybersecurity',
      verified: true,
      credentialId: '2WRD7PZM498N',
      url: 'public/Foudation of Cybersecurity certificate.pdf'
    },
    {
      id: 10,
      title: 'Play It Safe: Manage Security Risks',
      provider: 'Google (Coursera)',
      instructor: 'Amanda Brophy',
      date: '17-Nov-2023',
      description:
        'Practical risk management: identify assets, assess risks, define policies, implement controls, and plan incident response.',
      skills: ['Risk Assessment', 'Security Policies', 'Incident Response', 'Compliance', 'Asset Management'],
      category: 'cybersecurity',
      verified: true,
      credentialId: '6ZCN5FQBZY86',
      url: 'public/play it safe cyber security certificate.pdf'
    },
    {
      id: 11,
      title: 'IT Security: Defense against the Digital Dark Arts',
      provider: 'Google (Coursera)',
      instructor: 'Google Instructors',
      date: '11-Mar-2024',
      description:
        'Foundational security concepts: threats, attacks, and defenses; authentication/authorization; encryption basics; network and system hardening; defense-in-depth.',
      skills: ['Cybersecurity Fundamentals', 'Authentication & Authorization', 'Encryption', 'Network Security', 'System Hardening', 'Risk Management'],
      category: 'cybersecurity',
      verified: true,
      credentialId: '2GT4RACP62Z9',
      url: 'public/IT Security.pdf'
    },
    {
      id: 12,
      title: 'System Administration and IT Infrastructure Services',
      provider: 'Google (Coursera)',
      instructor: 'Google Instructors',
      date: '21-Apr-2024',
      description:
        'Core sysadmin practices: servers and services (DNS, DHCP), user and device management, virtualization, cloud basics, monitoring, backups, and troubleshooting workflows.',
      skills: ['System Administration', 'DNS/DHCP', 'Linux/Windows Admin', 'Virtualization', 'Cloud Basics', 'Monitoring & Backups', 'Troubleshooting'],
      category: 'it-support',
      verified: true,
      credentialId: 'H53L7B868KKT',
      url: 'public/System admistration.pdf'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Certifications', count: certifications.length },
    { key: 'programming', label: 'Programming', count: certifications.filter(c => c.category === 'programming').length },
    { key: 'cloud', label: 'Cloud', count: certifications.filter(c => c.category === 'cloud').length },
    { key: 'data', label: 'Data / AI', count: certifications.filter(c => c.category === 'data').length },
    { key: 'it-support', label: 'IT Support', count: certifications.filter(c => c.category === 'it-support').length },
    { key: 'internship', label: 'Internships', count: certifications.filter(c => c.category === 'internship').length },
   { key: 'cybersecurity', label: 'cybersecurity', count: certifications.filter(c => c.category === 'cybersecurity').length }
  ]

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter)

  // Show only first 3 certificates initially, or all if showAll is true
  const displayedCertifications = showAll 
    ? filteredCertifications 
    : filteredCertifications.slice(0, 3)

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div 
          className="section-title fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certifications & Learning</h2>
          <p>Continuous learning through industry-recognized certifications and courses</p>
        </motion.div>

        <motion.div 
          className="certification-filters fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
              <span className="filter-count">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="certifications-grid"
          layout
        >
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                {cert.verified && (
                  <div className="verified-badge">
                    <span>Verified</span>
                  </div>
                )}
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="cert-provider">
                  <FaUniversity className="provider-icon" />
                  <span>{cert.provider}</span>
                </div>
                <p className="cert-instructor">Instructor: {cert.instructor}</p>
                <div className="cert-date">
                  <FaCalendarAlt className="date-icon" />
                  <span>{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-actions">
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                    aria-label="View certification"
                  >
                    <FaExternalLinkAlt />
                    <span>View Certificate</span>
                  </a>
                  <div className="credential-id">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredCertifications.length > 3 && (
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
              {showAll ? 'Show Less' : `Show More (${filteredCertifications.length - 3} more)`}
            </motion.button>
          </motion.div>
        )}

        <motion.div 
          className="certification-stats fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stats-summary">
            <div className="stat-item glass-card">
              <div className="stat-number">{certifications.length}</div>
              <div className="stat-label">Total Certifications</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">{certifications.filter(c => c.verified).length}</div>
              <div className="stat-label">Verified Certificates</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">{filters.length - 1}</div>
              <div className="stat-label">Skill Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications


