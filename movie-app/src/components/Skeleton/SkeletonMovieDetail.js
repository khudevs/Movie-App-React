import React from "react";
import "./Skeleton.css";
import SkeletonElements from "./SkeletonElements";
import Shimmer from "./Shimmer";

const SkeletonMovie = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-movies d-flex align-items-start">
        <div className="skeleton-left ">
          <SkeletonElements type="poster" />
        </div>
        <div className="skeleton-right">
          <div className="d-flex align-items-center">
            <SkeletonElements type="title" className="header-title" />
          </div>
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <br />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonMovie;
