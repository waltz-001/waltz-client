const filterData = (searchText, teams) => {
  const filtered = teams.filter((team) =>
    // console.log(team?.team?.toLowerCase().includes(searchText.toLowerCase()));
    team?.team?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filtered;
};
const useTeams = (teams) => {
  if (!teams) return;
  const core = filterData("Core Team", teams);
  const tech = filterData("Tech Team", teams);
  //   console.log(tech);
  const media = filterData("Core Team", teams);
  const culture = filterData("Core Team", teams);

  return [core, tech, media, culture];
};
export default useTeams;
