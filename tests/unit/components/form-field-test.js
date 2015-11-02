import {moduleForComponent, test} from "ember-qunit";

moduleForComponent("form-field", "Unit | Component | form field", {
	// Specify the other units that are required for this test
	// needs: ["component:foo", "helper:bar"],
	unit: true
});

test("it renders", function (assert) {
	assert.expect(2);

	// Creates the component instance
	var component = this.subject();
	assert.equal(component._state, "preRender");

	// Renders the component to the page
	this.render();
	assert.equal(component._state, "inDOM");
});

test("it applies correct class names when given vertical style", function(assert) {
	let component = this.subject();
	component.set("layoutDirection", "vertical");
	this.render();
	assert.ok(this.$().hasClass("form-field-vertical"));
});

test("it applies correct class names when given horizontal style", function(assert) {
	// don't need to set anything, as the default is horizontal
	this.render();
	assert.ok(this.$().hasClass("form-field-horizontal"));
});

test("it adds a label element, corresponding to the first form control in the template block", function(assert) {
	// in order to append the input element, we will have to use the component test, provided as of ember 1.13.1
});

test("it creates a label with the correct `for` attribute, corresponding to the first form control", function(assert) {
	let component = this.subject();
	component.set("label", "A sample label");
	this.render();
	assert.equal(this.$("label[for='a-sample-label']").length, 1);
});

test("it warns the user when no form control elements can be found in the template block", function(assert) {
	this.render();
	assert.equal(this.$("form-field-label").length, 0);
});

