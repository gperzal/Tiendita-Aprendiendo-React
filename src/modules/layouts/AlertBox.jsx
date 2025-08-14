export default function AlertBox({ show = false, variant = 'success', message = '', onClose }) {
  if (!show) return null;

  return (
    <div className={`alert alert-${variant} alert-dismissible fade show`} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
}