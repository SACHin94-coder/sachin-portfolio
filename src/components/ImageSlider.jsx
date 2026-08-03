import { useState } from 'react'

export default function ImageSlider({ images = [], alt = 'Project screenshot' }) {
  const [index, setIndex] = useState(0)

  if (!images.length) {
    return (
      <div className="image-slider image-slider-empty" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="38" height="38">
          <rect x="9" y="13" width="46" height="38" rx="5" fill="none" stroke="var(--moss)" strokeWidth="3" />
          <circle cx="22" cy="26" r="4.5" fill="var(--amber)" />
          <path
            d="M13 45 L25 32 L35 42 L44 33 L51 40"
            stroke="var(--lichen)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  const goTo = (i) => setIndex((i + images.length) % images.length)

  return (
    <div className="image-slider">
      <div
        className="image-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={src + i} src={src} alt={`${alt} — photo ${i + 1}`} loading="lazy" />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`slider-dot ${i === index ? 'slider-dot-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
