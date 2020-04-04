/* global fetch, process */
import Flux from "@4geeksacademy/react-flux-dash";

class QuizActions extends Flux.Action {
	fetchQuiz(quizSlug) {
		fetch(process.env.ASSETS_URL + "/" + quizSlug)
			.then(response => {
				return response.json();
			})
			.then(quiz => {
				this.dispatch("QuizStore.setQuiz", quiz || null);
			})
			.catch(error => {
				this.dispatch("QuizStore.setQuiz", new Error(error));
			});
	}
}
export default new QuizActions();
