import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Modal from 'react-modal'
import { Container } from '../Container'
import { images } from './images'

Modal.setAppElement('#__next')

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index)
    setModalIsOpen(true)
  }

  const customThumbnail = (item) => {
    return (
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-48 w-full cursor-pointer object-cover"
          src={item.thumbnail}
          alt={item.description}
          onClick={() => handleImageSelect(item.originalIndex)}
        />
      </div>
    )
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="mb-28">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  lg:mx-0">
            <p className="text-base font-semibold leading-7 text-main-600">
              Meet the DR Racing Kart Family.
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Check out our Go-Kart Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are excited to showcase our collection of go-karts in action.
              Our gallery features high-quality images of our go-karts in
              various settings, highlighting their unique features and
              capabilities. You can browse through our gallery to get a closer
              look at our go-karts, from their sleek designs to their powerful
              engines. We have organized our gallery into different categories,
              so you can easily find what you are looking for. Whether you are a
              go-kart enthusiast or just looking for a fun way to enjoy the
              outdoors, we have the perfect go-kart for you. Check out our
              gallery and explore the possibilities of what our go-karts can
              offer you!
            </p>
          </div>
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-48 w-full cursor-pointer rounded-lg object-cover shadow-md"
                src={image.thumbnail}
                alt={image.description}
                onClick={() => handleImageSelect(index)}
              />
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Gallery Modal"
          className="gallery-modal"
          overlayClassName="gallery-overlay bg-gray-900 bg-opacity-75"
        >
          <button
            className="absolute top-0 right-0 z-50 m-4 text-xl font-bold text-main-500 focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showBullets={false}
            showPlayButton={false}
            showFullscreenButton={false}
            startIndex={selectedImageIndex}
            className="gallery-content"
          />
        </Modal>
      </Container>
    </div>
  )
}
