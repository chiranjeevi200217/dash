import Link from 'next/link';

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <button className="app-toggler" type="button" aria-label="app toggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="app-header-start d-none d-md-flex">
          <form className="d-flex align-items-center h-100 w-lg-250px w-xxl-300px position-relative" action="#">
            <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
              <i className="fi fi-rr-search"></i>
            </button>
            <input
              type="text"
              className="form-control rounded-5 ps-5"
              placeholder="Search anything's"
              data-bs-toggle="modal"
              data-bs-target="#searchResultsModal"
            />
          </form>
          <ul className="navbar-nav gap-4 flex-row d-none d-xxl-flex">
            <li className="nav-item">
              <Link className="nav-link" href="/analytics">Reports & Analytics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pages/faq">Help</Link>
            </li>
          </ul>
        </div>
        <div className="app-header-end">
          <div className="px-lg-3 px-2 ps-0 d-flex align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light position-relative"
                id="ld-theme"
                type="button"
                data-bs-auto-close="outside"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                <i className="fi fi-rr-brightness scale-1x theme-icon-active"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex gap-2 align-items-center"
                    data-bs-theme-value="light"
                    aria-pressed="false"
                  >
                    <i className="fi fi-rr-brightness scale-1x" data-theme="light"></i> Light
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex gap-2 align-items-center"
                    data-bs-theme-value="dark"
                    aria-pressed="false"
                  >
                    <i className="fi fi-rr-moon scale-1x" data-theme="dark"></i> Dark
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex gap-2 align-items-center"
                    data-bs-theme-value="auto"
                    aria-pressed="true"
                  >
                    <i className="fi fi-br-circle-half-stroke scale-1x" data-theme="auto"></i> Auto
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="vr my-3"></div>
          <div className="d-flex align-items-center gap-sm-2 gap-0 px-lg-4 px-sm-2 px-1">
            <Link
              href="/email/inbox"
              className="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light position-relative"
            >
              <i className="fi fi-rr-envelope"></i>
              <span className="position-absolute top-0 end-0 p-1 mt-1 me-1 bg-danger border border-3 border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </Link>
            <div className="dropdown text-end">
              <button
                type="button"
                className="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="fi fi-rr-bell"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-lg-end p-0 w-300px mt-2">
                <div className="px-3 py-3 border-bottom d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">
                    Notifications <span className="badge badge-sm rounded-pill bg-primary ms-2">9</span>
                  </h6>
                  <i className="bi bi-x-lg cursor-pointer"></i>
                </div>
                <div className="p-2" style={{ height: '300px', overflowY: 'auto' }}>
                  <ul className="list-group list-group-hover list-group-smooth list-group-unlined">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs avatar-status-success rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Emma Smith</h6>
                        <small className="text-body d-block">Need to update the details.</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">7 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs bg-success rounded-circle text-white">D</div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Design Team</h6>
                        <small className="text-body d-block">Check your shared folder.</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">6 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs bg-dark rounded-circle text-white">
                        <i className="fi fi-rr-lock"></i>
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Security Update</h6>
                        <small className="text-body d-block">Password successfully set.</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">5 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs bg-info rounded-circle text-white">
                        <i className="fi fi-rr-shopping-cart"></i>
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Invoice #1432</h6>
                        <small className="text-body d-block">has been paid Amount: $899.00</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">5 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs bg-danger rounded-circle text-white">R</div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Emma Smith</h6>
                        <small className="text-body d-block">added you to Dashboard Analytics</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">5 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs avatar-status-success rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Olivia Clark</h6>
                        <small className="text-body d-block">You can now view the “Report”.</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">4 hr ago</small>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="avatar avatar-xs avatar-status-danger rounded-circle me-1">
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="ms-2 me-auto">
                        <h6 className="mb-0">Isabella Walker</h6>
                        <small className="text-body d-block">@Isabella please review.</small>
                        <small className="text-muted position-absolute end-0 top-0 mt-2 me-3">2 hr ago</small>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-2">
                  <Link href="/analytics" className="btn w-100 btn-primary waves-effect waves-light">
                    View all notifications
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/calendar" className="btn btn-icon btn-action-gray rounded-circle waves-effect waves-light">
              <i className="fi fi-rr-calendar"></i>
            </Link>
          </div>
          <div className="vr my-3"></div>
          <div className="dropdown text-end ms-sm-3 ms-2 ms-lg-4">
            <a
              href="#"
              className="d-flex align-items-center py-2"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <div className="text-end me-2 d-none d-lg-inline-block">
                <div className="fw-bold text-dark">Robert Brown</div>
                <small className="text-body d-block lh-sm">
                  <i className="fi fi-rr-angle-down text-3xs me-1"></i> Manager
                </small>
              </div>
              <div className="avatar avatar-sm rounded-circle avatar-status-success">
                <img src="/assets/images/avatar/avatar1.webp" alt="" />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end w-225px mt-1">
              <li className="d-flex align-items-center p-2">
                <div className="avatar avatar-sm rounded-circle">
                  <img src="/assets/images/avatar/avatar1.webp" alt="" />
                </div>
                <div className="ms-2">
                  <div className="fw-bold text-dark">Robert Brown </div>
                  <small className="text-body d-block lh-sm">robert@gmail.com</small>
                </div>
              </li>
              <li>
                <div className="dropdown-divider my-1"></div>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/profile">
                  <i className="fi fi-rr-user scale-1x"></i> View Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/task-management">
                  <i className="fi fi-rr-note scale-1x"></i> My Task
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/pages/faq">
                  <i className="fi fi-rs-interrogation scale-1x"></i> Help Center
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/settings">
                  <i className="fi fi-rr-settings scale-1x"></i> Account Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2" href="/pages/pricing">
                  <i className="fi fi-rr-usd-circle scale-1x"></i> Upgrade Plan
                </Link>
              </li>
              <li>
                <div className="dropdown-divider my-1"></div>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-2 text-danger" href="/authentication/login-basic">
                  <i className="fi fi-sr-exit scale-1x"></i> Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
