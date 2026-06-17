import Link from "next/link";
import HomeTabs from "../components/HomeTabs";
import Image from "next/image";
import { ArrowRight, Printer, ShieldCheck, Layers, Monitor, Volume2, Wifi, Bluetooth, Usb, HardDrive, Cpu, Settings, Keyboard, Languages, Heart, ChevronRight, FileQuestion, BookOpen, AlertTriangle, MonitorPlay, Zap, Server, Globe, Search, Wrench, Download, Image as ImageIcon } from "lucide-react";

export default function Home() {
  const driverCategories = [
    { name: "Kernel-Mode Drivers", desc: "Low-level drivers with direct hardware and memory access.", icon: ShieldCheck, href: "/drivers/kernel-mode-drivers" },
    { name: "User-Mode Drivers", desc: "Safer drivers that run separately from the operating system kernel.", icon: Layers, href: "/drivers/user-mode-drivers" },
    { name: "Printer Drivers", desc: "Installation, updates, compatibility and troubleshooting guides.", icon: Printer, href: "/drivers/printer-drivers" },
    { name: "Graphics Drivers", desc: "GPU updates, gaming performance and display optimization.", icon: Monitor, href: "/drivers/graphics-drivers" },
    { name: "Audio Drivers", desc: "Fix sound issues and understand audio device communication.", icon: Volume2, href: "/drivers/audio-drivers" },
    { name: "Network Drivers", desc: "Wi-Fi, Ethernet and connectivity troubleshooting resources.", icon: Wifi, href: "/drivers/network-drivers" },
    { name: "Bluetooth Drivers", desc: "Pairing, connectivity and Bluetooth device support.", icon: Bluetooth, href: "/drivers/bluetooth-drivers" },
    { name: "USB Drivers", desc: "Device recognition, installation and USB troubleshooting.", icon: Usb, href: "/drivers/usb-drivers" },
    { name: "Chipset Drivers", desc: "The foundation that connects all your hardware together.", icon: Cpu, href: "/drivers/chipset-drivers" },
    { name: "Storage Drivers", desc: "SSD, HDD, and external storage performance and reliability.", icon: HardDrive, href: "/drivers/storage-drivers" },
    { name: "Input Devices", desc: "Keyboards, mice, touchpads, and game controller support.", icon: Keyboard, href: "/drivers/input-devices" },
    { name: "Virtual Device Drivers", desc: "Software-created devices used by virtualization and emulation tools.", icon: Server, href: "/drivers/virtual-device-drivers" },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
        {/* Background Gradients */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[100px]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[100px]" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Left Content */}
            <div>
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm shadow-slate-200/50">
                <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted Driver Knowledge Base</span>
              </div>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1] tracking-tight text-slate-900">
                Printer Drivers,
                <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Explained Clearly.</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-600">
                Learn how printer drivers work, troubleshoot issues, and find practical solutions explained in simple language.
              </p>
              
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  className="group flex justify-center sm:justify-start items-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 sm:px-8 py-3.5 sm:py-4 font-medium text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-200"
                  href="/drivers"
                >
                  Explore Drivers
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  className="flex justify-center sm:justify-start rounded-xl sm:rounded-2xl border border-blue-100 bg-white px-6 sm:px-8 py-3.5 sm:py-4 font-medium text-blue-700 text-sm sm:text-base transition-all hover:bg-slate-50 hover:border-blue-200"
                  href="/knowledge"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 sm:flex sm:flex-wrap">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">500+</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Driver Guides</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">100+</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Printer Models</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Knowledge Access</p>
                </div>
              </div>
            </div>

            {/* Right Content / Floating Card */}
            <div className="relative w-full md:block">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 transform transition-all duration-500 hover:-translate-y-2">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shrink-0">
                    <Printer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">Driver Knowledge Center</h3>
                    <p className="text-sm text-slate-500">Guides & Troubleshooting</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {["Printer Setup Guides", "Driver Installation Help", "Error Fix Tutorials", "Compatibility Resources"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                      <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-blue-900">1000+</p>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">Monthly Readers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner */}
      <section className="relative overflow-hidden border-y border-blue-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 sm:py-8">
  <div className="relative mx-auto max-w-7xl px-6 text-center overflow-hidden">
    <div className="flex flex-nowrap gap-8 scroll-left text-sm font-bold text-white">
      <span className="flex items-center gap-2"><Volume2 className="h-4 w-4 text-white" /> Audio &amp; Sound</span>
      <span className="flex items-center gap-2"><Wifi className="h-4 w-4 text-white" /> Wi-Fi &amp; Networking</span>
      <span className="flex items-center gap-2"><Usb className="h-4 w-4 text-white" /> USB &amp; Devices</span>
      <span className="flex items-center gap-2"><HardDrive className="h-4 w-4 text-white" /> Storage &amp; SSD</span>
      <span className="flex items-center gap-2"><Bluetooth className="h-4 w-4 text-white" /> Bluetooth</span>
      <span className="flex items-center gap-2"><Cpu className="h-4 w-4 text-white" /> Chipset &amp; System</span>
      <span className="flex items-center gap-2"><Monitor className="h-4 w-4 text-white" /> Graphics &amp; GPU</span>
    </div>
  </div>
</section>

      {/* 3. What is a Driver Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-slate-50">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-8 flex justify-center">
            <span className="rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
              The Basics
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">So... What Exactly Is a Driver?</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Understanding drivers doesn't require a computer science degree. Start with these three simple ideas and you'll understand how hardware and software work together.
            </p>
          </div>

          

          <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 md:p-12 shadow-xl shadow-blue-900/5">
            <HomeTabs />
              <div>
                <h3 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">Drivers Are The Translators Of Your Computer</h3>
                <div className="space-y-6 text-lg leading-9 text-slate-600">
                  <p>Your operating system and your hardware don't naturally speak the same language. A driver acts as the translator between them, ensuring every command is understood correctly.</p>
                  <p>When you click Print, connect a webcam, adjust your speakers, or launch a game, the driver converts those requests into instructions that the hardware can understand and execute.</p>
                  <p>Without drivers, your computer might detect hardware, but it wouldn't know how to use it effectively. Drivers make communication possible between software and physical devices.</p>
                </div>
              </div>
              <div>
                <div className="sticky top-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-8 text-white shadow-lg shadow-blue-600/20">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">Quick Summary</p>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex gap-3"><ChevronRight className="h-5 w-5 shrink-0 mt-1 text-blue-300" /> <span className="leading-7 font-medium">Translates operating system commands.</span></li>
                    <li className="flex gap-3"><ChevronRight className="h-5 w-5 shrink-0 mt-1 text-blue-300" /> <span className="leading-7 font-medium">Allows hardware and software to communicate.</span></li>
                    <li className="flex gap-3"><ChevronRight className="h-5 w-5 shrink-0 mt-1 text-blue-300" /> <span className="leading-7 font-medium">Essential for every major device.</span></li>
                  </ul>
                  <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-sm leading-6 text-blue-50 font-medium">Drivers work quietly behind the scenes, but they are one of the most important pieces of software on your computer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </section>

      {/* 4. Explore Driver Categories */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              What We Cover
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Explore Driver Categories
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn, troubleshoot and understand every major driver category through simple, practical explanations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {driverCategories.slice(0, 8).map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-300"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Guide</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{category.name}</h3>
                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Why Drivers Matter */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 bg-center"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wider block mb-4">Why Drivers Matter</span>
              <h2 className="text-4xl sm:text-5xl text-white font-bold mb-6 leading-tight">The bridge between software and hardware.</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Every click, print command, and device action needs a driver working behind the scenes. Drivers translate instructions between your operating system and physical hardware.
              </p>
              <ul className="space-y-4 mb-10">
                {['Understand what drivers actually do', 'Fix common device and connectivity issues', 'Clear explanations without technical jargon'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 rounded-full bg-blue-500/20 items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl">
                <MonitorPlay className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Software</h3>
                <p className="text-slate-400 text-sm">Apps & Operating System</p>
              </div>
              <div className="bg-blue-600 p-8 rounded-3xl shadow-lg shadow-blue-900/50 transform sm:translate-y-8">
                <Languages className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Driver</h3>
                <p className="text-blue-200 text-sm">Real-time Translator</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl">
                <Printer className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Hardware</h3>
                <p className="text-slate-400 text-sm">Printers & Devices</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl transform sm:translate-y-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">100+</p>
                    <p className="text-xs text-slate-400 uppercase">Guides</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">24/7</p>
                    <p className="text-xs text-slate-400 uppercase">Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Driver Locations */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Locations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Where Do Drivers Actually Live on Your PC?</h2>
            <p className="text-lg text-slate-600">
              Spoiler: they're not hiding in some secret folder. Your computer keeps them in a few well-known places — and once you know where to look, you can check, manage, and tidy them up like a pro.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full">
                <Image src="/deviceManager.webp" alt="Inside the Device Manager" fill className="object-cover" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Inside the Device Manager</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This is the friendliest place to start on a Windows PC. Right-click the Start button and pick "Device Manager," and a tidy list of every piece of hardware on your machine appears. Click any item and you can see its driver, check its version, update it, roll it back, or remove it entirely.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full bg-slate-200">
                <Image src="/settingUpdate.webp" alt="Through Settings & Updates" fill className="object-cover" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Through Settings & Updates</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  On modern Windows systems, head to Settings, then Windows Update, then "Advanced options" and look for "Optional updates." Many driver updates quietly arrive here. On macOS, drivers are bundled into regular system updates. On Linux, your distribution's package manager does the same job.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 w-full bg-slate-200">
                <Image src="/website.jpg" alt="The Hardware Maker's Website" fill className="object-cover" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Hardware Maker's Website</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every reputable hardware maker keeps a "Support" or "Drivers" section on its official website where you can download the very latest driver for your exact model. Always download directly from the official site — never from a random pop-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Driver Identification */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Identification</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">How to Know Which Driver You're Actually Using</h2>
            <p className="text-lg text-slate-600">
              Curious which driver is in charge of your sound, your screen, or your network? It only takes a few clicks to find out — no special tools required.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[{
              os: "On Windows",
              image: "/windows.webp",
              desc: "Open Device Manager, expand any category, and right-click your device. Choose 'Properties,' then click the 'Driver' tab. You'll instantly see the driver name, publisher, release date, and exact version number."
            },{
              os: "On macOS",
              image: "/mack.webp",
              desc: "Click the system menu, choose 'About This Mac,' then click 'More Info' and 'System Report.' A detailed window opens with sections listing the underlying driver (kext) along with its version."
            },{
              os: "On Linux",
              image: "/linux.webp",
              desc: "Open a terminal and try friendly commands like `lspci -k` for connected hardware and `lsusb` for USB devices, or `lsmod` to see every driver module currently loaded into the kernel."
            }].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform hover:bg-slate-50 shadow-sm flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 p-6 flex items-center justify-center">
                  <Image src={item.image} alt={item.os} fill className="object-contain p-4" />
                </div>
                <div className="p-8 border-t border-slate-100 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.os}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Troubleshooting: Common Problems */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Troubleshooting</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Common Driver-Related Problems</h2>
            <p className="text-lg text-slate-600">
              Understanding these common driver issues helps in diagnosing and resolving hardware and software problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Driver Conflicts", desc: "Occur when two or more drivers compete for the same hardware resource, causing unpredictable behavior or system instability. OS manages this, but misconfigurations require manual resolution." },
              { title: "Outdated Drivers", desc: "As operating systems evolve, drivers that haven't been updated may fail silently or exhibit reduced performance. Graphics drivers are particularly susceptible to becoming obsolete." },
              { title: "Corrupted Driver Files", desc: "Caused by incomplete installations, disk errors, or malware. A corrupted driver may fail to load or produce incorrect behavior. Reinstalling from a known good source resolves this." },
              { title: "Missing Drivers After OS Install", desc: "Certain hardware components may not be recognized or function only with basic generic drivers. Downloading the appropriate driver from the manufacturer resolves these issues." },
              { title: "Incompatible Drivers", desc: "Occur when a driver designed for one OS version is used with a different version, causing instability or broken functionality. Using a certified driver avoids these problems." },
              { title: "Signed vs Unsigned Drivers", desc: "Driver signing uses digital certificates to confirm a driver is verified. Unsigned drivers introduce significant security risks. Always prefer signed drivers from the hardware manufacturer." }
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-colors shadow-sm">
                <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Helpful Topics We Cover */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Helpful Topics We Cover</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Pick a Hardware Category and Dive In</h2>
            <p className="text-lg text-slate-600">
              Each overview is bite-sized, friendly, and written to make sense the very first time you read it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Printer Drivers", icon: Printer, desc: "Why your device needs special software, what goes wrong, and how to keep output painless across home, office, and shared setups.", href: "/drivers/printer-drivers" },
              { title: "Graphics Drivers", icon: Monitor, desc: "How GPUs, displays, and modern apps stay in sync — and why a tiny driver update can transform game performance.", href: "/drivers/graphics-drivers" },
              { title: "Audio Drivers", icon: Volume2, desc: "The quiet software shaping every chime, voice call, and music track that comes out of your speakers and headphones.", href: "/drivers/audio-drivers" },
              { title: "Network Drivers", icon: Wifi, desc: "The bridge between your operating system and the wired or wireless chip that connects you to the wider internet.", href: "/drivers/network-drivers" },
              { title: "USB & Devices", icon: Usb, desc: "How keyboards, mice, drives, webcams, and controllers get recognised the instant you plug them in.", href: "/drivers/usb-drivers" },
              { title: "System Drivers", icon: Cpu, desc: "The chipset, CPU, and storage drivers you never see — but always feel — making your machine boot fast and run smoothly.", href: "/drivers/chipset-drivers" },
            ].map((topic, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:bg-slate-50 transition-all">
                <topic.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{topic.desc}</p>
                <Link href={topic.href} className="inline-flex items-center text-sm font-bold text-blue-600 hover:underline">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. About DriverWise */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 flex items-center justify-center aspect-video sm:aspect-square md:aspect-[4/3] lg:aspect-auto h-full min-h-[300px]">
               <Image src="/website.jpg" alt="Person working at a clean desk with laptop" fill className="object-cover" />
            </div>
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">About DriverWise</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">A Friendly Voice in a Noisy Tech World</h2>
              <div className="prose prose-slate prose-lg text-slate-600">
                <p>We are a small, independent education project built around one stubborn idea — technology should not feel intimidating. Every overview on this site is written to make sense the first time you read it, whether you are a complete beginner or someone who already knows their way around a kernel debugger.</p>
                <p>No sponsorships. No affiliate links. No "instant driver updater" nonsense. Just clear, honest explanations of how things actually work.</p>
                <ul className="not-prose space-y-3 mt-8 mb-8">
                  <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Independent and free to read, always</span></li>
                  <li className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Plain-English first, technical accuracy second to none</span></li>
                  <li className="flex items-center gap-3"><Globe className="h-5 w-5 text-blue-600" /><span className="font-medium text-slate-800">Privacy-respecting — no aggressive trackers</span></li>
                </ul>
                <Link href="/about" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                  Read More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Driver Deep Dive (Full List) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Driver Deep Dive</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Understand Every Type of Driver</h2>
            <p className="text-lg text-slate-600">
              Explore the different kinds of drivers that make your hardware work—from kernel-mode foundations to virtual devices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {driverCategories.map((cat, i) => (
              <Link key={i} href={cat.href} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">{cat.desc}</p>
                <span className="text-sm font-bold text-blue-600 group-hover:underline">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-3">Start Here</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Common First Questions</h2>
            <p className="text-lg text-slate-600">The questions readers ask most before exploring our guides.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do you provide driver downloads?", a: "No. We are an educational site only. The safest source for any driver is always your hardware manufacturer's official support page or your operating system's built-in update tool. We explain what to look for, never host files." },
              { q: "Is this site affiliated with any hardware or OS company?", a: "No, DriverWise is entirely independent. We don't accept sponsorships from driver updater tools or hardware manufacturers, allowing us to remain completely unbiased." },
              { q: "Where should I start?", a: "If you're trying to fix a specific problem right now, head to our 'Troubleshooting' guides under your device's category. If you're just curious, start with our 'What Exactly Is a Driver?' section above." }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="flex items-center gap-3">
                    <FileQuestion className="h-5 w-5 text-blue-600" />
                    {faq.q}
                  </span>
                  <span className="transition group-open:rotate-180 bg-white border border-slate-200 rounded-full p-1">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="h-4 w-4 text-slate-500"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 p-6 text-slate-600 leading-relaxed bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
