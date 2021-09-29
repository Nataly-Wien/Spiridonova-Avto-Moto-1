import './contacts.scss';
import React from 'react';
import Map from '../mapBlock/mapBlock';
import {CONTACTS} from '../../const';

const checkLink = (contact) => {
  const regExpTel = /^\d[\d\(\)\ -]{5,15}\d$/;
  const regExpMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  if (regExpTel.test(contact)) {
    return (
      <a className="contacts__value" href={`tel:${contact.split(``).filter((it) => it >= `0` && it <= `9`).join(``)}`}>{contact}</a>
    );
  } else {
    return (regExpMail.test(contact) ? <a className="contacts__value" href={`mailto:${contact}`}>{contact}</a>
      : <p className="contacts__value">{contact}</p>);
  }
};

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <ul className="contacts__list">
        {CONTACTS.map((item, i) => {
          return (
            <li className="contacts__item" key={`contact-${i}`}>
              <p className="contacts__name">{item.contact}</p>
              {checkLink(item.description)}
            </li>);
        })}
      </ul>
      <Map />
    </div>
  );
};

export default Contacts;
