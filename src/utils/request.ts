// @ts-ignore
const request = (url: string, token: string | null, options: object) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    // @ts-ignore
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, {
    headers,
    ...options,
  }).then(async (response) => {
    const responseBody = await response.json();

    if (response.status >= 400) {
      throw new Error(responseBody.message || 'Something went wrong');
    }

    return responseBody;
  });
};

export default request;
