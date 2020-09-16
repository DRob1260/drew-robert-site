import {
  buildTotalCasesGraphLineWithProperties,
  buildTotalDeathsGraphLine,
  buildTotalTestsGraphLine,
  buildGraphData,
  buildGraphColors,
  formatNumber,
} from "./CovidTrackerUtils";
import { IllinoisRegionData } from "../../mocks/CovidTracker/MockRegionData";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";

describe("building graph lines", () => {
  test("buildTotalCasesGraphLine", () => {
    expect(
      buildTotalCasesGraphLineWithProperties(
        IllinoisRegionData.historicalRecords
      )
    ).toEqual(expectedTotalCasesGraphLine);
  });
  test("buildTotalDeathsGraphLine", () => {
    expect(
      buildTotalDeathsGraphLine(IllinoisRegionData.historicalRecords)
    ).toEqual(expectedTotalDeathsGraphLine);
  });
  test("buildTotalTestsGraphLine", () => {
    expect(
      buildTotalTestsGraphLine(IllinoisRegionData.historicalRecords)
    ).toEqual(expectedTotalTestsGraphLine);
  });
});

describe("buildGraphData", () => {
  test("all values are true", () => {
    const showTotalCases = true;
    const showTotalDeaths = true;
    const showTotalTests = true;
    const totalCasesGraphLine = expectedTotalCasesGraphLine;
    const totalDeathsGraphLine = expectedTotalDeathsGraphLine;
    const totalTestsGraphLine = expectedTotalTestsGraphLine;
    expect(
      buildGraphData(
        showTotalCases,
        showTotalDeaths,
        showTotalTests,
        totalCasesGraphLine,
        totalDeathsGraphLine,
        totalTestsGraphLine
      )
    ).toEqual([
      expectedTotalCasesGraphLine,
      expectedTotalDeathsGraphLine,
      expectedTotalTestsGraphLine,
    ]);
  });
  test("showTotalCases is false", () => {
    const showTotalCases = false;
    const showTotalDeaths = true;
    const showTotalTests = true;
    const totalCasesGraphLine = expectedTotalCasesGraphLine;
    const totalDeathsGraphLine = expectedTotalDeathsGraphLine;
    const totalTestsGraphLine = expectedTotalTestsGraphLine;
    expect(
      buildGraphData(
        showTotalCases,
        showTotalDeaths,
        showTotalTests,
        totalCasesGraphLine,
        totalDeathsGraphLine,
        totalTestsGraphLine
      )
    ).toEqual([expectedTotalDeathsGraphLine, expectedTotalTestsGraphLine]);
  });
  test("showTotalDeaths is false", () => {
    const showTotalCases = true;
    const showTotalDeaths = false;
    const showTotalTests = true;
    const totalCasesGraphLine = expectedTotalCasesGraphLine;
    const totalDeathsGraphLine = expectedTotalDeathsGraphLine;
    const totalTestsGraphLine = expectedTotalTestsGraphLine;
    expect(
      buildGraphData(
        showTotalCases,
        showTotalDeaths,
        showTotalTests,
        totalCasesGraphLine,
        totalDeathsGraphLine,
        totalTestsGraphLine
      )
    ).toEqual([expectedTotalCasesGraphLine, expectedTotalTestsGraphLine]);
  });
  test("showTotalTests is false", () => {
    const showTotalCases = true;
    const showTotalDeaths = true;
    const showTotalTests = false;
    const totalCasesGraphLine = expectedTotalCasesGraphLine;
    const totalDeathsGraphLine = expectedTotalDeathsGraphLine;
    const totalTestsGraphLine = expectedTotalTestsGraphLine;
    expect(
      buildGraphData(
        showTotalCases,
        showTotalDeaths,
        showTotalTests,
        totalCasesGraphLine,
        totalDeathsGraphLine,
        totalTestsGraphLine
      )
    ).toEqual([expectedTotalCasesGraphLine, expectedTotalDeathsGraphLine]);
  });
});

