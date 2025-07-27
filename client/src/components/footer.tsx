import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="text-white py-8 border-t border-gray-700" style={{backgroundColor: '#0D0D0D'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear} 서범필. Made with ❤️ for game development.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, TypeScript, and a lot of coffee ☕
            </p>
          </div>
        </div>
      </footer>
  );
}