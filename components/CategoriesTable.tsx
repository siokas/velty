import { numberFormatter, percentageFormatter } from "../helpers";
import { Category } from "./../graphql/schema/categories/categories";

type CategoriesProps = {
  categories: Array<Category> | undefined;
};

export default function CategoriesTable({ categories }: CategoriesProps) {
  return (
    <div className="m-auto overflow-x-auto">
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
          {categories ? (
            categories.map((category, index) => {
              return (
                <tr key={category?.id}>
                  <th>{index + 1}</th>
                  <th>{category?.name}</th>
                  <td>
                    {category.market_cap
                      ? numberFormatter(category.market_cap, 2)
                      : 0}
                  </td>
                  <td>
                    {category.market_cap_change_24h
                      ? percentageFormatter(category.market_cap_change_24h)
                      : 0}
                    %
                  </td>
                  <td>
                    {category.volume_24h
                      ? numberFormatter(category.volume_24h, 2)
                      : 0}
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
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
