/* istanbul ignore file */
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";
import { LocationClass } from "../../models/CovidTracker/api/LocationClass";
import { LocationHistoricalRecordsClass } from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";

export const illinoisLocation: LocationClass = {
  name: "Illinois",
  key: "illinois",
  source: {
    name: "Illinois Department of Public Health",
    apiUrl:
      "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
    infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
  },
};

export const illinoisHistoricalRecords: HistoricalRecord[] = [
  { testDate: "3/10/2020", totals: { cases: 20, tested: 326, deaths: 0 } },
  { testDate: "3/11/2020", totals: { cases: 25, tested: 367, deaths: 0 } },
  { testDate: "3/12/2020", totals: { cases: 32, tested: 418, deaths: 0 } },
  { testDate: "3/13/2020", totals: { cases: 46, tested: 444, deaths: 0 } },
  { testDate: "3/14/2020", totals: { cases: 64, tested: 708, deaths: 0 } },
  { testDate: "3/15/2020", totals: { cases: 93, tested: 932, deaths: 0 } },
  { testDate: "3/16/2020", totals: { cases: 105, tested: 1143, deaths: 0 } },
  { testDate: "3/17/2020", totals: { cases: 160, tested: 1500, deaths: 1 } },
  { testDate: "3/18/2020", totals: { cases: 288, tested: 2052, deaths: 3 } },
  { testDate: "3/19/2020", totals: { cases: 422, tested: 3151, deaths: 4 } },
  { testDate: "3/20/2020", totals: { cases: 585, tested: 4286, deaths: 5 } },
  { testDate: "3/21/2020", totals: { cases: 753, tested: 6247, deaths: 6 } },
  { testDate: "3/22/2020", totals: { cases: 1046, tested: 8374, deaths: 9 } },
  { testDate: "3/23/2020", totals: { cases: 1283, tested: 9868, deaths: 12 } },
  { testDate: "3/24/2020", totals: { cases: 1535, tested: 11485, deaths: 16 } },
  { testDate: "3/25/2020", totals: { cases: 1865, tested: 14209, deaths: 19 } },
  { testDate: "3/26/2020", totals: { cases: 2538, tested: 16631, deaths: 26 } },
  { testDate: "3/27/2020", totals: { cases: 3026, tested: 21542, deaths: 34 } },
  { testDate: "3/28/2020", totals: { cases: 3491, tested: 25429, deaths: 47 } },
  { testDate: "3/29/2020", totals: { cases: 4596, tested: 27762, deaths: 65 } },
  { testDate: "3/30/2020", totals: { cases: 5056, tested: 30446, deaths: 72 } },
  { testDate: "3/31/2020", totals: { cases: 5994, tested: 35225, deaths: 99 } },
  { testDate: "4/1/2020", totals: { cases: 6980, tested: 40384, deaths: 141 } },
  { testDate: "4/2/2020", totals: { cases: 7695, tested: 43656, deaths: 157 } },
  { testDate: "4/3/2020", totals: { cases: 8904, tested: 48048, deaths: 210 } },
  {
    testDate: "4/4/2020",
    totals: { cases: 10357, tested: 53581, deaths: 243 },
  },
  {
    testDate: "4/5/2020",
    totals: { cases: 11256, tested: 58983, deaths: 274 },
  },
  {
    testDate: "4/6/2020",
    totals: { cases: 12262, tested: 62942, deaths: 307 },
  },
  {
    testDate: "4/7/2020",
    totals: { cases: 13549, tested: 68732, deaths: 380 },
  },
  {
    testDate: "4/8/2020",
    totals: { cases: 15078, tested: 75066, deaths: 462 },
  },
  {
    testDate: "4/9/2020",
    totals: { cases: 16422, tested: 80857, deaths: 528 },
  },
  {
    testDate: "4/10/2020",
    totals: { cases: 17887, tested: 87527, deaths: 596 },
  },
  {
    testDate: "4/11/2020",
    totals: { cases: 19180, tested: 92779, deaths: 677 },
  },
  {
    testDate: "4/12/2020",
    totals: { cases: 20852, tested: 100735, deaths: 720 },
  },
  {
    testDate: "4/13/2020",
    totals: { cases: 22025, tested: 105768, deaths: 794 },
  },
  {
    testDate: "4/14/2020",
    totals: { cases: 23247, tested: 110616, deaths: 868 },
  },
  {
    testDate: "4/15/2020",
    totals: { cases: 24593, tested: 116929, deaths: 948 },
  },
  {
    testDate: "4/16/2020",
    totals: { cases: 25733, tested: 122589, deaths: 1072 },
  },
  {
    testDate: "4/17/2020",
    totals: { cases: 27575, tested: 130163, deaths: 1134 },
  },
  {
    testDate: "4/18/2020",
    totals: { cases: 29160, tested: 137404, deaths: 1259 },
  },
  {
    testDate: "4/19/2020",
    totals: { cases: 30357, tested: 143318, deaths: 1290 },
  },
  {
    testDate: "4/20/2020",
    totals: { cases: 31508, tested: 148358, deaths: 1349 },
  },
  {
    testDate: "4/21/2020",
    totals: { cases: 33059, tested: 154997, deaths: 1468 },
  },
  {
    testDate: "4/22/2020",
    totals: { cases: 35108, tested: 164346, deaths: 1565 },
  },
  {
    testDate: "4/23/2020",
    totals: { cases: 36934, tested: 173508, deaths: 1688 },
  },
  {
    testDate: "4/24/2020",
    totals: { cases: 39658, tested: 189632, deaths: 1795 },
  },
  {
    testDate: "4/25/2020",
    totals: { cases: 41777, tested: 201617, deaths: 1874 },
  },
  {
    testDate: "4/26/2020",
    totals: { cases: 43903, tested: 214952, deaths: 1933 },
  },
  {
    testDate: "4/27/2020",
    totals: { cases: 45883, tested: 227628, deaths: 1983 },
  },
  {
    testDate: "4/28/2020",
    totals: { cases: 48102, tested: 242189, deaths: 2125 },
  },
  {
    testDate: "4/29/2020",
    totals: { cases: 50355, tested: 256667, deaths: 2215 },
  },
  {
    testDate: "4/30/2020",
    totals: { cases: 52918, tested: 269867, deaths: 2355 },
  },
  {
    testDate: "5/1/2020",
    totals: { cases: 56055, tested: 284688, deaths: 2457 },
  },
  {
    testDate: "5/2/2020",
    totals: { cases: 58505, tested: 299896, deaths: 2559 },
  },
  {
    testDate: "5/3/2020",
    totals: { cases: 61499, tested: 319313, deaths: 2618 },
  },
  {
    testDate: "5/4/2020",
    totals: { cases: 63840, tested: 333147, deaths: 2662 },
  },
  {
    testDate: "5/5/2020",
    totals: { cases: 65962, tested: 346286, deaths: 2838 },
  },
  {
    testDate: "5/6/2020",
    totals: { cases: 68232, tested: 361260, deaths: 2974 },
  },
  {
    testDate: "5/7/2020",
    totals: { cases: 70873, tested: 379043, deaths: 3111 },
  },
  {
    testDate: "5/8/2020",
    totals: { cases: 73760, tested: 399714, deaths: 3241 },
  },
  {
    testDate: "5/9/2020",
    totals: { cases: 76085, tested: 416331, deaths: 3349 },
  },
  {
    testDate: "5/10/2020",
    totals: { cases: 77741, tested: 429984, deaths: 3406 },
  },
  {
    testDate: "5/11/2020",
    totals: { cases: 79007, tested: 442425, deaths: 3459 },
  },
  {
    testDate: "5/12/2020",
    totals: { cases: 83021, tested: 471691, deaths: 3601 },
  },
  {
    testDate: "5/13/2020",
    totals: { cases: 84698, tested: 489359, deaths: 3792 },
  },
  {
    testDate: "5/14/2020",
    totals: { cases: 87937, tested: 512037, deaths: 3928 },
  },
  {
    testDate: "5/15/2020",
    totals: { cases: 90369, tested: 538602, deaths: 4058 },
  },
  {
    testDate: "5/16/2020",
    totals: { cases: 92457, tested: 561649, deaths: 4129 },
  },
  {
    testDate: "5/17/2020",
    totals: { cases: 94191, tested: 581944, deaths: 4177 },
  },
  {
    testDate: "5/18/2020",
    totals: { cases: 96485, tested: 603241, deaths: 4234 },
  },
  {
    testDate: "5/19/2020",
    totals: { cases: 98030, tested: 621684, deaths: 4379 },
  },
  {
    testDate: "5/20/2020",
    totals: { cases: 100418, tested: 642713, deaths: 4525 },
  },
  {
    testDate: "5/21/2020",
    totals: { cases: 102686, tested: 672020, deaths: 4607 },
  },
  {
    testDate: "5/22/2020",
    totals: { cases: 105444, tested: 697133, deaths: 4715 },
  },
  {
    testDate: "5/23/2020",
    totals: { cases: 107796, tested: 722247, deaths: 4789 },
  },
  {
    testDate: "5/24/2020",
    totals: { cases: 110304, tested: 747921, deaths: 4853 },
  },
  {
    testDate: "5/25/2020",
    totals: { cases: 112017, tested: 769564, deaths: 4884 },
  },
  {
    testDate: "5/26/2020",
    totals: { cases: 113195, tested: 786794, deaths: 4923 },
  },
  {
    testDate: "5/27/2020",
    totals: { cases: 114306, tested: 803973, deaths: 5082 },
  },
  {
    testDate: "5/28/2020",
    totals: { cases: 115833, tested: 829966, deaths: 5186 },
  },
  {
    testDate: "5/29/2020",
    totals: { cases: 117455, tested: 851762, deaths: 5270 },
  },
  {
    testDate: "5/30/2020",
    totals: { cases: 118917, tested: 877105, deaths: 5330 },
  },
  {
    testDate: "5/31/2020",
    totals: { cases: 120260, tested: 898259, deaths: 5389 },
  },
  {
    testDate: "6/01/2020",
    totals: { cases: 121234, tested: 918273, deaths: 5412 },
  },
  {
    testDate: "6/02/2020",
    totals: { cases: 122848, tested: 934704, deaths: 5524 },
  },
  {
    testDate: "6/03/2020",
    totals: { cases: 123830, tested: 959175, deaths: 5620 },
  },
  {
    testDate: "6/04/2020",
    totals: { cases: 124759, tested: 982016, deaths: 5736 },
  },
  {
    testDate: "6/05/2020",
    totals: { cases: 125915, tested: 1000919, deaths: 5792 },
  },
  {
    testDate: "6/06/2020",
    totals: { cases: 126890, tested: 1022074, deaths: 5861 },
  },
  {
    testDate: "6/07/2020",
    totals: { cases: 127757, tested: 1042774, deaths: 5901 },
  },
  {
    testDate: "6/08/2020",
    totals: { cases: 128415, tested: 1058873, deaths: 5923 },
  },
  {
    testDate: "6/09/2020",
    totals: { cases: 129212, tested: 1079182, deaths: 6017 },
  },
  {
    testDate: "6/10/2020",
    totals: { cases: 129837, tested: 1100002, deaths: 6094 },
  },
  {
    testDate: "6/11/2020",
    totals: { cases: 130603, tested: 1122327, deaths: 6183 },
  },
  {
    testDate: "6/12/2020",
    totals: { cases: 131198, tested: 1147101, deaths: 6260 },
  },
  {
    testDate: "6/13/2020",
    totals: { cases: 131871, tested: 1168945, deaths: 6289 },
  },
  {
    testDate: "6/14/2020",
    totals: { cases: 132543, tested: 1190985, deaths: 6307 },
  },
  {
    testDate: "6/15/2020",
    totals: { cases: 133016, tested: 1209612, deaths: 6326 },
  },
  {
    testDate: "6/16/2020",
    totals: { cases: 133639, tested: 1228341, deaths: 6398 },
  },
  {
    testDate: "6/17/2020",
    totals: { cases: 134185, tested: 1258328, deaths: 6482 },
  },
  {
    testDate: "6/18/2020",
    totals: { cases: 134778, tested: 1283832, deaths: 6536 },
  },
  {
    testDate: "6/19/2020",
    totals: { cases: 135470, tested: 1311003, deaths: 6580 },
  },
  {
    testDate: "6/20/2020",
    totals: { cases: 136104, tested: 1336968, deaths: 6624 },
  },
  {
    testDate: "6/21/2020",
    totals: { cases: 136762, tested: 1360784, deaths: 6645 },
  },
  {
    testDate: "6/22/2020",
    totals: { cases: 137224, tested: 1379003, deaths: 6669 },
  },
  {
    testDate: "6/23/2020",
    totals: { cases: 137825, tested: 1399510, deaths: 6706 },
  },
  {
    testDate: "6/24/2020",
    totals: { cases: 138540, tested: 1428841, deaths: 6769 },
  },
  {
    testDate: "6/25/2020",
    totals: { cases: 139434, tested: 1460527, deaths: 6808 },
  },
  {
    testDate: "6/26/2020",
    totals: { cases: 140291, tested: 1490952, deaths: 6847 },
  },
  {
    testDate: "6/27/2020",
    totals: { cases: 141077, tested: 1521189, deaths: 6873 },
  },
  {
    testDate: "6/28/2020",
    totals: { cases: 141723, tested: 1544978, deaths: 6888 },
  },
  {
    testDate: "6/29/2020",
    totals: { cases: 142461, tested: 1571896, deaths: 6900 },
  },
  {
    testDate: "6/30/2020",
    totals: { cases: 143185, tested: 1602965, deaths: 6921 },
  },
  {
    testDate: "7/01/2020",
    totals: { cases: 144013, tested: 1636055, deaths: 6951 },
  },
  {
    testDate: "7/02/2020",
    totals: { cases: 144882, tested: 1666317, deaths: 6987 },
  },
  {
    testDate: "7/03/2020",
    totals: { cases: 145750, tested: 1700635, deaths: 7004 },
  },
  {
    testDate: "7/04/2020",
    totals: { cases: 146612, tested: 1734471, deaths: 7014 },
  },
  {
    testDate: "7/05/2020",
    totals: { cases: 147251, tested: 1761706, deaths: 7020 },
  },
  {
    testDate: "7/06/2020",
    totals: { cases: 147865, tested: 1782840, deaths: 7026 },
  },
  {
    testDate: "7/07/2020",
    totals: { cases: 148452, tested: 1809834, deaths: 7063 },
  },
  {
    testDate: "7/08/2020",
    totals: { cases: 149432, tested: 1842576, deaths: 7099 },
  },
  {
    testDate: "7/09/2020",
    totals: { cases: 150450, tested: 1878756, deaths: 7119 },
  },
  {
    testDate: "7/10/2020",
    totals: { cases: 151767, tested: 1911743, deaths: 7144 },
  },
  {
    testDate: "7/11/2020",
    totals: { cases: 152962, tested: 1944088, deaths: 7167 },
  },
  {
    testDate: "7/12/2020",
    totals: { cases: 153916, tested: 1982982, deaths: 7187 },
  },
  {
    testDate: "7/13/2020",
    totals: { cases: 154799, tested: 2012994, deaths: 7193 },
  },
  {
    testDate: "7/14/2020",
    totals: { cases: 155506, tested: 2041440, deaths: 7218 },
  },
  {
    testDate: "7/15/2020",
    totals: { cases: 156693, tested: 2079601, deaths: 7226 },
  },
  {
    testDate: "7/16/2020",
    totals: { cases: 157950, tested: 2122607, deaths: 7250 },
  },
  {
    testDate: "7/17/2020",
    totals: { cases: 159334, tested: 2166299, deaths: 7272 },
  },
  {
    testDate: "7/18/2020",
    totals: { cases: 160610, tested: 2212398, deaths: 7289 },
  },
  {
    testDate: "7/19/2020",
    totals: { cases: 161575, tested: 2244511, deaths: 7295 },
  },
  {
    testDate: "7/20/2020",
    totals: { cases: 162748, tested: 2279109, deaths: 7301 },
  },
  {
    testDate: "7/21/2020",
    totals: { cases: 163703, tested: 2308854, deaths: 7324 },
  },
  {
    testDate: "7/22/2020",
    totals: { cases: 165301, tested: 2348487, deaths: 7347 },
  },
  {
    testDate: "7/23/2020",
    totals: { cases: 166925, tested: 2388193, deaths: 7366 },
  },
  {
    testDate: "7/24/2020",
    totals: { cases: 168457, tested: 2432523, deaths: 7385 },
  },
  {
    testDate: "7/25/2020",
    totals: { cases: 169883, tested: 2470723, deaths: 7397 },
  },
  {
    testDate: "7/26/2020",
    totals: { cases: 171424, tested: 2511567, deaths: 7398 },
  },
  {
    testDate: "7/27/2020",
    totals: { cases: 172655, tested: 2542134, deaths: 7416 },
  },
  {
    testDate: "7/28/2020",
    totals: { cases: 173731, tested: 2570465, deaths: 7446 },
  },
  {
    testDate: "7/29/2020",
    totals: { cases: 175124, tested: 2608652, deaths: 7460 },
  },
  {
    testDate: "7/30/2020",
    totals: { cases: 176896, tested: 2649786, deaths: 7474 },
  },
  {
    testDate: "7/31/2020",
    totals: { cases: 178837, tested: 2699568, deaths: 7495 },
  },
  {
    testDate: "8/01/2020",
    totals: { cases: 180476, tested: 2739377, deaths: 7503 },
  },
  {
    testDate: "8/02/2020",
    totals: { cases: 181943, tested: 2778322, deaths: 7516 },
  },
  {
    testDate: "8/03/2020",
    totals: { cases: 183241, tested: 2806797, deaths: 7526 },
  },
  {
    testDate: "8/04/2020",
    totals: { cases: 184712, tested: 2849395, deaths: 7543 },
  },
  {
    testDate: "8/05/2020",
    totals: { cases: 186471, tested: 2896063, deaths: 7573 },
  },
  {
    testDate: "8/06/2020",
    totals: { cases: 188424, tested: 2937749, deaths: 7592 },
  },
  {
    testDate: "8/07/2020",
    totals: { cases: 190508, tested: 2984618, deaths: 7613 },
  },
  {
    testDate: "8/08/2020",
    totals: { cases: 192698, tested: 3032634, deaths: 7628 },
  },
  {
    testDate: "8/09/2020",
    totals: { cases: 194080, tested: 3073988, deaths: 7636 },
  },
  {
    testDate: "8/10/2020",
    totals: { cases: 195399, tested: 3106341, deaths: 7637 },
  },
  {
    testDate: "8/11/2020",
    totals: { cases: 196948, tested: 3147703, deaths: 7656 },
  },
  {
    testDate: "8/12/2020",
    totals: { cases: 198593, tested: 3189801, deaths: 7672 },
  },
  {
    testDate: "8/13/2020",
    totals: { cases: 200427, tested: 3235807, deaths: 7696 },
  },
  {
    testDate: "8/14/2020",
    totals: { cases: 202691, tested: 3285348, deaths: 7721 },
  },
  {
    testDate: "8/15/2020",
    totals: { cases: 204519, tested: 3329762, deaths: 7726 },
  },
  {
    testDate: "8/16/2020",
    totals: { cases: 206081, tested: 3366851, deaths: 7744 },
  },
  {
    testDate: "8/17/2020",
    totals: { cases: 207854, tested: 3405097, deaths: 7756 },
  },
  {
    testDate: "8/18/2020",
    totals: { cases: 209594, tested: 3439272, deaths: 7781 },
  },
  {
    testDate: "8/19/2020",
    totals: { cases: 211889, tested: 3489571, deaths: 7806 },
  },
  {
    testDate: "8/20/2020",
    totals: { cases: 213721, tested: 3541183, deaths: 7833 },
  },
  {
    testDate: "8/21/2020",
    totals: { cases: 215929, tested: 3592919, deaths: 7857 },
  },
  {
    testDate: "8/22/2020",
    totals: { cases: 218285, tested: 3649685, deaths: 7874 },
  },
  {
    testDate: "8/23/2020",
    totals: { cases: 220178, tested: 3704036, deaths: 7880 },
  },
  {
    testDate: "8/24/2020",
    totals: { cases: 221790, tested: 3740191, deaths: 7888 },
  },
  {
    testDate: "8/25/2020",
    totals: { cases: 223470, tested: 3781050, deaths: 7917 },
  },
  {
    testDate: "8/26/2020",
    totals: { cases: 225627, tested: 3831412, deaths: 7953 },
  },
  {
    testDate: "8/27/2020",
    totals: { cases: 227334, tested: 3875922, deaths: 7977 },
  },
  {
    testDate: "8/28/2020",
    totals: { cases: 229483, tested: 3924305, deaths: 7997 },
  },
  {
    testDate: "8/29/2020",
    totals: { cases: 231363, tested: 3973089, deaths: 8008 },
  },
  {
    testDate: "8/30/2020",
    totals: { cases: 233355, tested: 4016782, deaths: 8019 },
  },
  {
    testDate: "8/31/2020",
    totals: { cases: 235023, tested: 4064161, deaths: 8025 },
  },
  {
    testDate: "9/01/2020",
    totals: { cases: 236515, tested: 4087122, deaths: 8064 },
  },
  {
    testDate: "9/02/2020",
    totals: { cases: 238643, tested: 4119873, deaths: 8090 },
  },
  {
    testDate: "9/03/2020",
    totals: { cases: 240003, tested: 4160668, deaths: 8114 },
  },
  {
    testDate: "9/04/2020",
    totals: { cases: 245371, tested: 4309941, deaths: 8143 },
  },
  {
    testDate: "9/05/2020",
    totals: { cases: 248177, tested: 4371876, deaths: 8166 },
  },
  {
    testDate: "9/06/2020",
    totals: { cases: 249580, tested: 4418372, deaths: 8171 },
  },
  {
    testDate: "9/07/2020",
    totals: { cases: 250961, tested: 4447347, deaths: 8179 },
  },
  {
    testDate: "9/08/2020",
    totals: { cases: 252353, tested: 4478710, deaths: 8184 },
  },
  {
    testDate: "9/09/2020",
    totals: { cases: 253690, tested: 4526739, deaths: 8214 },
  },
  {
    testDate: "9/10/2020",
    totals: { cases: 255643, tested: 4575721, deaths: 8241 },
  },
  {
    testDate: "9/11/2020",
    totals: { cases: 257788, tested: 4632382, deaths: 8273 },
  },
  {
    testDate: "9/12/2020",
    totals: { cases: 259909, tested: 4688976, deaths: 8295 },
  },
  {
    testDate: "9/13/2020",
    totals: { cases: 261371, tested: 4735866, deaths: 8309 },
  },
];

export const illinoisLocationHistoricalRecordsClass: LocationHistoricalRecordsClass = {
  location: illinoisLocation,
  subLocations: [],
  historicalRecords: [
    {
      testDate: "9/13/2020",
      totals: { cases: 261371, tested: 4735866, deaths: 8309 },
    },
  ],
};
