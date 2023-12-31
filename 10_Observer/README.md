## JavaScript Observer Design Pattern
<hr/>

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.

## Using Observer

When building web apps you end up writing many event handlers. Event handlers are functions that will be notified when a certain event fires. These notifications optionally receive an event argument with details about the event (for example the x and y position of the mouse at a click event).

The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern. Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.

## Diagram

<img src="https://github.com/thuankok/design-pattern/blob/main/assets/Observer.jpg" alt="logo">

## Participants

<ul>
    <li>
      <b>Subject</b> -- In example code: <b style="color:#088;">Click</b>
      <ul>
        <li>maintains list of observers. Any number of Observer objects may observe a Subject</li>
        <li>implements an interface that lets observer objects subscribe or unsubscribe</li>
        <li>sends a notification to its observers when its state changes</li>
      </ul>
    </li>
    <li>
      <b>Observers</b> -- In example code: <b style="color:#088;">clickHandler</b>
      <ul>
        <li>has a function signature that can be invoked when Subject changes (i.e. event occurs)</li>
      </ul>
    </li>
  </ul>