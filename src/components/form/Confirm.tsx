import React from 'react'

interface ConfirmProps {
  turnus: string
}

const Confirm: React.FC<ConfirmProps> = ({ turnus }) => {
  return (
    <div className="confirm">
      <div className="confirmContainer">
        Registrace na {turnus}. turnus proběhla v pořádku. Očekávej potvrzovací e-mail.<br />Doporučujeme zkontrolovat také Spam nebo Hromadné zprávy.
      </div>
    </div>
  )
}
export default Confirm
