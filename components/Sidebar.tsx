import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="app-menubar" id="appMenubar">
      <div className="app-navbar-brand">
        <Link className="navbar-brand-logo" href="/">
          <img src="/assets/images/logo.svg" alt="GXON Admin Dashboard Logo" />
        </Link>
        <Link className="navbar-brand-mini visible-light" href="/">
          <img src="/assets/images/logo-text.svg" alt="GXON Admin Dashboard Logo" />
        </Link>
        <Link className="navbar-brand-mini visible-dark" href="/">
          <img src="/assets/images/logo-text-white.svg" alt="GXON Admin Dashboard Logo" />
        </Link>
      </div>
      <nav className="app-navbar" data-simplebar>
        <ul className="menubar">
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-apps"></i>
              <span className="menu-label">Dashboard</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" href="/">
                  <span className="menu-label">Dashboard</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/index-rtl">
                  <span className="menu-label">Dashboard RTL</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/ecommerce/ecommerce">
                  <span className="menu-label">E-Commerce</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/employee">
                  <span className="menu-label">Employee</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/attendance">
                  <span className="menu-label">Attendance</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/leave">
                  <span className="menu-label">Leave</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/payroll">
                  <span className="menu-label">Payroll</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/recruitment">
                  <span className="menu-label">Recruitment</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/task-management">
                  <span className="menu-label">Task Management</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/analytics">
                  <span className="menu-label">Analytics</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-heading">
            <span className="menu-label">Apps & Pages</span>
          </li>
          
          <li className="menu-item">
            <Link className="menu-link" href="/chat">
              <i className="fi fi-rr-comment"></i>
              <span className="menu-label">Chat</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" href="/calendar">
              <i className="fi fi-rr-calendar"></i>
              <span className="menu-label">Calendar</span>
            </Link>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-envelope"></i>
              <span className="menu-label">Email</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" href="/email/inbox">
                  <span className="menu-label">Inbox</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/email/compose">
                  <span className="menu-label">Compose</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/email/read-email">
                  <span className="menu-label">Read email</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-file"></i>
              <span className="menu-label">Pages</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" href="/pages/pricing">
                  <span className="menu-label">Pricing</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pages/pricing-two">
                  <span className="menu-label">Pricing 2</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pages/faq">
                  <span className="menu-label">FAQ's</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pages/coming-soon">
                  <span className="menu-label">Coming Soon</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/profile">
                  <span className="menu-label">Profile</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/roles-permissions">
                  <span className="menu-label">Roles Permissions</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/settings">
                  <span className="menu-label">Settings</span>
                </Link>
              </li>
              
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Blog</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/blog">
                      <span className="menu-label">Blog Grid</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/blog-list">
                      <span className="menu-label">Blog List</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/blog-details">
                      <span className="menu-label">Blog Details</span>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Error</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/error-404">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/error-404-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/error-404-full">
                      <span className="menu-label">Full</span>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Under Construction</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/under-construction">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/under-construction-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/pages/under-construction-full">
                      <span className="menu-label">Full</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pages/blank-page">
                  <span className="menu-label">Blank Page</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pages/activity">
                  <span className="menu-label">Activity</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-user-key"></i>
              <span className="menu-label">Authentication</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Login</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/login-basic">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/login-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/login-frame">
                      <span className="menu-label">Frame</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Register</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/register-basic">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/register-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/register-frame">
                      <span className="menu-label">Frame</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">Forgot Password</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/forgot-password-basic">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/forgot-password-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/forgot-password-frame">
                      <span className="menu-label">Frame</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-arrow">
                <a className="menu-link" href="javascript:void(0);">
                  <span className="menu-label">New Password</span>
                </a>
                <ul className="menu-inner">
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/new-password-basic">
                      <span className="menu-label">Basic</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/new-password-cover">
                      <span className="menu-label">Cover</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-link" href="/authentication/new-password-frame">
                      <span className="menu-label">Frame</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-folder-open"></i>
              <span className="menu-label">File Manager</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" href="/file-manager/folders">
                  <span className="menu-label">Folders</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/file-manager/files">
                  <span className="menu-label">Files</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rs-receipt"></i>
              <span className="menu-label">Invoice Manager</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item">
                <Link className="menu-link" href="/invoices/invoice1">
                  <span className="menu-label">Invoice 1</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/invoices/invoice2">
                  <span className="menu-label">Invoice 2</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/invoices/create-invoice">
                  <span className="menu-label">Create Invoice</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-heading">
            <span className="menu-label">Components</span>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-flux-capacitor"></i>
              <span className="menu-label">UI Components</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/components/accordion"><span className="menu-label">Accordion</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/alerts"><span className="menu-label">Alerts</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/badge"><span className="menu-label">Badge</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/breadcrumb"><span className="menu-label">Breadcrumb</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/buttons"><span className="menu-label">Buttons</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/typography"><span className="menu-label">Typography</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/button-group"><span className="menu-label">Button Group</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/card"><span className="menu-label">Card</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/collapse"><span className="menu-label">Collapse</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/carousel"><span className="menu-label">Carousel</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/dropdowns"><span className="menu-label">Dropdowns</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/modal"><span className="menu-label">Modal</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/navbar"><span className="menu-label">Navbar</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/list-group"><span className="menu-label">List Group</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/tabs"><span className="menu-label">Tabs</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/offcanvas"><span className="menu-label">Offcanvas</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/pagination"><span className="menu-label">Pagination</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/popovers"><span className="menu-label">Popovers</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/progress"><span className="menu-label">Progress</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/scrollspy"><span className="menu-label">Scrollspy</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/spinners"><span className="menu-label">Spinners</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/toasts"><span className="menu-label">Toasts</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/components/tooltips"><span className="menu-label">Tooltips</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-apps-add"></i>
              <span className="menu-label">Extended UI</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/avatar"><span className="menu-label">Avatar</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/card-action"><span className="menu-label">Card action</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/drag-and-drop"><span className="menu-label">Drag & drop</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/simplebar"><span className="menu-label">Simplebar</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/swiper"><span className="menu-label">Swiper</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/team"><span className="menu-label">Team</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/extended-ui/flags"><span className="menu-label">Flags</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-bolt"></i>
              <span className="menu-label">Icons</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/icons/flaticon"><span className="menu-label">Flaticon</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/icons/lucide"><span className="menu-label">Lucide</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/icons/fontawesome"><span className="menu-label">Font Awesome</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-heading">
            <span className="menu-label">Forms & Tables</span>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-form"></i>
              <span className="menu-label">Form Elements</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/forms/form-elements"><span className="menu-label">Form Elements</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/form-floating"><span className="menu-label">Form Floating</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/form-input-group"><span className="menu-label">Form Input Group</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/form-layout"><span className="menu-label">Form Layout</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/form-validation"><span className="menu-label">Form Validation</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/flatpickr"><span className="menu-label">Flatpickr</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/forms/tagify"><span className="menu-label">Tagify</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-table-layout"></i>
              <span className="menu-label">Table</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/table/tables-basic"><span className="menu-label">Table</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/table/tables-datatable"><span className="menu-label">Datatable</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-heading">
            <span className="menu-label">Charts & Maps</span>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-rr-chart-pie-alt"></i>
              <span className="menu-label">Charts</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/chart/apexchart"><span className="menu-label">Apex Chart</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/chart/chartjs"><span className="menu-label">Chart JS</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-item menu-arrow">
            <a className="menu-link" href="javascript:void(0);" role="button">
              <i className="fi fi-marker"></i>
              <span className="menu-label">Maps</span>
            </a>
            <ul className="menu-inner">
              <li className="menu-item"><Link className="menu-link" href="/maps/jsvectormap"><span className="menu-label">JS Vector Map</span></Link></li>
              <li className="menu-item"><Link className="menu-link" href="/maps/leaflet"><span className="menu-label">Leaflet</span></Link></li>
            </ul>
          </li>
          
          <li className="menu-heading">
            <span className="menu-label">Others</span>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="javascript:void(0);">
              <i className="fi fi-rs-badget-check-alt"></i>
              <span className="menu-label">Badge</span>
              <span className="badge badge-sm rounded-pill bg-secondary ms-2 float-end">5</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="https://gxon.layoutdrop.com/doc/changelog.html" target="_blank" rel="noopener noreferrer">
              <i className="fi fi-rr-square-terminal"></i>
              <span className="menu-label">Changelog v1.5.0</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="app-footer">
        <Link href="/pages/faq" className="btn btn-outline-light waves-effect btn-shadow btn-app-nav w-100">
          <i className="fi fi-rs-interrogation text-primary"></i>
          <span className="nav-text">Help and Support</span>
        </Link>
      </div>
    </aside>
  );
}
