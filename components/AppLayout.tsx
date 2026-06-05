'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AppInitializer from './AppInitializer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  // Determine if this page should be rendered without layout wraps (e.g. auth, error, coming soon pages)
  const isStandalone =
    pathname.startsWith('/authentication') ||
    pathname.startsWith('/pages/coming-soon') ||
    pathname.includes('/error-') ||
    pathname.includes('/under-construction');

  if (isStandalone) {
    return (
      <>
        {children}
        <AppInitializer />
      </>
    );
  }

  return (
    <>
      <div className="page-layout">
        <Header />
        <Sidebar />
        
        {/* Right sidebar quick links */}
        <div className="app-sidebar-end">
          <ul className="sidebar-list">
            <li>
              <Link href="/task-management">
                <div className="avatar avatar-sm bg-warning shadow-sharp-warning rounded-circle text-white mx-auto mb-2">
                  <i className="fi fi-rr-to-do"></i>
                </div>
                <span className="text-dark">Task</span>
              </Link>
            </li>
            <li>
              <Link href="/pages/faq">
                <div className="avatar avatar-sm bg-secondary shadow-sharp-secondary rounded-circle text-white mx-auto mb-2">
                  <i className="fi fi-rr-interrogation"></i>
                </div>
                <span className="text-dark">Help</span>
              </Link>
            </li>
            <li>
              <Link href="/calendar">
                <div className="avatar avatar-sm bg-info shadow-sharp-info rounded-circle text-white mx-auto mb-2">
                  <i className="fi fi-rr-calendar"></i>
                </div>
                <span className="text-dark">Event</span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <div className="avatar avatar-sm bg-gray shadow-sharp-gray rounded-circle text-white mx-auto mb-2">
                  <i className="fi fi-rr-settings"></i>
                </div>
                <span className="text-dark">Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        {children}

        <Footer />
      </div>

      {/* Global Search Modal */}
      <div className="modal fade" id="searchResultsModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header py-1 px-3">
              <form className="d-flex align-items-center position-relative w-100" action="#">
                <button type="button" className="btn btn-sm border-0 position-absolute start-0 p-0 text-sm">
                  <i className="fi fi-rr-search"></i>
                </button>
                <input
                  type="text"
                  className="form-control form-control-lg ps-4 border-0 shadow-none"
                  id="searchInput"
                  placeholder="Search anything's"
                />
              </form>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pb-2" style={{ height: '300px', overflowY: 'auto' }}>
              <div id="recentlyResults">
                <span className="text-uppercase text-2xs fw-semibold text-muted d-block mb-2">Recently Searched:</span>
                <ul className="list-inline search-list">
                  <li>
                    <Link className="search-item" href="/">
                      <i className="fi fi-rr-apps"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="search-item" href="/chat">
                      <i className="fi fi-rr-comment"></i> Chat
                    </Link>
                  </li>
                  <li>
                    <Link className="search-item" href="/calendar">
                      <i className="fi fi-rr-calendar"></i> Calendar
                    </Link>
                  </li>
                  <li>
                    <Link className="search-item" href="/chart/apexchart">
                      <i className="fi fi-rr-chart-pie-alt"></i> Apexchart
                    </Link>
                  </li>
                  <li>
                    <Link className="search-item" href="/pages/pricing">
                      <i className="fi fi-rr-file"></i> Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="search-item" href="/email/inbox">
                      <i className="fi fi-rr-envelope"></i> Email
                    </Link>
                  </li>
                </ul>
              </div>
              <div id="searchContainer"></div>
            </div>
          </div>
        </div>
      </div>

      <AppInitializer />
    </>
  );
}
