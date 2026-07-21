# VeriFund Design Guide: From PRD to Interface

## 1. Project Vision & Core Concept

VeriFund is not just another donation app; it is a **transparency-first relief fundraising platform**.

- **The Problem:** When disaster or crisis strikes, relief donations happen fast and chaotically — usually funneled through one person's personal bank account, shared on WhatsApp or Twitter. No one can verify how much was actually raised, whether it reached the target, or how the money was really spent. Trust collapses fast, and future appeals get ignored.
- **The Solution:** VeriFund lets **verified organizations** create time-boxed relief campaigns. Every donation flows into a dedicated, trackable account tied to that campaign — not a personal account. Every disbursement is logged publicly, so donors can see exactly where their money went, not just that it was "received."
- **Design Mantra:** *"Verified Giving. Trusted Impact."*
- **Mission:** To make charitable giving more transparent, accountable, and trustworthy by ensuring every verified donation reaches its intended purpose.
- **Vision:** To become Africa's most trusted platform for verified fundraising, where every donor can give with confidence and every beneficiary receives support with dignity.

**Summary of project:** VeriFund is a fundraising platform built on trust infrastructure, not just payment infrastructure. Verified organizations open a campaign for a specific cause with a target amount and deadline. Donors contribute directly into a dedicated account for that campaign via Monnify, so funds never pass through a personal account. As the campaign progresses, a live public ledger shows total raised, and once funds are disbursed, a second ledger entry shows exactly what they were spent on — vendor, amount, purpose. Where a betting-style GoFundMe link only shows you "money in," VeriFund shows the full lifecycle of every naira: from donor, to campaign, to verified outcome.

## 2. Target Audience & Platform

Who are we designing for? Two users, equally important:

- **The Donor** — wants to give to a real, urgent cause but has been burned before by unclear appeals. They don't need investment-grade analytics; they need quick trust signals: is this org verified, how much is raised, where did past funds go.
- **The Verified Organization** — an NGO, community group, or relief coordinator who needs a credible, low-friction way to raise funds and prove accountability, without building their own payment infrastructure.

**The Platform:**
- **Web only.** VeriFund's MVP is a responsive web application — no native mobile app in scope.
- **Constraint:** Still design with mobile-responsive discipline (the majority of Nigerian donors will land on this from a shared link on their phone), but there's no PWA or gesture-based interaction requirement. Prioritize clarity and fast load over native-app polish.

## 3. The Designer's Role in the Core Engine

The most critical design challenge isn't a pricing algorithm — it's making **accountability visible**. You're designing the visual language for what we'll call the **Trust Chain**: verification → collection → disbursement.

**Trust Chain Visually Defined**

