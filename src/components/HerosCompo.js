import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Create from "../pages/Create";
import { useNavigate } from "react-router-dom";
import { getusers, updateusers, deleteusers } from "../Api";

const HerosCompo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error } = useQuery("All-Heros", getusers);
  const { mutateAsync, isLoading: deleteLoading } = useMutation(deleteusers);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const deleteData = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries("All-Heros");
  };
  const UpdateData = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <>
      <div className="center">
        <h1>Heros Mian</h1>
        <div className="wraper">
          {data?.map((value, index) => {
            return (
              <div key={index} className="border">
                <h5>{value.name}</h5>
                <button onClick={() => UpdateData(value.id)}>Update</button>
                <button onClick={() => deleteData(value.id)}>
                  {deleteLoading ? "please wait..." : null}
                  delete
                </button>
              </div>
            );
          })}
        </div>

        <Create />
      </div>
    </>
  );
};

export default HerosCompo;
