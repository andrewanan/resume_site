import './styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Andrew Anantharajah',
  description: 'Resume website built using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header className="header-container">
          <nav className='nav'> 
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </header>
        
        <main>{children}</main>
        <footer className="footer-container">
          <p>©2024 Andrew Anantharajah</p>

        </footer>
        
      </body>
    </html>
  )
}