import { styled } from "twin.macro";

const StyledCheckbox = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  overflow: hidden;

  [type="checkbox"] {
    &:checked,
    &:not(:checked) {
      position: absolute;
      left: -9999px;
      &:hover + span:before {
        border-color: rgba(146, 130, 243, 1);
      }
      &:focus-visible + span:before {
        box-shadow: 0 0 0 2px white, 0 0 0 4px blue;
      }
      & + span {
        position: relative;
        display: inline-block;
        height: 20px;
        width: 20px;
        cursor: pointer;
        font-size: 11px;
        line-height: 16px;
        color: black;
        &:before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 1px solid #d6d6d6;
          border-radius: 100%;
          background: linear-gradient(164deg, rgba(112, 164, 250, 1) 0%, rgba(180, 96, 236, 1) 100%);
          transition: all 300ms ease;
        }
      }
    }
  }
  [type="checkbox"] {
    &:checked,
    &:not(:checked) {
      & + span:after {
        position: absolute;
        content: "";
        top: 5px;
        left: 8px;
        width: 4px;
        height: 8px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        transition: all 300ms ease;
      }
    }
    &:not(:checked) {
      & + span:after {
        opacity: 0;
        transform: scale(0);
      }
      & + span:before {
        background: transparent;
      }
    }
    &:checked {
      & + span:before {
        border-color: rgba(146, 130, 243, 1);
      }
      & + span:after {
        opacity: 1;
        transform: scale(1) rotate(45deg);
      }
    }
    &:disabled {
      & + span:before {
        border: 1px solid darkgray;
        background: darkgray;
      }
      & + span:after {
        border-color: darkgray;
      }
      &:not(:checked) + span {
        color: gray;
      }
    }
    &[readonly] + span:hover {
      cursor: unset;
    }
  }
`;

export default StyledCheckbox;
