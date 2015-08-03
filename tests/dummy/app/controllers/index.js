import Ember from "ember";

export default Ember.Controller.extend({
	username: null,
	password: null,
	actions: {
		authenticate() {
			return alert("Authentication Denied");
		}
	}
});
