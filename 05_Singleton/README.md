## JavaScript Singleton Design Pattern


The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

## Using Singleton

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our Dofactory JS product) is JavaScript's manifestation of the Singleton pattern.

Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Singleton.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Singleton</b> -- In example code: <b style="color:#088;">Singleton</b>
      <ul>
        <li>defines getInstance() which returns the unique instance.</li>
        <li>responsible for creating and managing the instance object.</li>
      </ul>
    </li>
  </ul>