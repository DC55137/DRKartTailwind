import React from 'react'

export default function Video() {
  return (
    <div className="my-24 flex h-4/5 flex-col items-center justify-center bg-white ">
      <div className="flex w-full flex-col items-center justify-center sm:px-20 lg:px-40">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/v8byOlZdJF4?start=32`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
