// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FieldCheck, FieldCheckMulti, FieldCheckMultiInline, FieldDatePicker, FieldSelect,
  FieldSelectMulti, LabelWrap,
} from 'redux-form-widgets-jss-react';
import { required, requiredItemsArray } from '../common/validation';
import { selectDataArray } from '../data/exampleData';

const normal = (a, b, c, d, e) => {
  console.log(e);
  return a;
};

type Props = {}

class Example extends Component<Props> {
  render() {
    return (
      <div>
        <form>

          <Field
            name="simple_text"
            component={LabelWrap}
            componentType="text"
            label="Simple text"
            validate={[required]}
            required
            clear
            normalize={normal}
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
            normalize={normal}
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
            normalize={normal}
          />

          <Field
            name="check"
            component={FieldCheck}
            data={selectDataArray}
            valueField="id"
            textField="title"
            label="Check"
            required
            validate={[required]}
            clear
            normalize={normal}
          />

          <Field
            name="check_multi"
            component={FieldCheckMulti}
            data={selectDataArray}
            valueField="id"
            textField="title"
            label="Check Multi"
            required
            validate={[requiredItemsArray]}
            clear
            normalize={normal}
          />

          <Field
            name="date_picker"
            component={FieldDatePicker}
            label="Date Picker"
            required
            clear
            valueDateFormat="DD-MM-YYYY"
            textDateFormat="DD-MM-YYYY"
            normalize={normal}
          />

          <Field
            name="check_multi_inline"
            component={FieldCheckMultiInline}
            data={selectDataArray}
            valueField="id"
            textField="title"
            label="Check Multi Inline"
            normalize={normal}
          />

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
    check_multi_inline: [2, 3],
  },
})(Example);
