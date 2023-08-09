
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
 const card = this.props.books.map(book =>
        {(
        <div className="card">
            <img
            width="150"
            height="150"
            src={process.env.PUBLIC_URL + '/src/images-assets/0/citron.png'}
            alt="citron"/>

            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <h4>{book.name}</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>
                                    {book.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )})




 export default Card;
