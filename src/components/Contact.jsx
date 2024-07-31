import React from "react";
import { Link } from "react-router-dom";

export const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="contact__item">
      <div className="contact__header">
        <div className="contact__image">
          <img src={contact.image} alt={contact.name} />
        </div>
        <div className="contact__details">
          <p className="contact_name">{contact.name.substring(0, 15)}</p>
          <p className="contact_title">{contact.title}</p>
        </div>
      </div>
      <div className="contact__body">
        <p>
          <li className="bi bi-envelope"></li>
          {contact.email.substring(0, 20)}
        </p>
        <p>
          <li className="bi bi-geo"></li>
          {contact.address}
        </p>
        <p>
          <li className="bi bi-telephone"></li>
          {contact.phone}
        </p>
        <p>
          {contact.status === 'Active' ? <li className="bi bi-check-circle"></li> : <li className="bi bi-x-circle"></li>}
          {contact.status}
        </p>
      </div>
    </Link>
  );
};
