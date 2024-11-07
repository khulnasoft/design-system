## Component API

The Textarea component is based on the Ember [`Textarea` built-in component](https://guides.emberjs.com/release/components/built-in-components/).

This component has two different variants with their own APIs:

- `Form::Textarea::Base` - the base component: the `<Textarea>` Ember component.
- `Form::Textarea::Field` - the field parent component: the `<Textarea>` Ember component, with label, helper text, and error messaging (in a wrapping container).

### Form::Textarea::Base

The "base" component under the hood uses the Ember `Textarea` built-in component. Refer to the [`Textarea` API documentation](https://api.emberjs.com/ember/release/classes/Ember.Templates.components/methods/Textarea?anchor=Textarea) for more details.

In addition we provide:

<Doc::ComponentApi as |C|>
  <C.Property @name="value" @type="string">
    Textarea control’s value.
  </C.Property>
  <C.Property @name="isInvalid" @type="boolean" @default="false">
    Applies an “invalid” appearance to the control but doesn’t modify its logical validity.
  </C.Property>
  <C.Property @name="width" @type="string" @valueNote="any valid CSS width (px, rem, etc)">
    By default, the `<textarea>` fills the parent container. If a `@width` parameter is provided, the control will have a fixed width.
  </C.Property>
  <C.Property @name="height" @type="string" @valueNote="any valid CSS height (px, rem, etc)">
    By default, the `<textarea>` has a `height` determined by the browser to accommodate 4 lines of text. If a `@height` parameter is provided, the control will have a fixed height.
  </C.Property>
  <C.Property @name="...attributes">
    This component supports use of [`...attributes`](https://guides.emberjs.com/release/in-depth-topics/patterns-for-components/#toc_attribute-ordering).
    <br/><br/>
    The attributes will be applied to the `<textarea>` element. This means you can use all the standard HTML attributes of the `<textarea>` element and all the usual Ember techniques for event handling, validation, etc.
    <br/><br/>
    Examples of HTML attributes: `id`, `name`, `placeholder`, `disabled`, `required`, `readonly`. See [the whole list of HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). Examples of Ember modifiers: `\{{on "input" [do something]}}`, `\{{on "change" [do something]}}`, `\{{on "blur" [do something]}}`.
  </C.Property>
</Doc::ComponentApi>

### Form::Textarea::Field

<Doc::ComponentApi as |C|>
  <C.Property @name="id" @type="string">
    Textarea control’s ID attribute.
    <br/><br/>
    By default, the ID is automatically generated by the component. Use this argument to pass a custom ID.
  </C.Property>
  <C.Property @name="value" @type="string">
    Textarea control’s value.
  </C.Property>
  <C.Property @name="isInvalid" @type="boolean" @default="false">
    Applies an “invalid” appearance to the control but doesn’t modify its logical validity.
  </C.Property>
  <C.Property @name="isRequired" @type="boolean" @default="false">
    Appends a `Required` indicator next to the label text and sets the `required` attribute on the control when user input is required.
  </C.Property>
  <C.Property @name="isOptional" @type="boolean" @default="false">
    Appends an `Optional` indicator next to the label text when user input is optional.
  </C.Property>
  <C.Property @name="extraAriaDescribedBy" @type="string">
    Extra ID attribute to add to the `aria-describedby` HTML attribute.
    <br/><br/>
    By default, the `aria-describedby` attribute is automatically generated by the component, using the IDs of the helper text and errors (if present). Use this argument to pass an extra ID.
  </C.Property>
  <C.Property @name="...attributes">
    This component supports use of [`...attributes`](https://guides.emberjs.com/release/in-depth-topics/patterns-for-components/#toc_attribute-ordering).
    <br/><br/>
    The attributes will be applied to the `<textarea>` element. This means you can use all the standard HTML attributes of the `<textarea>` element and all the usual Ember techniques for event handling, validation, etc.
    <br/><br/>
    Examples of HTML attributes: `name`, `placeholder`, `disabled`, `required`, `readonly`. See [the whole list of HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). Examples of Ember modifiers: `\{{on "input" [do something]}}`, `\{{on "change" [do something]}}`, `\{{on "blur" [do something]}}`.
  </C.Property>
</Doc::ComponentApi>

#### Contextual components

`Label`, `HelperText`, `CharacterCount`, and `Error` content are passed to the field as yielded components.

<Doc::ComponentApi as |C|>
  <C.Property @name="<[F].Label>" @type="yielded component">
    Container that yields its content inside the `<label>` element. The content can be a simple string or a more complex/structured string, in which case it inherits the text style. For details about its API, check the [`Form::Label`](/components/form/primitives) component.
    <br/><br/>
    The `for` attribute of the label is automatically generated using the `controlId` value of the control.
  </C.Property>
  <C.Property @name="<[F].HelperText>" @type="yielded component">
    Container that yields its content inside the "helper text" block. The content can be a simple string or a more complex/structured string, in which case it inherits the text style. For details about its API, check the [`Form::HelperText`](/components/form/primitives) component.
    <br/><br/>
    The `id` attribute of the element is automatically generated using the `controlId` value of the control.
  </C.Property>
  <C.Property @name="<[F].CharacterCount>" @type="yielded component">
    An auto-generated or custom character count message to guide users when editing a field. For details about its API, check the [`Form::CharacterCount`](/components/form/primitives) component.
    <br/><br/>
    The `id` attribute of the element is automatically generated using the `controlId` value of the control.
  </C.Property>
  <C.Property @name="<[F].Error>" @type="yielded component">
    Container that yields its content inside the "error" block. The content can be a simple string or a more complex/structured string, in which case it inherits the text style. For details about its API, check the [`Form::Error`](/components/form/primitives) component.
    <br/><br/>
    The `id` attribute of the `Error` element is automatically generated.
    <Doc::ComponentApi as |C|>
      <C.Property @name="<[E].Message>" @type="yielded component">
        If the error is made of multiple messages, you can iterate over a collection of error messages yielding individual items using `Error.Message`.
      </C.Property>
    </Doc::ComponentApi>
  </C.Property>
</Doc::ComponentApi>