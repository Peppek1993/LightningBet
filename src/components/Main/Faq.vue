<template>
	<div class="p-6">
		<div v-for="question in questions">
			<h1 class="text-3xl font-thin text-teal-700">
				{{ question.question }}
			</h1>
			<p class="font-hairline">{{ question.answer }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				questions: [
					{
						question: 'What is this website built for?',
						answer:
							'Lightning bet is a non-profit project made by Adam Partyka intended to be used strictly as a showcase for my portfolio. There is no real money betting involved here., but I would be very happy if you would look around, try your luck at placing some bets and letting me know if you found any issues :)',
					},
					{
						question: 'Who built it?',
						answer:
							'This website is built by Adam Partyka, a self taught front-end developer living in Cracow. If you want to contact me - feel free to do so at adampartyka1993@gmail.com or using my GitHub (link can be found in the lower left part of the website).',
					},
					{
						question: 'How can I start betting?',
						answer: `First of all, you should deposit some money using the "Deposit" button in the upper right corner. Then, once you have some funds you can just click on the match and team you're interestd in and place any amount you want. You can have up to 10 bets active at a time and to check if you won or not, click the Simulate Outcome button. The results are based on the odds, which in turn are based on percentage chance of Team X winning the match.`,
					},
					{
						question:
							'What language and/or technology you used to build this website?',
						answer:
							"This website is built using Vue. I've also included Tailwind CSS during the development and really enjoyed it so I stuck with it. ",
					},
					{
						question:
							'Why are Referral and Rewards tabs under construction?',
						answer:
							"These sections are there just as a placeholder since implementing any Referral or Rewards system would require me to implement a user registration system aswell and thats beyond the scope of this project for now. It might change in the future so I'm not deleting it for now but we'll see ;)",
					},
					{
						question: "I've found a bug on your website!",
						answer:
							"Glad to hear that, I would love to hear the feedback so I can fix it and learn from my mistakes. Again, don't hesitate to contact me at adampartyka1993@gmail.com or via GitHub",
					},
				],
			};
		},
	};
</script>

<style></style>
