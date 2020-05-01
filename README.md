## Getting started


#### Requirements
###### Check requirements.txt


#### Customisations
1. Test build
  Go to working directory and run
  ```
  npm start
  ```
2. Colour scheme
  1. __public/vulnerability.csv__ contains a table with values as a decimal 0 < x < 1 as a percentage of how dark the colour for the specific country for each year.

  2. To load a different values file into the map, go to:

  ```
  22  useEffect(() => {
  23   csv(`/vulnerability.csv`).then(data => {
  24     setData(data);
  25   });
  26  }, []);
  ```
  and change the source of the file on _line 23_

  3. On line 17 of __src/MapChart.js__:

  ```
  15  const colorScale = scaleLinear()
  16    .domain([0.29, 0.68])
  17    .range(["#ffedea", "#ff5233"]);
  ```

  Range specifies the range of colour for the countries from lighter to darker
