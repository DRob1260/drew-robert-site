import { RegionData } from "../../models/CovidTracker/api/RegionData";

export const IllinoisRegionData: RegionData = {
  region: {
    name: "Illinois",
    lat: 40.6331,
    long: -89.3985,
    subRegions: [
      "Adams",
      "Alexander",
      "Bond",
      "Boone",
      "Brown",
      "Bureau",
      "Calhoun",
      "Carroll",
      "Cass",
      "Champaign",
      "Chicago",
      "Christian",
      "Clark",
      "Clay",
      "Clinton",
      "Coles",
      "Cook",
      "Crawford",
      "Cumberland",
      "De Witt",
      "DeKalb",
      "Douglas",
      "DuPage",
      "Edgar",
      "Edwards",
      "Effingham",
      "Fayette",
      "Ford",
      "Franklin",
      "Fulton",
      "Gallatin",
      "Greene",
      "Grundy",
      "Hamilton",
      "Hancock",
      "Hardin",
      "Henderson",
      "Henry",
      "Iroquois",
      "Jackson",
      "Jasper",
      "Jefferson",
      "Jersey",
      "Jo Daviess",
      "Johnson",
      "Kane",
      "Kankakee",
      "Kendall",
      "Knox",
      "Lake",
      "LaSalle",
      "Lawrence",
      "Lee",
      "Livingston",
      "Logan",
      "Macon",
      "Macoupin",
      "Madison",
      "Marion",
      "Marshall",
      "Mason",
      "Massac",
      "McDonough",
      "McHenry",
      "McLean",
      "Menard",
      "Mercer",
      "Monroe",
      "Montgomery",
      "Morgan",
      "Moultrie",
      "Ogle",
      "Out Of State",
      "Peoria",
      "Perry",
      "Piatt",
      "Pike",
      "Pope",
      "Pulaski",
      "Putnam",
      "Randolph",
      "Richland",
      "Rock Island",
      "Saline",
      "Sangamon",
      "Schuyler",
      "Scott",
      "Shelby",
      "St. Clair",
      "Stark",
      "Stephenson",
      "Tazewell",
      "Unassigned",
      "Union",
      "Vermilion",
      "Wabash",
      "Warren",
      "Washington",
      "Wayne",
      "White",
      "Whiteside",
      "Will",
      "Williamson",
      "Winnebago",
      "Woodford",
    ],
  },
  historicalRecords: [
    {
      testDate: "6/07/2020",
      totals: { cases: 127757, tested: 1042774, deaths: 5901 },
    },
    {
      testDate: "6/14/2020",
      totals: { cases: 132543, tested: 1190985, deaths: 6307 },
    },
    {
      testDate: "6/21/2020",
      totals: { cases: 136762, tested: 1360784, deaths: 6645 },
    },
    {
      testDate: "6/28/2020",
      totals: { cases: 141723, tested: 1544978, deaths: 6888 },
    },
    {
      testDate: "7/05/2020",
      totals: { cases: 147251, tested: 1761706, deaths: 7020 },
    },
    {
      testDate: "7/12/2020",
      totals: { cases: 153916, tested: 1982982, deaths: 7187 },
    },
    {
      testDate: "7/19/2020",
      totals: { cases: 161575, tested: 2244511, deaths: 7295 },
    },
    {
      testDate: "7/26/2020",
      totals: { cases: 171424, tested: 2511567, deaths: 7398 },
    },
    {
      testDate: "8/02/2020",
      totals: { cases: 181943, tested: 2778322, deaths: 7516 },
    },
    {
      testDate: "8/09/2020",
      totals: { cases: 194080, tested: 3073988, deaths: 7636 },
    },
    {
      testDate: "8/16/2020",
      totals: { cases: 206081, tested: 3366851, deaths: 7744 },
    },
    {
      testDate: "8/23/2020",
      totals: { cases: 220178, tested: 3704036, deaths: 7880 },
    },
    {
      testDate: "8/30/2020",
      totals: { cases: 233355, tested: 4016782, deaths: 8019 },
    },
  ],
};

export const IllinoisCountyRegionData = {
  region: { name: "McLean", lat: 40.5478, long: -88.8647, subRegions: [] },
  historicalRecords: [
    {
      testDate: "8/30/2020",
      totals: { cases: 1674, tested: 46891, deaths: 16 },
    },
    {
      testDate: "8/23/2020",
      totals: { cases: 1082, tested: 41748, deaths: 16 },
    },
    {
      testDate: "8/16/2020",
      totals: { cases: 773, tested: 36934, deaths: 15 },
    },
    { testDate: "8/9/2020", totals: { cases: 651, tested: 30894, deaths: 15 } },
    { testDate: "8/2/2020", totals: { cases: 562, tested: 26398, deaths: 15 } },
    {
      testDate: "7/26/2020",
      totals: { cases: 461, tested: 22118, deaths: 15 },
    },
    {
      testDate: "7/19/2020",
      totals: { cases: 386, tested: 19097, deaths: 15 },
    },
    {
      testDate: "7/12/2020",
      totals: { cases: 322, tested: 16251, deaths: 15 },
    },
    { testDate: "7/5/2020", totals: { cases: 277, tested: 14699, deaths: 13 } },
    {
      testDate: "6/28/2020",
      totals: { cases: 257, tested: 12877, deaths: 13 },
    },
    {
      testDate: "6/21/2020",
      totals: { cases: 251, tested: 11662, deaths: 13 },
    },
    {
      testDate: "6/14/2020",
      totals: { cases: 241, tested: 10010, deaths: 13 },
    },
    { testDate: "6/7/2020", totals: { cases: 226, tested: 8566, deaths: 13 } },
  ],
};
