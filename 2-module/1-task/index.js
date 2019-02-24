/* eslint-disable no-restricted-syntax */
/**
 * Клонируем объект.
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 *  */
function clone(obj) {
  // объект в который будем клонировать агрумент функции
  const obj1 = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      console.log('key =', key, typeof (key));
      // проверка на примитив
      if (typeof (obj[key]) !== 'object' || obj[key] === null) {
        obj1[key] = obj[key];
      } else { // если не примитив для этого значения вызываем РЕКУРСИЮ!!!!!11
        сonsole.log('key =', key, typeof (key));
        obj1[key] = clone(obj[key]);
      }
    }
  }
  console.log(obj1);
  return obj1;
}
clone({
  test1: 1,
  test2: 2,
  test3: {
    o1: 1,
    o2: 2,
    o3: {
      hz1: 1,
      hz2: 2,
    },
  },
});
