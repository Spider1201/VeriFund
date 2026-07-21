"use client";

import {
  BarChart3,
  Bell,
  BookOpenText,
  ClipboardList,
  FileBarChart2,
  LayoutDashboard,
  LogOut,
  Settings,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type AdminTabKey =
  | "dashboard"
  | "campaigns"
  | "disbursements"
  | "users"
  | "reports"
  | "statements"
  | "settings"
  | "logout";

type SidebarTab = {
  key: AdminTabKey;
  label: string;
  icon: LucideIcon;
};

type PendingDisbursement = {
  beneficiary: string;
  requestFor: string;
  amount: string;
  dateRequested: string;
};

const sidebarTabs: SidebarTab[] = [
  { key: "dashboard", label: "Admin Dashboard", icon: LayoutDashboard },
  { key: "campaigns", label: "Campaigns", icon: BookOpenText },
  { key: "disbursements", label: "Disbursement Requests", icon: ClipboardList },
  { key: "users", label: "Users", icon: Users },
  { key: "reports", label: "Reports & Analytics", icon: BarChart3 },
  { key: "statements", label: "Account Statements", icon: FileBarChart2 },
  { key: "settings", label: "Settings", icon: Settings },
  { key: "logout", label: "Log out", icon: LogOut },
];

const metrics = [
  { title: "Total Campaigns", value: "1,248", accent: "text-slate-900" },
  { title: "Pending Campaigns", value: "32", accent: "text-slate-900" },
  { title: "Pending Disbursements", value: "18", accent: "text-slate-900" },
  { title: "Total Disbursed", value: "₦126,450,000", accent: "text-emerald-600" },
];

const pendingDisbursements: PendingDisbursement[] = [
  {
    beneficiary: "John Doe",
    requestFor: "School Fees",
    amount: "₦120,000",
    dateRequested: "June 10, 2025",
  },
  {
    beneficiary: "Mary Daniel",
    requestFor: "Hospital Payment",
    amount: "₦200,000",
    dateRequested: "June 9, 2025",
  },
  {
    beneficiary: "Peter Obi",
    requestFor: "Business Debt",
    amount: "₦90,000",
    dateRequested: "June 9, 2025",
  },
];

function TabPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </section>
  );
}

function DashboardContent() {
  return (
    <div className="space-y-5">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{metric.title}</p>
            <p className={`mt-2 text-4xl font-bold ${metric.accent}`}>{metric.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Pending Disbursement Requests</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-3 font-semibold">Beneficiary</th>
                <th className="py-3 font-semibold">Request For</th>
                <th className="py-3 font-semibold">Amount</th>
                <th className="py-3 font-semibold">Date Requested</th>
                <th className="py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingDisbursements.map((row) => (
                <tr key={`${row.beneficiary}-${row.requestFor}`} className="border-b border-slate-100 text-slate-700 last:border-b-0">
                  <td className="py-3">{row.beneficiary}</td>
                  <td className="py-3">{row.requestFor}</td>
                  <td className="py-3">{row.amount}</td>
                  <td className="py-3">{row.dateRequested}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                        Approve
                      </button>
                      <button className="rounded-md border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-800">View all requests →</button>
      </section>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTabKey>("dashboard");

  const content = useMemo(() => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "campaigns":
        return <TabPlaceholder title="Campaigns" description="Review submitted campaigns, verify supporting documents, and approve or reject listings." />;
      case "disbursements":
        return <TabPlaceholder title="Disbursement Requests" description="Inspect pending disbursement evidence and make approval decisions for safe fund release." />;
      case "users":
        return <TabPlaceholder title="Users" description="Manage beneficiaries, donor accounts, and access levels across the platform." />;
      case "reports":
        return <TabPlaceholder title="Reports & Analytics" description="Track platform growth, donation trends, and operational performance with summary analytics." />;
      case "statements":
        return <TabPlaceholder title="Account Statements" description="Generate and download detailed statements for campaign inflows and approved disbursements." />;
      case "settings":
        return <TabPlaceholder title="Settings" description="Configure admin preferences, notification rules, and security controls." />;
      case "logout":
        return <TabPlaceholder title="Log out" description="You are about to end your admin session." />;
      default:
        return <DashboardContent />;
    }
  }, [activeTab]);

  return (
    <main className="px-4 pb-10 pt-4 sm:px-8 lg:px-12">
      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl bg-gradient-to-b from-[#022949] to-[#02172f] p-4 text-slate-100 shadow-xl">
          <div className="mb-5 rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-2xl font-extrabold text-white">VeriFund</p>
            <p className="text-xs text-emerald-200">Verified Giving. Trusted Impact.</p>
          </div>

          <nav className="space-y-1.5">
            {sidebarTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.key === activeTab;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    isActive ? "bg-emerald-600 text-white" : "text-slate-100 hover:bg-white/10"
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
            <h1 className="text-3xl font-extrabold text-slate-900">Admin Dashboard</h1>

            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Download Report
              </button>
              <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-50" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-700">
                  <UserRound className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Admin User</span>
              </div>
            </div>
          </header>

          {content}
        </div>
      </section>
    </main>
  );
}
