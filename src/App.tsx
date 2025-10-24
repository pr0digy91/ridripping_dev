// Ri'Drippin Website - Home Page (React + Tailwind CSS style)

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Clock, CheckCircle } from "lucide-react"
import { useState, useEffect, type ReactNode } from "react"

export default function Home() {
  const [active, setActive] = useState<string>("HOME")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset for header

      const contactEl = document.getElementById('contact')
      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActive('CONTACT')
        return
      }

      const whyusEl = document.getElementById('whyus')
      if (whyusEl && scrollPosition >= whyusEl.offsetTop) {
        setActive('ABOUT')
        return
      }

      const pricingEl = document.getElementById('pricing')
      if (pricingEl && scrollPosition >= pricingEl.offsetTop) {
        setActive('SHOP')
        return
      }

      // default to HOME
      setActive('HOME')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function NavLink({ idVal, href, children }: { idVal: string; href: string; children: ReactNode }) {
    const isActive = active === idVal
    const base = "pb-1 no-underline transition-colors"
    const defaultColor = "text-[#F2F2F2] hover:text-white"
    const activeClasses = "!text-[#FFCF27] border-b-2 border-[#FFCF27]"

    return (
      <a
        href={href}
        onClick={() => setActive(idVal)}
        className={`${base} ${isActive ? activeClasses : defaultColor}`}
        style={isActive ? {} : { color: '#F2F2F2' }}
      >
        {children}
      </a>
    )
  }
  return (
  <div id="top" className="min-h-screen bg-[#FFCE00] text-black font-sans flex flex-col">
      {/* Header */}
  <header className="bg-black text-[#FFCE00] py-6 px-8 flex items-center shadow-lg sticky top-0 z-50">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 flex-1">
          <img src="/src/assets/logo/black_white_cropped.png" alt="Ri'Drippin Logo" className="h-12" />
        </div>

        {/* Center: Primary Navigation (hidden on small screens) */}
        {/* Navigation: use state to track active tab. Default color #F2F2F2, active color #FFCF27 */}
        <nav className="hidden md:flex gap-10 font-bold text-lg justify-center flex-1">
          {/* nav items wired to known section IDs in this page */}
          <NavLink idVal="HOME" href="#top">HOME</NavLink>
          <NavLink idVal="SHOP" href="#pricing">SHOP</NavLink>
          <NavLink idVal="ABOUT" href="#whyus">ABOUT</NavLink>
          <NavLink idVal="CONTACT" href="#contact">CONTACT</NavLink>
        </nav>

        {/* Right: Auth buttons + hamburger */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <Button className="bg-[#FFCE00] text-black font-bold px-6 py-2 rounded-full shadow hover:bg-white hover:text-black">LOGIN</Button>
          <Button className="bg-[#FFCE00] text-black font-bold px-6 py-2 rounded-full shadow hover:bg-white hover:text-black">SIGN UP</Button>

          {/* Hamburger / menu icon (visual only) */}
          <button aria-label="open menu" className="ml-3 hidden md:block">
            <div className="flex flex-col gap-1">
              <span className="w-7 h-0.5 bg-[#bfbfbf] block rounded"></span>
              <span className="w-7 h-0.5 bg-[#bfbfbf] block rounded"></span>
              <span className="w-5 h-0.5 bg-[#bfbfbf] block rounded"></span>
            </div>
          </button>
        </div>
      </header>
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-14 bg-[#FFCE00]">
        <div className="max-w-xl">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Drive in, <span className="text-black bg-white px-3 rounded-xl">Drip Out</span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Chennai’s fastest, tech-powered, eco-friendly car wash service. <br />
            <span className="font-bold">Book. Wash. Go. All from your phone.</span>
          </p>
          <div className="flex gap-4">
            <Button className="bg-black text-[#FFCE00] font-bold px-8 py-3 rounded-2xl shadow hover:bg-[#1a1a1a]">
              Book Your Wash
            </Button>
            <Button variant="outline" className="border-black border-2 font-bold px-8 py-3 rounded-2xl shadow hover:bg-black hover:text-[#FFCE00]">
              Membership Plans
            </Button>
          </div>
        </div>
        <img src="/app-experience-mockup.png" alt="App Experience" className="w-full max-w-lg mt-10 md:mt-0 rounded-2xl shadow-2xl border-4 border-black" />
      </section>

      {/* App Experience */}
      <section id="howitworks" className="bg-black text-[#FFCE00] py-16 px-4 md:px-16">
        <h2 className="text-4xl font-extrabold mb-8 text-center">App Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-end">
          <AppStep
            img="/step1-view.png"
            title="View Outlets"
            desc="Find Ri'Drippin car wash outlets near you. Map view. Instant directions."
          />
          <AppStep
            img="/step2-choose.png"
            title="Choose Outlet"
            desc="Select from 24/7 outlets, check reviews, see available services."
          />
          <AppStep
            img="/step3-slot.png"
            title="Choose Slots"
            desc="Pick a convenient time. No wait, guaranteed slot, evening/late night options."
          />
          <AppStep
            img="/step4-payment.png"
            title="Make Payment"
            desc="Pay securely—Card, UPI, or wallet. Transparent pricing, no surprises."
          />
          <AppStep
            img="/step5-confirm.png"
            title="Get Confirmation"
            desc="Instant booking. Get QR code to scan at the outlet for a seamless wash."
          />
        </div>
      </section>

      {/* Why Choose Ri'Drippin */}
      <section id="whyus" className="bg-[#FFCE00] py-20 px-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-black">Why Ri'Drippin?</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <ReasonCard
            icon={<Clock className="w-10 h-10" />}
            title="Superfast & Zero Wait"
            desc="Each wash in just 6 minutes. Book slot, drive in, drive out."
          />
          <ReasonCard
            icon={<MapPin className="w-10 h-10" />}
            title="Always Near You"
            desc="Multiple Chennai locations. 24/7 outlets for max convenience."
          />
          <ReasonCard
            icon={<CheckCircle className="w-10 h-10" />}
            title="Consistent Quality"
            desc="Automated machines, trained staff, eco-friendly tech. Every wash, spotless."
          />
          <ReasonCard
            icon={<img src="/waterdrop.svg" className="w-10 h-10" alt="" />}
            title="Eco-Friendly"
            desc="Water recycling, low-water use, green cleaning—better for Chennai."
          />
          <ReasonCard
            icon={<img src="/star.svg" className="w-10 h-10" alt="" />}
            title="Affordable Plans"
            desc="One-time washes from ₹399. Subscriptions for every need. Save big."
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-black py-16 px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-[#FFCE00] text-center">Our Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <PriceCard plan="One-Time Wash" price="₹399" desc="Single wash, all-in, any time." />
          <PriceCard plan="4 Washes" price="₹1,000" desc="Monthly. Save 37%." />
          <PriceCard plan="12 Washes" price="₹2,500" desc="Quarterly. Save 47%." />
          <PriceCard plan="24 Washes" price="₹4,000" desc="Annual. Save 58%." />
        </div>
        <div className="text-center text-[#FFCE00] mt-6">
          <span className="font-bold">*All prices exclude GST. </span>
          <span className="text-sm">Membership unlocks exclusive slots, priority support, and rewards!</span>
        </div>
      </section>

      {/* Find Outlet */}
      <section id="outlets" className="bg-[#FFCE00] py-16 px-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-black">Find a Ri'Drippin Outlet</h2>
        <div className="flex justify-center mb-6">
          <img src="/chennai-map.png" alt="Chennai Outlets Map" className="w-full max-w-2xl rounded-2xl border-4 border-black shadow-xl" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Repeat for each outlet */}
          <OutletCard
            name="Ri'Drippin Perungudi"
            address="OMR Road, Perungudi, Chennai, TN"
            rating="4.7"
            open="24/7"
          />
          <OutletCard
            name="Ri'Drippin Guindy"
            address="Guindy, Chennai, TN"
            rating="4.8"
            open="7am – 11pm"
          />
          <OutletCard
            name="Ri'Drippin Thoraipakkam"
            address="Thoraipakkam, Chennai, TN"
            rating="4.6"
            open="24/7"
          />
          {/* ...more outlets */}
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="bg-black text-[#FFCE00] py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Market Growth & Opportunity</h2>
        <p className="max-w-2xl mx-auto text-lg text-center mb-8">
          Chennai is at the heart of India’s booming car care market—projected to double by 2030. Millions of cars, water scarcity, and busy urban lifestyles are fueling rapid demand for fast, tech-enabled, eco-friendly washes. Ri’Drippin is building the future of car care—at scale, for every customer segment.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <li className="bg-[#FFCE00] text-black rounded-2xl p-6 font-bold shadow-xl">
            <span className="text-4xl">5–8%</span> <br /> Market CAGR (2022–2030)
          </li>
          <li className="bg-[#FFCE00] text-black rounded-2xl p-6 font-bold shadow-xl">
            <span className="text-4xl">1.95M</span> <br /> New Vehicles in TN (2024)
          </li>
          <li className="bg-[#FFCE00] text-black rounded-2xl p-6 font-bold shadow-xl">
            <span className="text-4xl">₹400–₹800</span> <br /> Avg. Willingness to Pay per Wash
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFCE00] py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Get Drippin?</h2>
        <p className="mb-8 text-xl">Book your first wash or grab a membership in minutes. Try the drip. Love the shine.</p>
        <Button className="bg-black text-[#FFCE00] text-xl font-bold px-12 py-4 rounded-full shadow-lg hover:bg-[#222]">Download the App</Button>
      </section>

      {/* Footer */}
  <footer id="contact" className="bg-black text-[#FFCE00] text-center py-6">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <span className="font-bold">© {new Date().getFullYear()} Ri'Drippin Car Wash</span>
          <span>Made in Chennai 🚗</span>
          <a href="mailto:support@ridrippin.com" className="underline">Contact Support</a>
        </div>
      </footer>
    </div>
  )
}

