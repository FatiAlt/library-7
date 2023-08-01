import React from "react";


function NavBar() {
    return (

        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">SEPTARCHE LIBRAIRIE</a>
                <button class="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">



                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Articles
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Livres</a></li>
                                <li><hr class="dropdown-divider" />Meilleures ventes</li>
                                <li><a class="dropdown-item" href="#">Autres articles</a></li>
                                <li><a class="dropdown-item" href="#">Services client</a></li>
                            </ul>
                        </li>



                        <li class="nav-item">
                            <a class="nav-link" href="#">Inscription</a>
                        </li>
                        { /*<li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li> */}
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Rechercher" />
                        {/*<button class="btn btn-outline-success" type="submit">Rechercher</button>*/}

                        */ <button type="button" class="btn btn-light">Rechercher</button>
                    </form>

                </div>
                <div className='cart'>
               <i class="fa-solid fa-cart-shopping"></i>
          <li class="nav-item">
        <a class="nav-link" href="#">Panier</a>
        </li>
        </div>

            </div>
        </nav>
        </nav>



    );
}

export default NavBar;
