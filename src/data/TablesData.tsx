import "../pages/All.css";

export const tables = [
  {
    id: 2920,
    name: "Simple Data Table",
    preview: (
      <div className="table-2920">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alexander</td>
              <td>
                <span>Active</span>
              </td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>Sarah</td>
              <td>
                <span>Active</span>
              </td>
              <td>Editor</td>
            </tr>
            <tr>
              <td>Michael</td>
              <td>
                <span>Pending</span>
              </td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alexander</td>
            <td><span>Active</span></td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Sarah</td>
            <td><span>Active</span></td>
            <td>Editor</td>
        </tr>
        <tr>
            <td>Michael</td>
            <td><span>Pending</span></td>
            <td>Member</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    font-weight: 600;
    color: #0f172a;
}
.Table td span {
    padding: 4px 8px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 11px;
    font-weight: 600;
}`,
  },
  {
    id: 2921,
    name: "Striped Table",
    preview: (
      <div className="table-2921">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Keyboard</td>
              <td>Accessories</td>
              <td>€89</td>
            </tr>
            <tr>
              <td>Monitor</td>
              <td>Displays</td>
              <td>€349</td>
            </tr>
            <tr>
              <td>Mouse</td>
              <td>Accessories</td>
              <td>€59</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Keyboard</td>
            <td>Accessories</td>
            <td>€89</td>
        </tr>
        <tr>
            <td>Monitor</td>
            <td>Displays</td>
            <td>€349</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>Accessories</td>
            <td>€59</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
}
.Table th {
    color: #0f172a;
    background: #f8fafc;
}
.Table tbody tr:nth-child(even) {
    background: #f8fafc;
}
.Table tbody tr {
    border-bottom: 1px solid #e2e8f0;
}`,
  },
  {
    id: 2922,
    name: "Bordered Table",
    preview: (
      <div className="table-2922">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#INV-2048</td>
              <td>Acme Corp</td>
              <td>€1,240</td>
            </tr>
            <tr>
              <td>#INV-2049</td>
              <td>Northstar</td>
              <td>€860</td>
            </tr>
            <tr>
              <td>#INV-2050</td>
              <td>Pixel Labs</td>
              <td>€2,140</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Invoice</th>
            <th>Client</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#INV-2048</td>
            <td>Acme Corp</td>
            <td>€1,240</td>
        </tr>
        <tr>
            <td>#INV-2049</td>
            <td>Northstar</td>
            <td>€860</td>
        </tr>
        <tr>
            <td>#INV-2050</td>
            <td>Pixel Labs</td>
            <td>€2,140</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
    border: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2923,
    name: "Compact Table",
    preview: (
      <div className="table-2923">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Plan</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Olivia</td>
              <td>Pro</td>
              <td>12</td>
            </tr>
            <tr>
              <td>James</td>
              <td>Business</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Emma</td>
              <td>Starter</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Member</th>
            <th>Plan</th>
            <th>Seats</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Olivia</td>
            <td>Pro</td>
            <td>12</td>
        </tr>
        <tr>
            <td>James</td>
            <td>Business</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Emma</td>
            <td>Starter</td>
            <td>5</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}
.Table td {
    color: #1e293b;
}`,
  },
  {
    id: 2924,
    name: "Status Table",
    preview: (
      <div className="table-2924">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Status</th>
              <th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>API Gateway</td>
              <td>
                <span className="success">Operational</span>
              </td>
              <td>99.99%</td>
            </tr>
            <tr>
              <td>Database</td>
              <td>
                <span className="success">Operational</span>
              </td>
              <td>99.95%</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>
                <span className="warning">Degraded</span>
              </td>
              <td>98.82%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Service</th>
            <th>Status</th>
            <th>Uptime</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>API Gateway</td>
            <td><span class="success">Operational</span></td>
            <td>99.99%</td>
        </tr>
        <tr>
            <td>Database</td>
            <td><span class="success">Operational</span></td>
            <td>99.95%</td>
        </tr>
        <tr>
            <td>Storage</td>
            <td><span class="warning">Degraded</span></td>
            <td>98.82%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
}
.Table span {
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 600;
}
.Table .success {
    background: #dcfce7;
    color: #15803d;
}
.Table .warning {
    background: #fef3c7;
    color: #b45309;
}`,
  },
  {
    id: 2925,
    name: "Dark Table",
    preview: (
      <div className="table-2925">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Website Redesign</td>
              <td>Alex</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Mobile App</td>
              <td>Sophie</td>
              <td>Review</td>
            </tr>
            <tr>
              <td>Dashboard</td>
              <td>Daniel</td>
              <td>Planning</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Project</th>
            <th>Owner</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Website Redesign</td>
            <td>Alex</td>
            <td>Active</td>
        </tr>
        <tr>
            <td>Mobile App</td>
            <td>Sophie</td>
            <td>Review</td>
        </tr>
        <tr>
            <td>Dashboard</td>
            <td>Daniel</td>
            <td>Planning</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    background: #0f172a;
    color: #cbd5e1;
    font-size: 12px;
    border-radius: 10px;
    overflow: hidden;
}
.Table th,
.Table td {
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid #1e293b;
}
.Table th {
    background: #1e293b;
    color: #f8fafc;
}`,
  },
  {
    id: 2926,
    name: "Pricing Table",
    preview: (
      <div className="table-2926">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Users</th>
              <th>Storage</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter</td>
              <td>5</td>
              <td>20 GB</td>
              <td>€19</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>25</td>
              <td>100 GB</td>
              <td>€49</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>100</td>
              <td>500 GB</td>
              <td>€99</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Plan</th>
            <th>Users</th>
            <th>Storage</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Starter</td>
            <td>5</td>
            <td>20 GB</td>
            <td>€19</td>
        </tr>
        <tr>
            <td>Pro</td>
            <td>25</td>
            <td>100 GB</td>
            <td>€49</td>
        </tr>
        <tr>
            <td>Business</td>
            <td>100</td>
            <td>500 GB</td>
            <td>€99</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
}
.Table td:last-child {
    font-weight: 700;
    color: #4f46e5;
}`,
  },
  {
    id: 2927,
    name: "Activity Table",
    preview: (
      <div className="table-2927">
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>User</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Updated settings</td>
              <td>Emma</td>
              <td>2 min ago</td>
            </tr>
            <tr>
              <td>Created project</td>
              <td>Thomas</td>
              <td>14 min ago</td>
            </tr>
            <tr>
              <td>Uploaded file</td>
              <td>Lucas</td>
              <td>31 min ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Activity</th>
            <th>User</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Updated settings</td>
            <td>Emma</td>
            <td>2 min ago</td>
        </tr>
        <tr>
            <td>Created project</td>
            <td>Thomas</td>
            <td>14 min ago</td>
        </tr>
        <tr>
            <td>Uploaded file</td>
            <td>Lucas</td>
            <td>31 min ago</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-size: 11px;
    text-transform: uppercase;
}
.Table td:last-child {
    color: #94a3b8;
    font-size: 11px;
}`,
  },
  {
    id: 2928,
    name: "Team Table",
    preview: (
      <div className="table-2928">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Department</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>James Wilson</td>
              <td>Engineering</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>Emma Davis</td>
              <td>Design</td>
              <td>Great</td>
            </tr>
            <tr>
              <td>Oliver Smith</td>
              <td>Marketing</td>
              <td>Good</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Member</th>
            <th>Department</th>
            <th>Performance</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>James Wilson</td>
            <td>Engineering</td>
            <td>Excellent</td>
        </tr>
        <tr>
            <td>Emma Davis</td>
            <td>Design</td>
            <td>Great</td>
        </tr>
        <tr>
            <td>Oliver Smith</td>
            <td>Marketing</td>
            <td>Good</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #0f172a;
    background: #f8fafc;
}
.Table td:first-child {
    font-weight: 600;
    color: #1e293b;
}`,
  },
  {
    id: 2929,
    name: "Revenue Table",
    preview: (
      <div className="table-2929">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>€18,400</td>
              <td>+12.4%</td>
            </tr>
            <tr>
              <td>February</td>
              <td>€22,800</td>
              <td>+24.0%</td>
            </tr>
            <tr>
              <td>March</td>
              <td>€26,500</td>
              <td>+16.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Growth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>€18,400</td>
            <td>+12.4%</td>
        </tr>
        <tr>
            <td>February</td>
            <td>€22,800</td>
            <td>+24.0%</td>
        </tr>
        <tr>
            <td>March</td>
            <td>€26,500</td>
            <td>+16.2%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 14px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    background: #f8fafc;
}
.Table td:nth-child(2) {
    font-weight: 700;
    color: #0f172a;
}
.Table td:nth-child(3) {
    color: #16a34a;
    font-weight: 600;
}`,
  },
  {
    id: 2930,
    name: "Users Table",
    preview: (
      <div className="table-2930">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas Martin</td>
              <td>lucas@example.com</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>Sophie Carter</td>
              <td>sophie@example.com</td>
              <td>Editor</td>
            </tr>
            <tr>
              <td>Noah Williams</td>
              <td>noah@example.com</td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lucas Martin</td>
            <td>lucas@example.com</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Sophie Carter</td>
            <td>sophie@example.com</td>
            <td>Editor</td>
        </tr>
        <tr>
            <td>Noah Williams</td>
            <td>noah@example.com</td>
            <td>Member</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 13px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:first-child {
    font-weight: 600;
    color: #1e293b;
}`,
  },
  {
    id: 2931,
    name: "Projects Table",
    preview: (
      <div className="table-2931">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Progress</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Website Redesign</td>
              <td>82%</td>
              <td>Emma</td>
            </tr>
            <tr>
              <td>Mobile Platform</td>
              <td>64%</td>
              <td>Daniel</td>
            </tr>
            <tr>
              <td>Analytics Suite</td>
              <td>91%</td>
              <td>Olivia</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Project</th>
            <th>Progress</th>
            <th>Owner</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Website Redesign</td>
            <td>82%</td>
            <td>Emma</td>
        </tr>
        <tr>
            <td>Mobile Platform</td>
            <td>64%</td>
            <td>Daniel</td>
        </tr>
        <tr>
            <td>Analytics Suite</td>
            <td>91%</td>
            <td>Olivia</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 13px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-weight: 600;
}
.Table td:nth-child(2) {
    color: #2563eb;
    font-weight: 600;
}`,
  },
  {
    id: 2932,
    name: "Payments Table",
    preview: (
      <div className="table-2932">
        <table>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment #1042</td>
              <td>Sep 08, 2026</td>
              <td>€248.00</td>
            </tr>
            <tr>
              <td>Payment #1043</td>
              <td>Sep 07, 2026</td>
              <td>€740.00</td>
            </tr>
            <tr>
              <td>Payment #1044</td>
              <td>Sep 06, 2026</td>
              <td>€129.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Payment #1042</td>
            <td>Sep 08, 2026</td>
            <td>€248.00</td>
        </tr>
        <tr>
            <td>Payment #1043</td>
            <td>Sep 07, 2026</td>
            <td>€740.00</td>
        </tr>
        <tr>
            <td>Payment #1044</td>
            <td>Sep 06, 2026</td>
            <td>€129.00</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 13px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    color: #0f172a;
    font-weight: 700;
}`,
  },
  {
    id: 2933,
    name: "Tickets Table",
    preview: (
      <div className="table-2933">
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Priority</th>
              <th>Assignee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#TK-104</td>
              <td>
                <span className="high">High</span>
              </td>
              <td>James</td>
            </tr>
            <tr>
              <td>#TK-105</td>
              <td>
                <span className="medium">Medium</span>
              </td>
              <td>Sarah</td>
            </tr>
            <tr>
              <td>#TK-106</td>
              <td>
                <span className="low">Low</span>
              </td>
              <td>Oliver</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Ticket</th>
            <th>Priority</th>
            <th>Assignee</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#TK-104</td>
            <td><span class="high">High</span></td>
            <td>James</td>
        </tr>
        <tr>
            <td>#TK-105</td>
            <td><span class="medium">Medium</span></td>
            <td>Sarah</td>
        </tr>
        <tr>
            <td>#TK-106</td>
            <td><span class="low">Low</span></td>
            <td>Oliver</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-weight: 600;
}
.Table span {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 600;
}
.Table .high {
    background: #fee2e2;
    color: #b91c1c;
}
.Table .medium {
    background: #fef3c7;
    color: #b45309;
}
.Table .low {
    background: #dcfce7;
    color: #15803d;
}`,
  },
  {
    id: 2934,
    name: "Employees Table",
    preview: (
      <div className="table-2934">
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daniel Brooks</td>
              <td>Engineering</td>
              <td>Amsterdam</td>
            </tr>
            <tr>
              <td>Emily Stone</td>
              <td>Marketing</td>
              <td>Rotterdam</td>
            </tr>
            <tr>
              <td>Ryan Cooper</td>
              <td>Design</td>
              <td>Utrecht</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Daniel Brooks</td>
            <td>Engineering</td>
            <td>Amsterdam</td>
        </tr>
        <tr>
            <td>Emily Stone</td>
            <td>Marketing</td>
            <td>Rotterdam</td>
        </tr>
        <tr>
            <td>Ryan Cooper</td>
            <td>Design</td>
            <td>Utrecht</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 13px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:first-child {
    font-weight: 600;
}`,
  },
  {
    id: 2935,
    name: "Inventory Table",
    preview: (
      <div className="table-2935">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Stock</th>
              <th>Warehouse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Keyboard Pro</td>
              <td>
                <span className="available">124</span>
              </td>
              <td>WH-A</td>
            </tr>
            <tr>
              <td>Wireless Mouse</td>
              <td>
                <span className="available">82</span>
              </td>
              <td>WH-B</td>
            </tr>
            <tr>
              <td>USB Hub</td>
              <td>
                <span className="limited">8</span>
              </td>
              <td>WH-A</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Item</th>
            <th>Stock</th>
            <th>Warehouse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Keyboard Pro</td>
            <td><span class="available">124</span></td>
            <td>WH-A</td>
        </tr>
        <tr>
            <td>Wireless Mouse</td>
            <td><span class="available">82</span></td>
            <td>WH-B</td>
        </tr>
        <tr>
            <td>USB Hub</td>
            <td><span class="limited">8</span></td>
            <td>WH-A</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
}
.Table span {
    font-weight: 700;
}
.Table .available {
    color: #16a34a;
}
.Table .limited {
    color: #d97706;
}`,
  },
  {
    id: 2936,
    name: "Orders Table",
    preview: (
      <div className="table-2936">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-501</td>
              <td>Michael Reed</td>
              <td>€184.00</td>
            </tr>
            <tr>
              <td>#ORD-502</td>
              <td>Anna White</td>
              <td>€428.00</td>
            </tr>
            <tr>
              <td>#ORD-503</td>
              <td>David King</td>
              <td>€92.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#ORD-501</td>
            <td>Michael Reed</td>
            <td>€184.00</td>
        </tr>
        <tr>
            <td>#ORD-502</td>
            <td>Anna White</td>
            <td>€428.00</td>
        </tr>
        <tr>
            <td>#ORD-503</td>
            <td>David King</td>
            <td>€92.00</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-weight: 600;
    background: #f8fafc;
}
.Table td:first-child {
    color: #2563eb;
    font-weight: 600;
}
.Table td:last-child {
    font-weight: 700;
    color: #0f172a;
}`,
  },
  {
    id: 2937,
    name: "Activity Log Table",
    preview: (
      <div className="table-2937">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Actor</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Created workspace</td>
              <td>Alex</td>
              <td>09:42</td>
            </tr>
            <tr>
              <td>Updated settings</td>
              <td>Emma</td>
              <td>10:17</td>
            </tr>
            <tr>
              <td>Added member</td>
              <td>James</td>
              <td>11:03</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Action</th>
            <th>Actor</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Created workspace</td>
            <td>Alex</td>
            <td>09:42</td>
        </tr>
        <tr>
            <td>Updated settings</td>
            <td>Emma</td>
            <td>10:17</td>
        </tr>
        <tr>
            <td>Added member</td>
            <td>James</td>
            <td>11:03</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:last-child {
    color: #94a3b8;
    font-size: 11px;
}`,
  },
  {
    id: 2938,
    name: "Subscriptions Table",
    preview: (
      <div className="table-2938">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Plan</th>
              <th>Renewal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acme Studio</td>
              <td>Professional</td>
              <td>Oct 12</td>
            </tr>
            <tr>
              <td>Northstar Labs</td>
              <td>Enterprise</td>
              <td>Oct 18</td>
            </tr>
            <tr>
              <td>Pixel Works</td>
              <td>Starter</td>
              <td>Oct 25</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Customer</th>
            <th>Plan</th>
            <th>Renewal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Acme Studio</td>
            <td>Professional</td>
            <td>Oct 12</td>
        </tr>
        <tr>
            <td>Northstar Labs</td>
            <td>Enterprise</td>
            <td>Oct 18</td>
        </tr>
        <tr>
            <td>Pixel Works</td>
            <td>Starter</td>
            <td>Oct 25</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 11px 13px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:nth-child(2) {
    color: #4f46e5;
    font-weight: 600;
}
.Table td:last-child {
    color: #64748b;
}`,
  },
  {
    id: 2939,
    name: "System Metrics Table",
    preview: (
      <div className="table-2939">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Current</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPU usage</td>
              <td>42%</td>
              <td>Below 70%</td>
            </tr>
            <tr>
              <td>Memory usage</td>
              <td>61%</td>
              <td>Below 80%</td>
            </tr>
            <tr>
              <td>Response time</td>
              <td>184 ms</td>
              <td>Below 250 ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Metric</th>
            <th>Current</th>
            <th>Target</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CPU usage</td>
            <td>42%</td>
            <td>Below 70%</td>
        </tr>
        <tr>
            <td>Memory usage</td>
            <td>61%</td>
            <td>Below 80%</td>
        </tr>
        <tr>
            <td>Response time</td>
            <td>184 ms</td>
            <td>Below 250 ms</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:nth-child(2) {
    color: #0f172a;
    font-weight: 700;
}
.Table td:last-child {
    color: #64748b;
}`,
  },
  {
    id: 2940,
    name: "Invoices Table",
    preview: (
      <div className="table-2940">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#INV-401</td>
              <td>Vertex Labs</td>
              <td>
                <span>Paid</span>
              </td>
              <td>€1,240</td>
            </tr>
            <tr>
              <td>#INV-402</td>
              <td>Northwind</td>
              <td>
                <span>Pending</span>
              </td>
              <td>€860</td>
            </tr>
            <tr>
              <td>#INV-403</td>
              <td>BluePeak</td>
              <td>
                <span>Paid</span>
              </td>
              <td>€2,180</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#INV-401</td>
            <td>Vertex Labs</td>
            <td><span>Paid</span></td>
            <td>€1,240</td>
        </tr>
        <tr>
            <td>#INV-402</td>
            <td>Northwind</td>
            <td><span>Pending</span></td>
            <td>€860</td>
        </tr>
        <tr>
            <td>#INV-403</td>
            <td>BluePeak</td>
            <td><span>Paid</span></td>
            <td>€2,180</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    font-weight: 700;
    color: #0f172a;
}
.Table span {
    padding: 3px 7px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 10px;
    font-weight: 600;
}`,
  },
  {
    id: 2941,
    name: "Contacts Table",
    preview: (
      <div className="table-2941">
        <table>
          <thead>
            <tr>
              <th>Contact</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emma Johnson</td>
              <td>Orbit Systems</td>
              <td>+31 20 123 4567</td>
              <td>Client</td>
            </tr>
            <tr>
              <td>James Clark</td>
              <td>Nova Group</td>
              <td>+31 10 555 1820</td>
              <td>Partner</td>
            </tr>
            <tr>
              <td>Olivia Moore</td>
              <td>Vertex Labs</td>
              <td>+31 30 482 9311</td>
              <td>Lead</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Contact</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Emma Johnson</td>
            <td>Orbit Systems</td>
            <td>+31 20 123 4567</td>
            <td>Client</td>
        </tr>
        <tr>
            <td>James Clark</td>
            <td>Nova Group</td>
            <td>+31 10 555 1820</td>
            <td>Partner</td>
        </tr>
        <tr>
            <td>Olivia Moore</td>
            <td>Vertex Labs</td>
            <td>+31 30 482 9311</td>
            <td>Lead</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    font-weight: 600;
    background: #f8fafc;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2942,
    name: "Subscriptions Overview",
    preview: (
      <div className="table-2942">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Subscribers</th>
              <th>MRR</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter</td>
              <td>1,284</td>
              <td>€24,396</td>
              <td>+8.2%</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>842</td>
              <td>€41,258</td>
              <td>+12.7%</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>164</td>
              <td>€58,640</td>
              <td>+18.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Plan</th>
            <th>Subscribers</th>
            <th>MRR</th>
            <th>Growth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Starter</td>
            <td>1,284</td>
            <td>€24,396</td>
            <td>+8.2%</td>
        </tr>
        <tr>
            <td>Pro</td>
            <td>842</td>
            <td>€41,258</td>
            <td>+12.7%</td>
        </tr>
        <tr>
            <td>Enterprise</td>
            <td>164</td>
            <td>€58,640</td>
            <td>+18.3%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:nth-child(3) {
    font-weight: 700;
    color: #0f172a;
}
.Table td:last-child {
    color: #16a34a;
    font-weight: 600;
}`,
  },
  {
    id: 2943,
    name: "Performance Table",
    preview: (
      <div className="table-2943">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Current</th>
              <th>Previous</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversion</td>
              <td>6.8%</td>
              <td>5.9%</td>
              <td>+0.9%</td>
            </tr>
            <tr>
              <td>Bounce rate</td>
              <td>31%</td>
              <td>36%</td>
              <td>-5%</td>
            </tr>
            <tr>
              <td>Retention</td>
              <td>84%</td>
              <td>79%</td>
              <td>+5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Metric</th>
            <th>Current</th>
            <th>Previous</th>
            <th>Change</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Conversion</td>
            <td>6.8%</td>
            <td>5.9%</td>
            <td>+0.9%</td>
        </tr>
        <tr>
            <td>Bounce rate</td>
            <td>31%</td>
            <td>36%</td>
            <td>-5%</td>
        </tr>
        <tr>
            <td>Retention</td>
            <td>84%</td>
            <td>79%</td>
            <td>+5%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:last-child {
    color: #16a34a;
    font-weight: 700;
}`,
  },
  {
    id: 2944,
    name: "Tasks Table",
    preview: (
      <div className="table-2944">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Assignee</th>
              <th>Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Landing page</td>
              <td>Alex</td>
              <td>Today</td>
              <td>
                <span>In progress</span>
              </td>
            </tr>
            <tr>
              <td>API integration</td>
              <td>Sarah</td>
              <td>Tomorrow</td>
              <td>
                <span>Review</span>
              </td>
            </tr>
            <tr>
              <td>Documentation</td>
              <td>James</td>
              <td>Friday</td>
              <td>
                <span>Planned</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Task</th>
            <th>Assignee</th>
            <th>Due</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Landing page</td>
            <td>Alex</td>
            <td>Today</td>
            <td><span>In progress</span></td>
        </tr>
        <tr>
            <td>API integration</td>
            <td>Sarah</td>
            <td>Tomorrow</td>
            <td><span>Review</span></td>
        </tr>
        <tr>
            <td>Documentation</td>
            <td>James</td>
            <td>Friday</td>
            <td><span>Planned</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    color: #64748b;
    background: #f8fafc;
}
.Table span {
    padding: 3px 7px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 9px;
    font-weight: 600;
}`,
  },
  {
    id: 2945,
    name: "Projects Portfolio",
    preview: (
      <div className="table-2945">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Budget</th>
              <th>Spent</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atlas</td>
              <td>€42,000</td>
              <td>€31,400</td>
              <td>Mia</td>
            </tr>
            <tr>
              <td>Nova</td>
              <td>€28,000</td>
              <td>€19,250</td>
              <td>Daniel</td>
            </tr>
            <tr>
              <td>Orbit</td>
              <td>€54,000</td>
              <td>€47,800</td>
              <td>Sophie</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Project</th>
            <th>Budget</th>
            <th>Spent</th>
            <th>Owner</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Atlas</td>
            <td>€42,000</td>
            <td>€31,400</td>
            <td>Mia</td>
        </tr>
        <tr>
            <td>Nova</td>
            <td>€28,000</td>
            <td>€19,250</td>
            <td>Daniel</td>
        </tr>
        <tr>
            <td>Orbit</td>
            <td>€54,000</td>
            <td>€47,800</td>
            <td>Sophie</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2),
.Table td:nth-child(3) {
    font-weight: 600;
    color: #0f172a;
}`,
  },
  {
    id: 2946,
    name: "Support Queue",
    preview: (
      <div className="table-2946">
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Customer</th>
              <th>Agent</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#SUP-821</td>
              <td>Acme</td>
              <td>Emma</td>
              <td>
                <span className="high">High</span>
              </td>
            </tr>
            <tr>
              <td>#SUP-822</td>
              <td>Vertex</td>
              <td>James</td>
              <td>
                <span className="medium">Medium</span>
              </td>
            </tr>
            <tr>
              <td>#SUP-823</td>
              <td>Orbit</td>
              <td>Lucas</td>
              <td>
                <span className="low">Low</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Ticket</th>
            <th>Customer</th>
            <th>Agent</th>
            <th>Priority</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#SUP-821</td>
            <td>Acme</td>
            <td>Emma</td>
            <td><span class="high">High</span></td>
        </tr>
        <tr>
            <td>#SUP-822</td>
            <td>Vertex</td>
            <td>James</td>
            <td><span class="medium">Medium</span></td>
        </tr>
        <tr>
            <td>#SUP-823</td>
            <td>Orbit</td>
            <td>Lucas</td>
            <td><span class="low">Low</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
}
.Table th,
.Table td {
    padding: 9px 10px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 7px;
    border-radius: 999px;
    font-size: 9px;
    font-weight: 600;
}
.Table .high {
    background: #fee2e2;
    color: #b91c1c;
}
.Table .medium {
    background: #fef3c7;
    color: #b45309;
}
.Table .low {
    background: #dcfce7;
    color: #15803d;
}`,
  },
  {
    id: 2947,
    name: "Team Directory",
    preview: (
      <div className="table-2947">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emily Stone</td>
              <td>Design</td>
              <td>Lead Designer</td>
              <td>Amsterdam</td>
            </tr>
            <tr>
              <td>Ryan Cooper</td>
              <td>Engineering</td>
              <td>Senior Developer</td>
              <td>Utrecht</td>
            </tr>
            <tr>
              <td>Anna White</td>
              <td>Finance</td>
              <td>Controller</td>
              <td>Rotterdam</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Emily Stone</td>
            <td>Design</td>
            <td>Lead Designer</td>
            <td>Amsterdam</td>
        </tr>
        <tr>
            <td>Ryan Cooper</td>
            <td>Engineering</td>
            <td>Senior Developer</td>
            <td>Utrecht</td>
        </tr>
        <tr>
            <td>Anna White</td>
            <td>Finance</td>
            <td>Controller</td>
            <td>Rotterdam</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:nth-child(3) {
    color: #475569;
}`,
  },
  {
    id: 2948,
    name: "Feature Matrix",
    preview: (
      <div className="table-2948">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Starter</th>
              <th>Pro</th>
              <th>Business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projects</td>
              <td>3</td>
              <td>25</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>10 GB</td>
              <td>100 GB</td>
              <td>1 TB</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Basic</td>
              <td>Priority</td>
              <td>Dedicated</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Starter</th>
            <th>Pro</th>
            <th>Business</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Projects</td>
            <td>3</td>
            <td>25</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <td>Storage</td>
            <td>10 GB</td>
            <td>100 GB</td>
            <td>1 TB</td>
        </tr>
        <tr>
            <td>Support</td>
            <td>Basic</td>
            <td>Priority</td>
            <td>Dedicated</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 600;
}
.Table td:first-child {
    font-weight: 600;
    color: #1e293b;
}
.Table td:last-child {
    color: #4f46e5;
    font-weight: 600;
}`,
  },
  {
    id: 2949,
    name: "Audit Log",
    preview: (
      <div className="table-2949">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>User</th>
              <th>IP</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Login</td>
              <td>admin@site.com</td>
              <td>192.168.1.12</td>
              <td>09:14</td>
            </tr>
            <tr>
              <td>Password changed</td>
              <td>emma@site.com</td>
              <td>192.168.1.18</td>
              <td>10:28</td>
            </tr>
            <tr>
              <td>Role updated</td>
              <td>alex@site.com</td>
              <td>192.168.1.21</td>
              <td>11:06</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Event</th>
            <th>User</th>
            <th>IP</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Login</td>
            <td>admin@site.com</td>
            <td>192.168.1.12</td>
            <td>09:14</td>
        </tr>
        <tr>
            <td>Password changed</td>
            <td>emma@site.com</td>
            <td>192.168.1.18</td>
            <td>10:28</td>
        </tr>
        <tr>
            <td>Role updated</td>
            <td>alex@site.com</td>
            <td>192.168.1.21</td>
            <td>11:06</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:nth-child(3),
.Table td:last-child {
    color: #94a3b8;
    font-size: 9px;
}`,
  },
  {
    id: 2950,
    name: "Campaign Table",
    preview: (
      <div className="table-2950">
        <table>
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Reach</th>
              <th>Clicks</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Autumn Launch</td>
              <td>84,200</td>
              <td>4,218</td>
              <td>5.01%</td>
            </tr>
            <tr>
              <td>Product Update</td>
              <td>62,480</td>
              <td>3,874</td>
              <td>6.20%</td>
            </tr>
            <tr>
              <td>Brand Awareness</td>
              <td>121,800</td>
              <td>5,602</td>
              <td>4.60%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Campaign</th>
            <th>Reach</th>
            <th>Clicks</th>
            <th>CTR</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Autumn Launch</td>
            <td>84,200</td>
            <td>4,218</td>
            <td>5.01%</td>
        </tr>
        <tr>
            <td>Product Update</td>
            <td>62,480</td>
            <td>3,874</td>
            <td>6.20%</td>
        </tr>
        <tr>
            <td>Brand Awareness</td>
            <td>121,800</td>
            <td>5,602</td>
            <td>4.60%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2),
.Table td:nth-child(3),
.Table td:last-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2951,
    name: "Expenses Table",
    preview: (
      <div className="table-2951">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Owner</th>
              <th>Amount</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software</td>
              <td>IT</td>
              <td>€4,820</td>
              <td>August</td>
            </tr>
            <tr>
              <td>Travel</td>
              <td>Sales</td>
              <td>€2,140</td>
              <td>August</td>
            </tr>
            <tr>
              <td>Operations</td>
              <td>Admin</td>
              <td>€1,860</td>
              <td>August</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Category</th>
            <th>Owner</th>
            <th>Amount</th>
            <th>Month</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Software</td>
            <td>IT</td>
            <td>€4,820</td>
            <td>August</td>
        </tr>
        <tr>
            <td>Travel</td>
            <td>Sales</td>
            <td>€2,140</td>
            <td>August</td>
        </tr>
        <tr>
            <td>Operations</td>
            <td>Admin</td>
            <td>€1,860</td>
            <td>August</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(3) {
    color: #dc2626;
    font-weight: 700;
}`,
  },
  {
    id: 2952,
    name: "Employees Payroll",
    preview: (
      <div className="table-2952">
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laura Adams</td>
              <td>Engineering</td>
              <td>€5,800</td>
              <td>Full-time</td>
            </tr>
            <tr>
              <td>David Miller</td>
              <td>Marketing</td>
              <td>€4,650</td>
              <td>Full-time</td>
            </tr>
            <tr>
              <td>Chris Evans</td>
              <td>Support</td>
              <td>€3,920</td>
              <td>Contract</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laura Adams</td>
            <td>Engineering</td>
            <td>€5,800</td>
            <td>Full-time</td>
        </tr>
        <tr>
            <td>David Miller</td>
            <td>Marketing</td>
            <td>€4,650</td>
            <td>Full-time</td>
        </tr>
        <tr>
            <td>Chris Evans</td>
            <td>Support</td>
            <td>€3,920</td>
            <td>Contract</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(3) {
    font-weight: 700;
    color: #0f172a;
}`,
  },
  {
    id: 2953,
    name: "Roadmap Table",
    preview: (
      <div className="table-2953">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Quarter</th>
              <th>Team</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Analytics 2.0</td>
              <td>Q3</td>
              <td>Platform</td>
              <td>
                <span>Planned</span>
              </td>
            </tr>
            <tr>
              <td>Mobile App</td>
              <td>Q4</td>
              <td>Mobile</td>
              <td>
                <span>In progress</span>
              </td>
            </tr>
            <tr>
              <td>SSO</td>
              <td>Q4</td>
              <td>Security</td>
              <td>
                <span>Review</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Quarter</th>
            <th>Team</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Analytics 2.0</td>
            <td>Q3</td>
            <td>Platform</td>
            <td><span>Planned</span></td>
        </tr>
        <tr>
            <td>Mobile App</td>
            <td>Q4</td>
            <td>Mobile</td>
            <td><span>In progress</span></td>
        </tr>
        <tr>
            <td>SSO</td>
            <td>Q4</td>
            <td>Security</td>
            <td><span>Review</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2954,
    name: "Locations Table",
    preview: (
      <div className="table-2954">
        <table>
          <thead>
            <tr>
              <th>Office</th>
              <th>City</th>
              <th>Employees</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HQ</td>
              <td>Amsterdam</td>
              <td>184</td>
              <td>82%</td>
            </tr>
            <tr>
              <td>West</td>
              <td>Rotterdam</td>
              <td>92</td>
              <td>68%</td>
            </tr>
            <tr>
              <td>Central</td>
              <td>Utrecht</td>
              <td>71</td>
              <td>74%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Office</th>
            <th>City</th>
            <th>Employees</th>
            <th>Capacity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HQ</td>
            <td>Amsterdam</td>
            <td>184</td>
            <td>82%</td>
        </tr>
        <tr>
            <td>West</td>
            <td>Rotterdam</td>
            <td>92</td>
            <td>68%</td>
        </tr>
        <tr>
            <td>Central</td>
            <td>Utrecht</td>
            <td>71</td>
            <td>74%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    font-weight: 600;
    color: #0f172a;
}
.Table td:last-child {
    color: #2563eb;
    font-weight: 600;
}`,
  },
  {
    id: 2955,
    name: "Vendors Table",
    preview: (
      <div className="table-2955">
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Category</th>
              <th>Contract</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CloudCore</td>
              <td>Infrastructure</td>
              <td>Annual</td>
              <td>
                <span>Active</span>
              </td>
            </tr>
            <tr>
              <td>DesignHub</td>
              <td>Creative</td>
              <td>Monthly</td>
              <td>
                <span>Active</span>
              </td>
            </tr>
            <tr>
              <td>SecureNet</td>
              <td>Security</td>
              <td>Annual</td>
              <td>
                <span>Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Vendor</th>
            <th>Category</th>
            <th>Contract</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CloudCore</td>
            <td>Infrastructure</td>
            <td>Annual</td>
            <td><span>Active</span></td>
        </tr>
        <tr>
            <td>DesignHub</td>
            <td>Creative</td>
            <td>Monthly</td>
            <td><span>Active</span></td>
        </tr>
        <tr>
            <td>SecureNet</td>
            <td>Security</td>
            <td>Annual</td>
            <td><span>Pending</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2956,
    name: "Shipments Table",
    preview: (
      <div className="table-2956">
        <table>
          <thead>
            <tr>
              <th>Shipment</th>
              <th>Destination</th>
              <th>ETA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#SH-2104</td>
              <td>Berlin</td>
              <td>Today</td>
              <td>
                <span>In transit</span>
              </td>
            </tr>
            <tr>
              <td>#SH-2105</td>
              <td>Paris</td>
              <td>Sep 14</td>
              <td>
                <span>Processing</span>
              </td>
            </tr>
            <tr>
              <td>#SH-2106</td>
              <td>Brussels</td>
              <td>Sep 15</td>
              <td>
                <span>Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Shipment</th>
            <th>Destination</th>
            <th>ETA</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#SH-2104</td>
            <td>Berlin</td>
            <td>Today</td>
            <td><span>In transit</span></td>
        </tr>
        <tr>
            <td>#SH-2105</td>
            <td>Paris</td>
            <td>Sep 14</td>
            <td><span>Processing</span></td>
        </tr>
        <tr>
            <td>#SH-2106</td>
            <td>Brussels</td>
            <td>Sep 15</td>
            <td><span>Delivered</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2957,
    name: "Devices Table",
    preview: (
      <div className="table-2957">
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>OS</th>
              <th>Last seen</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MacBook Pro</td>
              <td>macOS</td>
              <td>2 min ago</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>ThinkPad X1</td>
              <td>Windows</td>
              <td>8 min ago</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>Pixel 10</td>
              <td>Android</td>
              <td>42 min ago</td>
              <td>Offline</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Device</th>
            <th>OS</th>
            <th>Last seen</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MacBook Pro</td>
            <td>macOS</td>
            <td>2 min ago</td>
            <td>Online</td>
        </tr>
        <tr>
            <td>ThinkPad X1</td>
            <td>Windows</td>
            <td>8 min ago</td>
            <td>Online</td>
        </tr>
        <tr>
            <td>Pixel 10</td>
            <td>Android</td>
            <td>42 min ago</td>
            <td>Offline</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:last-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2958,
    name: "API Table",
    preview: (
      <div className="table-2958">
        <table>
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Requests</th>
              <th>Latency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/api/users</td>
              <td>GET</td>
              <td>24,842</td>
              <td>82 ms</td>
            </tr>
            <tr>
              <td>/api/orders</td>
              <td>POST</td>
              <td>8,314</td>
              <td>126 ms</td>
            </tr>
            <tr>
              <td>/api/auth</td>
              <td>POST</td>
              <td>12,640</td>
              <td>94 ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Method</th>
            <th>Requests</th>
            <th>Latency</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/api/users</td>
            <td>GET</td>
            <td>24,842</td>
            <td>82 ms</td>
        </tr>
        <tr>
            <td>/api/orders</td>
            <td>POST</td>
            <td>8,314</td>
            <td>126 ms</td>
        </tr>
        <tr>
            <td>/api/auth</td>
            <td>POST</td>
            <td>12,640</td>
            <td>94 ms</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
    font-family: monospace;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #475569;
    font-family: sans-serif;
}
.Table td:first-child {
    color: #2563eb;
}`,
  },
  {
    id: 2959,
    name: "Security Events",
    preview: (
      <div className="table-2959">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Severity</th>
              <th>Source</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Failed login</td>
              <td>
                <span className="critical">Critical</span>
              </td>
              <td>Auth</td>
              <td>10:42</td>
            </tr>
            <tr>
              <td>Policy update</td>
              <td>
                <span className="info">Info</span>
              </td>
              <td>Admin</td>
              <td>11:14</td>
            </tr>
            <tr>
              <td>New device</td>
              <td>
                <span className="warning">Warning</span>
              </td>
              <td>Account</td>
              <td>11:38</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Event</th>
            <th>Severity</th>
            <th>Source</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Failed login</td>
            <td><span class="critical">Critical</span></td>
            <td>Auth</td>
            <td>10:42</td>
        </tr>
        <tr>
            <td>Policy update</td>
            <td><span class="info">Info</span></td>
            <td>Admin</td>
            <td>11:14</td>
        </tr>
        <tr>
            <td>New device</td>
            <td><span class="warning">Warning</span></td>
            <td>Account</td>
            <td>11:38</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    font-size: 8px;
    font-weight: 600;
}
.Table .critical {
    background: #fee2e2;
    color: #b91c1c;
}
.Table .warning {
    background: #fef3c7;
    color: #b45309;
}
.Table .info {
    background: #dbeafe;
    color: #1d4ed8;
}`,
  },
  {
    id: 2960,
    name: "Departments Table",
    preview: (
      <div className="table-2960">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Head</th>
              <th>Members</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engineering</td>
              <td>Alex Morgan</td>
              <td>42</td>
              <td>€840K</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>Emma Davis</td>
              <td>18</td>
              <td>€320K</td>
            </tr>
            <tr>
              <td>Finance</td>
              <td>James Wilson</td>
              <td>12</td>
              <td>€210K</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Department</th>
            <th>Head</th>
            <th>Members</th>
            <th>Budget</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Engineering</td>
            <td>Alex Morgan</td>
            <td>42</td>
            <td>€840K</td>
        </tr>
        <tr>
            <td>Marketing</td>
            <td>Emma Davis</td>
            <td>18</td>
            <td>€320K</td>
        </tr>
        <tr>
            <td>Finance</td>
            <td>James Wilson</td>
            <td>12</td>
            <td>€210K</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    font-weight: 700;
}`,
  },
  {
    id: 2961,
    name: "Revenue Forecast",
    preview: (
      <div className="table-2961">
        <table>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Actual</th>
              <th>Forecast</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>€182K</td>
              <td>€175K</td>
              <td>+4.0%</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>€214K</td>
              <td>€220K</td>
              <td>-2.7%</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>€248K</td>
              <td>€240K</td>
              <td>+3.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Quarter</th>
            <th>Actual</th>
            <th>Forecast</th>
            <th>Variance</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Q1</td>
            <td>€182K</td>
            <td>€175K</td>
            <td>+4.0%</td>
        </tr>
        <tr>
            <td>Q2</td>
            <td>€214K</td>
            <td>€220K</td>
            <td>-2.7%</td>
        </tr>
        <tr>
            <td>Q3</td>
            <td>€248K</td>
            <td>€240K</td>
            <td>+3.3%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2),
.Table td:nth-child(3) {
    font-weight: 600;
    color: #0f172a;
}
.Table td:last-child {
    color: #16a34a;
    font-weight: 700;
}`,
  },
  {
    id: 2962,
    name: "Leads Table",
    preview: (
      <div className="table-2962">
        <table>
          <thead>
            <tr>
              <th>Lead</th>
              <th>Company</th>
              <th>Source</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marcus Reed</td>
              <td>Vertex Labs</td>
              <td>Organic</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Sophie Lane</td>
              <td>Northstar</td>
              <td>Referral</td>
              <td>84</td>
            </tr>
            <tr>
              <td>Daniel Price</td>
              <td>Acme Group</td>
              <td>Campaign</td>
              <td>76</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Lead</th>
            <th>Company</th>
            <th>Source</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Marcus Reed</td>
            <td>Vertex Labs</td>
            <td>Organic</td>
            <td>92</td>
        </tr>
        <tr>
            <td>Sophie Lane</td>
            <td>Northstar</td>
            <td>Referral</td>
            <td>84</td>
        </tr>
        <tr>
            <td>Daniel Price</td>
            <td>Acme Group</td>
            <td>Campaign</td>
            <td>76</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    color: #4f46e5;
    font-weight: 700;
}`,
  },
  {
    id: 2963,
    name: "Reviews Table",
    preview: (
      <div className="table-2963">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Olivia Smith</td>
              <td>Pro Keyboard</td>
              <td>5.0</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>Liam Brown</td>
              <td>Studio Mouse</td>
              <td>4.7</td>
              <td>Very good</td>
            </tr>
            <tr>
              <td>Emma Jones</td>
              <td>Desk Hub</td>
              <td>4.5</td>
              <td>Reliable</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Rating</th>
            <th>Review</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Olivia Smith</td>
            <td>Pro Keyboard</td>
            <td>5.0</td>
            <td>Excellent</td>
        </tr>
        <tr>
            <td>Liam Brown</td>
            <td>Studio Mouse</td>
            <td>4.7</td>
            <td>Very good</td>
        </tr>
        <tr>
            <td>Emma Jones</td>
            <td>Desk Hub</td>
            <td>4.5</td>
            <td>Reliable</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(3) {
    color: #f59e0b;
    font-weight: 700;
}`,
  },
  {
    id: 2964,
    name: "Integrations Table",
    preview: (
      <div className="table-2964">
        <table>
          <thead>
            <tr>
              <th>Integration</th>
              <th>Provider</th>
              <th>Version</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payments</td>
              <td>Stripe</td>
              <td>v3</td>
              <td>
                <span>Connected</span>
              </td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Mixpanel</td>
              <td>v2</td>
              <td>
                <span>Connected</span>
              </td>
            </tr>
            <tr>
              <td>CRM</td>
              <td>HubSpot</td>
              <td>v1</td>
              <td>
                <span>Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Integration</th>
            <th>Provider</th>
            <th>Version</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Payments</td>
            <td>Stripe</td>
            <td>v3</td>
            <td><span>Connected</span></td>
        </tr>
        <tr>
            <td>Analytics</td>
            <td>Mixpanel</td>
            <td>v2</td>
            <td><span>Connected</span></td>
        </tr>
        <tr>
            <td>CRM</td>
            <td>HubSpot</td>
            <td>v1</td>
            <td><span>Pending</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2965,
    name: "Servers Table",
    preview: (
      <div className="table-2965">
        <table>
          <thead>
            <tr>
              <th>Server</th>
              <th>Region</th>
              <th>CPU</th>
              <th>Memory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>api-prod-01</td>
              <td>EU-West</td>
              <td>42%</td>
              <td>61%</td>
            </tr>
            <tr>
              <td>api-prod-02</td>
              <td>EU-Central</td>
              <td>37%</td>
              <td>54%</td>
            </tr>
            <tr>
              <td>worker-03</td>
              <td>US-East</td>
              <td>68%</td>
              <td>73%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Server</th>
            <th>Region</th>
            <th>CPU</th>
            <th>Memory</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>api-prod-01</td>
            <td>EU-West</td>
            <td>42%</td>
            <td>61%</td>
        </tr>
        <tr>
            <td>api-prod-02</td>
            <td>EU-Central</td>
            <td>37%</td>
            <td>54%</td>
        </tr>
        <tr>
            <td>worker-03</td>
            <td>US-East</td>
            <td>68%</td>
            <td>73%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
    font-family: monospace;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-family: sans-serif;
}
.Table td:first-child {
    color: #2563eb;
}
.Table td:nth-child(3),
.Table td:last-child {
    font-weight: 600;
}`,
  },
  {
    id: 2966,
    name: "Assets Table",
    preview: (
      <div className="table-2966">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Owner</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MacBook Pro</td>
              <td>Hardware</td>
              <td>Design</td>
              <td>€2,499</td>
            </tr>
            <tr>
              <td>Figma Pro</td>
              <td>Software</td>
              <td>Design</td>
              <td>€1,120</td>
            </tr>
            <tr>
              <td>Server Node</td>
              <td>Infrastructure</td>
              <td>IT</td>
              <td>€4,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Asset</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MacBook Pro</td>
            <td>Hardware</td>
            <td>Design</td>
            <td>€2,499</td>
        </tr>
        <tr>
            <td>Figma Pro</td>
            <td>Software</td>
            <td>Design</td>
            <td>€1,120</td>
        </tr>
        <tr>
            <td>Server Node</td>
            <td>Infrastructure</td>
            <td>IT</td>
            <td>€4,800</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:last-child {
    color: #0f172a;
    font-weight: 700;
}`,
  },
  {
    id: 2967,
    name: "Contracts Table",
    preview: (
      <div className="table-2967">
        <table>
          <thead>
            <tr>
              <th>Contract</th>
              <th>Partner</th>
              <th>Renewal</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#CTR-101</td>
              <td>CloudCore</td>
              <td>Nov 18</td>
              <td>
                <span>Active</span>
              </td>
            </tr>
            <tr>
              <td>#CTR-102</td>
              <td>DesignHub</td>
              <td>Dec 02</td>
              <td>
                <span>Review</span>
              </td>
            </tr>
            <tr>
              <td>#CTR-103</td>
              <td>SecureNet</td>
              <td>Dec 19</td>
              <td>
                <span>Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Contract</th>
            <th>Partner</th>
            <th>Renewal</th>
            <th>State</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#CTR-101</td>
            <td>CloudCore</td>
            <td>Nov 18</td>
            <td><span>Active</span></td>
        </tr>
        <tr>
            <td>#CTR-102</td>
            <td>DesignHub</td>
            <td>Dec 02</td>
            <td><span>Review</span></td>
        </tr>
        <tr>
            <td>#CTR-103</td>
            <td>SecureNet</td>
            <td>Dec 19</td>
            <td><span>Pending</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2968,
    name: "Goals Table",
    preview: (
      <div className="table-2968">
        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Owner</th>
              <th>Target</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New users</td>
              <td>Growth</td>
              <td>10K</td>
              <td>8.6K</td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>Sales</td>
              <td>€250K</td>
              <td>€272K</td>
            </tr>
            <tr>
              <td>Retention</td>
              <td>Product</td>
              <td>80%</td>
              <td>84%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Goal</th>
            <th>Owner</th>
            <th>Target</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>New users</td>
            <td>Growth</td>
            <td>10K</td>
            <td>8.6K</td>
        </tr>
        <tr>
            <td>Revenue</td>
            <td>Sales</td>
            <td>€250K</td>
            <td>€272K</td>
        </tr>
        <tr>
            <td>Retention</td>
            <td>Product</td>
            <td>80%</td>
            <td>84%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:last-child {
    color: #0f172a;
    font-weight: 700;
}`,
  },
  {
    id: 2969,
    name: "Milestones Table",
    preview: (
      <div className="table-2969">
        <table>
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Date</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discovery</td>
              <td>Sep 10</td>
              <td>Product</td>
              <td>
                <span>Complete</span>
              </td>
            </tr>
            <tr>
              <td>Prototype</td>
              <td>Sep 18</td>
              <td>Design</td>
              <td>
                <span>Active</span>
              </td>
            </tr>
            <tr>
              <td>Launch</td>
              <td>Oct 04</td>
              <td>Engineering</td>
              <td>
                <span>Planned</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Milestone</th>
            <th>Date</th>
            <th>Owner</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Discovery</td>
            <td>Sep 10</td>
            <td>Product</td>
            <td><span>Complete</span></td>
        </tr>
        <tr>
            <td>Prototype</td>
            <td>Sep 18</td>
            <td>Design</td>
            <td><span>Active</span></td>
        </tr>
        <tr>
            <td>Launch</td>
            <td>Oct 04</td>
            <td>Engineering</td>
            <td><span>Planned</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2970,
    name: "Time Tracking Table",
    preview: (
      <div className="table-2970">
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Project</th>
              <th>Hours</th>
              <th>Billable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alex</td>
              <td>Atlas</td>
              <td>32.5</td>
              <td>28.0</td>
            </tr>
            <tr>
              <td>Emma</td>
              <td>Nova</td>
              <td>29.0</td>
              <td>24.5</td>
            </tr>
            <tr>
              <td>James</td>
              <td>Orbit</td>
              <td>36.0</td>
              <td>33.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Employee</th>
            <th>Project</th>
            <th>Hours</th>
            <th>Billable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alex</td>
            <td>Atlas</td>
            <td>32.5</td>
            <td>28.0</td>
        </tr>
        <tr>
            <td>Emma</td>
            <td>Nova</td>
            <td>29.0</td>
            <td>24.5</td>
        </tr>
        <tr>
            <td>James</td>
            <td>Orbit</td>
            <td>36.0</td>
            <td>33.0</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(3),
.Table td:last-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2971,
    name: "Bookings Table",
    preview: (
      <div className="table-2971">
        <table>
          <thead>
            <tr>
              <th>Booking</th>
              <th>Guest</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#BK-104</td>
              <td>Emma Carter</td>
              <td>Sep 12</td>
              <td>
                <span>Confirmed</span>
              </td>
            </tr>
            <tr>
              <td>#BK-105</td>
              <td>Daniel Reed</td>
              <td>Sep 13</td>
              <td>
                <span>Pending</span>
              </td>
            </tr>
            <tr>
              <td>#BK-106</td>
              <td>Sophie Moore</td>
              <td>Sep 15</td>
              <td>
                <span>Confirmed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Booking</th>
            <th>Guest</th>
            <th>Date</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#BK-104</td>
            <td>Emma Carter</td>
            <td>Sep 12</td>
            <td><span>Confirmed</span></td>
        </tr>
        <tr>
            <td>#BK-105</td>
            <td>Daniel Reed</td>
            <td>Sep 13</td>
            <td><span>Pending</span></td>
        </tr>
        <tr>
            <td>#BK-106</td>
            <td>Sophie Moore</td>
            <td>Sep 15</td>
            <td><span>Confirmed</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2972,
    name: "Products Table",
    preview: (
      <div className="table-2972">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wireless Keyboard</td>
              <td>KB-204</td>
              <td>124</td>
              <td>€89</td>
            </tr>
            <tr>
              <td>Studio Mouse</td>
              <td>MS-112</td>
              <td>82</td>
              <td>€59</td>
            </tr>
            <tr>
              <td>USB-C Hub</td>
              <td>HB-401</td>
              <td>38</td>
              <td>€79</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Wireless Keyboard</td>
            <td>KB-204</td>
            <td>124</td>
            <td>€89</td>
        </tr>
        <tr>
            <td>Studio Mouse</td>
            <td>MS-112</td>
            <td>82</td>
            <td>€59</td>
        </tr>
        <tr>
            <td>USB-C Hub</td>
            <td>HB-401</td>
            <td>38</td>
            <td>€79</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    font-weight: 700;
}`,
  },
  {
    id: 2973,
    name: "Returns Table",
    preview: (
      <div className="table-2973">
        <table>
          <thead>
            <tr>
              <th>Return</th>
              <th>Order</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#RET-81</td>
              <td>#ORD-510</td>
              <td>Damaged</td>
              <td>
                <span>Approved</span>
              </td>
            </tr>
            <tr>
              <td>#RET-82</td>
              <td>#ORD-511</td>
              <td>Wrong size</td>
              <td>
                <span>Review</span>
              </td>
            </tr>
            <tr>
              <td>#RET-83</td>
              <td>#ORD-514</td>
              <td>Changed mind</td>
              <td>
                <span>Received</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Return</th>
            <th>Order</th>
            <th>Reason</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#RET-81</td>
            <td>#ORD-510</td>
            <td>Damaged</td>
            <td><span>Approved</span></td>
        </tr>
        <tr>
            <td>#RET-82</td>
            <td>#ORD-511</td>
            <td>Wrong size</td>
            <td><span>Review</span></td>
        </tr>
        <tr>
            <td>#RET-83</td>
            <td>#ORD-514</td>
            <td>Changed mind</td>
            <td><span>Received</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #fef3c7;
    color: #b45309;
    font-size: 8px;
    font-weight: 600;
}`,
  },
  {
    id: 2974,
    name: "Assets Register",
    preview: (
      <div className="table-2974">
        <table>
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AST-104</td>
              <td>MacBook Pro</td>
              <td>Computer</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>AST-105</td>
              <td>Monitor 32"</td>
              <td>Display</td>
              <td>Good</td>
            </tr>
            <tr>
              <td>AST-106</td>
              <td>Desk Hub</td>
              <td>Accessory</td>
              <td>Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Asset ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Condition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AST-104</td>
            <td>MacBook Pro</td>
            <td>Computer</td>
            <td>Excellent</td>
        </tr>
        <tr>
            <td>AST-105</td>
            <td>Monitor 32"</td>
            <td>Display</td>
            <td>Good</td>
        </tr>
        <tr>
            <td>AST-106</td>
            <td>Desk Hub</td>
            <td>Accessory</td>
            <td>Excellent</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #64748b;
    font-family: monospace;
}
.Table td:nth-child(2) {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2975,
    name: "Budget Table",
    preview: (
      <div className="table-2975">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Budget</th>
              <th>Spent</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engineering</td>
              <td>€120K</td>
              <td>€84K</td>
              <td>€36K</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>€80K</td>
              <td>€51K</td>
              <td>€29K</td>
            </tr>
            <tr>
              <td>Operations</td>
              <td>€62K</td>
              <td>€44K</td>
              <td>€18K</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Department</th>
            <th>Budget</th>
            <th>Spent</th>
            <th>Remaining</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Engineering</td>
            <td>€120K</td>
            <td>€84K</td>
            <td>€36K</td>
        </tr>
        <tr>
            <td>Marketing</td>
            <td>€80K</td>
            <td>€51K</td>
            <td>€29K</td>
        </tr>
        <tr>
            <td>Operations</td>
            <td>€62K</td>
            <td>€44K</td>
            <td>€18K</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2),
.Table td:nth-child(3),
.Table td:last-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2976,
    name: "Goals Overview",
    preview: (
      <div className="table-2976">
        <table>
          <thead>
            <tr>
              <th>Goal</th>
              <th>Progress</th>
              <th>Deadline</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Launch v2</td>
              <td>82%</td>
              <td>Sep 28</td>
              <td>Product</td>
            </tr>
            <tr>
              <td>Reach 50K users</td>
              <td>74%</td>
              <td>Oct 12</td>
              <td>Growth</td>
            </tr>
            <tr>
              <td>Reduce churn</td>
              <td>68%</td>
              <td>Oct 30</td>
              <td>Customer Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Goal</th>
            <th>Progress</th>
            <th>Deadline</th>
            <th>Owner</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Launch v2</td>
            <td>82%</td>
            <td>Sep 28</td>
            <td>Product</td>
        </tr>
        <tr>
            <td>Reach 50K users</td>
            <td>74%</td>
            <td>Oct 12</td>
            <td>Growth</td>
        </tr>
        <tr>
            <td>Reduce churn</td>
            <td>68%</td>
            <td>Oct 30</td>
            <td>Customer Success</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2) {
    color: #4f46e5;
    font-weight: 700;
}`,
  },
  {
    id: 2977,
    name: "Usage Metrics",
    preview: (
      <div className="table-2977">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Usage</th>
              <th>Limit</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>API requests</td>
              <td>82,400</td>
              <td>100,000</td>
              <td>17,600</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>624 GB</td>
              <td>1 TB</td>
              <td>400 GB</td>
            </tr>
            <tr>
              <td>Seats</td>
              <td>38</td>
              <td>50</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Metric</th>
            <th>Usage</th>
            <th>Limit</th>
            <th>Remaining</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>API requests</td>
            <td>82,400</td>
            <td>100,000</td>
            <td>17,600</td>
        </tr>
        <tr>
            <td>Storage</td>
            <td>624 GB</td>
            <td>1 TB</td>
            <td>400 GB</td>
        </tr>
        <tr>
            <td>Seats</td>
            <td>38</td>
            <td>50</td>
            <td>12</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(2) {
    color: #0f172a;
    font-weight: 700;
}
.Table td:last-child {
    color: #16a34a;
    font-weight: 600;
}`,
  },
  {
    id: 2978,
    name: "Changelog Table",
    preview: (
      <div className="table-2978">
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Changes</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2.4.0</td>
              <td>Sep 08</td>
              <td>24</td>
              <td>Platform</td>
            </tr>
            <tr>
              <td>2.3.2</td>
              <td>Aug 28</td>
              <td>11</td>
              <td>Core</td>
            </tr>
            <tr>
              <td>2.3.1</td>
              <td>Aug 17</td>
              <td>7</td>
              <td>Mobile</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Changes</th>
            <th>Author</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2.4.0</td>
            <td>Sep 08</td>
            <td>24</td>
            <td>Platform</td>
        </tr>
        <tr>
            <td>2.3.2</td>
            <td>Aug 28</td>
            <td>11</td>
            <td>Core</td>
        </tr>
        <tr>
            <td>2.3.1</td>
            <td>Aug 17</td>
            <td>7</td>
            <td>Mobile</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #4f46e5;
    font-weight: 700;
}`,
  },
  {
    id: 2979,
    name: "Deployments Table",
    preview: (
      <div className="table-2979">
        <table>
          <thead>
            <tr>
              <th>Environment</th>
              <th>Commit</th>
              <th>Branch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Production</td>
              <td>a92f31c</td>
              <td>main</td>
              <td>
                <span>Live</span>
              </td>
            </tr>
            <tr>
              <td>Staging</td>
              <td>8c17af2</td>
              <td>develop</td>
              <td>
                <span>Testing</span>
              </td>
            </tr>
            <tr>
              <td>Preview</td>
              <td>6bb421e</td>
              <td>feature/ui</td>
              <td>
                <span>Ready</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Environment</th>
            <th>Commit</th>
            <th>Branch</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Production</td>
            <td>a92f31c</td>
            <td>main</td>
            <td><span>Live</span></td>
        </tr>
        <tr>
            <td>Staging</td>
            <td>8c17af2</td>
            <td>develop</td>
            <td><span>Testing</span></td>
        </tr>
        <tr>
            <td>Preview</td>
            <td>6bb421e</td>
            <td>feature/ui</td>
            <td><span>Ready</span></td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    font-family: monospace;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-family: sans-serif;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 8px;
    font-family: sans-serif;
    font-weight: 600;
}`,
  },
  {
    id: 2980,
    name: "Plans Table",
    preview: (
      <div className="table-2980">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Users</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter</td>
              <td>€19/mo</td>
              <td>5</td>
              <td>Email</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>€49/mo</td>
              <td>25</td>
              <td>Priority</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>Custom</td>
              <td>Unlimited</td>
              <td>Dedicated</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Users</th>
            <th>Support</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Starter</td>
            <td>€19/mo</td>
            <td>5</td>
            <td>Email</td>
        </tr>
        <tr>
            <td>Pro</td>
            <td>€49/mo</td>
            <td>25</td>
            <td>Priority</td>
        </tr>
        <tr>
            <td>Enterprise</td>
            <td>Custom</td>
            <td>Unlimited</td>
            <td>Dedicated</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:nth-child(2) {
    color: #4f46e5;
    font-weight: 700;
}`,
  },
  {
    id: 2981,
    name: "Clients Table",
    preview: (
      <div className="table-2981">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Industry</th>
              <th>Manager</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Northstar</td>
              <td>Finance</td>
              <td>Emma</td>
              <td>€82K</td>
            </tr>
            <tr>
              <td>BluePeak</td>
              <td>Healthcare</td>
              <td>James</td>
              <td>€64K</td>
            </tr>
            <tr>
              <td>Vertex Labs</td>
              <td>Technology</td>
              <td>Alex</td>
              <td>€108K</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Client</th>
            <th>Industry</th>
            <th>Manager</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Northstar</td>
            <td>Finance</td>
            <td>Emma</td>
            <td>€82K</td>
        </tr>
        <tr>
            <td>BluePeak</td>
            <td>Healthcare</td>
            <td>James</td>
            <td>€64K</td>
        </tr>
        <tr>
            <td>Vertex Labs</td>
            <td>Technology</td>
            <td>Alex</td>
            <td>€108K</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    color: #0f172a;
    font-weight: 700;
}`,
  },
  {
    id: 2982,
    name: "Meetings Table",
    preview: (
      <div className="table-2982">
        <table>
          <thead>
            <tr>
              <th>Meeting</th>
              <th>Host</th>
              <th>Date</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Review</td>
              <td>Emma</td>
              <td>09:30</td>
              <td>Room A</td>
            </tr>
            <tr>
              <td>Design Sync</td>
              <td>Alex</td>
              <td>11:00</td>
              <td>Room C</td>
            </tr>
            <tr>
              <td>Leadership</td>
              <td>James</td>
              <td>14:00</td>
              <td>Room B</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Meeting</th>
            <th>Host</th>
            <th>Date</th>
            <th>Room</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Product Review</td>
            <td>Emma</td>
            <td>09:30</td>
            <td>Room A</td>
        </tr>
        <tr>
            <td>Design Sync</td>
            <td>Alex</td>
            <td>11:00</td>
            <td>Room C</td>
        </tr>
        <tr>
            <td>Leadership</td>
            <td>James</td>
            <td>14:00</td>
            <td>Room B</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}`,
  },
  {
    id: 2983,
    name: "Reservations Table",
    preview: (
      <div className="table-2983">
        <table>
          <thead>
            <tr>
              <th>Reservation</th>
              <th>Guest</th>
              <th>Guests</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#RS-201</td>
              <td>Emma Stone</td>
              <td>4</td>
              <td>19:30</td>
            </tr>
            <tr>
              <td>#RS-202</td>
              <td>Oliver King</td>
              <td>2</td>
              <td>20:00</td>
            </tr>
            <tr>
              <td>#RS-203</td>
              <td>Sarah Reed</td>
              <td>6</td>
              <td>20:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Reservation</th>
            <th>Guest</th>
            <th>Guests</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#RS-201</td>
            <td>Emma Stone</td>
            <td>4</td>
            <td>19:30</td>
        </tr>
        <tr>
            <td>#RS-202</td>
            <td>Oliver King</td>
            <td>2</td>
            <td>20:00</td>
        </tr>
        <tr>
            <td>#RS-203</td>
            <td>Sarah Reed</td>
            <td>6</td>
            <td>20:30</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #2563eb;
    font-weight: 600;
}`,
  },
  {
    id: 2984,
    name: "Recruitment Table",
    preview: (
      <div className="table-2984">
        <table>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Role</th>
              <th>Stage</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas Martin</td>
              <td>Frontend Developer</td>
              <td>Interview</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Sophie Brown</td>
              <td>Product Designer</td>
              <td>Technical</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Noah Williams</td>
              <td>Backend Developer</td>
              <td>Screening</td>
              <td>79</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Candidate</th>
            <th>Role</th>
            <th>Stage</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lucas Martin</td>
            <td>Frontend Developer</td>
            <td>Interview</td>
            <td>91</td>
        </tr>
        <tr>
            <td>Sophie Brown</td>
            <td>Product Designer</td>
            <td>Technical</td>
            <td>87</td>
        </tr>
        <tr>
            <td>Noah Williams</td>
            <td>Backend Developer</td>
            <td>Screening</td>
            <td>79</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    color: #4f46e5;
    font-weight: 700;
}`,
  },
  {
    id: 2985,
    name: "Education Table",
    preview: (
      <div className="table-2985">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Students</th>
              <th>Completion</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Web Development</td>
              <td>842</td>
              <td>92%</td>
              <td>4.8</td>
            </tr>
            <tr>
              <td>UI Design</td>
              <td>624</td>
              <td>88%</td>
              <td>4.7</td>
            </tr>
            <tr>
              <td>Data Science</td>
              <td>512</td>
              <td>84%</td>
              <td>4.6</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Course</th>
            <th>Students</th>
            <th>Completion</th>
            <th>Rating</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Web Development</td>
            <td>842</td>
            <td>92%</td>
            <td>4.8</td>
        </tr>
        <tr>
            <td>UI Design</td>
            <td>624</td>
            <td>88%</td>
            <td>4.7</td>
        </tr>
        <tr>
            <td>Data Science</td>
            <td>512</td>
            <td>84%</td>
            <td>4.6</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:last-child {
    color: #f59e0b;
    font-weight: 700;
}`,
  },
  {
    id: 2986,
    name: "Partners Table",
    preview: (
      <div className="table-2986">
        <table>
          <thead>
            <tr>
              <th>Partner</th>
              <th>Region</th>
              <th>Revenue</th>
              <th>Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Northstar</td>
              <td>Europe</td>
              <td>€182K</td>
              <td>Gold</td>
            </tr>
            <tr>
              <td>Vertex</td>
              <td>North America</td>
              <td>€246K</td>
              <td>Platinum</td>
            </tr>
            <tr>
              <td>BluePeak</td>
              <td>Asia</td>
              <td>€104K</td>
              <td>Silver</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Partner</th>
            <th>Region</th>
            <th>Revenue</th>
            <th>Tier</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Northstar</td>
            <td>Europe</td>
            <td>€182K</td>
            <td>Gold</td>
        </tr>
        <tr>
            <td>Vertex</td>
            <td>North America</td>
            <td>€246K</td>
            <td>Platinum</td>
        </tr>
        <tr>
            <td>BluePeak</td>
            <td>Asia</td>
            <td>€104K</td>
            <td>Silver</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:nth-child(3) {
    color: #0f172a;
    font-weight: 700;
}
.Table td:last-child {
    color: #4f46e5;
    font-weight: 600;
}`,
  },
  {
    id: 2987,
    name: "Alerts Table",
    preview: (
      <div className="table-2987">
        <table>
          <thead>
            <tr>
              <th>Alert</th>
              <th>Service</th>
              <th>Level</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High latency</td>
              <td>API Gateway</td>
              <td>
                <span className="critical">Critical</span>
              </td>
              <td>10:22</td>
            </tr>
            <tr>
              <td>Low storage</td>
              <td>Database</td>
              <td>
                <span className="warning">Warning</span>
              </td>
              <td>11:08</td>
            </tr>
            <tr>
              <td>Deployment complete</td>
              <td>Web App</td>
              <td>
                <span className="info">Info</span>
              </td>
              <td>11:31</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Alert</th>
            <th>Service</th>
            <th>Level</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>High latency</td>
            <td>API Gateway</td>
            <td><span class="critical">Critical</span></td>
            <td>10:22</td>
        </tr>
        <tr>
            <td>Low storage</td>
            <td>Database</td>
            <td><span class="warning">Warning</span></td>
            <td>11:08</td>
        </tr>
        <tr>
            <td>Deployment complete</td>
            <td>Web App</td>
            <td><span class="info">Info</span></td>
            <td>11:31</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table span {
    padding: 3px 6px;
    border-radius: 999px;
    font-size: 8px;
    font-weight: 600;
}
.Table .critical {
    background: #fee2e2;
    color: #b91c1c;
}
.Table .warning {
    background: #fef3c7;
    color: #b45309;
}
.Table .info {
    background: #dbeafe;
    color: #1d4ed8;
}`,
  },
  {
    id: 2988,
    name: "Notifications Table",
    preview: (
      <div className="table-2988">
        <table>
          <thead>
            <tr>
              <th>Notification</th>
              <th>Channel</th>
              <th>Recipients</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly report</td>
              <td>Email</td>
              <td>1,240</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Security alert</td>
              <td>SMS</td>
              <td>842</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Product update</td>
              <td>Push</td>
              <td>4,210</td>
              <td>Scheduled</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Notification</th>
            <th>Channel</th>
            <th>Recipients</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Weekly report</td>
            <td>Email</td>
            <td>1,240</td>
            <td>Delivered</td>
        </tr>
        <tr>
            <td>Security alert</td>
            <td>SMS</td>
            <td>842</td>
            <td>Delivered</td>
        </tr>
        <tr>
            <td>Product update</td>
            <td>Push</td>
            <td>4,210</td>
            <td>Scheduled</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9px;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:nth-child(3) {
    font-weight: 600;
}`,
  },
  {
    id: 2989,
    name: "Executive Overview",
    preview: (
      <div className="table-2989">
        <table>
          <thead>
            <tr>
              <th>Division</th>
              <th>Revenue</th>
              <th>Growth</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enterprise</td>
              <td>€4.8M</td>
              <td>+18.4%</td>
              <td>31.2%</td>
            </tr>
            <tr>
              <td>SMB</td>
              <td>€2.6M</td>
              <td>+12.1%</td>
              <td>26.8%</td>
            </tr>
            <tr>
              <td>Consumer</td>
              <td>€1.9M</td>
              <td>+9.7%</td>
              <td>22.4%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    html: `<table class="Table">
    <thead>
        <tr>
            <th>Division</th>
            <th>Revenue</th>
            <th>Growth</th>
            <th>Margin</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Enterprise</td>
            <td>€4.8M</td>
            <td>+18.4%</td>
            <td>31.2%</td>
        </tr>
        <tr>
            <td>SMB</td>
            <td>€2.6M</td>
            <td>+12.1%</td>
            <td>26.8%</td>
        </tr>
        <tr>
            <td>Consumer</td>
            <td>€1.9M</td>
            <td>+9.7%</td>
            <td>22.4%</td>
        </tr>
    </tbody>
</table>`,
    css: `.Table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
    color: #334155;
}
.Table th,
.Table td {
    padding: 8px 9px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
}
.Table th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 600;
}
.Table td:first-child {
    color: #0f172a;
    font-weight: 600;
}
.Table td:nth-child(2) {
    color: #0f172a;
    font-weight: 700;
}
.Table td:nth-child(3) {
    color: #16a34a;
    font-weight: 700;
}
.Table td:last-child {
    color: #475569;
    font-weight: 600;
}`,
  },
];
