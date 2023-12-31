## JavaScript Bridge Design Pattern
<hr/>

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

## Using Bridge

An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Bridge.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Client</b> -- In example code: the run() function.
      <ul>
        <li>calls into Abstraction to request an operation</li>
      </ul>
    </li>
    <li>
      <b>Abstraction</b> -- not used in JavaScript
      <ul>
        <li>declares an interface for first level abstraction</li>
        <li>maintains a reference to the Implementor</li>
      </ul>
    </li>
    <li>
      <b>RefinedAbstraction</b> -- In example code: <b style="color:#088;">Gestures, Mouse</b>
      <ul>
        <li>implements and extends the interface defined by Abstraction</li>
      </ul>
    </li>
    <li>
      <b>Implementor</b> -- not used in JavaScript
      <ul>
        <li>declares an interface for second level or implementor abstraction</li>
      </ul>
    </li>
    <li>
      <b>ConcreteImplementor</b> -- In example code: <b style="color:#088;">Screen, Audio</b>
      <ul>
        <li>implements the Implementor interface and defines its effects</li>
      </ul>
    </li>
  </ul>