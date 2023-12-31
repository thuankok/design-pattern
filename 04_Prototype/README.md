## JavaScript Prototype Design Pattern
<hr/>

The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object. The Prototype pattern is also referred to as the Properties pattern.

## Using Prototype

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Prototype.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Client</b> -- In example code: the run() function.
      <ul>
        <li>creates a new object by asking a prototype to clone itself</li>
      </ul>
    </li>
    <li>
      <b>Prototype</b> -- In example code: <b style="color:#088;">CustomerPrototype</b>
      <ul>
        <li>creates an interfaces to clone itself</li>
      </ul>
    </li>
    <li>
      <b>Clones</b> -- In example code: <b style="color:#088;">Customer</b>
      <ul>
        <li>the cloned objects that are being created</li>
      </ul>
    </li>
  </ul>