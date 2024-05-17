const experienceContent = [
  {
    key: 1,
    institution: "Artemoose Games, LLC",
    roleItems: [
      {
        key: 1,
        role: "Managing Member",
        roleDesc: "Aiming to have an impact in green gaming.",
        startDate: "January 2023",
        endDate: "Present",
        listItems: [
          "Business Development and Operations: I manage business operations and was responsible for setting up the business entity, managing finances, and am leading business development activities.",
          "Game Design: I am a full partner in game ideation and design.",
          "Software Development: I develop game software (Godot, Gdevelop, Javascript).",
          "Creative Design: I develop art, sound, and narrative assets for games. Experienced in pixel art, developing experience in 2D Vector and 3D modeling (Blender).",
        ],
      },
    ],
  },
  {
    key: 2,
    institution: "Climate Drift",
    roleItems: [
      {
        key: 1,
        role: "Climate Drift Fellow",
        roleDesc:
          "Participant in highly selective first cohort of Climate Drift Career Accelerator.",
        startDate: "February 2024",
        endDate: "April 2024",
        listItems: [
          "Climate Industry Knowledge: This program helps experienced leaders transition to Climate Tech with personalized mentorship, networking, and hands-on projects.",
          "Research and Climate Communication: I conducted research leading to short- and long-form content on climate challenges and solutions.",
          <>
            My areas of primary interest in climate are:
            <ul>
              <li>
                {
                  "The food system, particularly food waste. See the result of my research on food waste challenges and solutions "
                }
                <a href="https://www.climatedrift.com/p/is-ugly-produce-a-solution-to-food">
                  here
                </a>
                .
              </li>
              <li>
                Reducing the carbon impact of data processing, with a particular
                interest in green gaming and reducing the impact of the games
                industry.
              </li>
              <li>Biodiversity monitoring and preservation.</li>
            </ul>
          </>,
        ],
      },
    ],
  },
  {
    key: 3,
    institution: "Embark Veterinary, Inc.",
    roleItems: [
      {
        key: 1,
        role: "Director of Research and Development, Scientific Products",
        roleDesc: "Scientific Lead for all Prediction Products",
        startDate: "August 2021",
        endDate: "December 2023",
        listItems: [
          "Cross-Functional Leadership: I co-led a cross-functional organization of over 30 Scientists, Engineers, and Product Managers. As a scientific and data lead I was accountable for product vision for all core products.",
          "Data Science Leadership: I served as the Data Science Lead for development and re-launch of the Dog Age Prediction Test. Under my leadership this team reduced prediction error by 50% and re-built and launched this product in 9 months.",
          "People Management: I was responsible for hiring, mentorship, and career development for a mostly remote team of over 15 computational scientists.",
          "Business Development: I developed and maintained relationships with technical leaders at partner organizations. These included Cornell University, the National Institutes of Health, and Hill's Pet Nutrition.",
          "Scientific Communication: I wrote, co-wrote, and reviewed scientific copy for internal, media, and customer communications.",
        ],
      },
      {
        key: 2,
        role: "Principal Scientist, Ancestry & Population Genetics Lead",
        roleDesc:
          "Lead scientist and Team Lead developing ancestry and population genetics products.",
        startDate: "February 2020",
        endDate: "August 2021",
        listItems: [
          "Data & ML Product Ownership: Ancestry, Inbreeding, and Relatives product owner. Accountable for continuous monitoring and improvement of these market-leading data products.",
          "Team Leadership: My team helpted to scale data pipelines from 100's of thousands to millions of customers and improved prediction pipeline automation from 40 to over 95% in under 1 year.",
          "Team Management: Hired and managed a cross-functional team of 10 scientists and engineers.",
          "Business development: Let patent development on 2 patents.",
        ],
      },
      {
        key: 3,
        role: "Senior Scientist, Ancestry & Population Genetics Lead",
        roleDesc:
          "Lead scientist developing ancestry and population genetics products.",
        startDate: "February 2018",
        endDate: "February 2019",
        listItems: [
          "Scientific Programming: I developed software and algorithms (Python | AWS) behind the world's first Dog DNA Relative Finder.",
          "Data Engineering: I collaborated with engineering on the development of parallel cloud compute infrastructure to support Relative Finder compute and storage (trillions of data points).",
          "Computational Research: I conducted a large-scale simulation study requiring bespoke compute infrastructure on AWS.",
          "Machine Learning and Product Automation: I developed substantial algorithmic and model improvements to Embark's ancestry prediction pipeline.",
        ],
      },
      {
        key: 4,
        role: "Research Scientist",
        roleDesc: "Employee #15 at seed-stage startup.",
        startDate: "September 2016",
        endDate: "February 2018",
        listItems: [
          "Scientific Programming: I translated MVP product scientific scripts (Perl, Bash, R, C++) into an integrated python pipeline.",
          "Software Engineering: I improved and began automation of Embark's core ancestry assignment algorithms (Python | SQL | AWS | BASH).",
          "Product Development: I led the development of Embark's Coefficient of Inbreeding product.",
          "Research: I published scientific research on inbreeding and inbreeding depression in canines.",
          "Data Analytics: I developed custom data dashboards to monitor and update ancestry prediction pipeline results.",
        ],
      },
    ],
  },
  {
    key: 4,
    institution: "Cornell University",
    roleItems: [
      {
        key: 1,
        role: "Postdoctoral Research Associate",
        roleDesc:
          "Postdoctoral Research Associate in Department of Biological Statistics and Computational Biology.",
        startDate: "March 2013",
        endDate: "September 2016",
        listItems: [
          "Public speaking and science communication: I was awarded best podium presentation by the American Association of Anthropological Genetics, and was a frequent guest lecturer in courses in population genetics, human genetics, and nutrition.",
          "Scientific writing: I published 11 peer-reviewed research manuscripts.",
          "Data Engineering: I conducted large scale simulation studies using custom parallel compute infrastructure on an HPC cluster using Linux/Bash/Python.",
          "Leadership: I mentored graduate and undergraduate students in their research and career development.",
        ],
      },
    ],
  },
];

export default experienceContent;
