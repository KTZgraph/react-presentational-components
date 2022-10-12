import { useEffect, useRef, useState } from "react";

import Dropdown from "../../../UI/Dropdown";
import useResizeObserver from "../../../hooks/useResizeObserver";

import { vulnerabitilitesCategory } from "./dummy-data";

import D3Chart from "./D3Chart";

const currentYear = new Date().getFullYear().toString();

const yearOptions = Object.keys(vulnerabitilitesCategory).map((k) => ({
  label: k.toString(),
  value: k,
}));

const InteractiveVulnerabilities = () => {
  const [yearSelected, setYearSelected] = useState(currentYear);
  const [data, setData] = useState([]);

  const chartRef = useRef(null);
  const [chartState, setChartState] = useState(null);

  const dimensions = useResizeObserver(chartRef);
  useEffect(() => {
    // ustawianie danych
    setData(vulnerabitilitesCategory[parseInt(yearSelected)]);

    // const { width, height } =
    //   dimensions || chartRef.current.getBoundingClientRect();

    const { width, height } = { width: 900, height: 500 };

    if (!chartState) {
      setChartState(
        new D3Chart(chartRef.current, data, yearSelected, width, height)
      );
    } else {
      chartState.update(data, yearSelected, width, height);
    }
  }, [data, yearSelected, chartState]);

  return (
    <div
      style={{
        display: "flex",
        overflow: "visible",
        height: "100%",
        width: "100%",
        // background: "pink",
        boxSizing: "border-box",
        padding: "50px",
      }}
    >
      <h2>Interactive vulnerabilities</h2>
      <div
        className="svg-wrapper"
        id="dashboard__trends-chart-id"
        ref={chartRef}
      >
        <Dropdown
          className="chart__dropdown"
          label="Select Year"
          options={yearOptions}
          value={yearSelected}
          onChange={(e) => setYearSelected(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InteractiveVulnerabilities;
