import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const DetailsMoviePage = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {
  return (
    
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetailsMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>This page was not found
</p>} />
      </Route>
    </Routes>
   
  );
};



