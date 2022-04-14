import { singleStatsProps } from "../../types/components";

export default function SingleStat(props: singleStatsProps) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{props.title}</div>
        <div className="stat-value">{props.value}</div>
        <div className="stat-desc">{props.description}</div>
      </div>
    </div>
  );
}
