import Ember from "ember";
import layout from "../templates/components/form-section";

export default Ember.Component.extend({
	layout: layout,
	classNamespace: "form-section",
	tagName: "fieldset",
	title: null,
	titleClassName: (function() {
		return `${(this.get("classNamespace"))}-title`;
	}).property("classNamespace"),
	classNameBindings: ["classNamespace"],
	icon: null
});
