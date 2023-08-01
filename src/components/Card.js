
import React from "react";

const Menu = () => {
    const books = [ "Histoire du cinéma","Histoire des premiers acteurs", "Biographie de Norma Jean", "cinéma des années 50", "Biographie de Nathalie Portman", "Film le parrain: anectodes"]
    return(
        <div className="col-sm-2 sidebar">
            <h4>Actuellement en ventes</h4>
      <ul>

        {books.map((book =>
            <li>books</li>
            ))}

    </ul>


        </div>
    )
}

const Card = ({ title, description, image, url}) => {
    return (
        <><div className="container">
            <div className="row">
                <Menu />
                <div className="col-sm-8">
                    Meilleures ventes
                </div>

            </div>
        </div></>

    )
}




export default Card;
