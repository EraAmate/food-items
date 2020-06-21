import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
`;
const CheckboxSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: ${(props) => props.color};
  padding: 1px 5px 1px 5px;
  margin: 10px;
  color: ${(props) => props.theme.colors.basic};
  font-size: 0.9rem;
`;
const Filter = ({ text1, text2, text3, onClick }) => {
  return (
    <Container>
      <label>Filters:</label>
      <CheckboxSection color="red">
        <input name={text1} type="checkbox" onClick={onClick} />
        {text1}
      </CheckboxSection>
      <CheckboxSection color="green">
        <input name={text2} type="checkbox" onClick={onClick} />
        {text3}
      </CheckboxSection>
      <CheckboxSection color="orange">
        <input name={text3} type="checkbox" onClick={onClick} />
        {text2}
      </CheckboxSection>
    </Container>
  );
};
export default Filter;

Filter.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  onClick: PropTypes.func
};
