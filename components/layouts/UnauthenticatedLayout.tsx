import CustomHead from "@/components/CustomHead";
import Footer from "../navigation/Footer";

type props = {
  title?: string
  children: React.ReactNode
}

function UnauthenticatedLayout({ title, children }: props) {
  return (

    <>
      <CustomHead title={title} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>

  )
}

export default UnauthenticatedLayout