const pieces = [
  {
    image: "images/export-22.344053.png",
    description: `
    Given an origin and a parallel destination, draw 1000 points of varying
    transparency between them. Using Perlin noise, calculate a delta vector
    for both origin and destination, with x coordinates between -0.2 and +0.5,
    and y coordinates between -1 and +2. Add the delta vectors to the origin
    and destination. Repeat until either the origin or destination points are
    at least 80px from the bottom of the canvas.
    `,
  },
  {
    image: "images/export-096.png",
    description: `
    Pack as many circles as possible within another circle, ensuring they
    don't overlap. Draw a line through the middle of each of the sub-circles
    at a random angle.
    `,
  },
  {
    image: "/images/export-45.66896.png",
    description: `
    Plot two kinds of objects around the canvas; attractors and particles.
    Particles are attracted to attractors, and their path/history is shown
    in white. Attractors are invisible. Within a certain radius, attractors
    reject particles with a force. Plot thousands of each type of object.
    Observe through the particle history how all particles are attracted to
    the center of the canvas; the center of mass, if you will.
    `,
  },
  {
    image: "/images/export-498.5307.png",
    description: `
    Pick a random origin and destination vector, and a random delta vector.
    Draw a series of points between the origin and destination. On the next
    frame, there is a 30% chance the delta will be added to the origin, a 30%
    chance the delta will be added to the destination, and a 40% chance the
    delta will be added to both. The probability of the outcome is determined
    by Perlin noise.

    When either the origin or the destination is within 50px of the canvas edge,
    pick a new origin, destination, and delta.
    `,
  },
  {
    image: "/images/shell-0635.png",
    description: `
    Plot a series of connected points around the center of the canvas, using
    three-dimensional Perlin noise to vary the radius. Repeat this with an
    increasing base radius, stepping forward through the Perlin noise function
    to slightly vary the next shape.
    `,
  },
]

export default pieces
