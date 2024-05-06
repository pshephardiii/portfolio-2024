import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import NavBar from '../components/NavBar/NavBar'
import styles from './AppRouter.module.scss'

const AppRouter = () => {

    return (

        <Router>
            <main className={styles.App}>
                <NavBar></NavBar>
                <Routes className={styles.Routes}>
                    {routes.map(({ Component, key, path }) => (
                        <Route
                            key={key}
                            path={path}
                            element={
                                <Component/>
                            }
                        ></Route>
                    ))}
                    <Route path='/*' element={<Navigate to="/home"/>}/>
                </Routes>
            </main>
        </Router>
    )
}

export default AppRouter