import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaServer,
  FaLaptopCode,
  FaBrain,
  FaHeartbeat,
  FaUserGraduate,
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaHandshake,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiLaravel, SiDocker, SiGraphql, SiNextdotjs } from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: <FaReact /> },
        { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
        { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
        { name: 'Next.js', level: 75, icon: <SiNextdotjs /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: <FaNodeJs /> },
        { name: 'Express', level: 85, icon: <FaServer /> },
        { name: 'Laravel', level: 82, icon: <SiLaravel /> },
        { name: 'GraphQL', level: 70, icon: <SiGraphql /> },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: <FaGitAlt /> },
        { name: 'Docker', level: 75, icon: <SiDocker /> },
        { name: 'Figma', level: 80, icon: <FaFigma /> },
        { name: 'SQL', level: 85, icon: <FaDatabase /> },
      ],
    },
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Car Website, Taxi Sales, multiple companies',
      duration: 'Jan 2023 - Apr 2023',
      description: 'Worked on responsive websites using HTML, CSS, and JS. Built UI components and optimized performance.',
    },
    {
      title: 'Fullstack Developer',
      company: 'Medical AI Lab, multiple projects',
      duration: 'May 2023 - Dec 2023',
      description: 'Developed full-stack web apps with Laravel and Bootstrap. Integrated AI scan analysis and dashboards.',
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>My Skills</h2>

        {/* Skills Categories */}
        <div className={styles.categories}>
          {skills.map(category => (
            <div key={category.category} className={styles.category}>
              <h3>{category.category}</h3>

              <div className={styles.skillsGrid}>
                {category.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <div className={styles.icon}>{skill.icon}</div>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.percentage}>{skill.level}%</span>
                    </div>

                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills Tags */}
        <div className={styles.otherSkills}>
  <h3>Other Skills</h3>
  <div className={styles.tags}>
    <span className={styles.tag}>Responsive Design</span>
    <span className={styles.tag}>Teamwork</span>
    <span className={styles.tag}>Problem Solving</span>
    <span className={styles.tag}>Creativity</span>
    <span className={styles.tag}>UI/UX Basics</span>
    <span className={styles.tag}>Fast Learner</span>
  </div>
</div>

        {/* Work Experience */}
        <div className={styles.experience}>
          <h2>Work Experience</h2>
          <div className={styles.experienceList}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <h3>{exp.title} <span>@ {exp.company}</span></h3>
                <div className={styles.duration}>{exp.duration}</div>
                <div className={styles.description}>{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


       {/* About Me */}
<div className={styles.about}>
  <div className={styles.sectionHeader}>
    <h2>About Me</h2>
    <p>Passionate about creating innovative digital solutions</p>
  </div>
  
  <div className={styles.aboutContent}>
    {/* Left Column - Text Content */}
    <div className={styles.aboutText}>
      <div className={styles.aboutIntro}>
        <h3>Full-Stack Developer & <span className={styles.highlight}>AI Enthusiast</span></h3>
        <p>
          I am a developer passionate about creating modern, secure, 
          and scalable web applications. My expertise covers the entire 
          development cycle, from frontend to backend, with a specialization 
          in medical AI solutions.
        </p>
      </div>
      
      <div className={styles.aboutDetails}>
        <div className={styles.detailItem}>
          <FaCode className={styles.detailIcon} />
          <div>
            <h4>Technical Approach</h4>
            <p>Modular architecture, clean code, and automated testing</p>
          </div>
        </div>
        <div className={styles.detailItem}>
          <FaLightbulb className={styles.detailIcon} />
          <div>
            <h4>Philosophy</h4>
            <p>User-centered solutions with real impact</p>
          </div>
        </div>
        <div className={styles.detailItem}>
          <FaRocket className={styles.detailIcon} />
          <div>
            <h4>Goal</h4>
            <p>Deliver high-quality products on time</p>
          </div>
        </div>
      </div>
      
      <div className={styles.quote}>
        <div className={styles.quoteIcon}>"</div>
        <p className={styles.quoteText}>
          Transforming ideas into digital solutions that improve users' lives
        </p>
      </div>
    </div>

    {/* Right Column - Cards */}
    <div className={styles.aboutCards}>
      <div className={styles.cardMain}>
        <div className={styles.cardHeader}>
          <FaLaptopCode className={styles.cardMainIcon} />
          <div>
            <h4>Web Development</h4>
            <span>Full-Stack Expertise</span>
          </div>
        </div>
        <p>React, Node.js, Laravel, Next.js, TypeScript and more</p>
        <div className={styles.cardSkills}>
          <span>Frontend</span>
          <span>Backend</span>
          <span>DevOps</span>
        </div>
      </div>

      <div className={styles.cardRow}>
        <div className={`${styles.cardSmall} ${styles.cardAI}`}>
          <FaBrain className={styles.cardIcon} />
          <div>
            <h4>AI & Machine Learning</h4>
            <span>Medical Analysis</span>
          </div>
          <div className={styles.cardProgress}>
            <div className={styles.cardProgressBar} style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className={`${styles.cardSmall} ${styles.cardMedical}`}>
          <FaHeartbeat className={styles.cardIcon} />
          <div>
            <h4>Healthcare Tech</h4>
            <span>Medical Platforms</span>
          </div>
          <div className={styles.cardProgress}>
            <div className={styles.cardProgressBar} style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      <div className={styles.cardRow}>
        <div className={`${styles.cardSmall} ${styles.cardLearning}`}>
          <FaUserGraduate className={styles.cardIcon} />
          <div>
            <h4>Continuous Learning</h4>
            <span>Always Improving</span>
          </div>
          <div className={styles.cardProgress}>
            <div className={styles.cardProgressBar} style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className={`${styles.cardSmall} ${styles.cardSecurity}`}>
          <FaShieldAlt className={styles.cardIcon} />
          <div>
            <h4>Security First</h4>
            <span>Safe Applications</span>
          </div>
          <div className={styles.cardProgress}>
            <div className={styles.cardProgressBar} style={{ width: '88%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      

    </section>
  );
};

export default Skills;
