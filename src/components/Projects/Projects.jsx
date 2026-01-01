import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';


import lab1Img from '../../assets/lab1.png';
import lab2Img from '../../assets/lab2.png';
import nodeImg from '../../assets/node.png';
import jestImg from '../../assets/jest.png';
import reactImg from '../../assets/react.png';
import kanbanImg from '../../assets/kanban.png';
import scanaiImg from '../../assets/scanai.jpg';
import carImg from '../../assets/car.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Lab1 - Palestine Info Card',
      description: 'HTML exercise: creation of an info card about the State of Palestine with images, lists, and paragraphs.',
      image: lab1Img,
      tags: ['HTML', 'CSS'],
      github: 'https://github.com/anfalyaici-cloud/caw-labs/tree/main/Lab1/Lab1_Exo1.html',
      demo: 'https://raw.githack.com/anfalyaici-cloud/caw-labs/main/Lab1/Lab1_Exo1.html',
      category: 'frontend',
    },
    {
      id: 2,
      title: 'Lab1 - Gaza Genocide',
      description: 'HTML exercise: page about the Gaza genocide with images, video, lists, and internal links.',
      image: lab2Img,
      tags: ['HTML', 'CSS', 'Video'],
      github: 'https://github.com/anfalyaici-cloud/caw-labs/tree/main/Lab1/Lab1_Exo2.html',
      demo: 'https://raw.githack.com/anfalyaici-cloud/caw-labs/main/Lab1/Lab1_Exo2.html',
      category: 'frontend',
    },
    {
      id: 3,
      title: 'Lab3 - Node.js Exercises',
      description: 'Node.js exercises: server-side JavaScript runtime, Node modules, NPM, file handling, and scripts.',
      image: nodeImg,
      tags: ['Node.js', 'JavaScript', 'NPM'],
      github: 'https://github.com/anfalyaici-cloud/caw-labs/tree/main/Node',

      category: 'backend',
    },
    {
      id: 4,
      title: 'Lab4 - Jest Testing',
      description: 'Unit testing with Jest: array, string, and chunking functions, Node modules, and scripts tested.',
      image: jestImg,
      tags: ['Jest', 'Testing', 'JavaScript'],
      github: 'https://github.com/anfalyaici-cloud/caw-labs/tree/main/Lab4_Jest',
      category: 'backend',
    },
    {
      id: 5,
      title: 'TP React Exercises',
      description: 'Collection of React exercises: buttons, counters, tables, forms, and dynamic divs. Functional components with useState.',
      image: reactImg,
      tags: ['React', 'JavaScript', 'useState', 'Components'],
      github: 'https://github.com/anfalyaici-cloud/react-tp-exercises',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Lab7 - Kanban Board',
      description: 'Kanban Board project (Trello-like) with To Do, In Progress, Done columns, reusable components, and task state management.',
      image: kanbanImg,
      tags: ['React', 'JavaScript', 'Kanban', 'State'],
      github: 'https://github.com/anfalyaici-cloud/caw-labs/tree/main/kanban',
      demo: 'https://kanbann-board.netlify.app/',
      category: 'frontend',
    },
    {
      id: 7,
      title: 'Final Project - Lab AI Scan Analysis',
      description: 'Full web application for a medical lab, Laravel backend for AI scan analysis, and Bootstrap frontend for user interface.',
      image: scanaiImg,
      tags: ['Laravel', 'Bootstrap', 'AI', 'PHP', 'Medical'],
      github: 'https://github.com/anfalyaici-cloud/projet-final/tree/master/Desktop/projet%20finale',

      category: 'fullstack',
    },
    {
  id: 8,
  title: 'Car Website',
  description: 'Frontend project: A website for selling cars, built entirely with HTML and CSS.',
  image: carImg, 
  tags: ['HTML', 'CSS', 'Frontend'],
  github: 'https://github.com/anfalyaici-cloud/car-website',

  category: 'frontend',
}
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>My Projects</h2>

        <div className={styles.filter}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${filter === category.id ? styles.active : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>

              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
