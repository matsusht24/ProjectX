import React from "react";
import "./table.css";

function PlantGrid() {
  return (
    <table className="w-full h-full border-collapse">
      <thead>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>A</th>
        </tr>
        <tr>
          <th>B</th>
        </tr>
        <tr>
          <th>C</th>
        </tr>
        <tr>
          <th>D</th>
        </tr>
        <tr>
          <th>E</th>
        </tr>
      </tbody>
    </table>
  );
}

export default PlantGrid;
