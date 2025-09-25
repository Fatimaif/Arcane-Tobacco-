import React from 'react'

export const Footer = () => {
  return (
     <div className="bg-blue-950 text-white  py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 text-sm">
        <div className="flex space-x-8">
          <a href="/accessibility" className="hover:underline">
            Accessibility
          </a>
          <a href="/conditions-of-use" className="hover:underline">
            Conditions of Use
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="hover:underline">
            Cookie Policy
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Arcane Tobacco Company Ltd. A member of the Arcane Holdings Group. All rights reserved.
        </p>
      </div>
    </div>
  )
}

