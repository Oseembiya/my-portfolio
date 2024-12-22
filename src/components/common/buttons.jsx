// src/components/Common/Button.js
// eslint-disable-next-line react/prop-types
export default function Button({ label, name, onClick }) {
  return (
    <button className={`btn btn-${name}`} onClick={onClick}>
      {label}
    </button>
  );
}
