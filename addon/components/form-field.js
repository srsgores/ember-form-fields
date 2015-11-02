import Ember from "ember";
import layout from "../templates/components/form-field";

export default Ember.Component.extend({
	layout: layout,
	tagName: "section",
	classNamespace: "form-field",
	classNameBindings: ["fullClassName", "hasLabel", "isFocused", "hasTip", "hasLabelText"],
	layoutDirection: "horizontal",
	label: null,
	title: null,
	tip: null,
	childInput: null,
	labelText: null,
	isFocused: false,
	tipClassName: Ember.computed("classNameSpace", function() {
		return `${this.get("classNamespace")}-tip`;
	}),
	hasChildInput: Ember.computed.notEmpty("childInput"),
	hasLabel: Ember.computed.notEmpty("label"),
	hasLabelText: Ember.computed.notEmpty("labelText"),
	hasTip: Ember.computed.notEmpty("tip"),
	willInsertElement() {
		if (!Ember.isArray(this.get("childInput"))) {
			let $firstInput = this.$("input[id], select[id], textarea[id]").first();
			Ember.assert("Form-field component requires a form control inside it for proper labelling", Ember.isArray($firstInput));
			this.setProperties({
				childInput: $firstInput
			});
		}
	},
	fullClassName: Ember.computed("layoutDirection", function() {
		return `${(this.get("classNamespace"))}-${(this.get("layoutDirection"))}`;
	}),
	labelID: Ember.computed("hasChildInput", function() {
		if (this.get("hasChildInput")) {
			return this.get("childInput")[0].id;
		}
	}),
	labelClassName: Ember.computed("classNamespace", function() {
		return `${this.get("classNamespace")}-label`;
	}),
	controlsClassName: Ember.computed("classNamespace", function() {
		return`${this.get("classNamespace")}-controls`;
	})
});
