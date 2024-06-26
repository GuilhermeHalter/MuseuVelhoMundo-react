import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./AllCardComp.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const ArtesComp = () => {
  const [artes, setArtes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const getArtes = async () => {
    try {
      const response = await axios.get(
        `${ApiURL}object?apikey=${ApiKEY}&page=${currentPage}&size=${itemsPerPage}&classification=Prints`
      );

      if (response.data && response.data.records) {
        const data = response.data.records;
        setArtes(data);
      } else {
        console.error("Invalid API response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getArtes();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Arts</h1>
      {artes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className="cotainerCard">
          {artes.map((arte) => (
            
            <div className="Artes" key={arte.id} >
              <Link to={`/item/${arte.id}`}>
              <img src={arte.primaryimageurl || "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/not_found.png?alt=media&token=e6ade276-a274-4c9f-856d-19ddb8856195"} alt="" />
              <h2 className="textTitle">{arte.title}</h2>
              </Link>
            </div>
          ))}
          </div>
         
          <div className="buttonPage">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="ButtonNP">
              <FaArrowLeft /> Página Anterior 
            </button>
            <button onClick={handleNextPage} className="ButtonNP">
              Próxima Página <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtesComp;
