import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";

import { createusers } from "../Api";

const Create = () => {
  const [data, setdata] = useState("");
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(createusers);

  const submitdata = async (e) => {
    e.preventDefault();
    const objdata = {
      id: uuidv4(),
      name: data,
    };
    await mutateAsync(objdata);
    queryClient.invalidateQueries("All-Heros");
    setdata("");
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
          {isLoading ? "Please wait " : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Create;
