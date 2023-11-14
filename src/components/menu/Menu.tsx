import { Link } from "react-router-dom";
import "./menu.scss";
import {menu} from "../../data";


const Menu = () => {
    return (
        <div className="menu">
          {menu.map((item) => (
            <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => 
            <Link to={listItem.url} className="listItem" key={listItem.id}>
               <img src={listItem.icon} alt="" />
               <span className="listItemTitle">{listItem.title}</span>
            </Link>
             )}
            </div>

          ))}  
           
        </div>
    );
};


/*const Menu = ({ menuItems }) => {
  return (
    <div>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.url}>
              <img src={`/path/to/icons/${menuItem.icon}`} alt={menuItem.title} />
              <span>{menuItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};*/

export default Menu;