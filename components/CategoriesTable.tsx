import { numberFormatter, percentageFormatter } from "../helpers";
import { APICategoryResponse } from "../types/stats";

type CategoriesProps = {
  categories: Array<APICategoryResponse>;
};

export default function CategoriesTable({ categories }: CategoriesProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>MCap</th>
            <th>MCap Chg 24H</th>
            <th>Volume 24H</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={category.id}>
                <th>{index + 1}</th>
                <th>{category.name}</th>
                <td>{numberFormatter(category.market_cap, 2)}</td>
                <td>{percentageFormatter(category.market_cap_change_24h)}%</td>
                <td>{numberFormatter(category.volume_24h, 2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>MCap</th>
            <th>MCap Chg 24H</th>
            <th>Volume 24H</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
