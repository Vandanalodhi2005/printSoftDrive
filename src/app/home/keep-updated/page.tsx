import Seo from '../../../components/Seo'

export default function KeepUpdated(){
  return (
    <section className="block">
      <div className="container">
        <Seo title="Keep Drivers Updated - PrintSoftDriver" description="Why keeping drivers updated matters" />
        <h1 className="text-3xl font-semibold mb-4">Keep Drivers Updated</h1>
        <p className="text-slate-700 mb-4">Regular driver maintenance keeps your system stable, secure, and performant.</p>

        <ol className="list-decimal ml-6 text-slate-600">
          <li>Back up first.</li>
          <li>Use built-in OS updaters.</li>
          <li>Visit vendor sites for specialized drivers.</li>
        </ol>
      </div>
    </section>
  )
}
