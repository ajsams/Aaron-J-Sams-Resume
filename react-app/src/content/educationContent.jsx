const educationContent = [
  {
    key: 1,
    institution: "University of Wisconsin-Madison",
    roleItems: [
      {
        key: 1,
        role: "Doctor of Philosophy",
        roleDesc: "Anthropology",
        startDate: "2008",
        endDate: "2012",
        listItems: [
          <>
            {"For my PhD "}{" "}
            <a href="https://search.library.wisc.edu/digital/AQPMILF44JC5MM8H">
              thesis
            </a>{" "}
            {
              " I conducted research on the evolution of genes underlying risk for Celiac Disease to test the hypothesis that past selection on the immune system is responsible for increasing incidence of auto-immune disease today."
            }
          </>,
          "In this work I developed custom compute infrastructure using python and integrated data from the 1000 Genomes Project and emergent ancient and archaic DNA.",
        ],
      },
      {
        key: 2,
        role: "Master of Science",
        roleDesc: "Anthropology",
        startDate: "2008",
        endDate: "2010",
        listItems: [
          "Completed two years of coursework culminating in a rigorous two-day (16 hour) written qualifying examination covering the breadth of the field of Biological Anthropology.",
        ],
      },
    ],
  },
  {
    key: 1,
    institution: "The University of Tennessee",
    roleItems: [
      {
        key: 1,
        role: "Bachelor of Arts",
        roleDesc: "Anthropology - Honors Concentration",
        startDate: "2004",
        endDate: "2008",
        listItems: [
          "I graduated Summa Cum Laude with a degree in anthropology. I began college in the School of Music as a Vocal Performance major and continued to participate in the UT Chamber Singers and UT Opera as extracurricular activities after transitioning to the Department of Anthropology.",
          <>
            {"In my undergraduate honors "}
            <a href="https://trace.tennessee.edu/cgi/viewcontent.cgi?article=2230&context=utk_chanhonoproj">
              thesis
            </a>
            {
              " thesis I conducted a comparative anatomical study of the supralaryngeal vocal tract in modern humans, neandertals, and chimpanzees to assess hypotheses about the capacity for modern speech in neandertals."
            }
          </>,
        ],
      },
    ],
  },
];

export default educationContent;
