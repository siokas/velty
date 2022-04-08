import { numberFormatter } from "../../helpers";
import { mainStatsProps } from "../../types/components";

function Trending({ point = "up" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-trending-${point} inline-block h-8 w-8 stroke-current`}
    >
      <polyline
        points={
          point === "up"
            ? "23 6 13.5 15.5 8.5 10.5 1 18"
            : "23 18 13.5 8.5 8.5 13.5 1 6"
        }
      ></polyline>
      <polyline
        points={point === "up" ? "17 6 23 6 23 12" : "17 18 23 18 23 12"}
      ></polyline>
    </svg>
  );
}

export default function MainStats(props: mainStatsProps) {
  return (
    <div className="flex flex-col">
      <span className="mb-2">{props.title}</span>
      <div className="stats stats-vertical shadow sm:stats-horizontal">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bar-chart-2"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <div className="stat-title">price index</div>
          <div className="stat-value">{props.cryptoIndex}</div>
          <div className="stat-desc">based on last 5min</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-dollar-sign"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="stat-title">total marketcap</div>
          <div className="stat-value">
            {numberFormatter(props.cryptoMarketCap, 3)}
          </div>
          <div className="stat-desc">$btc dominance: {props.btcDominance}%</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <Trending point={props.marketCapChange > 0 ? "up" : "down"} />
          </div>
          <div className="stat-title">marketcap change 24h</div>
          <div className="stat-value">{props.marketCapChange.toFixed(2)}%</div>
          <div className="stat-desc">active crypto: {props.activeCrypto}</div>
        </div>
      </div>
    </div>
  );
}
