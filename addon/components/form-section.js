import Ember from "ember";
import layout from "../templates/components/form-section";

export default Ember.Component.extend({
	layout: layout,
	classNamespace: "form-section",
	tagName: "fieldset",
	title: null,
	titleClassName: Ember.computed("classNamespace", function() {
		return `${(this.get("classNamespace"))}-title`;
	}),
	classNameBindings: ["classNamespace"],
	icon: null
});
