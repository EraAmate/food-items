import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  margin: 10px;
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
const Filter = ({ filters = [], onChange }) => {
  return (
    <Container>
      <label>Filters:</label>
      {filters.map((filter, i) => {
        return (
          <CheckboxSection color={filter.color} key={i}>
            <input
              type="checkbox"
              name={filter.name}
              onChange={onChange}
              checked={filter.isChecked}
            />
            {filter.name}
          </CheckboxSection>
        );
      })}
    </Container>
  );
};
export default Filter;

Filter.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func
};
