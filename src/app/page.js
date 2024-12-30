export default function Home() {
  return (
    <section className="home-section">
      <h1>Andrew Anantharajah</h1>
      <h3>Computer Engineer</h3>
      <p>I'm a student at Stevens Institute of Technology, interested in{' '} 
              <span className='keyword' data-effect='finance'>finance</span>,{' '} 
              <span className='keyword' data-effect='data-engineering'>data engineering</span>, and{' '}
              <span className='keyword' data-effect='automation'>automation</span>. 
              </p>
              <p>I'm a pole vaulter on the Stevens xc/tf team, and am a volunteer coach at Staten Island Technical High School.</p>
            
      <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer">View Resume TBE</a>
    </section>
  );
}
