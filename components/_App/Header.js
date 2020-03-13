import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
//import { handleLogout } from '../../utils/auth'


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function Header() {
  const user = true;
  const router = useRouter();
  // const isRoot = user && user.role === 'root'
  // const isAdmin = user && user.role === 'admin'
  //const isRootOrAdmin = isAdmin || isRoot

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid={true} id="menu" inverted  >
      <Container text>'
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image size='mini' src='/static/logo.svg' style={{ marginRight: '1em' }} />
            React Reserve
          </Menu.Item>
        </Link>


        <Link href='/cart' active={isActive('/cart')}>
          <Menu.Item header >
            <Icon name='cart' size='large' /> Cart
          </Menu.Item>
        </Link>
        {user && (<Link href='/create'>
          <Menu.Item header active={isActive('/create')}>
            <Icon name='add square' size='large' />Create
          </Menu.Item>
        </Link>)}

        {user ? (<>
          <Link href='/account'>
            <Menu.Item header active={isActive('/account')}>
              <Icon name='user' size='large' />Account
          </Menu.Item>
          </Link>

          <Menu.Item header>
            <Icon name='sign out' size='large' />Logout
          </Menu.Item>

        </>) :

          (<>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                <Icon name='sign in' size='large' />Log in
          </Menu.Item>
            </Link>
            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                <Icon name='signup' size='large' />Singup
          </Menu.Item>
            </Link>
          </>)}
      </Container>
    </Menu>
  )
}

export default Header;