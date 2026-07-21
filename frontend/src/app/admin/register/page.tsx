import Link from "next/link";

export default function AdminRegisterPage() {
  return (
    <main className="px-4 pb-14 pt-6 sm:px-8 lg:px-12">
      <section className="mx-auto grid w-full max-w-5xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Admin Registration</p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Create admin account</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Register an admin profile to manage campaign verification, moderation, and disbursement approvals.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>Want to register as a user instead?</p>
            <Link href="/register" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Go to User Register
            </Link>
          </div>
        </div>

        <form className="space-y-4" action="#" method="post">
          <div>
            <label htmlFor="admin-name" className="mb-1 block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input
              id="admin-name"
              type="text"
              placeholder="Admin full name"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            />
          </div>

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
              placeholder="Create password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            Create Admin Account
          </button>

          <p className="text-center text-sm text-slate-500">
            Already have an admin account?{" "}
            <Link href="/admin/login" className="font-semibold text-indigo-700 hover:text-indigo-800">
              Log In
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
