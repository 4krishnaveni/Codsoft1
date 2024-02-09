// Initialize Matter.js
const { Engine, Render, World, Bodies } = matter;

// Create an engine
const engine = Engine.create();

// Create a renderer
const render = Render.create({
  element: document.body,
  engine: engine
});

// Create some bodies
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// Add bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// Run the engine
Engine.run(engine);

// Run the renderer
Render.run(render);
