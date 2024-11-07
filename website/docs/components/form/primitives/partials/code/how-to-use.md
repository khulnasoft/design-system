## How to use this component

### Form::Label

The default invocation requires text to be passed and a `controlId` argument (the ID of the form control associated with the label).

```handlebars
<Kds::Form::Label @controlId="control-ID">
  My label
</Kds::Form::Label>
```

Pass an `isRequired` argument, when user input is required for the associated form control.

```handlebars
<Kds::Form::Label @controlId="control-ID" @isRequired={{true}}>
  My label
</Kds::Form::Label>
```

Pass an `isOptional` argument, when the user input is optional for the associated form control.

```handlebars
<Kds::Form::Label @controlId="control-ID" @isOptional={{true}}>
 My label
</Kds::Form::Label>
```

If the label needs to contain more than just text, it’s possible to pass structured content to component. While the correct text styling is applied to the component’s container, the layout of the content inside the component is the responsibility of the product team.

!!! Warning

The `<label>` element is linked via `for` attribute to the `<input/select/textarea>` elements. Because this is an interactive element, it cannot have links inside of it, as nested interactive elements cannot be reached by a user with assistive technology.
!!!

```handlebars
<Kds::Form::Label @controlId="control-ID">
  <span>Some text</span>
  <Kds::Badge @size="small" @text="Some badge" @color="highlight" />
</Kds::Form::Label>
```

### Form::HelperText

The default invocation requires text to be passed and a `controlId` argument.

The `controlId` value is used to generate an ID, prefixed with `helper-text-`, so that the ID can be referenced in the `aria-describedby` attribute of the form control. If no `controlId` is provided, no ID is generated. If needed, it can be passed directly as an HTML attribute.

```handlebars
<Kds::Form::HelperText @controlId="helper-text-first">
  This is some helper text
</Kds::Form::HelperText>
```

If the helper text needs to contain more than just text, use the block form of the component. While the correct styling is applied to the component itself, the nested components may need additional styling and are the responsibility of the product team.

!!! Warning

Interactive elements in text (associated with the input through `aria-describedby`) will not be read out as interactive elements to users with screen readers; only the text itself will be read. As such, we recommend including a screen reader-only message that informs the user that some help text includes links, and additional keyboard exploration may be required.
!!!

```handlebars
<Kds::Form::HelperText @controlId="control-ID">
  Some text with a
  <Kds::Link::Inline @route="show" @model="components/link/inline">
  Kds::Link::Inline</Kds::Link::Inline>,
  or <code>some formatted code</code>
  or a <strong>strong message</strong>.
</Kds::Form::HelperText>
```

### Form::CharacterCount

The default invocation requires a `controlId` argument referencing a valid `<input>` or `<textarea>` element and a `@value` argument storing the value of the associated form control.

The `controlId` value is used to generate an ID, prefixed with `character-count-`, so that the ID can be referenced in the `aria-describedby` attribute of the form control.

```handlebars
<input type="text" aria-label="input with default character count" id="input-character-count-default" value={{this.value1}} {{on "input" (fn this.updateValue "value1")}}/>
<Kds::Form::CharacterCount @controlId="input-character-count-default" @value={{this.value1}}/>
```

If the user input needs to be limited to a certain number of characters, use `@maxLength` to guide the user in meeting the length requirements. This property does not restrict the users from entering characters over the limit. To define the maximum string length that the user can enter, set `maxlength` attribute on the associated input field.

```handlebars
<input type="text" aria-label="input with max length count" id="input-character-count-max" value={{this.value2}} {{on "input" (fn this.updateValue "value2")}}/>
<Kds::Form::CharacterCount @maxLength={{10}} @controlId="input-character-count-max" @value={{this.value2}}/>
```

If the user input is required to have a certain number of characters, use `@minLength` to guide the user in meeting the length requirements.

```handlebars
<input type="text" aria-label="input with min length count" id="input-character-count-min" value={{this.value3}} {{on "input" (fn this.updateValue "value3")}}/>
<Kds::Form::CharacterCount @minLength={{3}} @controlId="input-character-count-min" @value={{this.value3}}/>
```

When the user input needs to be in a certain range, use both `@minLength` and `@maxLength` to guide the user in meeting the length requirements.

```handlebars
<input type="text" aria-label="input with min and max length count" id="input-character-count-min-max" value={{this.value4}} {{on "input" (fn this.updateValue "value4")}}/>
<Kds::Form::CharacterCount @minLength={{3}} @maxLength={{10}} @controlId="input-character-count-min-max" @value={{this.value4}}/>
```

#### Custom message

For custom messages, you can use the following arguments to build a relevant message: `currentLength` (the current number of characters in the associated form control), `maxLength` (the maximum number of characters allowed in the associated form control), `minLength` (the minimum number of characters required in the associated form control), `remaining` (the difference between `maxLength` and `currentLength`), and `shortfall` (the difference between `currentLength` and `minLength`).

