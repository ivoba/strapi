/**
 *
 * StyledViewContainer
 *
 */

import styled from 'styled-components';

import { colors, sizes } from 'strapi-helper-plugin';

const StyledViewContainer = styled.div`
  min-height: calc(100vh - ${sizes.header.height});
  background-color: ${colors.greyOpacity};
  .components-container {
    padding: 1.8rem 1.5rem;
    div div:not(.list-button) {
      button {
        top: 1.8rem;
      }
    }
    > div:last-of-type {
      > div:first-of-type {
        padding-bottom: 1rem;
      }
    }
    .list-header-title {
      & + p {
        margin-bottom: 0.7rem;
      }
      p {
        width: fit-content;
        display: inline-block;
        margin-bottom: 0;
      }
    }
  }
`;

export default StyledViewContainer;