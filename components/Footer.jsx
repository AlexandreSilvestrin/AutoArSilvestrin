import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-300">
            © 2025 Auto Ar Silvestrin
          </p>
          <p className="text-gray-300 mt-2">
            CNPJ: 64.652.647/0001-80
          </p>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              Desenvolvido por{' '}
              <a 
                href="https://www.linkedin.com/in/alexandre-silvestrin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
              >
                Alexandre Silvestrin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 