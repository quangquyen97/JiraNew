import React from "react";
const initialState = {
  visible: false,
  ComponentContentDrawer: <p>default</p>,
  callBackSubmit: () => {
    alert("click demo!");
  },
};

export const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, visible: true };

    case "CLOSE_DRAWER":
      return { ...state, visible: false };

    case "OPEN_FORM_EDIT_PROJECT":
      return {
        ...state,
        visible: true,
        ComponentContentDrawer: action.Component,
      };
    case "SET_SUBMIT_EDIT_PROJECT": {
      state.callBackSubmit = action.submitFunction;
      return { ...state };
    }

    case "SET_SUBMIT_CREATE_TASK": {
      state.callBackSubmit = action.submitFunction;
      return { ...state };
    }

    case "OPEN_FORM_CREATE_TASK": {
      state.visible = true;
      state.title = action.title;
      state.ComponentContentDrawer = action.Component;

      return { ...state };
    }

    default:
      return state;
  }
};
