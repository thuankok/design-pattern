## JavaScript Adapter Design Pattern
<hr/>

The Adapter pattern translates one interface (an object‘s properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn&lstqup;t because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

## Using Adapter

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.

Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Adapter.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Client</b> -- In example code: the run() function.
      <ul>
        <li>calls into Adapter to request a service</li>
      </ul>
    </li>
    <li>
      <b>Adapter</b> -- In example code: <b style="color:#088;">ShippingAdapter</b>
      <ul>
        <li>implements the interface that the client expects or knows</li>
      </ul>
    </li>
    <li>
      <b>Adaptee</b> -- In example code: <b style="color:#088;">AdvancedShipping</b>
      <ul>
        <li>the object being adapted</li>
        <li>has a different interface from what the client expects or knows</li>
      </ul>
    </li>
  </ul>