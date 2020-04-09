// STORE STATES

export const loading = (state) => ({
  ...state,
  loading: true,
  error: null,
});

export const success = (state, payload) => ({
  ...state,
  ...payload,
  loading: false,
  error: null,
});

export const error = (state, error) => ({
  ...state,
  loading: false,
  error,
});

// UTILITY FUNCTIONS

export const getError = ({
  data: {
    status,
    error: { message, details },
  },
}) => ({
  errorStatus: status,
  errorMessage: message,
  errorDetails: details,
});
