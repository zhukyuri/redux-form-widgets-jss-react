// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FieldCheck, FieldCheckMulti, FieldSelect, FieldSelectMulti, LabelWrap,
} from 'redux-form-widgets-jss-react';
import { required, requiredItemsArray } from '../common/validation';
import { selectDataArray } from '../data/exampleData';

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
            component={FieldCheck}
            data={selectDataArray}
            valueField="id"
            textField="title"
            label="Check"
            required
            validate={[required]}
            clear
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
          />


        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'exampleForm',
})(Example);
