<template>
	<div id="contact">
		<div id="information">
			<h1>Contacteer Ons</h1>
			<ul>
				<li>Hovaere Nico BV</li>
				<li>
					<a href="mailto:info@hovaere.be"
						><svg
							class="logo"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
							></path>
							<path
								d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
							></path>
						</svg>
						&nbsp;info@hovaere.be</a
					>
				</li>
				<li>
					<a href="tel:0032474023994"
						><svg
							class="logo invert"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
							></path>
						</svg>
						&nbsp;+32 474 02 39 94</a
					>
				</li>
				<li><a href="https://rebo.immo" target="_blank">Rebo.immo</a></li>
				<li>
					<a
						href="https://www.google.com/maps/place/Hovaere+Nico/@50.878771,3.4339443,17z/data=!4m5!3m4!1s0x0:0x64a8acf04a4e5dc4!8m2!3d50.8787616!4d3.436003"
						target="_blank"
					>
						Gareelstraat 4, 8790 Waregem</a
					>
				</li>
			</ul>
		</div>
		<form @submit.prevent="onSubmit(name, email, phone, question)">
			<div class="row">
				<div class="formpair">
					<label for="name">Naam</label>
					<input
						id="name"
						type="text"
						v-model="name"
						placeholder="Voornaam Familienaam"
					/>
				</div>
				<div class="formpair">
					<label for="email">Email adres</label>
					<input
						id="email"
						type="text"
						v-model="email"
						placeholder="voorbeeld@gmail.com"
					/>
				</div>
			</div>
			<div class="row">
				<div class="formpair">
					<label for="phone"
						>Telefoonnummer <span class="optional">(optioneel)</span></label
					>
					<input
						id="phone"
						type="text"
						v-model="phone"
						placeholder="+32 56 61 54 94"
					/>
				</div>
				<div class="formpair"></div>
			</div>
			<div class="row">
				<div class="formpair">
					<label for="question">Waar heb je vragen over?</label>
					<textarea
						id="question"
						v-model="question"
						placeholder="Ik heb een vraag over..."
					/>
				</div>
			</div>

			<div v-if="errors.length" class="row formpair">
				<b>Gelieve volgende gegevens in te vullen:</b>
				<ul>
					<li v-for="error in errors" :key="error">{{ error }}</li>
				</ul>
			</div>
			<div class="row formpair">
				<button>Verzenden</button>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			errors: [],
			name: null,
			email: null,
			phone: null,
			question: null,
		};
	},
	methods: {
		onSubmit(name, email, phone, question) {
			if (this.validateForm()) {
				console.log(name);
				console.log(email);
				console.log(phone);
				console.log(question);
			}
		},
		validateForm() {
			this.errors = [];

			if (this.name && this.email && this.question) {
				return true;
			}

			if (!this.name) {
				document.getElementById("name").classList.add("required");
				this.errors.push("Naam");
			} else {
				document.getElementById("name").classList.remove("required");
			}
			if (!this.email) {
				document.getElementById("email").classList.add("required");
				this.errors.push("Email");
			} else {
				document.getElementById("email").classList.remove("required");
			}
			if (!this.question) {
				document.getElementById("question").classList.add("required");
				this.errors.push("De vraag die u wilt stellen");
			} else {
				document.getElementById("question").classList.remove("required");
			}
		},
	},
};
</script>
<style lang="scss" scoped>
/* wrapper */
#contact {
	display: flex;
	max-width: 1200px;
	margin: auto;
}
#information {
	flex: 2;
	text-align: right;
	h1 {
		font-size: 3em;
	}
}
form {
	flex: 3;
}
/* information */
ul {
	padding: 0;
	> li,
	> li > a {
		list-style-type: none;
		margin: 5px;
		color: black;
		text-decoration: none;
		line-height: 2em;
		:hover {
			text-decoration: underline;
		}
	}
}
.logo {
	height: 1em;
}
.invert {
	transform: scale(-1, 1);
}
/* form */

form {
	margin-left: 2em;
	margin-top: 2em;
	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 10px;
	}
	.formpair {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 5px;
		label {
			margin-bottom: 5px;
		}
		.optional {
			color: gray;
		}
	}
	input,
	textarea {
		width: auto;
		font-size: 16px;
		border: 2px solid lightgray;
		border-radius: 3px;
	}
	input {
		height: 30px;
	}
	textarea {
		height: 150px;
	}
	.required {
		border: 2px solid var(--color-red);
	}
}
</style>
