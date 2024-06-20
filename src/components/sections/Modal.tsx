import '../../scss/Modal.scss'
import React, { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
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
            Seznamováku, kde uvidíš manažery, se kterými zažiješ to nejšílenější
            léto v životě! Formulář, kterým se budeš na Seznamovák registrovat, a
            naše partnery, kteří nám k tomu všemu pomohli.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Modal
