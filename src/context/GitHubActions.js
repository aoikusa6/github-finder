const Github_URL = "https://api.github.com/";
const GitHub_Token = "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";

export const getUser = async (username) => {
  const response = await fetch(`${Github_URL}users/${username}`, {
    headers: {
      Authorization: `token ${GitHub_Token}`,
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
  const response = await fetch(`${Github_URL}users/${username}/repos?${sortedBy}&${perPage}`, {
    headers: {
      Authorization: `token ${GitHub_Token}`,
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
    q: currentUser ? currentUser : "Loc",
  });
  const page = new URLSearchParams({
    page: currentPage ? currentPage : 1,
  });
  const perPage = new URLSearchParams({
    per_page: usersPerPage ? usersPerPage : 24,
  });
  const response = await fetch(
    `${Github_URL}search/users?${user}&${page}&${perPage}`,
    {
      headers: {
        Authorization: `token ${GitHub_Token}`,
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
