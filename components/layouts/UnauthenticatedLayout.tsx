import CustomHead from "@/components/CustomHead";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

type props = {
  title?: string
  children: React.ReactNode
}

function UnauthenticatedLayout({ title, children }: props) {
  return (

    <>
      <CustomHead title={title} />
      <Navbar isAuthenticated={false} />
      <main className="min-h-screen mx-auto max-w-7xl px-2.5 pt-20 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>

  )
}

export default UnauthenticatedLayout