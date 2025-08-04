import React, { forwardRef } from 'react'

const Section = forwardRef(({ id, className, children }, ref) => (
  <section ref={ref} id={id} className={`min-h-screen ${className}`}>
    {children}
  </section>
));


export default Section