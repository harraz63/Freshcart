/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Style from "./Notfound.module.css";
import NotFound from "../../assets/images/error.jpg";
export default function Notfound() {

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <img src={NotFound} alt="" className=" w-1/3" />
      </div>
    </>
  );
}
