import React from "react";

export const Header = ({ toogleModal, numberOfContacts }) => {
  return (
    <Header className="header">
      <div className="container">
        <h3> Contact List ({numberOfContacts})</h3>
        <button onClick={()=> toogleModal=(true)} className="btn">
          <i className="bi bi-plus-quare"></i>Add New Contact
        </button>
      </div>
    </Header>
  );
};
