import {GitHubCalendar} from "react-github-calendar";

const GithubHeatmap = () => {
  return (
    <div className="flex justify-center rounded-xl border border-green-500/30 bg-[#0d1f14] p-6">
      <GitHubCalendar username="kamleshBisht04" colorScheme="dark" />
    </div>
  );
};

export default GithubHeatmap;
