import React, { useEffect, useState } from 'react'
import carouselData from '../lib/carousel.json'

export default function Carousel() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Detect theme from document or localStorage
    const html = document.documentElement
    const dark = html.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      localStorage.getItem('theme') === 'dark'
    setIsDark(dark)
  }, [])

  return (
    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '2rem 0' }}>
      {carouselData.map((card, idx) => {
        // Fallback to theme-aware colors if card colors are not readable
        const background = card.background === 'dark' ? (isDark ? '#17171d' : '#fff') : card.background
        const titleColor = card.titleColor === 'white' ? (isDark ? '#fff' : '#17171d') : card.titleColor
        const descriptionColor = card.descriptionColor === 'white' ? (isDark ? '#fff' : '#444') : card.descriptionColor
        return (
          <a
            key={idx}
            href={card.link}
            style={{
              background,
              color: titleColor,
              borderRadius: '1rem',
              minWidth: 300,
              maxWidth: 350,
              padding: '1.5rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <img src={card.img} alt={card.title} style={{ width: 64, height: 64, marginBottom: 16 }} />
            <h2 style={{ color: titleColor }}>{card.title}</h2>
            <p style={{ color: descriptionColor }}>{card.description}</p>
          </a>
        )
      })}
    </div>
  )
}
