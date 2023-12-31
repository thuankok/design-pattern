## JavaScript Builder Design Pattern
<hr/>

The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

## Using Builder

The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects (another GoF design pattern) because the procedures involved are often repetitive and complex.

Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together (note: fluent interfaces are implementation of the Chaining Pattern as presented in the Modern patterns section).

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Builder.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Director</b> -- In example code: <b style="color:#088;">Shop</b>
      <ul>
        <li>constructs products by using the Builder's multistep interface</li>
      </ul>
    </li>
    <li>
      <b>Builder</b> -- not used in JavaScript
      <ul>
        <li>declares a multistep interface for creating a complex product</li>
      </ul>
    </li>
    <li>
      <b>ConcreteBuilder</b> -- In example code: <b style="color:#088;">CarBuilder, TruckBuilder</b>
      <ul>
        <li>implements the multistep Builder interface</li>
        <li>maintains the product through the assembly process</li>
        <li>offers the ability to retrieve the newly created product</li>
      </ul>
    </li>
    <li>
      <b>Products</b> -- In example code: <b style="color:#088;">Car, Truck</b>
      <ul>
        <li>represents the complex objects being assembled</li>
      </ul>
    </li>
  </ul>