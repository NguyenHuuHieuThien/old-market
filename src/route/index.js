
import  HomePage  from '../layout/Home';
import ProductPage from '../layout/Product';
import DetailProduct from '../layout/DetailProduct';
import Carts from '../layout/Carts';
import SignIn from '../layout/Login/SignIn';
import SignUp from '../layout/Login/SignUp';
import ProductList from '../layout/Admin/productList';
import Users from '../layout/Admin/UserList';


//Public Routes
export const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductPage },
  { path: '/product-detail', component: DetailProduct },
  { path: '/carts', component:Carts },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/admin/product-list', component: ProductList },
  { path: '/admin/users', component: Users },
];

export const privateRoutes = [];