## JavaScript Decorator Design Pattern


The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

## Using Decorator
An example of a decorator is security management where business objects are given additional access to privileged information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information can be viewed.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern. You can learn more about these and other Modern JavaScript patterns in our Dofactory JS.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Decorator.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Client</b> -- In example code: the run() function
      <ul>
        <li>maintains a reference to the decorated Component</li>
      </ul>
    </li>
    <li>
      <b>Component</b> -- In example code: <b style="color:#088;">User</b>
      <ul>
        <li>object to which additional functionality is added</li>
      </ul>
    </li>
    <li>
      <b>Decorator</b> -- In example code: <b style="color:#088;">DecoratedUser</b>
      <ul>
        <li>'wraps around' Component by maintaining a reference to it</li>
        <li>defines an interface that conforms to Component's interface</li>
        <li>implements the additional functionality (addedMembers in diagram)</li>
      </ul>
    </li>
  </ul>