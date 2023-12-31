export function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <nav className="navbar bg-base-200 justify-between">
        <a className="btn btn-ghost normal-case text-xl">Perkss Workflows</a>
        <button
          className="btn btn-outline"
          onClick={() => window.workflow.showModal()}
        >
          Create Workflow
        </button>
      </nav>

      <main className="flex-grow px-3 py-3 md:py-10 md:px-20">{children}</main>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <h1 className="text-4xl">#</h1>
          <p>
            Perkss Ltd.
            <br />
            Providing reliable services since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}
