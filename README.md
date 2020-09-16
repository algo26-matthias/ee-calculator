# EE Simple Calculator Demo

This project refers to version 68248247cd23ebffaa256f583e0e4ce05b4a0b86 of your problem description.
Go to https://algo26.de/demo/ee-calculator/index.html to see a snapshot of the end result (generated at 2020-09-16).

Technological decisions for this project:
-
- JavaScript (ES 6) has been chosen with no extra framework to really have the least amount of complexity.
- The JS is processed by Webpack to generate browser agnostic code.
- SASS is used as the CSS preprocessor, Webpack also takes care of producing the CSS.
- For some scaffolding I chose Bootstrap, which is just referenced by the final HTML document. 
- Testing is performed with Jasmine.
- Docker helps to encapsulate the build environment and offers a runtime locally for executing tests and see the end result.

Structure of the project:
-
- ``src`` holds the source files (JS and SASS)
- ``test`` holds the test specifications
- ``public`` holds the rendered files (and the HTML and images)

Run tests locally:
-
As mentioned this project uses Docker to offer a well-defined build environment. I assume, you are familiar enough to run 
docker containers and also have it installed on your machine. You should also be comfortable on a shell of your choosing.

1. First create a directory in the location of your choice, e.g. 
``~/ee-calculator-demo``

2. Now obtain the project data, either via ``git clone`` or as a 
ZIP from here: https://github.com/algo26-matthias/ee-calculator (Click the big green button labelled "Code").

3. Depending on how you obtained the project you should now see a bunch of folders and files, one of which should be ``docker-compose.yml``.
If all you see is the folder ``ee-calculator``, change into this directory.

4. Start the docker container with the command ``docker-compose up -d``. Depending on the speed of your 
internet connection and the power of your computer this might take a few minutes. Once it is done, you 
can try opening this URL in your browser: http://localhost:8199/ - you should now see the calculator.

5. For running the tests type ``docker exec -it ee-calculator-node bash -c "npm run test"`` in your shell.

What could be improved:
-
- The test coeverage is not what it should be, I'd like to add proper e2e tests as well.
- The business logic needs proper refactoring, the ``HandleEventService`` does way too much and is crossing layers.
- Add missing features (proper CE / AC handling for instance).
