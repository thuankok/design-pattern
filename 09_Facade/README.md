## JavaScript Facade Design Pattern
<hr/>

The Facade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

## Using Facade

The intent of the Facade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

On the server, in a multi-layer web application you frequently have a presentation layer which is a client to a service layer. Communication between these two layers takes place via a well-defined API. This API, or facade, hides the complexities of the business objects and their interactions from the presentation layer.

Another area where Facades are used is in refactoring. Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about. You can hide this code behind a Facade. The Facade exposes only what is necessary and presents a cleaner and easy-to-use interface.

Facades are frequently combined with other design patterns. Facades themselves are often implemented as singleton factories.

## Diagram 

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Facade.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Facade</b> -- In example code: <b style="color:#088;">Mortgage</b>
      <ul>
        <li>knows which subsystems are responsible for a request</li>
        <li>delegates client requests to appropriate subsystem objects</li>
      </ul>
    </li>
    <li>
      <b>Sub Systems</b> -- In example code: <b style="color:#088;">Bank, Credit, Background</b>
      <ul>
        <li>implements and performs specialized subsystem functionality</li>
        <li>have no knowledge of or reference to the facade</li>
      </ul>
    </li>
  </ul>

