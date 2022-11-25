
import HomePage  from '../layout/Home';
import ProductPage from '../layout/Product';
import DetailProduct from '../layout/DetailProduct';
import Carts from '../layout/Carts';
import SignIn from '../layout/Login/SignIn';
import SignUp from '../layout/Login/SignUp';
import ProductList from '../layout/Admin/productList';
import Users from '../layout/Admin/UserList';
import Trash from '../layout/Admin/trash';
import ProfilePage from '../layout/Profile';
import UpdatePage from '../layout/UpdatePage';
import AddproductPage from '../layout/AddProduct';
import About from '../layout/About';
import Adduser from '../layout/Adduser';


//Public Routes
export const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/product/list', component: ProductPage },
  { path: '/product/add', component: AddproductPage },
  { path: '/product/:id', component: DetailProduct },
  { path: '/user/profile', component: ProfilePage },
  { path: '/user/update/:id', component: UpdatePage },
  { path: '/user/add', component: Adduser },
  { path: '/carts', component:Carts },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/admin/products', component: ProductList },
  { path: '/admin/users', component: Users },
  { path: '/admin/trash', component: Trash },
  { path: '/about', component: About },

];

export const privateRoutes = [];