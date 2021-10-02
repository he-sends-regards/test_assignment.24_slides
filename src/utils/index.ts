import moment, { Duration } from 'moment';
import { v4 as uuidv4 } from 'uuid';

require('moment-duration-format');

export const generateId = () => uuidv4();

export const countDurationToDate = (targetDate: Date): Duration => {
  const diff = moment(targetDate).diff(moment());
  const duration = moment.duration(diff, 'milliseconds');

  return duration;
};

export const countChildrenValues = (children: any): any => {
  let value = 0;

  const findChildrensRecursively = (children: any, callback: (value: number) => void): any => {
    if (children.value) {
      callback(children.value);
    }
    if (children.children) {
      return children.children.forEach((el: any) => findChildrensRecursively(el, callback));
    }
    return null;
  };

  const addValue = (newValue: number) => {
    value += newValue;
  };

  findChildrensRecursively(children, addValue);

  return value;
};
