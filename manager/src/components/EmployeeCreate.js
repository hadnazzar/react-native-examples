import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Enter your name"
          />
        </CardSection>


        <CardSection>
          <Input
            label="Phone"
            placeholder="xxx - xxx - xxxx" />
        </CardSection>


        <CardSection>

        </CardSection>


        <CardSection>
          <Button>  Save </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate;