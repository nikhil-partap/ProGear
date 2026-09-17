import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { fitments, whatsappUrl } from '../data';

const filters = ['All', '7D', '9D'];

const Arrow = ({ direction }) => (
  <svg viewBox="0 0 20 10" aria-hidden="true">
    <path d={direction === 'prev' ? 'M20 5H2M6 1 2 5l4 4' : 'M0 5h18M14 1l4 4-4 4'} />
  </svg>
);

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedFitment, setSelectedFitment] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const openerRef = useRef(null);
  const closeRef = useRef(null);
  const visibleFitments = filter === 'All' ? fitments : fitments.filter(item => item.type === filter);
  const selectedImage = selectedFitment?.images[imageIndex];

  const closeLightbox = () => {
    setSelectedFitment(null);
    openerRef.current?.focus();
  };

  const moveImage = direction => {
    setImageIndex(current => (current + direction + selectedFitment.images.length) % selectedFitment.images.length);
  };

  useEffect(() => {
    if (!selectedFitment) return undefined;

    const handleKeyDown = event => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') moveImage(-1);
      if (event.key === 'ArrowRight') moveImage(1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFitment]);

  return (
    <main id="main-content" className="page page-top gallery-page">
      <section className="page-intro gallery-intro">
        <p className="eyebrow">Customer gallery</p>
        <h1 className="page-title">Fitted in <span>real cars.</span></h1>
        <p className="page-lede">Real fitments from the current library — every pattern matched to the exact vehicle. Open a car to see the full set, then enquire for yours.</p>
      </section>

      <section className="gallery-library" aria-label="Customer fitments">
        <div className="gallery-filters" aria-label="Filter gallery">
          {filters.map(item => (
            <button
              className={filter === item ? 'gallery-filter active' : 'gallery-filter'}
              type="button"
              aria-pressed={filter === item}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
          <span className="gallery-count">{visibleFitments.length} fitment{visibleFitments.length === 1 ? '' : 's'}</span>
        </div>

        <div className="gallery-grid">
          {visibleFitments.map(item => (
            <button
              className="gallery-card"
              type="button"
              key={item.id}
              onClick={event => {
                openerRef.current = event.currentTarget;
                setImageIndex(0);
                setSelectedFitment(item);
              }}
            >
              <span className="gallery-media">
                <img src={item.images[0]} alt={`${item.type} mats fitted in a ${item.model}`} loading="lazy" />
                <span className="gallery-badge">{item.type}</span>
              </span>
              <span className="gallery-name">{item.model}</span>
              <span className="gallery-meta">
                <span>{item.confirmed ? 'Confirmed fitment' : 'Gallery fitment'}</span>
                <span>{item.images.length} photo{item.images.length === 1 ? '' : 's'}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-more">
          <Link className="btn-secondary" to="/contact">Don't see your car? Ask us</Link>
        </div>
      </section>

      {selectedFitment && (() => {
        const viewLabel = ['Driver side', 'Co-Driver', 'Back Side'][imageIndex] || `Rear view ${imageIndex - 1}`;
        return (
          <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Fitment photo viewer">
            <div className="gallery-lightbox-top">
              <span>{String(imageIndex + 1).padStart(2, '0')} / {String(selectedFitment.images.length).padStart(2, '0')} &nbsp;·&nbsp; {viewLabel}</span>
              <button className="gallery-close" type="button" onClick={closeLightbox} ref={closeRef} aria-label="Close photo viewer">
                <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m1 1 10 10M11 1 1 11" /></svg>
              </button>
            </div>
            <div className="gallery-lightbox-stage">
              <img src={selectedImage} alt={`${selectedFitment.model} ${selectedFitment.type} car mats — ${viewLabel} photo ${imageIndex + 1}`} />
            </div>
            <div className="gallery-lightbox-bottom">
              <div>
                <strong>{selectedFitment.model}</strong>
                <span>{selectedFitment.type} · {selectedFitment.confirmed ? 'confirmed' : 'gallery'} fitment · <span className="view-tag">{viewLabel}</span></span>
              </div>
              <div className="gallery-lightbox-actions">
                <button className="gallery-arrow" type="button" onClick={() => moveImage(-1)} aria-label="Previous photo"><Arrow direction="prev" /></button>
                <button className="gallery-arrow" type="button" onClick={() => moveImage(1)} aria-label="Next photo"><Arrow direction="next" /></button>
                <a className="gallery-enquire" href={whatsappUrl(`Hi ProGear Mats! I saw the ${selectedFitment.model} (${selectedFitment.type}) fitment on your website. Please share options for my car.`)} target="_blank" rel="noreferrer">
                  Enquire for your car <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}
