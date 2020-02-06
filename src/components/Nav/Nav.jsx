import React from 'react'; /* каждый реакт файл начинается с подключения реакт модуля, а в конце мы этот компонент экспортируем в главный файл.*/
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

/*classes это объект который содержит наши стили а именно Nav.module.css почему classes- это произвольное название, добавление стиля происходит так как написано в стиле. Из-за бутстрапа стили не применю. Лучше дели на модули стили так легче*/

const Nav = () => {
  return(
    <div className='col-sm-2 bg-info'>
    <ul className="nav text-light py-2 px-2">
<li className="nav-item text-light ">
<NavLink className='nav-link text-light {classes.item}' activeClassName={s.active}  to="/profile">Profile</NavLink>

</li>
<li className="nav-item text-light">
<NavLink className="nav-link text-light item"  activeClassName={s.active} to="/dialogs">Messages</NavLink>
</li>
<li className="nav-item text-light ">
<NavLink className="nav-link text-light item"  activeClassName={s.active} to="/feed">Feed</NavLink>
</li>
<li className="nav-item text-light">
<NavLink className="nav-link text-light item"  activeClassName={s.active} to="/music" >Music</NavLink>
</li>
</ul>
    </div>
  );
}

export default Nav;
