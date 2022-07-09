const GITHUB_URL = "https://api.github.com/"
const GITHUB_TOKEN = "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"

export const getUser = async (username) => {
  const response = await fetch(`${GITHUB_URL}users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

export const getRepos = async (username) => {
  const sortedBy = new URLSearchParams({
    sort: 'created',
  });
  const perPage = new URLSearchParams({
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}users/${username}/repos?${sortedBy}&${perPage}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

export const searchUsers = async (currentUser, currentPage, usersPerPage) => {
  const user = new URLSearchParams({
    q: currentUser ? currentUser : "Ha",
  });
  const page = new URLSearchParams({
    page: currentPage ? currentPage : 1,
  });
  const perPage = new URLSearchParams({
    per_page: usersPerPage ? usersPerPage : 24,
  });
  const response = await fetch(
    `${GITHUB_URL}search/users?${user}&${page}&${perPage}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};
