export function Icon({ name }) {
  const paths = {
    target: 'M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
    eye: 'M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    shield: 'M12 3l7 3v5c0 5-3.3 8.7-7 10-3.7-1.3-7-5-7-10V6l7-3zm-3 9l2 2 4-5',
    briefcase: 'M8 7V5h8v2m-11 0h14v11H5V7zm5 5h4',
    document: 'M7 4h7l3 3v13H7V4zm7 0v4h4M9 12h6M9 16h6',
    trend: 'M4 17l5-5 4 4 7-8M15 8h5v5',
    gavel: 'M13 5l6 6-2 2-6-6 2-2zM6 12l6 6-2 2-6-6 2-2zm5-5l6 6M3 21h10',
    badge: 'M12 4l7 3v6c0 4.4-3 7-7 8-4-1-7-3.6-7-8V7l7-3zm0 5v4m0 3h.01',
    lock: 'M7 10V8a5 5 0 0 1 10 0v2m-11 0h12v10H6V10z',
    phone: 'M7 5c2 5 7 10 12 12l-2 3C10 18 5 13 3 6l4-1z',
    mail: 'M4 6h16v12H4V6zm0 0l8 7 8-7',
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
