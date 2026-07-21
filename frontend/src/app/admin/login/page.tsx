import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="px-4 pb-14 pt-6 sm:px-8 lg:px-12">
      <section className="mx-auto grid w-full max-w-5xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Admin Access</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Admin login</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Sign in to review campaigns, approve disbursements, and monitor platform activity.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>Are you a donor or beneficiary?</p>
            <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Go to User Login
            </Link>
          </div>
        </div>

        <form className="space-y-4" action="#" method="post">
          <div>
            <label htmlFor="admin-email" className="mb-1 block text-sm font-medium text-slate-700">
              Admin email
            </label>
            <input
              id="admin-email"
              type="email"
              placeholder="admin@verifund.com"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            Admin Log In
          </button>

          <Link
            href="/admin/dashboard"
            className="block w-full rounded-lg border border-indigo-200 px-4 py-2.5 text-center text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Continue to Admin Dashboard
          </Link>

          <p className="text-center text-sm text-slate-500">
            Need an admin account?{" "}
            <Link href="/admin/register" className="font-semibold text-indigo-700 hover:text-indigo-800">
              Register as Admin
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
