import CustomHead from "@/components/CustomHead";

type props = {
  title?: string
  children: React.ReactNode
}

function UnauthenticatedLayout({ title, children }: props) {
  return (

    <>
      <CustomHead title={title} />
      {children}
    </>

  )
}

export default UnauthenticatedLayout