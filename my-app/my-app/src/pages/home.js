import Header from '../components/header/header';
import HeroSection from '../components/hero-section/hero-section';
import MovieList from '../components/movie-list/movie-list';
import ListPopularity from '../components/movie-list-popularity/list-popularity';
import ListNow from '../components/movie-list-now/movie-list-now';
import DevList from '../components/dev-list/dev-list';
import NerdList from '../components/nerd-list/nerd-list';
import BannerEnd from '../components/banner-end/banner-end';
import ListUp from '../components/movie-list-up/list-up';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MovieList />
      <ListPopularity />
      <ListNow />
      <DevList />
      <BannerEnd />
      <ListUp />
      <NerdList />
      <Footer />
    </div>
  );
}