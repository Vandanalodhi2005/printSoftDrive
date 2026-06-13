import React from 'react'

const marqueeItems = [
  'Device Drivers',
  'Graphics & GPU',
  'Audio & Sound',
  'Wi-Fi & Networking',
  'USB & Devices',
  'Storage & SSD',
  'Bluetooth',
  'Chipset & System'
]

export default function Marquee() {
  return (
    <div className="brand-marquee" aria-hidden="true">
      <div className="brand-marquee-track">
        {/* Render twice for seamless loop */}
        {marqueeItems.map((item, index) => (
          <span key={`mq1-${index}`} className="brand-marquee-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </span>
        ))}
        {marqueeItems.map((item, index) => (
          <span key={`mq2-${index}`} className="brand-marquee-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
