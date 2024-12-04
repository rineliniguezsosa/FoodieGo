import LocationIcon from '../../assets/basic-icons/localization-icon.svg';
import { ShoopingBadge } from '../../components';

export const NavBar = () => {
  return (
    <header className="w-full border-2 border-red-400">
        <nav className="w-full px-4 py-2 justify-between flex border-2 border-blue-400">
          <div>
            <h1>Foodie Go</h1>
          </div>

          <div>
            <img className='text-green' src={LocationIcon} alt="location-icon" />
          </div>

          <div>
            <ShoopingBadge/>
          </div>
        
        </nav>
    </header>
  )
}
