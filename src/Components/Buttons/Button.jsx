function Button({ label, addOnClasses, eventHandler }) {
  return (
    <>
      <button
        type="button"
        class={`btn ${addOnClasses}`}
        onClick={eventHandler}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
