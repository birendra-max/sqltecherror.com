import React from 'react'

export default function Footers() {
  return (
    <>
      <footer className="bg-black text-white py-4 px-3 mt-16">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p className="text-xs text-gray-400 md:text-sm">Copyright  &copy; All Rights Reserved</p>
          </div>
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
              <li><a href="contact.php" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mx-4"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nsdahiya8040@gmail.com" className="text-gray-400 hover:text-white">Linked In</a></li>
              <li><a href="https://wa.me/919053942621/?text=Hi Naren, Whatsup" className="text-gray-400 hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
