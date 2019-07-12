# redux-form-widgets-jss-react

> Redux-form field widgets with JSS for React JS

[![NPM](https://img.shields.io/npm/v/redux-form-widgets-jss-react.svg)](https://www.npmjs.com/package/redux-form-widgets-jss-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-form-widgets-jss-react
```
## !!! Documentation in progress !!!

## Usage

Example
```jsx
      <WidgetProvider
        customTheme={themeBlue}
      >
          <form>

                <Field
                  name="simple_text"
                  component={FieldText}
                  label="Simple text"
                  validate={[required]}
                  required
                  clear
                />

                <Field
                  name="select"
                  component={FieldSelect}
                  data={selectDataArray}
                  valueField="id"
                  textField="title"
                  label="Select"
                  required
                  validate={[required]}
                  clear
                />

                <Field
                  name="select_multi"
                  component={FieldSelectMulti}
                  data={selectDataArray}
                  valueField="id"
                  textField="title"
                  label="Select Multi"
                  required
                  validate={[requiredItemsArray]}
                  clear
                />

                <Field
                  name="check"
                  component={FieldCheckList}
                  data={selectDataArray}
                  valueField="id"
                  textField="title"
                  label="Check list"
                  required
                  validate={[required]}
                  clear
                />

                <Field
                  name="check_multi"
                  component={FieldCheckListMulti}
                  data={selectDataArray}
                  valueField="id"
                  textField="title"
                  label="Check Multi"
                  required
                  validate={[requiredItemsArray]}
                  clear
                />

                <Field
                  name="date_picker"
                  component={FieldDatePicker}
                  label="Date Picker"
                  required
                  clear
                  valueDateFormat="DD-MM-YYYY"
                  textDateFormat="DD-MM-YYYY"
                  customStyleListWrap={{ width: 215 }}
                />

                <Field
                  name="check_multi_inline"
                  component={FieldCheckMultiInline}
                  data={selectDataArray}
                  valueField="id"
                  textField="title"
                  label="Check Multi Inline"
                />

                <Field
                  name="simple_textarea"
                  component={FieldTextArea}
                  label="Simple text area"
                  validate={[required]}
                  required
                  clear
                />

          </form>
      </WidgetProvider>
  ```

## License

MIT © [zhukyuri](https://github.com/zhukyuri)
