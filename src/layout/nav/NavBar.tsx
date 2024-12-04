import { IconButton,Drawer } from '@mui/material';
import LocationIcon from '../../assets/basic-icons/localization-icon.svg';
import { ShoopingBadge } from '../../components';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="w-full border-2 border-red-400">
        <nav className="w-full px-4 py-2 justify-between items-center flex border-2 border-blue-400">
          <div>
            <h1>Foodie Go</h1>
          </div>

          <div>
            <img className='text-green' src={LocationIcon} alt="location-icon" />
          </div>

          <div>
            <ShoopingBadge/>
          </div>

          
          <IconButton>
              <MenuIcon></MenuIcon>
          </IconButton>
          

          <Drawer
            anchor='left'
          >
            <div>
              <span>Hola</span>
            </div>
          </Drawer>
        
        </nav>
    </header>
  )
}
