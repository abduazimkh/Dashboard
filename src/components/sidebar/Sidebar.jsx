import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { useState } from 'react';

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    

  return (
    <div className='Sidebar'>
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        <div className="menu">
            {
                SidebarData.map((item, index) => {
                    return (
                        <div className={selected===index?"menuItem active" : "menuItem"}
                            key={index} 
                            onClick={() => setSelected(index)}
                        >
                            <item.icon/>
                            <span>
                                {
                                    item.heading
                                }
                            </span>
                        </div>
                    )
                })
            }

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>

    </div>
  )
}

export default Sidebar