export type CampaignCategory =
  | "HEALTH"
  | "EDUCATION"
  | "EMERGENCY"
  | "BUSINESS"
  | "COMMUNITY"
  | "DISASTER_RELIEF"
  | "RELIGION"
  | "OTHER";

export interface Campaign {
  id: string;
  name: string;
  campaignTitle: string;
  images: string[];
  story: string;
  amountNeeded: number;
  amountRaised: number;
  amountSpent: number;
  category: CampaignCategory;
  supportingDocuments: string[];
  verificationDeadline: string;
  location: string;
}

export const campaigns: Campaign[] = [
  {
    id: "cmp_001",
    name: "Grace Adeyemi",
    campaignTitle: "Help Grace Undergo Life-Saving Heart Surgery",
    images: [
      "/campaigns/medical-campaign.png"
    ],
    story:
      "I was diagnosed with a serious heart condition that requires urgent surgery. My family has exhausted our savings on tests and medications. I humbly seek support to undergo surgery so I can recover and continue caring for my children. Every donation is verified and will be disbursed directly toward my treatment.",
    amountNeeded: 8500000,
    amountRaised: 4365000,
    amountSpent: 1700000,
    category: "HEALTH",
    supportingDocuments: [
      "/campaigns/grace_medical_report.pdf",
      "/campaigns/grace_hospital_estimate.pdf"
    ],
    verificationDeadline: "2026-08-05",
    location: "Lagos, Nigeria"
  },

  {
    id: "cmp_002",
    name: "David Okonkwo",
    campaignTitle: "Help David Pay His Final Year Tuition",
    images: [
      "/campaigns/education-campaign.png"
    ],
    story:
      "I recently gained admission into my final academic session, but my family can no longer afford my tuition after my father's business closed. Completing my degree will allow me to begin my engineering career and support my family.",
    amountNeeded: 1250000,
    amountRaised: 835000,
    amountSpent: 250000,
    category: "EDUCATION",
    supportingDocuments: [
      "/campaigns/david_admission_letter.pdf",
      "/campaigns/david_tuition_breakdown.pdf"
    ],
    verificationDeadline: "2026-08-15",
    location: "Ibadan, Nigeria"
  },

  {
    id: "cmp_003",
    name: "Chioma Eze",
    campaignTitle: "Help Chioma Rebuild Her Food Business",
    images: [
      "/campaigns/business-campaign.png"
    ],
    story:
      "I own a small neighborhood food business that supports my family. Rising food costs and equipment failure have made it difficult to continue operating. With your support, I can restock supplies and purchase a replacement display unit to keep serving my community.",
    amountNeeded: 1800000,
    amountRaised: 950000,
    amountSpent: 420000,
    category: "BUSINESS",
    supportingDocuments: [
      "/campaigns/chioma_business_registration.pdf",
      "/campaigns/chioma_equipment_quotation.pdf"
    ],
    verificationDeadline: "2026-08-22",
    location: "Abuja, Nigeria"
  },

  {
    id: "cmp_004",
    name: "Mama Bisi Adebayo",
    campaignTitle: "Support Mama Bisi's Knee Replacement Surgery",
    images: [
      "/campaigns/elderly-campaign.png"
    ],
    story:
      "For years I have struggled with severe arthritis that has made walking extremely painful. Doctors have recommended knee replacement surgery. Your kindness will help me regain mobility and continue caring for my grandchildren.",
    amountNeeded: 4200000,
    amountRaised: 2100000,
    amountSpent: 700000,
    category: "HEALTH",
    supportingDocuments: [
      "/campaigns/bisi_orthopedic_report.pdf",
      "/campaigns/bisi_surgery_estimate.pdf"
    ],
    verificationDeadline: "2026-08-11",
    location: "Akure, Nigeria"
  },

  {
    id: "cmp_005",
    name: "Samuel Ibrahim",
    campaignTitle: "Help Samuel Recover After a Construction Accident",
    images: [
      "/campaigns/construction-campaign.png"
    ],
    story:
      "While working on a construction site, I suffered serious injuries that have prevented me from working. I need support for rehabilitation and temporary living expenses while I recover and return to work.",
    amountNeeded: 2500000,
    amountRaised: 1730000,
    amountSpent: 820000,
    category: "EMERGENCY",
    supportingDocuments: [
      "/campaigns/samuel_accident_report.pdf",
      "/campaigns/samuel_hospital_bills.pdf"
    ],
    verificationDeadline: "2026-08-09",
    location: "Port Harcourt, Nigeria"
  },

  {
    id: "cmp_006",
    name: "Emmanuel Yusuf",
    campaignTitle: "Help Emmanuel Purchase a Custom Mobility Wheelchair",
    images: [
      "/campaigns/disability-campaign.png"
    ],
    story:
      "After a spinal cord injury, I require a specialized wheelchair to regain independence and continue working remotely. The recommended wheelchair is expensive and not covered by available assistance programs. Your support will help restore my mobility and livelihood.",
    amountNeeded: 3200000,
    amountRaised: 1400000,
    amountSpent: 500000,
    category: "HEALTH",
    supportingDocuments: [
      "/campaigns/emmanuel_medical_report.pdf",
      "/campaigns/emmanuel_wheelchair_quotation.pdf"
    ],
    verificationDeadline: "2026-08-18",
    location: "Enugu, Nigeria"
  }
];