Unlike a stock price that updates constantly, VeriFund's key moments are **event-driven**, not time-driven:
1. A campaign is **verified** (beneficiary's story, documents, and funding goal approved by admin before the campaign ever becomes public)
2. A donation **lands** (funds contributed toward the campaign — no donor account required)
3. A disbursement **fires**, in **stages, not all at once** — each stage requires fresh supporting evidence (a medical invoice, tuition bill, rent invoice, business quotation, etc.) reviewed by an admin before funds are released
4. The campaign **completes**, closing with a full, downloadable financial history

**Designer Challenge:** How do we make each of these four moments feel like a distinct, confidence-building event — not just rows in a generic table? Staged disbursement in particular needs its own visual language: a donor should be able to see *why* funds haven't all gone out at once, and read that as protective, not suspicious.

**The Trust Chain Breakdown (for visualizing data)**

Every campaign's credibility is built from:
1. **Verification Status (foundational):** Has the beneficiary's story and documentation been confirmed real by an admin? This gates everything else.
2. **Collection Progress:** Live total raised vs. target, tied to real donations — not a manually-updated number.
3. **Disbursement Transparency:** What was actually paid out, to whom, for what stage, and when — the part most donation platforms skip.

**The four numbers that must always travel together** (per campaign, and rolled up platform-wide on Home):
- **Amount Needed** — the funding goal
- **Amount Raised** — total donated so far
- **Amount Released** — total actually disbursed to the beneficiary, across all approved stages
- **Remaining Balance** — raised minus released, i.e. funds held in trust, not yet paid out

This four-number set is the real signature visualization for VeriFund — it's the equivalent of ClubVest's CPI breakdown. A donor should never see "raised" alone; released vs. remaining is what proves the verification model is actually working, not just claimed.

## 4. Key Design Systems: The Verification & Status Matrix

Instead of a Risk Tier (A/B/C), VeriFund needs a **Campaign Status System** that a donor can read at a glance across a list of campaigns.

| Status | Meaning | Design Implication |
|---|---|---|
| **Verified** | Org identity confirmed by admin | Needs a "Trusted" feel — a clear badge (checkmark, verified seal), calm color, no ambiguity |
| **Pending Review** | Submitted, not yet approved | Needs a "Waiting" feel — visible but clearly not yet donatable, avoid implying trust prematurely |
| **Active** | Verified and currently collecting | Needs an "Urgent but credible" feel — progress bar, days remaining, live raised amount |
| **Closed / Disbursed** | Deadline passed or target hit, funds paid out | Needs a "Resolved" feel — shift emphasis to the disbursement log, not the ask |

**UI Rules for Status:**
1. Status badge must be visible wherever a campaign is shown — home list, detail page, and any shared link preview.
2. Must include a tooltip or short explainer on what "Verified" actually checks (so it isn't just a trust-signal-shaped sticker with no substance behind it).

**Category Tags (secondary system, built alongside Status):**

Every campaign also carries a **category** — Medical, Education, Business, Emergency, and similar — shown as a tag on the card and detail page. This isn't a risk signal like ClubVest's tiers; it's a browsing and empathy aid, letting a donor scan a list and find causes that resonate with them personally. Pair it with **donor count** (e.g. "120 donors") on every card — social proof that a campaign is already trusted by real people, which matters as much as the verified badge itself.

## 5. MVP Screen & Feature Requirements

The MVP scope is strictly focused: prove that transparent collection-to-disbursement actually builds donor trust — not launch a full nonprofit management suite.

**Screen 1: Home (The Campaign Browse View)**
- *Function:* Let donors quickly scan active causes, assess legitimacy, and grasp platform-wide credibility in one glance.
- *Key Elements:* Platform trust stats bar (total verified campaigns, total funds disbursed, lives impacted), responsive campaign list (filterable by category/status), amount raised vs. target, % funded, donor count, category tag, verification badge (visual priority).

**Screen 2: Campaign Detail (The Giving Decision View)**
- *Function:* Give a donor everything needed to decide to give.
- *Key Elements:* Campaign story + images, supporting documents (uploaded evidence), the four-number set (needed/raised/released/remaining), verification badge with tooltip explaining what was checked, donor count, clear Donate CTA — **no account required to donate**.

**Screen 3: My Activity (The Donor/Org Tracker View)**
- *Function:* Instant snapshot of personal involvement — donations made (donor view) or campaigns run (org view).
- *Key Elements:* Total donated or total raised (hero metric), list of campaigns donated to / created, status indicator per campaign.

**Screen 4: Disbursement Log (The Transparency View)**
- *Function:* This is VeriFund's signature screen — the one thing most donation platforms don't do well.
- *Key Elements:* Public ledger of every disbursement stage (amount, recipient, purpose, supporting document type, date) per campaign, plus a historical view across closed campaigns. Both beneficiaries and admins can **download a full account statement** — a real financial record, not just an in-app view.

**Screen 5: How It Works / About (The Trust Explainer)**
- *Function:* Convert a skeptical first-time visitor before they've even opened a campaign. This is where the verification-first model is explained in plain language, independent of any single campaign.
- *Key Elements:* The four-step (or five-step, including completion) process explainer, Mission/Vision statements, Core Values (Trust, Transparency, Accountability, Compassion), and a clear split between "For Donors" and "For Beneficiaries" messaging.

## 6. Primary User Flows

Focus on minimizing friction in these key actions.

**Flow 1: Org Onboarding & Campaign Creation**
Sign up → Upload verification documents → Admin review (Pending state) → Approved → Create campaign (story, target, deadline, images).

**Flow 2: Donating**
Browse campaigns → Select campaign → Enter amount → Pay via Monnify (**no donor account required**) → Success state (donation recorded, raised amount updates).

**Flow 3: Requesting a Disbursement Stage (Beneficiary side)**
Select active campaign with remaining balance → Enter amount + purpose for this stage → Upload supporting evidence (invoice, bill, quotation, etc.) → Submit for admin review.

**Flow 4: Approving a Disbursement (Admin side)**
Review disbursement request + evidence → Approve or reject → On approval, funds are released and logged publicly (released amount updates, remaining balance decreases).

## 7. Design Principles for Trust & Security

Because we're dealing with charitable funds and asking people to trust a platform with money meant for people in need, trust is our currency — arguably even more than it is for ClubVest, since there's no upside for the donor, only faith that the money did good.

1. **Fast UI Response:** Donation confirmation and campaign creation must feel instantaneous — donors giving in an emotional, urgent moment shouldn't be left wondering if it worked.
2. **Clear Error Handling:** Never leave a donor wondering why a payment failed. Errors must be specific ("Payment declined by your bank," not "Something went wrong").
3. **Transparency Logs:** The Disbursement Log (Screen 4) must feel like an open ledger, not a buried admin report. Downloadable statements reinforce this — trust should be exportable, not just displayed.
4. **Public Rules:** Use tooltips and short explainers liberally so verification criteria, campaign status, and the staged-disbursement model feel like fixed, public rules — not an opaque approval process.
5. **Visible Administration:** Admin capabilities (approve campaigns, reject fraudulent submissions, review disbursement requests, suspend suspicious accounts, audit activity) are part of the trust story, not just a backend feature. Consider surfacing a light version of this — e.g. "reviewed by our team" — to donors, without exposing internal admin tooling.

**Core Values guiding every design decision:**
- **Trust** — generosity grows when people have confidence their contributions are protected
- **Transparency** — every naira donated should be accounted for through clear records
- **Accountability** — verification doesn't stop at approval; every disbursement is monitored until campaign completion
- **Compassion** — behind every campaign is a real person; design should treat beneficiaries with dignity, never as a case number

## 8. Defining Design Success (MVP)

Your designs will be successful if they positively impact these metrics:

- **Verification Completion Rate:** Are organizations actually completing document upload and getting approved, or dropping off mid-onboarding?
- **Donation Completion Rate:** Of donors who open a campaign, how many complete a donation — a proxy for whether the trust signals are working.
- **Time to First Donation:** How quickly does a newly approved campaign receive its first donation — a signal of whether the browse/detail screens make the case fast enough.
