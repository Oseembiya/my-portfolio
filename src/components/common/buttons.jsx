// src/components/Common/Button.js
// eslint-disable-next-line react/prop-types
export default function Button({ label, type, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
}
