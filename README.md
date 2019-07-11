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
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FieldCheckList, FieldCheckListMulti, FieldCheckMultiInline, FieldDatePicker, FieldSelect,
  FieldSelectMulti, Pane, FieldText, FieldTextArea,
} from 'redux-form-widgets-jss-react';
import { HuePicker } from 'react-color';
import { required, requiredItemsArray } from '../common/validation';
import { selectDataArray } from '../data/exampleData';

type Props = {
  cbChange: any,
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  pane: {
    width: 700,
    position: 'relative',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'visible',
  },
  block: {
    margin: 'auto',
    position: 'relative',
    flex: '1 1 50%',
  },
  toolsLabel: {
    display: 'inlibe-block',
    width: 100,
  },
};

class Example extends Component<Props> {
  render() {
    const { cbChange } = this.props;

    return (
      <div style={styles.wrapper}>
        <form>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
              <Field
                name="simple_text"
                component={FieldText}
                label="Simple text"
                validate={[required]}
                required
                clear
              />
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
              <Field
                name="check_multi_inline"
                component={FieldCheckMultiInline}
                data={selectDataArray}
                valueField="id"
                textField="title"
                label="Check Multi Inline"
              />
            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
              <Field
                name="simple_textarea"
                component={FieldTextArea}
                label="Simple text area"
                validate={[required]}
                required
                clear
              />
            </div>
          </Pane>

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'exampleForm',
  initialValues: {
    simple_text: 'initial',
    select: 1,
    select_multi: [2, 3],
    check: 1,
    check_multi: [2, 3],
    date_picker: '',
    check_multi_inline: [2, 3],
  },
})(Example);
```

## License

MIT © [zhukyuri](https://github.com/zhukyuri)
