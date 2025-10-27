import Footer from './Footer'
import Header from './Header'

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="overflow-y-auto h-[calc(100vh-120px)] bg-[#575c5e]">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
