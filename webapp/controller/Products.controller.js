/*Контроллер для домашнего view 
* onItemSelected() -- для навигации на страницу с детализацией по конкретному продукту oItem
* oRouter.navTo() -- путь productPath с обрезкой, так как ?парс? не любит "/" в передаваемых параметрах
*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"../model/formatter"
], function (Controller,UIComponent,formatter) {
	"use strict";

	return Controller.extend("webapp.controller.Products", {
		formatter: formatter,
		onInit: function () {
			var dataModel = this.getOwnerComponent().getModel("products");
			this.getView().setModel(dataModel, "DataModel");

		},

		onItemSelected: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				productPath: oItem.getBindingContext('products').getPath().split('/')[2]
			});

		},

	});

});
