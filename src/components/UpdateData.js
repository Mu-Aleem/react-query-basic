import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { updateusers, getSingleuser } from "../Api";
import { useNavigate, useParams } from "react-router-dom";
const UpdateData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const {
    isLoading: single,
    data: singledata,
    isError,
    error,
  } = useQuery(["single-Heros", id], () => getSingleuser(id));

  useEffect(() => {
    setdata(singledata?.name);
  }, [singledata?.id]);

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(updateusers);

  const submitdata = async (e) => {
    e.preventDefault();
    const objdata = {
      id: singledata.id,
      name: data,
    };
    await mutateAsync(objdata);
    queryClient.invalidateQueries("All-Heros");
    navigate(`/hero`);
  };
  return (
    <>
      <form onSubmit={submitdata}>
        <input
          type="text"
          placeholder="Enter Name"
          value={data}
          onChange={(e) => setdata(e.target.value)}
          required
        />
        <button className="" type="submit">
          {isLoading ? "Please wait " : "Update"}
        </button>
      </form>
    </>
  );
};

export default UpdateData;
