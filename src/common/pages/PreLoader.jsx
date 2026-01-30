import React from 'react'

function PreLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/4cec2c69321565.5b7d0cbe75933.gif"
        alt="preloader"
        className="w-24 sm:w-32 md:w-40 lg:w-64"
      />
    </div>
  )
}

export default PreLoader
