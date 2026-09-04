import { useEffect, useState } from 'react'

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/lzsjrp' },
  { label: 'Instagram', href: 'https://instagram.com/lzkenp' },
]

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main>
      {isLoading ? (
        <div className="loading-screen">
          <p>Connecting...</p>
        </div>
      ) : (
        <div className="container">
          <div className="header uppercase"><span>/home/lzkenp</span></div>
          <div className="profile">
            <div><p className="uppercase">hello, i'm</p><h1 id="profile-title">Felipe Eliseu<span>.</span></h1></div>
          </div>
          <div className="divider" />
          <div className="header" style={{ margin: '20px 0 15px' }}><span className="header uppercase">/dev/links</span></div>
          <nav className="profile-links">
            {profileLinks.map((link, index) => <a className="profile-link" href={link.href} target="_blank" rel="noreferrer" key={link.label}><span className="link-index">0{index + 1}</span><span className="link-copy"><strong>{link.label}</strong><small>{link.href}</small></span></a>)}
          </nav>
        </div>
      )}
    </main>
  )
}

export default App
