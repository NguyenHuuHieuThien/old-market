import { Link } from "react-router-dom"

export default function Navbars() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid container">
                    <a class="navbar-brand">Old Market</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to='/'>Home
                                    <span class="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/products'>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/carts">Carts</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/admin/users">About</Link>
                            </li>
                            
                        </ul>
                        <form class="d-flex">

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}