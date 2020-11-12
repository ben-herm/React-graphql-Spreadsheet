import { TableDataQuery } from "../generated/graphql";

function sortHeaders(
  a: { header_id: number; header_name: string },
  b: { header_id: number; header_name: string }
) {
  if (a.header_id > b.header_id) {
    return 1;
  }
  if (a.header_id < b.header_id) {
    return -1;
  }
  return 0;
}

export const convertDataToTableValues = (data: TableDataQuery): Array<[[]]> => {
  if (data) {
    let headers: Array<{}> = [];
    let newValues: Array<any> = [];
    let value: string;
    data.headers.forEach((header) => {
      headers.push({
        header_id: header.header_id,
        value: header.header_name,
        type: "header",
      });
    });
    headers.sort(sortHeaders);
    for (let i = 0; i < data.rows.length; i++) {
      newValues[i] = [];
    }
    newValues.forEach((val, index) => {
      for (let j = 0; j < data.headers.length; j++) {
        let found = data.values.find(
          (value) =>
            value.header_id == data.headers[j].header_id &&
            value.row_id == index + 1
        );
        if (found) {
          value = found.value;
        } else {
          value = " ";
        }
        val.push({
          row_id: index + 1,
          header_id: data.headers[j].header_id,
          value_id: found ? found.value_id : null,
          type: "value",
          value,
        });
      }
    });
 
    return [headers, ...newValues];
  }
};
