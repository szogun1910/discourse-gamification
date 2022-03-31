import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";

export default DiscourseRoute.extend({
  model(params) {
    return ajax(`/leaderboard`)
      .then((model) => {
        return model;
      })
      .catch(() => this.replaceWith("/404"));
  },
});
