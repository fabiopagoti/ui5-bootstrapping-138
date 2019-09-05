/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ovly/bootstrapping-138/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ovly/bootstrapping-138/test/integration/pages/View1",
	"ovly/bootstrapping-138/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ovly.bootstrapping-138.view.",
		autoWait: true
	});
});