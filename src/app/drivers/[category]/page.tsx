import Seo from '../../../components/Seo'

export default async function DriversCategory({ params }: { params: Promise<{ category: string }> }){
  const name = (await params).category.replace(/-/g, ' ')
  const sampleItems = [
    { name: `${name} - Vendor A`, file: '/files/sample-driver.exe' },
    { name: `${name} - Vendor B`, file: '/files/sample-driver.exe' }
  ]
  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title={`${name} - Drivers`} description={`Download ${name}`} />
      <h1 className="text-3xl font-semibold mb-6">{name}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {sampleItems.map((it, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-2">{it.name}</h3>
            <p className="text-slate-600 mb-3">Verified driver package for {it.name}.</p>
            <a href={it.file} className="px-3 py-2 bg-blue-600 text-white rounded-md">Download</a>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">FAQ</h2>
      <details className="bg-gray-50 p-4 rounded-md">
        <summary>How do I install the driver?</summary>
        <p className="mt-2 text-slate-600">Download the package, run the installer, and restart your device if prompted.</p>
      </details>
    </section>
  )
}
