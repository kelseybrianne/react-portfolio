const Nav = ({ setCurrentPage, currentPage }) => {
   return (
   <nav>
       <div>
           <h2>Kelsey Betteridge</h2>
       </div>
       <div className="navigation">
           <li key={1} onClick={() => setCurrentPage('About Me')} className={currentPage === 'About Me' ? 'current-page' : ''}>About Me</li>
           <li key={2} className={currentPage === 'Portfolio' ? 'current-page' : ''} onClick={() => setCurrentPage('Portfolio')}>Portfolio</li>
           <li key={3} className={currentPage === 'Contact' ? 'current-page' : ''} onClick={() => setCurrentPage('Contact')}>Contact</li>
           <li key={4} className={currentPage === 'Resume' ? 'current-page' : ''} onClick={() => setCurrentPage('Resume')}>Resume</li>
       </div>
   </nav>
  )
}

export default Nav
