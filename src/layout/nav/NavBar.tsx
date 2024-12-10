import { IconButton,Drawer } from '@mui/material';
import LocationIcon from '../../assets/basic-icons/localization-icon.svg';
import { ShoopingBadge } from '../../components';
import MenuIcon from '@mui/icons-material/Menu';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Place } from '../../types'

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [Locationdata, setLocationdata] = useState<[] | Place[]>([])

  const getUserLocation = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async(position)=>{
        const { latitude,longitude } = position.coords;
        
        try {
          const request = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const response = await request.data;
          console.log("response:",response);
          setLocationdata([response]);
          
        } catch (error) {
          console.log("error:",error);
        }
        
      });
    }
    else{
      console.log('no es compatible');
    }
  }
  console.log("Locationdata: ",Locationdata);
  
  useEffect(() => {
    getUserLocation()
  }, [])
  
  return (
    <header className="w-full border-2 border-red-400 bg-bluegray">
        <nav className="w-full px-4 py-2 justify-between items-center flex border-2 border-blue-400">
          <div>
            <h1>Foodie Go</h1>
          </div>

          <div className='flex'>
            <img className='text-green' src={LocationIcon} alt="location-icon" />
            {Locationdata ? Locationdata.map(item => (<span key={item.place_id}>{item.display_name.substring(0,8)+"..."}</span>)) : ''}
          </div>

          <div>
            <ShoopingBadge/>
          </div>

          
          <IconButton onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
              <MenuIcon></MenuIcon>
          </IconButton>
          

          <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={()=> setIsDrawerOpen(false)}
          >
            <div>
              <span>Hola</span>
            </div>
          </Drawer>
        
        </nav>
    </header>
  )
}
