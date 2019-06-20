// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FieldCheck, FieldCheckMulti, FieldCheckMultiInline, FieldDatePicker, FieldSelect,
  FieldSelectMulti, LabelWrap, Pane,
} from 'redux-form-widgets-jss-react';
import { required, requiredItemsArray } from '../common/validation';
import { selectDataArray } from '../data/exampleData';

type Props = {}

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
  },
  block: {
    // width: '50%',
    margin: 'auto',
    position: 'relative',
    flex: '1 1 50%',
  },
};

class Example extends Component<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <form>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
              <Field
                name="simple_text"
                component={LabelWrap}
                componentType="text"
                label="Simple text"
                validate={[required]}
                required
                clear
              />
            </div>
            <div style={styles.block}>

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
            <div style={styles.block}>

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
            <div style={styles.block}>

            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
            <div style={styles.block}>

            </div>
          </Pane>

          <Pane customStyle={styles.pane}>
            <div style={styles.block}>
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
            </div>
            <div style={styles.block}>

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
              />
            </div>
            <div style={styles.block}>

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
            <div style={styles.block}>

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
    check_multi_inline: [2, 3],
  },
})(Example);
