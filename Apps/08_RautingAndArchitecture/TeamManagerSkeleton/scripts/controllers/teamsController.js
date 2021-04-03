// let teamsController = (() => {
//
//     function loadCatalog(ctx) {
//         teamsService.loadTeams().then((userData) => {
//             ctx.loggedIn = auth.isAuthenticated();
//             ctx.username = auth.getUserName();
//             userData = userData.filter(t => t.members !== undefined);
//             ctx.teams = userData.map(e => {
//                 return {
//                     _id: e._id,
//                     name: e.name,
//                     comment : e.description
//                 }
//             })
//             //ctx.teams = teams.map(e => {return {username: e}});
//             this.loadPartials({
//                 header: '../TeamManagerSkeleton/templates/common/header.hbs',
//                 footer: '../TeamManagerSkeleton/templates/common/footer.hbs',
//                 team: '../TeamManagerSkeleton/templates/catalog/team.hbs',
//             }).then(function () {
//                 this.partial('../TeamManagerSkeleton/templates/catalog/teamCatalog.hbs')
//             })
//         });
//
//     }
//     function loadTeamDetails(ctx) {
//         let teamId = ctx.params.id.substring(1)
//
//         teamsService.loadTeamDetails(teamId).then((details) => {
//             ctx.loggedIn = auth.isAuthenticated();
//             ctx.username = auth.getUserName();
//             ctx.name = details.name;
//             ctx.comment = details.comment;
//             ctx.teamId = details._id;
//             ctx.isAuthor = details._acl.creator === auth.getUserId()
//             ctx.members = details.members == null ? null : JSON.parse(details.members).map(e => {
//                 if (e === auth.getUserName()) {
//                     ctx.isOnTeam = true
//                 }
//                 return {
//                     username: e
//                 }});
//
//             this.loadPartials({
//                 header: '../TeamManagerSkeleton/templates/common/header.hbs',
//                 footer: '../TeamManagerSkeleton/templates/common/footer.hbs',
//                 team: '../TeamManagerSkeleton/templates/catalog/team.hbs',
//                 teamMember: '../TeamManagerSkeleton/templates/catalog/teamMember.hbs',
//                 teamControls: '../TeamManagerSkeleton/templates/catalog/teamControls.hbs',
//             }).then(function () {
//                 this.partial('../TeamManagerSkeleton/templates/catalog/details.hbs')
//             })
//         });
//
//     }
//
//     function joinTeam(ctx) {
//         let teamId = ctx.params.id.substr(1);
//         teamsService.joinTeam(teamId).then((details) => {
//             ctx.loggedIn = auth.isAuthenticated();
//             ctx.username = auth.getUserName();
//
//         })
//     }
//
//     return{
//         loadCatalog,loadTeamDetails,joinTeam
//     }
// })();