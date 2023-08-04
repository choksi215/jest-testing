async function getUserData(user) {
  const res = await fetch(`https://api.github.com/users/${user}`);
  if (!res.ok) {
    throw new Error("bad response");
  }
  return await res.json();
}

async function handleUserRequest(user) {
  try {
    const data = await getUserData(user);
		return data
  } catch (err) {
    console.log(err);
  }
}


async function getRepoData(repoName) {
  // https://api.github.com/search/repositories?q=zefiroProject
  const res = await fetch(`https://api.github.com/search/repositories?q=${repoName}`);
  if (!res.ok) {
    throw new Error("bad response");
  }
  return await res.json();
}

async function handleRepoRequest(repoName) {
  try {
    const data = await getRepoData(repoName);
		return data
  } catch (err) {
    console.log(err);
  }
}

export { handleUserRequest, handleRepoRequest };
