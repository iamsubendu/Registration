import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveOrganization } from "../redux/actions";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const pendingOrgs = users.filter(
    (user) => user.role === "organization" && !user.approved
  );

  const handleApprove = (id) => {
    dispatch(approveOrganization(id));
    alert("Organization approved!");
  };

  return (
    <>
      <Navbar />
      <section className="adminDashboard">
        <h2>Admin Dashboard</h2>
        <h3>Pending Organizations</h3>
        {pendingOrgs.length === 0 ? (
          <p style={{ marginTop: "1rem" }}>No organizations to approve.</p>
        ) : (
          <ul>
            {pendingOrgs.map((org) => (
              <li key={org.id}>
                <p>{org.orgName}</p>
                <p>{org.email}</p>
                <button onClick={() => handleApprove(org.id)}>Approve</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default AdminDashboard;
