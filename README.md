# Ember-form-fields

Kickstart your ember forms with this addon: *ember-form-fields* is an addon for cleanly wrapping your form elements.

Out of the box, you can:

* Wrap your form groups in proper ``fieldset`` elements
* Group your form controls vertically or horizontally (with ``layout="vertical"`` or with ``layout="horizontal"``
* Use proper ``legend`` elements on your ``fieldset``s

In general: **proper HTML5 ``form``s**.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

```
{{#form-field title="My label title"}}
	{{input type="text" autofocus=true value=model.firstName title="Please specify your first name" required=true autocomplete="given-name"}}
{{/form-field}}
```

``layout`` simply adds the class to ``form-field``.  So you might add some styles like [these](https://github.com/srsgores/generator-stylus-boilerplate/blob/master/app/templates/styles/components/forms.styl). **No styles are shipped with this addon**; it is your responsibility to create styles.

(For more info on which ``autocomplete`` value to use, please [refer to MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))

### Usage with [Ember CLI HTML5 Validation](https://github.com/maestrooo/ember-cli-html5-validation)

The following shows a simple login form using the ember-cli-html5-validation addon:

```
{{#validatable-form action="login" class="login-form"}}
	{{#form-section title="Login" icon="lock"}}
		{{#if loginFailed}}
			{{#alert-message type="error" title="Login failed"}}
				<p>Invalid username or password.</p>
			{{/alert-message}}
		{{/if}}
		{{#form-field title="Username" layoutDirection="vertical"}}
			{{input autofocus=true value=model.username required=true type="text" placeholder="Username" id="username"}}
		{{/form-field}}
		{{#form-field title="Password" layoutDirection="vertical"}}
			{{input type="password" value=model.password required=true placeholder="Password" id="password"}}
		{{/form-field}}
	{{/form-section}}
	<footer class="form-actions">
		{{async-button class="button" icon="out2" title="Log in" isValid=isValid}}
	</footer>
{{/validatable-form}}
```

### Adding Icons

1. Optionally, you can install the [ember addon](https://github.com/srsgores/ember-accessible-icon) to make your dependencies clear
2. Add ``icon="icon"`` to your ``{{form-section}}``: ex. ``{{form-section title="Register" icon="user"}}``

**Make sure to set up your own icons**.  You can do this by using [a tool like icomoon](https://icomoon.io/app/#/select).

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
