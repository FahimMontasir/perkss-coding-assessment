export function Modal() {
  return (
    <dialog id="workflow" className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mb-5">Say about your workflow!</h3>
        <form>
          <Input label="What is your workflow name?" />
          <Input label="What is your workflow name?" />
        </form>
      </form>
    </dialog>
  );
}

const Input = ({ label, ...others }) => {
  return (
    <div className="form-control w-full max-w-xs my-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...others}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
