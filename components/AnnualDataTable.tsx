import { AnnualDataObject } from "../types/app";

export default function AnnualDataTable({
  annualData,
}: {
  annualData: Array<AnnualDataObject>;
}) {
  return (
    <div className="m-auto overflow-x-auto lowercase">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th></th>
            <th className="lowercase">symbol</th>
            <th className="lowercase">Returns</th>
            <th className="lowercase">Risks</th>
            <th className="lowercase">Ratio</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data: AnnualDataObject, index: number) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <th className="text-center font-bold text-accent">
                  {data.symbol.substring(0, data.symbol.length - 4)}
                </th>
                <th>{data.annualReturns}</th>
                <th>{data.annualRisks}</th>
                <th>{data.ratio}</th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th className="lowercase">Symbol</th>
            <th className="lowercase">Returns</th>
            <th className="lowercase">Risks</th>
            <th className="lowercase">Ratio</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
