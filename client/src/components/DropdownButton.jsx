import React from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import "../styles/Button.scss";

const DropdownButton = ({ buttonText, mainLink, items = [] }) => {
  return (
    <Dropdown className="nasa-dropdown" as={ButtonGroup} size="sm">
      <Button href={mainLink} target="_blank">
        {buttonText}
      </Button>

      <Dropdown.Toggle split />

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            href={item.link}
            drop="down-centered"
            target="_blank"
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
