// Modals linked to Recent Projects under Dashboard
import './Modals.css';

export interface ModalsProps {
  closeModal: any;
}

const Modals = ({ closeModal }: ModalsProps) => {
  return (
    <div className='modalContainer'>
      <div className='titleCloseBtn'>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className='title'>
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className='body'>
        <p>The next page looks amazing. Hope you want to go there!</p>
      </div>
      <div className='footer'>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modals;
