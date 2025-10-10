import Footer from './Footer'
import Header from './Header'

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
