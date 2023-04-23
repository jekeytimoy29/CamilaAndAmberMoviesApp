import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Home, { loader as moviesLoader } from "./routes/home/Home";
import Movies from "./routes/movies/Movies";
import MovieDetails from "./routes/movies/MovieDetails";
import MovieForm from "./routes/movies/MovieForm";
import Users from "./routes/users/Users";
import UserDetails from "./routes/users/UserDetails";
import UserForm from "./routes/users/UserForm";
import ErrorPage from "./routes/ErrorPage";
import { action as deleteMovie } from "./routes/DeleteMovie";
import { action as deleteUser } from "./routes/DeleteUser";
import MovieMoreDetails from "./routes/movieMoreDetails/MovieMoreDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} loader={moviesLoader} />
        <Route
          path="/movie-more-details/:movie_id"
          element={<MovieMoreDetails />}
        />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/add" element={<MovieForm />} />
          <Route path="/movies/:movie_id" element={<MovieDetails />} />
          <Route path="/movies/:movie_id/edit" element={<MovieForm />} />
          <Route path="/movies/:movie_id/delete" action={deleteMovie} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path="/users/add" element={<UserForm />} />
          <Route path="/users/:user_id" element={<UserDetails />} />
          <Route path="/users/:user_id/edit" element={<UserForm />} />
          <Route path="/users/:user_id/delete" action={deleteUser} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
