---
name: '2D + 3D Graphics Rendering'
date: "Fall '25"
tags: ['Graphics', 'C++', 'OpenGL']
description: 'An exploration of creating 3D graphics, featuring a black hole simulation + more!'
slug: '2d-3d-graphics-rendering'
link: 'https://docs.google.com/presentation/d/1IKjTZlvfml5VGc2p6jz022RhvjSyutDscDpbc417NtA/edit'
image: '/images/graphics rendering thumb.png'
featured: true
members:
  - name: Jacob
  - name: Lily
  - name: Kendan
  - name: Zachary
  - name: Paolo
---

# About The Project

This project explored 2D and 3D graphics rendering using OpenGL,
GLEW, GLFW, and GLM. The team worked through the fundamentals —
window creation, error checking, vertex arrays, indices, and
shaders - then put it all together in a black hole simulation.

## Learning Progression

The team built up their knowledge step by step. They started with
OpenGL basics: GLFW for creating windows and handling inputs, GLEW
for accessing modern OpenGL features without manually managing
function pointers, and GLM for vector and matrix math. From there,
they moved through window creation, error checking, and window
pointer definitions before tackling the actual rendering.

## Black Hole Simulation

The black hole is constructed using OpenGL triangles. Its
constructor calculates the Schwarzschild radius based on the
black hole's mass, which determines the event horizon - the point
where light can no longer escape. Light rays are rendered as
points with fading trails connected by GL Line Strips, and their
paths are computed using geodesic equations.

The team implemented both Euler's method and RK4 (Runge-Kutta 4th
order) step functions to simulate how light curves around the
black hole. Polar coordinates are converted back to cartesian for
rendering. The final product shows both single and multiple light
rays bending around the event horizon.

## Shaders and 3D Objects

Beyond the simulation, the team also built 2D and 3D shader
objects using vertex and indices arrays. The vertex array defines
the object being drawn - each vertex contains 3D coordinates and
a color attribute. The indices array specifies the order vertices
should be processed to form triangles on screen.

![Black Hole Simulation](../src/images/graphics-rendering_blackhole.png)

![3D Shader Render](../src/images/graphics-rendering_shader.png)

![2D + 3D Graphics Rendering Team](/images/graphicsrenderingteam.png)
