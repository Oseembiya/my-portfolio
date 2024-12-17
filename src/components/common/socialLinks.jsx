// src/components/Common/SocialLink.js
// eslint-disable-next-line react/prop-types
export default function SocialLink({ href, ariaLabel, iconClass }) {
  return (
    <a
      className="text-white"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <i className={iconClass}></i>
    </a>
  );
}
