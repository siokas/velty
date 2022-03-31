import { numberFormatter } from "../../helpers";
import { mainStatsProps } from "../../types/stats";

export default function MainStats(props: mainStatsProps) {
  return (
    <div className="flex flex-col">
      <span className="mb-2">{props.title}</span>
      <div className="stats stats-vertical shadow sm:stats-horizontal">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trending-up inline-block h-8 w-8 stroke-current"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div className="stat-title">Price Index</div>
          <div className="stat-value">{props.cryptoIndex}</div>
          <div className="stat-desc">Based on last 5min</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -20 90 180"
              fill="none"
              strokeWidth="4"
              className="inline-block h-12 w-12 stroke-current"
            >
              <path d="M55.75,47.8,53.19,36.07C61.64,37.65,74,51.24,81.85,62c-5.59,3.55-9,8.66-9,14.72a15.46,15.46,0,0,0,.21,2.57A36,36,0,0,0,61,77.26,34,34,0,0,0,45.46,80.8c-6.12,3.21-9.92,8.33-9.92,14.57a14.46,14.46,0,0,0,.87,5c-.11.32-.22.65-.31,1h0v0a14.12,14.12,0,0,0-.56,3.85,14.4,14.4,0,0,0,.83,4.85l-.22.68a14.31,14.31,0,0,0-.61,4A14.51,14.51,0,0,0,38,122.88l-.75,0c-11.88-.61-30.25-.59-35-12.78C-5.54,90.38,8.65,66.94,21.59,52.59a70.92,70.92,0,0,1,5.28-5.27c4.71-4.14,9.79-9,15.84-11.1l-5.85,10.9,8.5-11.27h4.48L55.75,47.8Zm19.84,64.56a4.65,4.65,0,0,1,.7,2.41c0,4.44-6.87,8-15.34,8s-15.35-3.6-15.35-8a4.7,4.7,0,0,1,.7-2.41c2,3.27,7.78,5.64,14.65,5.64s12.7-2.37,14.64-5.64Zm44.11-2.86a5.71,5.71,0,0,1,.86,3c0,5.44-8.43,9.86-18.81,9.86S83,117.89,83,112.45a5.67,5.67,0,0,1,.86-3c2.39,4,9.52,6.91,17.94,6.91s15.56-2.91,18-6.91Zm0-11.92a5.76,5.76,0,0,1,.86,3c0,5.44-8.43,9.86-18.81,9.86S83,106,83,100.53a5.72,5.72,0,0,1,.86-3c2.39,4,9.52,6.91,17.94,6.91s15.56-2.91,18-6.91ZM108.54,72.74l-.22,2.45-9.22-.8a8.45,8.45,0,0,1,1.58,3.32l-2.22-.2a7.55,7.55,0,0,0-1-2.18,4.54,4.54,0,0,0-1.91-1.72l.17-2,12.83,1.11Zm-6.79-3.83c8.53,0,15.45,2.72,15.45,6.06S110.28,81,101.75,81,86.3,78.31,86.3,75s6.92-6.06,15.45-6.06Zm0-2c10.38,0,18.81,4.42,18.81,9.86s-8.43,9.86-18.81,9.86S83,82.2,83,76.76s8.42-9.86,18.8-9.86Zm18,19.11a5.69,5.69,0,0,1,.8,2.83c0,5.44-8.43,9.86-18.81,9.86S83,94.28,83,88.84A5.55,5.55,0,0,1,83.74,86c2.32,4.06,9.5,7,18,7s15.69-3,18-7ZM66.49,92.09l-.18,2-7.53-.66a6.94,6.94,0,0,1,1.29,2.71L58.26,96a6,6,0,0,0-.82-1.78,3.78,3.78,0,0,0-1.56-1.4L56,91.18l10.47.91ZM61,89c7,0,12.61,2.22,12.61,5s-5.65,5-12.61,5-12.61-2.22-12.61-5S54,89,61,89Zm0-1.64c8.47,0,15.34,3.61,15.34,8.05s-6.87,8-15.34,8-15.35-3.6-15.35-8S52.48,87.32,61,87.32Zm14.69,15.6a4.59,4.59,0,0,1,.65,2.31c0,4.43-6.87,8-15.34,8s-15.35-3.61-15.35-8a4.56,4.56,0,0,1,.65-2.31c1.89,3.31,7.75,5.73,14.7,5.73s12.8-2.42,14.69-5.73ZM42.34,20.3C40.52,14.93,38.88,9.5,37.5,4c5.16-5.66,25.1-4.91,30.83-.09L63,16.52c2.86-3.76,3.82-5.3,5.52-7.39a17.17,17.17,0,0,1,2,1.57c1.51,1.37,2.86,2.88,3.13,5a5.16,5.16,0,0,1-1.43,4.17L60.09,34.05a26.61,26.61,0,0,1-4.59-1.16c.69-1.63,1.53-3.42,2.22-5l-4.44,4.79a16.54,16.54,0,0,0-11.8,1.44L29.13,19.25a4.1,4.1,0,0,1-1.07-2.66c0-3.58,5.35-6.67,8.15-7.84L42.34,20.3Z" />
            </svg>
          </div>
          <div className="stat-title">Market Cap</div>
          <div className="stat-value">
            {numberFormatter(props.cryptoMarketCap, 3)}
          </div>
          <div className="stat-desc">$BTC Dominance: {props.btcDominance}%</div>
        </div>
      </div>
    </div>
  );
}
