const Header = ({ setCurrentPage }) => {
   return (
   <nav>
       <div>
           <h2>Kelsey Betteridge</h2>
       </div>
       <div className="navigation">
           <li key={1} onClick={() => setCurrentPage('About Me')}>About Me</li>
           <li key={2} onClick={() => setCurrentPage('Portfolio')}>Portfolio</li>
           <li key={3} onClick={() => setCurrentPage('Contact')}>Contact</li>
           <li key={4} onClick={() => setCurrentPage('Resume')}>Resume</li>
       </div>
   </nav>
  )
}

export default Header
