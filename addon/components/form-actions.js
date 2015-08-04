import Ember from "ember";
import layout from "../templates/components/form-actions";

export default Ember.Component.extend({
	layout: layout,
	tagName: "footer",
	classNameBindings: ["defaultClassName"],
	defaultClassName: "form-actions"
});
