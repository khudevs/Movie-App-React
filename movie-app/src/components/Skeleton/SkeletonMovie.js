import React from "react";
import "./Skeleton.css";
import SkeletonElements from "./SkeletonElements";
import Shimmer from "./Shimmer";

const SkeletonMovie = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-movie">
        <SkeletonElements type="title" />
        <SkeletonElements type="image" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonMovie;
