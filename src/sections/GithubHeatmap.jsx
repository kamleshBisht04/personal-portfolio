import { GitHubCalendar } from "react-github-calendar";

const GithubHeatmap = () => {
  return (
    <>
      <h1 className="text-center text-xl font-bold text-white/70 mb-6 md:text-2xl">
        GitHub Contributions
      </h1>
      <div className="mx-auto flex max-w-6xl items-center justify-center rounded-xl border bg-black/80 p-6">
        <GitHubCalendar username="kamleshBisht04" colorScheme="dark" />
      </div>
    </>
  );
};

export default GithubHeatmap;
