import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>What is Cors?</h2>
      <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
        that allows a server to indicate any origins (domain, scheme, or port)
        other than its own from which a browser should permit loading resources.
      </p>
      <h2>Why use Firbase? </h2>
      <p>
        The Firebase Realtime Database lets you build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience. There similar like Microsoft Azure
      </p>
      <h2>How private Route Work?</h2>
      <p>
        The private route component is similar to the public route, the only
        change is that redirect URL and authenticate condition. If the user is
        not authenticated he will be redirected to the login page and the user
        can only access the authenticated routes If he is authenticated (Logged
        in)
      </p>
      <h2>What is Node?</h2>
      <p>
        As an asynchronous event-driven JavaScript runtime, Node.js is designed
        to build scalable network applications. In the following "hello world"
        example, many connections can be handled concurrently. Upon each
        connection, the callback is fired, but if there is no work to be done,
        Node.js will sleep.
      </p>
    </div>
  );
};

export default Blog;
