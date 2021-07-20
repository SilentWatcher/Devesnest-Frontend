import React from "react";
import "./style.css";
const ChessBoard = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className="square" />);
  }
  console.log(boxes);
  return (
    <div className="app">
      <div className="chessBoard">
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
      </div>
    </div>
  );
};
export default ChessBoard;