```handlebars
<input type="text" aria-label="input with min and max length count" id="input-character-count-custom" value={{this.value5}} {{on "input" (fn this.updateValue "value5")}}/>
<Kds::Form::CharacterCount @maxLength={{20}} @controlId="input-character-count-custom" @value={{this.value5}} as |CC|>
  {{CC.remaining}} characters remaining
</Kds::Form::CharacterCount>
```

### Form::Error

The default invocation requires text to be passed and a `controlId` argument.

The `controlId` value will be used to generate an ID, prefixed with `error-`, so that this ID can be referenced in the `aria-describedby` attribute of the form control. If no `controlId` is provided, no ID is generated. If needed, it can be passed directly as an HTML attribute.

```handlebars
<Kds::Form::Error @controlId="error-message-first">This is a simple error message</Kds::Form::Error>
```

If the error is made up of multiple messages, it’s possible to iterate over a collection of error messages.

```handlebars
<Kds::Form::Error @controlId="control-ID" as |Error|>
  {{#each this.SAMPLE_ERROR_MESSAGES as |message|}}
    <Error.Message>{{message}}</Error.Message>
  {{/each}}
</Kds::Form::Error>
```

### Form::Indicator

If no `isRequired/isOptional` argument is provided, the component will not render anything.

#### Required

Pass an `isRequired` argument, to render a `Required` Indicator.

```handlebars
<Kds::Form::Indicator @isRequired={{true}} />
```

#### Optional

Pass an `isOptional` argument, to render an `Optional` Indicator.

```handlebars
<Kds::Form::Indicator @isOptional={{true}} />
```

### Form::Legend

The default invocation requires text to be passed.

```handlebars
<Kds::Form::Legend>My legend</Kds::Form::Legend>
```

#### Required

Pass an `isRequired` argument, when user input is required for the associated form control.

```handlebars
<Kds::Form::Legend @isRequired={{true}}>My legend</Kds::Form::Legend>
```

#### Optional

Pass an `isOptional` argument, when user input is optional for the associated form control.

```handlebars
<Kds::Form::Legend @isOptional={{true}}>My legend</Kds::Form::Legend>
```

#### Structured content

If the legend needs to contain more than just text, it’s possible to pass structured content to component. While the correct text styling is applied to the component’s container, the layout of the content inside the component is the responsibility of the product team.

```handlebars
<Kds::Form::Legend>
  <span>Some text</span>
  <Kds::Badge @size="small" @text="Some badge" @color="highlight" />
</Kds::Form::Legend>
```

### Form::Field

!!! Warning

It’s unlikely that you’ll need to use this component directly, but if you do contact the Design Systems Team so we can provide support.
!!!

The default invocation includes a set of contextual components, a control (in this case a text input) with hashed values passed back to it, and a `@layout` argument. Depending on the context, you may want to pass just the label, or the label _and_ the helper text, while the error message is likely conditional to the validation of the input provided by the user. The arguments `id` and `ariaDescribedBy` are automatically generated by the component and passed back to the control.

The layout of the content inside the "control" container is the responsibility of the product team.

```handlebars
<Kds::Form::Field @layout="vertical" @isRequired={{true}} as |F|>
  <F.Label>This is the label</F.Label>
  <F.HelperText>This is the helper text</F.HelperText>
  <F.Control>
    <!--add your control here-->
    <input
      type="email"
      id={{F.id}}
      value="jane.doe@email.com"
      class="my-custom-class"
      aria-describedby={{F.ariaDescribedBy}}
    />
  </F.Control>
  <F.Error>This is the error</F.Error>
</Kds::Form::Field>
```

### Form::Fieldset

!!! Warning

It’s unlikely that you’ll need to use this component directly, but if you do contact the Design Systems Team so we can provide support.
!!!

The default invocation includes a set of contextual components, one or more fields (in this case radio buttons within a label), and a `@layout` argument. Depending on the context, you may want to pass just the legend, just the helper text, both or none, while the error message is likely conditional to the validation of the inputs provided by the user.

The layout of the content inside the "control" container is the responsibility of the product team.

```handlebars
<Kds::Form::Fieldset @layout="horizontal" @isRequired={{true}} as |F|>
  <F.Legend>This is the legend</F.Legend>
  <F.HelperText>This is the helper text</F.HelperText>
  <!-- add your fields here -->
  <F.Control>
    <label for="my-group-checkbox1" class="my-custom-class">
      <input type="checkbox" id="my-group-checkbox1" checked="checked" />
      selection #1
    </label>
  </F.Control>
  <F.Control>
    <label for="my-group-checkbox2" class="my-custom-class">
      <input type="checkbox" id="my-group-checkbox2" />
      selection #2
    </label>
  </F.Control>
  <F.Error>This is the error</F.Error>
</Kds::Form::Fieldset>
```
