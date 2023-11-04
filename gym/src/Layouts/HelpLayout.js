import {Outlet, NavLink} from 'react-router-dom'
import './Help.css'

export const HelpLayout = () => {
  return (
    <div>
      <div className="help">
        <h2>Help</h2>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='faq'>FAQ</NavLink>
      </div>
      
      <Outlet />
    </div>
  )
}
