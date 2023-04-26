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
import Home, { loader as homeLoader } from "./routes/home/Home";
import Movies, { loader as moviesLoader } from "./routes/movies/Movies";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./routes/movies/MovieDetails";
import MovieForm, {
  loader as movieFormLoader,
  action as movieFormAction,
} from "./routes/movies/MovieForm";
import Users, { loader as usersLoader } from "./routes/users/Users";
import UserDetails, {
  loader as userDetailsLoader,
} from "./routes/users/UserDetails";
import UserForm, {
  loader as userFormLoader,
  action as userFormAction,
} from "./routes/users/UserForm";
import ErrorPage from "./routes/errorPage/ErrorPage";
import { action as deleteMovie } from "./routes/DeleteMovie";
import { action as deleteUser } from "./routes/DeleteUser";
import MovieMoreDetails, {
  loader as movieMoreDetailsLoader,
  action as movieMoreDetailsAction,
} from "./routes/movieMoreDetails/MovieMoreDetails";
import LoginForm, { action as loginAction } from "./routes/login/LoginForm";
import RegisterForm, {
  action as registerAction,
  loader as registerLoader,
} from "./routes/register/RegisterForm";
import MyProfile, {
  loader as myProfileLoader,
} from "./routes/myProfile/MyProfile";
import { action as deleteProfile } from "./routes/DeleteProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} loader={homeLoader} />
        <Route
          path="/movie-more-details/:movie_id"
          element={<MovieMoreDetails />}
          loader={movieMoreDetailsLoader}
          action={movieMoreDetailsAction}
        />
        <Route path="/login" element={<LoginForm />} action={loginAction} />
        <Route
          path="/register"
          element={<RegisterForm />}
          action={registerAction}
          loader={registerLoader}
        />
        <Route
          path="/my_profile/:user_id"
          element={<MyProfile />}
          loader={myProfileLoader}
        />
        <Route
          path="/my_profile/:user_id/edit"
          element={<RegisterForm />}
          loader={registerLoader}
          action={registerAction}
        />
        <Route path="/my_profile/:user_id/delete" action={deleteProfile} />
        <Route path="/movies" element={<Movies />} loader={moviesLoader}>
          <Route
            path="/movies/add"
            element={<MovieForm />}
            loader={movieFormLoader}
            action={movieFormAction}
          />
          <Route
            path="/movies/:movie_id"
            element={<MovieDetails />}
            loader={movieDetailsLoader}
          />
          <Route
            path="/movies/:movie_id/edit"
            element={<MovieForm />}
            loader={movieFormLoader}
            action={movieFormAction}
          />
          <Route path="/movies/:movie_id/delete" action={deleteMovie} />
        </Route>
        <Route path="/users" element={<Users />} loader={usersLoader}>
          <Route
            path="/users/add"
            element={<UserForm />}
            loader={userFormLoader}
            action={userFormAction}
          />
          <Route
            path="/users/:user_id"
            element={<UserDetails />}
            loader={userDetailsLoader}
          />
          <Route
            path="/users/:user_id/edit"
            element={<UserForm />}
            loader={userFormLoader}
            action={userFormAction}
          />
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
