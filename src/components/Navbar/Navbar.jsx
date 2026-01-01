import { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Add shadow when scrolling down
      setScrolled(currentScrollY > 50)

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    // Close mobile menu when a link is clicked
    const handleLinkClick = () => setMenuOpen(false)
    const links = document.querySelectorAll(`.${styles.navLinks} a`)
    
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.container}>
      

        <button 
          className={styles.menuBtn} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                data-text={link.name}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={toggleTheme} 
          className={styles.themeToggle}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

