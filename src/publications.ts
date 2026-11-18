export type Publication = {
  name: string;
  link: string;
  picture: string;
  authors: string;
  venue: string;
  year: number;
  award?: string;
};

export const SITE_URL = "https://zach-cutler.com/";
export const PERSON_ID = `${SITE_URL}#zach-cutler`;

export const publications: Publication[] = [
  {
    link: "https://www.visdesignlab.net/publications/2026_vis_read-critique-or-sketch/",
    name: "Read, Critique, or Sketch? Investigating Alternative Visualization Literacy Assessment Modalities",
    picture: "./2026_vis_read-critique-or-sketch.png",
    authors:
      "Zach Cutler, Lily W Ge, Matthew Kay, Lane Harrison, Andrew McNutt, Alexander Lex",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics (VIS), 2026",
    year: 2026,
  },
  {
    link: "https://www.visdesignlab.net/publications/2025_vis_revisit/",
    name: "ReVISit 2: A Full Experiment Life Cycle User Study Framework",
    picture: "./2025_vis_revisit.png",
    authors:
      "Zach Cutler, Jack Wilburn, Hilson Shrestha, Yiren Ding, Brian Bollen, Khandaker Abrar Nadib, Tingying He, Andrew McNutt, Lane Harrison, Alexander Lex",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics (VIS), 2025",
    year: 2025,
    award: "IEEE VIS 2025 Best Paper Award",
  },
  {
    link: "https://www.visdesignlab.net/publications/2025_chi_crowdaloud/",
    name: "Crowdsourced Think-Aloud Studies",
    picture: "./2025_chi_crowdaloud_teaser.png",
    authors: "Zach Cutler, Lane Harrison, Carolina Nobre, Alexander Lex",
    venue:
      "SIGCHI Conference on Human Factors in Computing Systems (CHI), 2025",
    year: 2025,
  },
  {
    link: "https://www.visdesignlab.net/publications/2025_chi_guardrails/",
    name: "Visualization Guardrails: Designing Interventions Against Cherry-Picking in Interactive Data Explorers",
    picture: "./2025_chi_guardrails_teaser.png",
    authors: "Maxim Lisnic, Zach Cutler, Marina Kogan, Alexander Lex",
    venue:
      "SIGCHI Conference on Human Factors in Computing Systems (CHI), 2025",
    year: 2025,
  },
  {
    link: "https://www.visdesignlab.net/publications/2024_eurovis_persist/",
    name: "Persist: Persistent and Reusable Interactions in Computational Notebooks",
    picture: "./2024_preprint_persist_teaser.png",
    authors: "Kiran Gadhave, Zach Cutler, Alexander Lex",
    venue: "Computer Graphics Forum (EuroVis), 2024",
    year: 2024,
  },
  {
    link: "https://www.visdesignlab.net/publications/2022_eurovis_reusing_workflows/",
    name: "Reusing Interactive Analysis Workflows",
    picture: "./2022_eurovis_reusing_intent.png",
    authors: "Kiran Gadhave, Zach Cutler, Alexander Lex",
    venue: "Computer Graphics Forum (EuroVis), 2022",
    year: 2022,
  },
  {
    link: "https://www.visdesignlab.net/publications/2021_ivi_intent/",
    name: "Predicting Intent Behind Selections in Scatterplot Visualizations",
    picture: "./2021_ivi_intent_teaser.png",
    authors:
      "Kiran Gadhave, Jochen Görtler, Zach Cutler, Carolina Nobre, Oliver Deussen, Miriah Meyer, Jeff Phillips, Alexander Lex",
    venue: "Information Visualization, 2021",
    year: 2021,
  },
  {
    link: "https://www.visdesignlab.net/publications/2021_chi_revisit/",
    name: "reVISit: Looking Under the Hood of Interactive Visualization Studies",
    picture: "./2021_chi_revisit_teaser.png",
    authors:
      "Carolina Nobre, Dylan Wootton, Zach Cutler, Lane Harrison, Hanspeter Pfister, Alexander Lex",
    venue:
      "SIGCHI Conference on Human Factors in Computing Systems (CHI), 2021",
    year: 2021,
  },
  {
    link: "https://www.visdesignlab.net/publications/2020_visshort_trrack/",
    name: "Trrack: A Library for Provenance-Tracking in Web-Based Visualizations",
    picture: "./2020-10_infovis_trrack_teaser.png",
    authors: "Zach Cutler, Kiran Gadhave, Alexander Lex",
    venue: "IEEE Visualization Conference (VIS), 2020",
    year: 2020,
  },
];

// schema.org ScholarlyArticle entries, linked to the Person in index.html.
export function publicationsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": publications.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.name,
      name: p.name,
      url: p.link,
      image: new URL(p.picture, SITE_URL).href,
      datePublished: String(p.year),
      isPartOf: {
        "@type": "CreativeWork",
        name: p.venue.replace(/,\s*\d{4}$/, ""),
      },
      author: p.authors.split(",").map((a) => {
        const name = a.trim();
        return name === "Zach Cutler"
          ? { "@id": PERSON_ID }
          : { "@type": "Person", name };
      }),
      ...(p.award ? { award: p.award } : {}),
    })),
  };
}
