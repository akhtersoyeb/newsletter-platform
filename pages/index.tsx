import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout"

export default function Home() {

  return (
    <UnauthenticatedLayout title="EmailTube | Home">
      <main>
        <nav>Navbar with logo, search bar and profile.</nav>
        <h1>Show a list of recently published newsletters from different interest fields.</h1>
      </main>
    </UnauthenticatedLayout>
  )
}
``