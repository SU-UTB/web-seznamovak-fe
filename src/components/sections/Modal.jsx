import '../../scss/Modal.scss'
import React, { useEffect } from 'react'

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h1>
          <strong>Upozornění</strong>
        </h1>
        <div>
          <h2>Nový web je na cestě!</h2>
          <p>
            Na tomto webu prozatím najdeš aktuální info k{' '}
            <strong>Seznamováku UTB - 2024</strong>, ale brzy se spustí nový web
            seznamováku, kde uvidíš manažery, se kterými zajiješ to nejšílenější
            léto v životě, formulář, kterým se budeš na Seznamovák registrovat a
            naše partnery, kteří nám k tomu všemu pomohli.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
