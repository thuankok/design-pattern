## JavaScript Factory Method Design Pattern
<hr/>

A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

## Using Factory Method

The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/FactoryMethod.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Creator</b> -- In example code: <b style="color:#088;">Factory</b>
      <ul>
        <li>the 'factory' object that creates new products</li>
        <li>implements 'factoryMethod' which returns newly created products</li>
      </ul>
    </li>
    <li>
      <b>AbstractProduct</b> -- not used in JavaScript
      <ul>
        <li>declares an interface for products</li>
      </ul>
    </li>
    <li>
      <b>ConcreteProduct</b> -- In example code: <b style="color:#088;">Employees</b>
      <ul>
        <li>the product being created</li>
        <li>all products support the same interface (properties and methods)</li>
      </ul>
    </li>
  </ul>