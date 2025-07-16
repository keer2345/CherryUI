import _ from 'lodash';

export const convertColumnName = (data: object, src: string, desc: string) =>
  _.map(data, (item) => _.mapKeys(item, (value, key) => (key === src ? desc : key)));
