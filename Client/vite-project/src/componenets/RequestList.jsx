import React from "react";
import RequestItem from "./RequestItem";

function RequestList({ requests, onDeleteRequest }) {
  if (!Array.isArray(requests) || requests.length === 0) {
    return <div>No requests found.</div>;
  }

  return (
    <div>
      {requests.map((request) => (
        <RequestItem
          key={request._id}
          request={request}
          onDeleteRequest={onDeleteRequest}
        />
      ))}
    </div>
  );
}

export default RequestList;
