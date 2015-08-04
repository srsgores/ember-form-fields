import Ember from "ember";
import layout from "../templates/components/form-action";

export default Ember.Component.extend({
	layout: layout,
	tagName: "button",
	classNameBindings: [
		":button",
		":form-action"
	],
	attributeBindings: [
		"title",
		"type",
		"disabled"
	],
	type: null,
	icon: null,
	text: null,
	disabled: false,
	title: (function () {
		if (this.get("text")) {
			return this.get("text");
		}
		else {
			return null;
		}
	}).property("text"),
	action: null,
	actions: {
		onClick: function () {
			return this.sendAction("remove");
		}
	}
});
