import Ember from "ember";
import layout from "../templates/components/form-field";

export default Ember.Component.extend({
	layout: layout,
	tagName: "section",
	classNamespace: "form-field",
	classNameBindings: ["fullClassName"],
	layoutDirection: "horizontal",
	defaultClassName: "form-field",
	title: null,
	childInput: null,
	hasChildInput: Ember.computed.notEmpty("childInput"),
	didInsertElement() {
		let $firstInput = this.$().find("input[id], select[id], textarea[id]").first();
		if (Ember.isArray($firstInput)) {
			if (!Ember.isBlank($firstInput.attr("title"))) {
				this.set("tipTitle", $firstInput.attr("title"));
			}
			this.setProperties({
				childInput: $firstInput
			});
		}
	},
	hasTitle: Ember.computed("title", function () {
		return !Ember.isNone(this.get("title")) && !Ember.isEmpty(this.get("title"));
	}),
	isFocused: false, /* To be set from child components */
	fullClassName: Ember.computed("layoutDirection", function() {
		return `${(this.get("defaultClassName"))}-${(this.get("layoutDirection"))}`;
	}),
	labelText: null,
	tip: false,
	tipTitle: null,
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
