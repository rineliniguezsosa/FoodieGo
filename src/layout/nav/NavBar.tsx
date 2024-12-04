import LocationIcon from '../../assets/basic-icons/localization-icon.svg';

export const NavBar = () => {
  return (
    <header className="w-full border-2 border-red-400">
        <nav className="w-full border-2 border-blue-400">
          <div>
            <h1>Foodie Go</h1>
          </div>

          <div>
            <img className='text-green' src={LocationIcon} alt="location-icon" />
          </div>
        
        </nav>
    </header>
  )
}
