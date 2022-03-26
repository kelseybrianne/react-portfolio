const Header = ({ setCurrentPage }) => {
   return (
   <nav>
       <div>
           
       </div>
       <div className="navigation">
           <li onClick={() => setCurrentPage('About Me')}>About Me</li>
           <li onClick={() => setCurrentPage('Portfolio')}>Portfolio</li>
           <li onClick={() => setCurrentPage('Contact')}>Contact</li>
           <li onClick={() => setCurrentPage('Resume')}>Resume</li>
       </div>
   </nav>
  )
}

export default Header
