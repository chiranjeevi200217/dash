import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-wrapper bg-body">
      <div className="container">
        <div className="row g-2">
          <div className="col-lg-6 col-md-7 text-center text-md-start">
            <p className="mb-0">
              © <span className="currentYear">{new Date().getFullYear()}</span> GXON. Proudly powered by{' '}
              <a href="javascript:void(0);">LayoutDrop</a>.
            </p>
          </div>
          <div className="col-lg-6 col-md-5">
            <ul className="d-flex list-inline mb-0 gap-3 flex-wrap justify-content-center justify-content-md-end">
              <li>
                <Link className="text-body" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-body" href="/pages/faq">Faq's</Link>
              </li>
              <li>
                <Link className="text-body" href="/pages/faq">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
