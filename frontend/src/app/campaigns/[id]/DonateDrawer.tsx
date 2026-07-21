"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type DonateDrawerProps = {
  campaignTitle: string;
  imageSrc: string;
};

const presetAmounts = [5000, 10000, 20000, 50000];

function formatNaira(amount: number) {
  return `₦ ${amount.toLocaleString("en-NG")}`;
}

export default function DonateDrawer({ campaignTitle, imageSrc }: DonateDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(25000);
  const [customAmount, setCustomAmount] = useState<string>("25000");
  const [donateAnonymously, setDonateAnonymously] = useState(false);

  const resolvedAmount = useMemo(() => {
    const parsed = Number(customAmount.replace(/[^\d]/g, ""));
    if (!Number.isFinite(parsed) || parsed <= 0) {
      return selectedAmount;
    }
    return parsed;
  }, [customAmount, selectedAmount]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-5 w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Donate Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close donation panel"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/35"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-5 shadow-2xl sm:p-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              ← Back to campaign
            </button>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-md">
                <Image src={imageSrc} alt={campaignTitle} fill className="object-cover object-top" sizes="56px" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Donate to</p>
                <p className="line-clamp-2 text-2xl font-extrabold leading-tight text-slate-900">{campaignTitle}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-emerald-600 px-2 py-1 text-white">1</span>
              <span className="text-emerald-600">Amount</span>
              <span>2 Details</span>
              <span>3 Payment</span>
              <span>4 Success</span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-700">Select Amount</p>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {presetAmounts.map((amount) => {
                  const active = selectedAmount === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount(String(amount));
                      }}
                      className={`rounded-md border px-2 py-2 text-xs font-semibold transition ${
                        active
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {formatNaira(amount).replace("₦ ", "₦")}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setSelectedAmount(0)}
                  className={`rounded-md border px-2 py-2 text-xs font-semibold transition ${
                    selectedAmount === 0
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="donation-amount" className="text-sm font-semibold text-slate-700">
                Enter Amount
              </label>
              <div className="mt-2 rounded-md border border-slate-200 px-3 py-2">
                <input
                  id="donation-amount"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  className="w-full border-none bg-transparent text-2xl font-bold text-slate-900 outline-none"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">You can choose to remain anonymous.</p>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2">
              <div>
                <p className="text-sm font-semibold text-slate-700">Donate anonymously</p>
                <p className="text-xs text-emerald-600">Privacy enabled</p>
              </div>
              <button
                type="button"
                onClick={() => setDonateAnonymously((value) => !value)}
                aria-label="Toggle anonymous donation"
                className={`relative h-6 w-11 rounded-full transition ${donateAnonymously ? "bg-emerald-500" : "bg-slate-200"}`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    donateAnonymously ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Continue →
            </button>

            <p className="mt-3 text-xs text-slate-500">Your donation is secure and will go directly to this verified campaign.</p>
            <p className="mt-1 text-xs font-semibold text-emerald-600">🔒 SSL Secured</p>
            <p className="mt-3 text-sm font-bold text-slate-900">Amount: {formatNaira(resolvedAmount)}</p>
          </aside>
        </div>
      )}
    </>
  );
}
