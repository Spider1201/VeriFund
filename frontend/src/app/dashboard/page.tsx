"use client";

import { Bell, BookOpenText, ClipboardList, FileBarChart2, FileText, LayoutDashboard, LogOut, Receipt, UserCircle2 } from "lucide-react";
import { useMemo, useState } from "react";

type TabKey =
  | "dashboard"
  | "campaigns"
  | "disbursements"
  | "payouts"
  | "documents"
  | "statements"
  | "profile"
  | "logout";

type RequestStatus = "Approved" | "Pending";

type RequestRow = {
  requestFor: string;
  amount: string;
  dateRequested: string;
  status: RequestStatus;
  action: string;
};

const sidebarTabs: Array<{ key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "campaigns", label: "My Campaigns", icon: BookOpenText },
  { key: "disbursements", label: "Disbursement Requests", icon: ClipboardList },
  { key: "payouts", label: "Payouts & Receipts", icon: Receipt },
  { key: "documents", label: "Documents", icon: FileText },
  { key: "statements", label: "Account Statement", icon: FileBarChart2 },
  { key: "profile", label: "Profile", icon: UserCircle2 },
  { key: "logout", label: "Log out", icon: LogOut },
];

const disbursementRows: RequestRow[] = [
  {
    requestFor: "Hospital Payment",
    amount: "₦150,000",
    dateRequested: "May 14, 2025",
    status: "Approved",
    action: "View Receipt",
  },
  {
    requestFor: "Medication",
    amount: "₦45,000",
    dateRequested: "May 30, 2025",
    status: "Approved",
    action: "View Receipt",
  },
  {
    requestFor: "Lab Tests",
    amount: "₦70,000",
    dateRequested: "June 8, 2025",
    status: "Pending",
    action: "--",
  },
];

const statCards = [
  { title: "Total Raised", value: "₦1,350,000", accent: "text-slate-900" },
  { title: "Total Released", value: "₦450,000", accent: "text-emerald-600" },
  { title: "Remaining Balance", value: "₦900,000", accent: "text-slate-900" },
  { title: "Total Donors", value: "120", accent: "text-emerald-600" },
];

function TabPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function DashboardMain() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{card.title}</p>
            <p className={`mt-2 text-3xl font-bold ${card.accent}`}>{card.value}</p>
          </div>
        ))}
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">Disbursement Requests</h2>
          <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            New Disbursement Request
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-3 font-semibold">Request For</th>
                <th className="py-3 font-semibold">Amount</th>
                <th className="py-3 font-semibold">Date Requested</th>
                <th className="py-3 font-semibold">Status</th>
                <th className="py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {disbursementRows.map((row) => (
                <tr key={`${row.requestFor}-${row.dateRequested}`} className="border-b border-slate-100 text-slate-700 last:border-b-0">
                  <td className="py-3">{row.requestFor}</td>
                  <td className="py-3">{row.amount}</td>
                  <td className="py-3">{row.dateRequested}</td>
                  <td className="py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        row.status === "Approved"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="font-semibold text-blue-600">{row.action}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

  const content = useMemo(() => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardMain />;
      case "campaigns":
        return <TabPlaceholder title="My Campaigns" description="Create, edit, and monitor your verified fundraising campaigns in one place." />;
      case "disbursements":
        return <TabPlaceholder title="Disbursement Requests" description="Submit and track release requests with supporting documents and approval status." />;
      case "payouts":
        return <TabPlaceholder title="Payouts & Receipts" description="Review released funds and download receipts for completed disbursements." />;
      case "documents":
        return <TabPlaceholder title="Documents" description="Manage uploaded verification files and supporting evidence for your campaign." />;
      case "statements":
        return <TabPlaceholder title="Account Statement" description="Download transparent statement summaries showing all inflows and approved outflows." />;
      case "profile":
        return <TabPlaceholder title="Profile" description="Update your personal details, contact information, and security settings." />;
      case "logout":
        return <TabPlaceholder title="Log out" description="You are about to log out of your beneficiary dashboard session." />;
      default:
        return <DashboardMain />;
    }
  }, [activeTab]);

  return (
    <main className="px-4 pb-10 pt-4 sm:px-8 lg:px-12">
      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl bg-gradient-to-b from-[#012345] to-[#02172f] p-4 text-slate-100 shadow-xl">
          <div className="mb-5 rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-2xl font-extrabold text-white">VeriFund</p>
            <p className="text-xs text-emerald-200">Verified Giving. Trusted Impact.</p>
          </div>

          <nav className="space-y-1.5">
            {sidebarTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    active ? "bg-emerald-600 text-white" : "text-slate-100 hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="space-y-4">
          <header className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900">Beneficiary Dashboard</h1>

            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Download Statement
              </button>
              <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-50" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1.5">
                <div className="h-7 w-7 rounded-full bg-emerald-600/20" />
                <span className="text-sm font-semibold text-slate-700">John Doe</span>
              </div>
            </div>
          </header>

          {content}
        </div>
      </section>
    </main>
  );
}
