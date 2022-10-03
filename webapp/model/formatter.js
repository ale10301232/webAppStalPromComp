/*Для вычисления сумм по заданию
* getSum() -- Сумма всех цен в коллекции ProductCollection в model/products.json
* getMiddleSum() -- Среднее от суммы цен -//-
* getCount() -- Число найденых элементов(продуктов)
* aValues - входные данные, там "коллекция".
* k - без неё не считается(NaN), разобраться
*/
sap.ui.define([], function () {
    "use strict";
    return {
        getSum: function (aValues) {
            var iSum = 0;
            $.each(aValues, function (k, oValue) {
                iSum += oValue.Price;
            });
            return iSum.toFixed(2);
        },
        getMiddleSum: function (aValues) {
            var countSum = 0;
            var iSum = 0;
            $.each(aValues, function (k, oValue) {
                iSum += oValue.Price;
                countSum++;
            });
            return (iSum / countSum).toFixed(2);
        },
        getCount: function (aValues) {
            var countSum = 0;
            $.each(aValues, function (k, oValue) {
                countSum++;
            });
            return countSum;
        }
    };
});




