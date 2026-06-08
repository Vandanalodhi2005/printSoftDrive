import Seo from '../../../components/Seo'

const posts: Record<string, { title: string; html: string }> = {
  'fix-wifi-drops': {
    title: 'Wi‑Fi Drops Constantly Every Few Minutes',
    html: `<p>An unstable Wi‑Fi connection is usually caused by aggressive power-saving on the Wi‑Fi card, interference, or outdated/corrupted drivers. Try the two‑minute reset, disable power saving, forget and reconnect the network, update/reinstall the driver, switch router channel, or reset the network stack.</p>`
  },
  'fix-display-driver-stopped-responding': {
    title: 'Fix: When the Display Driver Pauses and Recovers',
    html: `<p>Modern graphics drivers include a timeout-and-recover mechanism. Single occurrences are normal; repeated resets point to overheating, driver regression, or an app-specific issue. Update drivers, check temperatures, and rollback if needed.</p>`
  },
  'audio-drivers': {
    title: 'The Software Behind Every Sound You Hear',
    html: `<p>Audio drivers manage low-latency streams, mixing, and sample-accurate timing. Problems like no sound, one-sided audio, or static are often driver-related — try a clean reinstall from the vendor.</p>`
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }){
  const slug = (await params).slug
  const data = posts[slug]
  const title = data ? data.title : slug.replace(/-/g, ' ')
  const html = data ? data.html : `<p>Article: ${title}</p>`

  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title={`${title} - PrintSoftDriver`} description={title} />
      <article className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <div className="prose max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: html }} />

        <h2 className="text-xl font-semibold mt-6">FAQ</h2>
        <details className="bg-gray-50 p-4 rounded-md mt-2">
          <summary>How do I apply this fix?</summary>
          <p className="mt-2 text-slate-600">Follow the steps in the article and ensure you have backups.</p>
        </details>
      </article>
    </section>
  )
}
