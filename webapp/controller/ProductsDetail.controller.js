/*Контроллер для детализации view 
* _onObjectMatched() -- поиск совпадений и запись в модель products
* onNavBack() -- для перехода на домашнюю страницу
*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("webapp.controller.ProductsDetail", {
		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/ProductCollection/" + window.encodeURIComponent(oEvent.getParameter("arguments").productPath),
				model: 'products'
			});

		},

		onNavBack: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("home");
		}



	});

});
