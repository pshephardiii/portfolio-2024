import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ProjectShowPage from '../pages/ProjectShowPage/ProjectShowPage'

const routes = [
    {
        Component: HomePage,
        key: 'Home',
        path: '/home'
    },
    {
        Component: AboutPage,
        key: 'About',
        path: '/about'
    },
    {
        Component: ProjectsPage,
        key: 'Projects',
        path: '/projects'
    },
    {
        Component: ContactPage,
        key: 'Contact',
        path: '/contact'
    },
    {
        Component: ProjectShowPage,
        key: 'Project',
        path: '/projects/:id'
    }
]

export default routes