import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from './hooks/useAuth';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/HomePage/Home';
import Login from './components/Login/Login';
import Theory from './pages/TheoryPage/Theory';
import Exercises from './pages/ExercisesPage/Exercises';
import Users from './pages/UsersPage/Users';
import TheoryDash from './pages/TheoryDashPage/TheoryDash';
import ExercisesDash from './pages/ExercisesDashPage/ExercisesDash';
import User from './pages/UserPage/User';
import LessonDash from './pages/LessonDashPage/LessonDash';
import Lesson from './pages/LessonPage/Lesson';
import ExerciseDash from './pages/ExerciseDashPage/ExerciseDash';
import Answers from './pages/AnswersPage/Answers';

const App = () =>{

  const { auth } = useAuth();

  const isLoggedIn = !!auth.accessToken;

  const Protected = ({children}) => {

    if(!isLoggedIn){
      return <Navigate to="/login"/>
    }

    return children;
  };

  const Layout = ({children}) =>{
    return(
      <div className="main">
        <Header/>
        <div className="container">
          <div className="menuContainer">
            <Menu role={auth.role}/>
          </div>
          <div className="contentContainer">
            {children}
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout><Protected><Home/></Protected></Layout>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/theory"
          element={<Layout><Theory/></Layout>}
        />
        <Route
          path="/exercises"
          element={<Layout><Exercises/></Layout>}
        />
        <Route
          path="/dash/users"
          element={<Layout><Users/></Layout>}
        />
        <Route
          path="/dash/lessons"
          element={<Layout><TheoryDash/></Layout>}
        />
        <Route
          path="/dash/exercises"
          element={<Layout><ExercisesDash/></Layout>}
        />
        <Route
          path="/dash/users/:id"
          element={<Layout><User/></Layout>}
        />
        <Route
          path="/dash/lessons/:id"
          element={<Layout><LessonDash/></Layout>}
        />
        <Route
          path="/dash/exercises/:id"
          element={<Layout><ExerciseDash/></Layout>}
        />
        <Route
          path="/lesson/:id/:title"
          element={<Layout><Lesson/></Layout>}
        />
        <Route
          path="/dash/answers/for_ex/:exerciseId"
          element={<Layout><Answers/></Layout>}
        />
      </Routes>
    </>
  )
}

export default App