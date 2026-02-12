import { Category, Header, Hero, Trending,Footer} from './modules'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <Trending />
      </main>
      <Footer />
    </>
  )
}
