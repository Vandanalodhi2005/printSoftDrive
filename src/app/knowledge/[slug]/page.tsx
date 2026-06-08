import Seo from '../../../components/Seo'

const contentMap: Record<string, string> = {
  'kernel-mode-drivers': `<h2>Kernel-Mode Drivers</h2><p>Kernel-mode drivers operate within the most privileged layer of an operating system — the kernel itself. They execute in kernel space, which means they have direct, unmediated access to every system resource, including physical memory, hardware registers, and I/O ports. This high level of privilege is essential because these drivers need to respond to hardware events with minimal latency and maximum control.</p>` ,
  'user-mode-drivers': `<h2>User-Mode Drivers</h2><p>User-mode drivers run in the less-privileged user space of the operating system, isolated from the kernel by a hardware-enforced memory boundary. This isolation provides a significant safety advantage: if a user-mode driver crashes or encounters an unhandled error, the failure is contained within the user space process, and the operating system can terminate and restart the driver without crashing the entire system.</p>`,
  'display-graphics': `<h2>Display / Graphics Drivers</h2><p>Display and graphics drivers manage GPU memory, shader scheduling, display output configuration, and the APIs that allow apps to use GPU power. They are updated frequently to unlock performance and fix compatibility issues.</p>`,
  'audio-drivers': `<h2>Audio Drivers</h2><p>Audio drivers handle low-latency audio streams, mixing, DSP, and sample-accurate timing for input and output devices. Professional audio workflows depend on optimized drivers for reliable performance.</p>`,
  'network-drivers': `<h2>Network Drivers</h2><p>Network drivers enable communication over wired and wireless networks, manage DMA for high throughput, and often implement offloads to reduce CPU usage.</p>`,
  'usb-drivers': `<h2>USB Drivers</h2><p>USB drivers form a layered stack including host controller drivers and class drivers. They handle enumeration, power states, and hot-plugging behavior for a wide range of devices.</p>`
}

export default async function KnowledgeDetail({ params }: { params: Promise<{ slug: string }> }){
  const slug = (await params).slug
  const title = slug.replace(/-/g, ' ')
  const content = contentMap[slug] || `<h2>${title}</h2><p>Detailed guide on ${title}. Includes FAQ and troubleshooting.</p>`

  return (
    <section className="container mx-auto px-4 py-12">
      <Seo title={`${title} - Knowledge Base`} description={`Guide: ${title}`} />
      <article className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <div className="prose max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: content }} />

        <h2 className="text-xl font-semibold mt-6">FAQ</h2>
        <details className="bg-gray-50 p-4 rounded-md mt-2">
          <summary>Can I use this on Windows and macOS?</summary>
          <p className="mt-2 text-slate-600">Yes, most steps apply to both platforms with minor differences.</p>
        </details>
      </article>
    </section>
  )
}