describe("buildGraphColors", () => {
  test("all values are true", () => {
    const showTotalCases = true;
    const showTotalDeaths = true;
    const showTotalTests = true;
    expect(
      buildGraphColors(showTotalCases, showTotalDeaths, showTotalTests)
    ).toEqual([
      expectedTotalCasesColor,
      expectedTotalDeathsColor,
      expectedTotalTestsColor,
    ]);
  });
  test("showTotalCases is false", () => {
    const showTotalCases = false;
    const showTotalDeaths = true;
    const showTotalTests = true;
    expect(
      buildGraphColors(showTotalCases, showTotalDeaths, showTotalTests)
    ).toEqual([expectedTotalDeathsColor, expectedTotalTestsColor]);
  });
  test("showTotalDeaths is false", () => {
    const showTotalCases = true;
    const showTotalDeaths = false;
    const showTotalTests = true;
    expect(
      buildGraphColors(showTotalCases, showTotalDeaths, showTotalTests)
    ).toEqual([expectedTotalCasesColor, expectedTotalTestsColor]);
  });
  test("showTotalTests is false", () => {
    const showTotalCases = true;
    const showTotalDeaths = true;
    const showTotalTests = false;
    expect(
      buildGraphColors(showTotalCases, showTotalDeaths, showTotalTests)
    ).toEqual([expectedTotalCasesColor, expectedTotalDeathsColor]);
  });
});

test("number formatting", () => {
  expect(formatNumber(1000000)).toEqual("1,000,000");
});

const expectedTotalCasesColor = "#00C2AD";
const expectedTotalDeathsColor = "#107568";
const expectedTotalTestsColor = "#46FCE4";

const expectedTotalCasesGraphLine = {
  data: [
    { x: "2020-6-7", y: 127757 },
    { x: "2020-6-14", y: 132543 },
    { x: "2020-6-21", y: 136762 },
    { x: "2020-6-28", y: 141723 },
    { x: "2020-7-5", y: 147251 },
    { x: "2020-7-12", y: 153916 },
    { x: "2020-7-19", y: 161575 },
    { x: "2020-7-26", y: 171424 },
    { x: "2020-8-2", y: 181943 },
    { x: "2020-8-9", y: 194080 },
    { x: "2020-8-16", y: 206081 },
    { x: "2020-8-23", y: 220178 },
    { x: "2020-8-30", y: 233355 },
  ],
  id: "Total Cases",
};

const expectedTotalDeathsGraphLine = {
  data: [
    { x: "2020-6-7", y: 5901 },
    { x: "2020-6-14", y: 6307 },
    { x: "2020-6-21", y: 6645 },
    { x: "2020-6-28", y: 6888 },
    { x: "2020-7-5", y: 7020 },
    { x: "2020-7-12", y: 7187 },
    { x: "2020-7-19", y: 7295 },
    { x: "2020-7-26", y: 7398 },
    { x: "2020-8-2", y: 7516 },
    { x: "2020-8-9", y: 7636 },
    { x: "2020-8-16", y: 7744 },
    { x: "2020-8-23", y: 7880 },
    { x: "2020-8-30", y: 8019 },
  ],
  id: "Total Deaths",
};

const expectedTotalTestsGraphLine = {
  data: [
    { x: "2020-6-7", y: 1042774 },
    { x: "2020-6-14", y: 1190985 },
    { x: "2020-6-21", y: 1360784 },
    { x: "2020-6-28", y: 1544978 },
    { x: "2020-7-5", y: 1761706 },
    { x: "2020-7-12", y: 1982982 },
    { x: "2020-7-19", y: 2244511 },
    { x: "2020-7-26", y: 2511567 },
    { x: "2020-8-2", y: 2778322 },
    { x: "2020-8-9", y: 3073988 },
    { x: "2020-8-16", y: 3366851 },
    { x: "2020-8-23", y: 3704036 },
    { x: "2020-8-30", y: 4016782 },
  ],
  id: "Total Tests",
};
