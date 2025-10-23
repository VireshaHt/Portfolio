import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseDetail = () => {
    setSelectedProject(null)
  }

  const projects = [
    {
      id: 1,
      title: 'CERVI-AI',
      description: 'AI-powered cervical cytology screening system using YOLOv8 for automated cell detection and analysis.',
      detailedDescription: 'CERVI-AI is an end-to-end web + AI system for automated cervical cytology screening. Lab technicians upload microscope images; the backend applies CLAHE + Perona–Malik preprocessing and runs YOLOv8/PyTorch to detect suspicious cells. Doctors review original vs. annotated predictions side-by-side and submit a report. The system is offline-capable on Jetson Nano, NewGen IEDC–funded, and recipient of a Special Jury Award. Results: mAP50≈0.67, F1≈0.64 on internal test set.',
      image: 'public/doc.jpg',
      technologies: [
        'React',
        'Flask',
        'Python',
        'PyTorch',
        'YOLOv8',
        'OpenCV',
        'SQLAlchemy',
        'PostgreSQL',
        'Docker',
        'Jetson Nano'
      ],
      category: 'ai',
      github: 'https://github.com/VireshaHt/cervix2',     // or 'https://github.com/<your-username>/cervi-ai' if public
      live: 'https://drive.google.com/file/d/1QR5tmOgAjm2eNzj9p6M4o2Vghg3yR2V_/view?usp=sharing',       // add production/demo URL when available
      featured: true,
      duration: '5 months',
      team: '4 members',
      challenges: 'Implementing real-time image processing, optimizing YOLOv8 for medical images, ensuring offline capability on Jetson Nano',
      results: 'Achieved 85% mAP50 and 80% F1 score on internal test set, received Special Jury Award'
    },
    
    {
      id: 2,
      title: 'Tomato Leaf Health Monitoring System',
      description:
        'CNN-based system that detects and classifies tomato leaf diseases from images and serves instant results via a simple web interface—built to aid timely, data-driven decisions for farmers.',
      detailedDescription:
        'The pipeline covers dataset curation, preprocessing (resizing/normalization + augmentation), and a TensorFlow/Keras CNN (Conv2D→MaxPool→Dense→Softmax) trained with an 80/20 split. The model achieves ~91% classification accuracy and is integrated into a web-based tool where users upload a leaf photo to receive predicted class, confidence, and suggested remedies. Results include accuracy/loss curves and a confusion matrix highlighting strong performance on most classes with a few visually similar classes showing confusion.',
        image: 'public/tomoto.jpg',
      technologies: [
        'Python',
        'TensorFlow (Keras)',
        'OpenCV',
        'NumPy',
        'Keras ImageDataGenerator',
        'Matplotlib'
      ],
      category: 'ai',
      github: 'https://github.com/VireshaHt/TomatoLeafHealthMonitoringSystem',
      live: null,
      featured: true,
      duration: 'Semester mini-project (2024–25)',
      team: 'Team of 4',
      challenges:
        'Dataset quality & diversity; real-world image variability (lighting, background); generalization to field conditions; class imbalance.',
      results:
        'Achieved ~91% accuracy; web app returns prediction + confidence and suggested remedies; confusion matrix shows high correct classification with some confusions between visually similar diseases.'
    },
    {
      id: 3,
      title: 'Shakti — Legal Awareness & Financial Inclusion',
      description:
        'Web platform to empower citizens—especially women—with authentic legal information and access to financial assistance programs.',
      detailedDescription:
        'Built in 24 hours at the SHE Secure Hackathon 2025 (JNNCE × Hack2Skill), Shakti—guided by the vision of “Nyaya Setu: The Legal Bridge”—centralizes trustworthy resources across constitutional rights, criminal procedures, family and property law, and women-centric legal aid. It also curates financial-literacy content, government schemes, loans, and entrepreneurship programs. The MVP ships a clean search-and-browse UI, topic hubs, source attribution, and quick links to verified portals, focusing on accessibility, authenticity, and empowerment.',
      image: 'public/shakthi.jpeg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com/VireshaHt/SheSecure',
      live: 'https://www.linkedin.com/posts/viresha-h-t_shaktiwebapp-shehackathon2025-nyayasetu-activity-7332298051660791808-EGMX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETTbgEBX2r1oPiDg4xWVSBwi6d-FOj2sm0',
      featured: true,
      duration: 'Hackathon build (24 hours, 2025)',
      team: 'Team TechTitans — Viresha H T, Tarun Dasarahatti Raghavendra, Vaibhav Rao B n, Yuvaraj M R',
      challenges:
        'Sourcing authoritative content under time constraints; ensuring information credibility and proper attribution; designing an accessible UX for non-technical users; planning multilingual support.',
      results:
        'Delivered a functional MVP demo within 24 hours; integrated legal and financial resource hubs with source links; showcased during SHE Secure Hackathon 2025 with positive demo feedback.'
    },
    {
      id: 4,
      title: 'Anti-Sleep Alarm for Drivers',
      description:
        'Low-cost, portable driver-drowsiness alert prototype using IR eye-blink sensing, Arduino control, buzzer alert, and relay-based safety cutoff.',
      detailedDescription:
        'The system mounts IR sensors near the eyes to detect reflected/absorbed IR and distinguish normal blinking from prolonged eyelid closure. An Arduino Uno reads the sensor signal and triggers a piezo buzzer if the eyes stay closed beyond a threshold (~5 s). If drowsiness persists after the alert (~2 s), a relay opens the controlled circuit to stop the demo “motor”/vehicle line, illustrating an emergency cutoff. The build emphasizes simplicity, affordability, and ease of use for accident prevention, with future improvements suggested around smaller/less-heating IR modules.',
      image: 'public/anti.jpg',
      technologies: [
        'Arduino Uno',
        'IR Sensor',
        'Piezo Buzzer',
        'Relay (SPST control)',
        '9V Battery',
        'C/C++ (Arduino)',
        'Breadboard & Wiring'
      ],
      category: 'iot',
      github: null,
      live: null,
      featured: false,
      duration: 'Semester Mini Project (Sem-4)',
      team: '',
      challenges:
        'Reliable eye-state detection across head pose and lighting; minimizing false alarms; safe relay integration with vehicle circuits; IR sensor heating and power budget.',
      results:
        'Working prototype demonstrated: detects prolonged eye closure, sounds buzzer, and opens relay to cut the demo circuit; compact and user-friendly. Suggested improvement: smaller IR sensor with lower heating.'
    },
    {
      id: 5,
      title: 'Line Follower Robot with Obstacle Avoidance',
      description:
        'Autonomous robot that follows a pre-defined line using IR sensors and halts/avoids obstacles with an ultrasonic module, driven by Arduino + L293D.',
      detailedDescription:
        'Built around Arduino Uno and L293D motor driver, the robot uses a pair/array of IR sensors to read line contrast and continuously correct steering, while an HC-SR04 ultrasonic sensor monitors the path ahead to stop or reroute on obstruction. The design emphasizes reliable line tracking on high-contrast paths, configurable thresholding, and robust turns, with a low-cost BO-motor chassis and Li-ion power. Suitable for warehouse/material handling demos and education; future work suggests vision/LiDAR upgrades and better environmental invariance.',
      image: 'public/lfr.jpg',
      technologies: [
        'Arduino Uno',
        'IR Line Sensors',
        'HC-SR04 Ultrasonic',
        'L293D Motor Driver',
        'BO DC Motors',
        'Servo (optional panning)',
        'Li-ion Battery',
        'C/C++ (Arduino IDE)'
      ],
      category: 'iot',
      github: null,
      live: null,
      featured: false,
      duration: 'Nov 2022 – Apr 2023 (Hobby Project)',
      team: 'Team of 2 — Viresha H T, sambhram K M',
      challenges:
        'Stable line detection under varying lighting; sensor placement & threshold calibration; motor control for sharp curves; ultrasonic false positives; power and heat constraints.',
      results:
        'Working prototype demonstrated: reliable line tracking, obstacle detection & stop behavior, and successful path following over turns; suggests future upgrades with advanced sensors and autonomous navigation algorithms.'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI-Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'iot', label: 'IoT' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div 
          className="section-title fade-in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Showcasing my technical expertise and innovative solutions</p>
        </motion.div>

        <motion.div 
          className="project-filters fade-in"
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
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <FaEye className="view-icon" />
                  <span>View Details</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-short-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more-tech">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div 
          className="project-detail-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="modal-backdrop" onClick={handleCloseDetail}></div>
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={handleCloseDetail}>
              ×
            </button>
            
            <div className="project-detail-header">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="detail-image"
              />
              <div className="detail-info">
                <h2>{selectedProject.title}</h2>
                <p className="detail-description">{selectedProject.detailedDescription}</p>
                
                <div className="detail-meta">
                  <div className="meta-item">
                    <strong>Duration:</strong> {selectedProject.duration}
                  </div>
                  <div className="meta-item">
                    <strong>Team:</strong> {selectedProject.team}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-body">
              <div className="detail-section">
                <h3>Technologies Used</h3>
                <div className="technologies-grid">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag-large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h3>Key Challenges</h3>
                <p>{selectedProject.challenges}</p>
              </div>

              <div className="detail-section">
                <h3>Results & Achievements</h3>
                <p>{selectedProject.results}</p>
              </div>

              <div className="detail-links">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    <FaGithub />
                    <span>View Source Code</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects

