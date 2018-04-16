import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import '../styles/breadcrumb.scss';


const BreadcrumbComponent = () => (
    <div class="row">
    <Breadcrumb>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section link>Store</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
    </Breadcrumb>
    </div>
  )
  
  export default BreadcrumbComponent;