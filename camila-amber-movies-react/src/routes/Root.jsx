import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { setMovies } from "../datasource/local/moviesStorage";
import { setComments } from "../datasource/local/commentsStorage";
import { setUsers } from "../datasource/local/usersStorage";
import { getMoviesApi } from "../datasource/api/movies-api";
import { getAllCommentsApi } from "../datasource/api/comments-api";
import { getUsersApi } from "../datasource/api/users-api";
import { AuthProvider } from "../contexts/AuthContext";

class Root extends Component {
  componentDidMount() {
    console.log("loading data in root...");
    setMovies(getMoviesApi());
    setComments(getAllCommentsApi());
    setUsers(getUsersApi());
  }

  render() {
    return (
      <main>
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
      </main>
    );
  }
}

export default Root;
