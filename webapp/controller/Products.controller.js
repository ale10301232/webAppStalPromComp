sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function (Controller, JSONModel, UIComponent) {
	"use strict";

	return Controller.extend("webapp.controller.Products", {
		onInit: function () {
			var dataModel = this.getOwnerComponent().getModel("products");
			this.getView().setModel(dataModel, "DataModel");

		},

		onItemSelected: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			console.log(oItem.getBindingContext('products').getPath());
			oRouter.navTo("detail", {
				productPath: oItem.getBindingContext('products').getPath().split('/')[2]
			});

		},

	});

});