// --- Components for brevity ---

type AppStepProps = {
  img: string;
  title: string;
  desc: string;
};

function AppStep({ img, title, desc }: AppStepProps) {
  return (
    <Card className="bg-[#232323] border-none shadow-xl flex flex-col items-center py-6 px-2">
      <img src={img} alt={title} className="w-24 h-40 object-contain rounded-xl mb-4 shadow-md" />
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="text-base text-[#FFCE00] opacity-90">{desc}</div>
    </Card>
  )
}

type ReasonCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function ReasonCard({ icon, title, desc }: ReasonCardProps) {
  return (
    <Card className="bg-black border-2 border-[#FFCE00] flex flex-col items-center px-8 py-8 w-60 shadow-lg rounded-2xl">
      <div className="mb-4">{icon}</div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-base text-[#FFCE00]">{desc}</div>
    </Card>
  )
}

type PriceCardProps = {
  plan: string;
  price: string;
  desc: string;
};

function PriceCard({ plan, price, desc }: PriceCardProps) {
  return (
    <Card className="bg-[#FFCE00] text-black border-none rounded-2xl shadow-xl flex flex-col items-center px-8 py-8 w-64">
      <div className="font-bold text-2xl mb-2">{plan}</div>
      <div className="text-4xl font-extrabold mb-3">{price}</div>
      <div className="text-base mb-4">{desc}</div>
      <Button className="bg-black text-[#FFCE00] font-bold w-full py-2 rounded-xl">Choose</Button>
    </Card>
  )
}

type OutletCardProps = {
  name: string;
  address: string;
  rating: string;
  open: string;
};

function OutletCard({ name, address, rating, open }: OutletCardProps) {
  return (
    <Card className="bg-white border-black border-2 rounded-xl shadow-lg p-4 flex flex-col items-start w-72">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-5 h-5 text-[#FFCE00]" />
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-sm mb-2">{address}</div>
      <div className="text-sm">⭐ {rating} &nbsp; | &nbsp; <span className="font-bold">{open}</span></div>
      <Button className="mt-4 bg-black text-[#FFCE00] font-bold px-4 py-1 rounded-xl w-full">Book Slot</Button>
    </Card>
  )
}
