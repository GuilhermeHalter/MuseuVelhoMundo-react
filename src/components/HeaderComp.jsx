import "./HeaderComp.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";


const HeaderComp = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("");

  };

  return (
    <nav className="navbar">
    
      <Link to={"/"} className="Aheader" >
        <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Museu-removebg-preview.png?alt=media&token=dec4e340-312a-4f7f-b7db-148a4d675b1b" alt="" className="logoApp"/>
      </Link>
    <ul>
      <li >
        <Link to={"/"} className="Aheader">Home</Link>
      </li>
      <li>
      <Link to={"/artes"} className="Aheader">Arts</Link>
      </li>
      <li>
      <Link to={"/coins"} className="Aheader">Coins</Link>
      </li>
      <li>
      <Link to={"/esculturas"} className="Aheader">Sculptures</Link>
      </li>

      <form onSubmit={handleSubmit} className="formItem">
        <input type="text" 
        placeholder="Busque aqui" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
        />
        <button type="submit">
        <IoSearchOutline />
        </button>

      </form>

      
    </ul>
  </nav>
  )
}

export default HeaderComp